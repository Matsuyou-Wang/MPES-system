#!/usr/bin/env python3
import json
import os

def update_videos_extended():
    """
    更新videos-extended.js，只保留有对话数据的视频
    移除30秒间隔的annotationPoints，完全依赖Excel对话数据
    """
    
    # 读取对话数据，获取所有有数据的视频列表
    with open('data/dialog-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # 提取DIALOG_DATA中的视频列表
    dialog_videos = set()
    lines = content.split('\n')
    for line in lines:
        if '.mp4"' in line and '"Ses' in line:
            # 提取视频文件名
            start = line.find('"Ses')
            end = line.find('.mp4"') + 4
            if start != -1 and end != -1:
                video_name = line[start+1:end]
                dialog_videos.add(video_name)
    
    print(f"找到 {len(dialog_videos)} 个有对话数据的视频")
    
    # 读取当前的videos-extended.js
    with open('data/videos-extended.js', 'r', encoding='utf-8') as f:
        current_content = f.read()
    
    # 从当前文件中提取视频数据
    male_videos = []
    female_videos = []
    
    # 简单的解析逻辑来提取视频信息
    lines = current_content.split('\n')
    current_video = None
    
    for line in lines:
        line = line.strip()
        if "title: 'Session" in line and "path: 'assets/" in line and "duration:" in line:
            # 提取视频信息
            title_start = line.find("title: '") + 8
            title_end = line.find("', path:")
            title = line[title_start:title_end]
            
            path_start = line.find("path: '") + 7
            path_end = line.find("', duration:")
            path = line[path_start:path_end]
            
            duration_start = line.find("duration: ") + 10
            duration_end = line.find(", annotationPoints:")
            duration = int(line[duration_start:duration_end])
            
            # 提取文件名
            video_name = path.split('/')[-1]
            
            # 只保留有对话数据的视频
            if video_name in dialog_videos:
                video_info = {
                    'title': title,
                    'path': path,
                    'duration': duration,
                    'annotationPoints': []  # 移除30秒间隔，完全依赖Excel数据
                }
                
                if 'M_' in video_name:
                    male_videos.append(video_info)
                else:
                    female_videos.append(video_info)
    
    print(f"筛选后: {len(male_videos)} 个男性视频, {len(female_videos)} 个女性视频")
    
    # 生成新的videos-extended.js内容
    new_content = """/**
 * 完整的IEMOCAP视频库数据 - 基于Excel对话数据的视频
 * 只包含有精确对话时间戳的视频，移除30秒间隔依赖
 */

const ALL_VIDEOS = {
    male: [
"""
    
    for video in male_videos:
        new_content += f"        {{ title: '{video['title']}', path: '{video['path']}', duration: {video['duration']}, annotationPoints: [] }},\n"
    
    new_content += """    ],
    
    female: [
"""
    
    for video in female_videos:
        new_content += f"        {{ title: '{video['title']}', path: '{video['path']}', duration: {video['duration']}, annotationPoints: [] }},\n"
    
    new_content += """    ]
};

// 获取指定性别的视频列表
function getVideosByGender(gender) {
    return ALL_VIDEOS[gender] || [];
}

// 导出数据
if (typeof window !== 'undefined') {
    window.ALL_VIDEOS = ALL_VIDEOS;
    window.getVideosByGender = getVideosByGender;
}
"""
    
    # 写入更新后的文件
    with open('data/videos-extended.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ 已更新 data/videos-extended.js")
    print(f"📊 男性视频: {len(male_videos)} 个")
    print(f"📊 女性视频: {len(female_videos)} 个")
    print(f"🚫 已移除30秒间隔的annotationPoints")
    print(f"✅ 现在完全依赖Excel对话数据")

if __name__ == "__main__":
    update_videos_extended()