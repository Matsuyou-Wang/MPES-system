#!/usr/bin/env python3
import pandas as pd
import json
import os

def process_dialog_excel():
    """
    处理Excel对话数据，生成对应的JavaScript数据文件
    """
    # 读取Excel文件
    df = pd.read_excel('/Users/wangsongyang/Desktop/script_analysis_results/剧本对话延迟分析.xlsx')
    
    # 按文件名分组并处理每个视频的对话数据
    dialog_data = {}
    
    for filename, group in df.groupby('文件名'):
        # 将txt文件名转换为对应的mp4文件名
        # 例如: Ses01F_script01_1.txt -> Ses01F_script01_1.mp4
        video_filename = filename.replace('.txt', '.mp4')
        
        # 为每个视频创建对话点数组
        dialog_points = []
        
        for _, row in group.iterrows():
            # F_end时间点
            if pd.notna(row['F_end']):
                dialog_points.append({
                    'time': float(row['F_end']),
                    'type': 'F_end',
                    'f_text': str(row['F_text']) if pd.notna(row['F_text']) else '',
                    'm_text': str(row['M_text']) if pd.notna(row['M_text']) else ''
                })
            
            # M_end时间点  
            if pd.notna(row['M_end']):
                dialog_points.append({
                    'time': float(row['M_end']),
                    'type': 'M_end', 
                    'f_text': str(row['F_text']) if pd.notna(row['F_text']) else '',
                    'm_text': str(row['M_text']) if pd.notna(row['M_text']) else ''
                })
        
        # 按时间排序
        dialog_points.sort(key=lambda x: x['time'])
        
        dialog_data[video_filename] = dialog_points
    
    # 生成JavaScript文件
    js_content = """/**
 * 对话时间戳和文本数据 - 从Excel自动生成
 * 包含F_end和M_end时间点以及对应的对话文本
 */

const DIALOG_DATA = """
    
    js_content += json.dumps(dialog_data, indent=4, ensure_ascii=False)
    js_content += """;

// 导出数据以供annotation系统使用
if (typeof window !== 'undefined') {
    window.DIALOG_DATA = DIALOG_DATA;
}
"""
    
    # 写入文件
    output_file = 'data/dialog-data.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"✅ 对话数据已处理完成")
    print(f"📄 输出文件: {output_file}")
    print(f"📊 处理了 {len(dialog_data)} 个视频文件")
    
    # 统计信息
    total_points = sum(len(points) for points in dialog_data.values())
    print(f"⏱️ 总共 {total_points} 个对话时间点")
    
    # 显示前几个文件的示例
    print("\n📝 前几个文件的对话点数量:")
    for i, (filename, points) in enumerate(list(dialog_data.items())[:5]):
        print(f"  {filename}: {len(points)} 个对话点")
    
    return dialog_data

if __name__ == "__main__":
    process_dialog_excel()