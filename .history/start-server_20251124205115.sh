#!/bin/bash
# 启动IEMOCAP注释系统服务器脚本

cd "/Users/wangsongyang/Code/Experiment Interaction"

echo "🚀 正在启动IEMOCAP视频注释系统..."
echo "📂 工作目录: $(pwd)"
echo "📊 系统状态检查:"

# 检查关键文件
echo "  - HTML文件: $(ls -1 *.html | wc -l) 个"
echo "  - CSS文件: $(ls -la styles.css | wc -l) 个"  
echo "  - JS文件: $(ls -1 js/*.js | wc -l) 个"
echo "  - 数据文件: $(ls -1 data/*.js | wc -l) 个"
echo "  - 视频文件: $(ls -1 assets/*.mp4 2>/dev/null | wc -l) 个"

echo ""
echo "🌐 正在启动HTTP服务器..."
echo "📋 访问地址:"
echo "   主页: http://localhost:8009/"
echo "   性别选择页: http://localhost:8009/gender-selection.html"
echo "   注释页面: http://localhost:8009/annotation.html"
echo "   系统测试页: http://localhost:8009/test-system.html"
echo "   诊断页面: http://localhost:8009/debug.html"
echo ""
echo "⚠️  注意: 要停止服务器，请按 Ctrl+C"
echo "🔄 服务器日志:"
echo "----------------------------------------"

# 启动服务器
python3 -m http.server 8009