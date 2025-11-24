#!/usr/bin/env python3
import json
import re

def filter_videos_with_dialog_data():
    """
    只保留有对话数据的视频，移除没有对话数据的视频
    确保系统的一致性 - 全部使用Excel对话时间点
    """
    
    # 读取对话数据
    print("正在读取对话数据...")
    with open('data/dialog-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取JSON部分
    start = content.find('const DIALOG_DATA = ') + len('const DIALOG_DATA = ')
    end = content.find(';\n\n// 导出数据')
    json_content = content[start:end]
    dialog_data = json.loads(json_content)
    
    videos_with_dialog = set(dialog_data.keys())
    print(f"有对话数据的视频: {len(videos_with_dialog)} 个")
    
    # 读取videos-extended.js
    print("正在读取视频配置文件...")
    with open('data/videos-extended.js', 'r', encoding='utf-8') as f:
        config_content = f.read()
    
    # 统计移除的视频
    removed_videos = []
    updated_content = config_content
    
    # 使用正则表达式查找和移除没有对话数据的视频条目
    # 匹配整个视频对象：从 { title: 到 }
    video_pattern = r'\s*\{\s*title:[^}]*?path:\s*[\'"]assets/([^\'\"]*?)[\'"][^}]*?\},?'
    
    def check_and_remove(match):
        filename = match.group(1)
        if filename not in videos_with_dialog:
            removed_videos.append(filename)
            return ''  # 移除这个视频条目
        return match.group(0)  # 保留这个视频条目
    
    # 应用过滤
    updated_content = re.sub(video_pattern, check_and_remove, updated_content, flags=re.MULTILINE | re.DOTALL)
    
    # 清理多余的逗号和空行
    updated_content = re.sub(r',\s*\]', ']', updated_content)  # 移除数组末尾多余的逗号
    updated_content = re.sub(r',\s*,', ',', updated_content)   # 移除连续的逗号
    updated_content = re.sub(r'\n\s*\n\s*\n', '\n\n', updated_content)  # 合并多个空行
    
    # 写入更新后的文件
    if removed_videos:
        with open('data/videos-extended.js', 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"\n✅ 移除了 {len(removed_videos)} 个没有对话数据的视频:")
        for video in sorted(removed_videos):
            print(f"  - {video}")
        
        print(f"\n📊 保留的视频数量: {len(videos_with_dialog)} 个")
        print("✅ 现在系统完全使用Excel对话数据，不再有30秒间隔的视频")
    else:
        print("✅ 所有视频都有对话数据，无需移除")

if __name__ == "__main__":
    filter_videos_with_dialog_data()