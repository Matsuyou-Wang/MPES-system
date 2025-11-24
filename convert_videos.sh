#!/bin/bash

# 批量转换IEMOCAP视频文件
echo "开始批量转换IEMOCAP视频文件..."

# Session 1 Male
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script01_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script01_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script01_3.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script01_3.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script02_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script02_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script02_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script02_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script03_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script03_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session1/dialog/avi/DivX/Ses01M_script03_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses01M_script03_2.mp4"

# Session 2 Female
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script01_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script01_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script01_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script01_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script01_3.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script01_3.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script02_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script02_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script02_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script02_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script03_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script03_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02F_script03_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02F_script03_2.mp4"

# Session 2 Male
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script01_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script01_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script01_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script01_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script01_3.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script01_3.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script02_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script02_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script02_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script02_2.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script03_1.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script03_1.mp4"
ffmpeg -i "/Users/wangsongyang/Desktop/IEMOCAP_full_release/Session2/dialog/avi/DivX/Ses02M_script03_2.avi" -c:v libx264 -c:a aac "/Users/wangsongyang/Code/Experiment Interaction/assets/Ses02M_script03_2.mp4"

echo "Session 1-2 转换完成！"
echo "开始转换 Session 3-5..."

# 继续其他会话...