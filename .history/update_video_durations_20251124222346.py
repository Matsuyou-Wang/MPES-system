#!/usr/bin/env python3
import os
import subprocess
import re
import json

def get_video_duration(video_path):
    """获取视频的实际时长（秒）"""
    try:
        result = subprocess.run([
            'ffprobe', '-v', 'quiet', 
            '-show_entries', 'format=duration', 
            '-of', 'csv=p=0', video_path
        ], capture_output=True, text=True)
        
        if result.returncode == 0:
            duration = float(result.stdout.strip())
            return int(round(duration))
        else:
            print(f"Error getting duration for {video_path}: {result.stderr}")
            return None
    except Exception as e:
        print(f"Exception getting duration for {video_path}: {e}")
        return None

def update_video_durations():
    """更新videos-extended.js中的视频时长"""
    
    # 读取当前的videos-extended.js文件
    with open('data/videos-extended.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 获取所有视频文件的实际时长
    assets_dir = 'assets'
    duration_map = {}
    
    print("正在检测视频文件的实际时长...")
    for filename in os.listdir(assets_dir):
        if filename.endswith('.mp4'):
            video_path = os.path.join(assets_dir, filename)
            duration = get_video_duration(video_path)
            if duration:
                duration_map[filename] = duration
                print(f"{filename}: {duration}秒")
    
    print(f"\n总共检测了 {len(duration_map)} 个视频文件")
    
    # 更新文件内容中的duration值
    updated_content = content
    total_updates = 0
    
    for filename, actual_duration in duration_map.items():
        # 查找对应的path和duration
        # 匹配模式: path: 'assets/filename.mp4', duration: 数字
        pattern = rf"(path: 'assets/{re.escape(filename)}',\s*duration:\s*)(\d+)"
        
        def replace_duration(match):
            nonlocal total_updates
            old_duration = int(match.group(2))
            if old_duration != actual_duration:
                total_updates += 1
                print(f"更新 {filename}: {old_duration}秒 → {actual_duration}秒")
                return f"{match.group(1)}{actual_duration}"
            return match.group(0)
        
        updated_content = re.sub(pattern, replace_duration, updated_content)
    
    # 写入更新后的文件
    if total_updates > 0:
        with open('data/videos-extended.js', 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print(f"\n✅ 已更新 {total_updates} 个视频的时长")
        print("📄 更新文件: data/videos-extended.js")
    else:
        print("\n✅ 所有视频时长都是正确的，无需更新")

if __name__ == "__main__":
    update_video_durations()