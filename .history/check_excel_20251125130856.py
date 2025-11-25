#!/usr/bin/env python3
import pandas as pd
import os

def check_excel_files():
    print('=== 检查Excel文件内容 ===\n')
    
    # 检查F_files.xlsx
    try:
        print('--- F_files.xlsx ---')
        df_f = pd.read_excel('/Users/wangsongyang/Desktop/F_files.xlsx')
        print(f'列名: {list(df_f.columns)}')
        print(f'行数: {len(df_f)}')
        print('\n前3行数据:')
        for i, row in df_f.head(3).iterrows():
            print(f'行 {i+1}:')
            for col in df_f.columns:
                print(f'  {col}: {row[col]}')
            print()
        
        # 检查第一个视频文件的数据
        first_video = df_f['video_name'].iloc[0] if 'video_name' in df_f.columns else None
        if first_video:
            video_data = df_f[df_f['video_name'] == first_video]
            print(f'\n{first_video} 的所有数据行:')
            for i, row in video_data.iterrows():
                print(f'  行 {i+1}: type={row.get("type", "N/A")}, f_text={str(row.get("f_text", "N/A"))[:50]}..., m_text={str(row.get("m_text", "N/A"))[:50]}...')
    except Exception as e:
        print(f'读取F_files.xlsx错误: {e}')
    
    print('\n' + '='*60 + '\n')
    
    # 检查M_files.xlsx
    try:
        print('--- M_files.xlsx ---')
        df_m = pd.read_excel('/Users/wangsongyang/Desktop/M_files.xlsx')
        print(f'列名: {list(df_m.columns)}')
        print(f'行数: {len(df_m)}')
        print('\n前3行数据:')
        for i, row in df_m.head(3).iterrows():
            print(f'行 {i+1}:')
            for col in df_m.columns:
                print(f'  {col}: {row[col]}')
            print()
            
        # 检查第一个视频文件的数据
        first_video = df_m['video_name'].iloc[0] if 'video_name' in df_m.columns else None
        if first_video:
            video_data = df_m[df_m['video_name'] == first_video]
            print(f'\n{first_video} 的所有数据行:')
            for i, row in video_data.iterrows():
                print(f'  行 {i+1}: type={row.get("type", "N/A")}, f_text={str(row.get("f_text", "N/A"))[:50]}..., m_text={str(row.get("m_text", "N/A"))[:50]}...')
    except Exception as e:
        print(f'读取M_files.xlsx错误: {e}')

if __name__ == "__main__":
    check_excel_files()