# Video Annotation System# 标注系统网页



A web-based video annotation tool for emotion and empathy assessment.一个用于标注对话视频的网页应用系统，支持自动暂停、多维度情感评分和交互式标注。



## Features## 功能特性



- Video playback with automatic pause at predefined annotation points### 核心功能

- PAD (Pleasure-Arousal-Dominance) assessment for left and right speakers- **视频库管理**: 从系统库选择多段对话视频

- 7-point empathy evaluation scale- **自动暂停**: 视频播放到预设时间戳时自动暂停

- Real-time annotation history- **问卷标注**: 弹出标准化评分问卷

- Data export functionality- **多维度评分**:

  - **PAD维度** (Pleasure, Arousal, Dominance): -1 到 1 的滑动条，配合 SAM 情感评估图

## Setup  - **同理心** (Empathy): 1-7 的 Likert 量表

- **标注管理**:

1. Clone the repository  - 确认/清除按钮控制

2. Place video files in the `assets/` directory  - 标注历史记录

3. Update video configuration in `data/videos.js`  - 支持回到前面部分重新填写

4. Open `index.html` in a modern web browser- **播放控制**: 完整的视频播放/暂停/进度控制



## Usage### 用户交互

- 直观的界面布局

1. Select a video from the library- 响应式设计（支持平板和手机）

2. The video will pause at predefined points for annotation- 键盘快捷键（空格键播放/暂停）

3. Rate PAD dimensions using sliders (-1 to +1)- 视频进度条点击快速定位

4. Assess empathy level (1-7 scale)

5. Continue playback or edit previous annotations## 项目结构



## Configuration```

Experiment Interaction/

Video data is configured in `data/videos.js` with the following structure:├── index.html              # 主HTML文件

├── styles.css              # 样式表

```javascript├── js/

{│   └── app.js             # 主应用逻辑

    title: "Video Title",├── data/

    path: "assets/video.mp4",│   └── videos.js          # 视频库配置数据

    duration: 120,├── assets/                # 资源文件夹

    annotationPoints: [│   ├── SAM.jpg            # SAM情感评估图（需要添加）

        { time: 30 },│   ├── sample-video-1.mp4 # 示例视频（需要添加）

        { time: 60 },│   ├── sample-video-2.mp4

        { time: 90 }│   └── sample-video-3.mp4

    ]└── README.md              # 本文件

}```

```

## 快速开始

## Technical Details

### 1. 基本使用

- Pure HTML5/CSS3/JavaScript implementation

- No external dependencies在浏览器中打开 `index.html` 文件。

- Responsive design

- Cross-browser compatibility### 2. 添加视频

编辑 `data/videos.js` 文件，按照下面的格式添加视频：

```javascript
{
    title: '视频标题',
    path: 'assets/video-file.mp4',
    duration: 120,  // 视频时长（秒）
    annotationPoints: [
        { time: 5 },   // 标注点时间戳（秒）
        { time: 15 },
        { time: 25 },
        // ... 更多标注点
    ]
}
```

或者通过 JavaScript API 动态添加：

```javascript
addVideo({
    title: '新视频',
    path: 'assets/new-video.mp4',
    duration: 300,
    annotationPoints: [{ time: 10 }, { time: 30 }]
});
```

### 3. 准备资源

在 `assets/` 文件夹中放置：
- **SAM.jpg**: SAM 情感评估图（用于 PAD 维度的参考图）
- 视频文件：MP4 格式的对话视频

## SAM 情感评估图

SAM (Self-Assessment Manikin) 是一种非言语的图形评分工具，用于评估情感的三个维度：

- **Pleasure (愉悦度)**: 横轴，从不愉悦到愉悦
- **Arousal (唤醒度)**: 纵轴上部分，从平静到激动  
- **Dominance (控制度)**: 纵轴下部分，从被动到主动

系统中显示 SAM 图，用户可视化参考。

## 数据格式

### 标注数据结构

标注数据以时间戳为键存储：

```javascript
{
    5: {
        pleasure: 0.5,    // -1 到 1
        arousal: 0.3,     // -1 到 1
        dominance: 0.1,   // -1 到 1
        empathy: 5        // 1 到 7
    },
    15: {
        pleasure: -0.2,
        arousal: 0.8,
        dominance: 0.4,
        empathy: 6
    }
}
```

### 导出数据

您可以通过浏览器开发者工具在控制台访问：

```javascript
// 获取当前所有标注数据
console.log(window.annotationSystem.annotationData);

// 获取当前视频信息
console.log(window.annotationSystem.currentVideo);
```

## API 参考

### AnnotationSystem 类

主应用类，管理整个标注系统。

#### 属性

- `videos`: 视频列表
- `currentVideo`: 当前选中的视频
- `annotationData`: 当前视频的标注数据
- `annotationPoints`: 当前视频的标注点

#### 方法

- `selectVideo(index)`: 选择指定索引的视频
- `showAnnotationModal(point)`: 显示标注问卷
- `saveAnnotation(point, data)`: 保存标注数据
- `clearAnnotationForm()`: 清除表单
- `renderHistory()`: 重新渲染标注历史

### 全局函数

- `addVideo(videoData)`: 添加新视频
- `removeVideo(index)`: 移除视频
- `getAllVideos()`: 获取所有视频

## 浏览器兼容性

- Chrome/Chromium (推荐)
- Firefox
- Safari
- Edge

## 按键快捷键

| 按键 | 功能 |
|------|------|
| 空格 | 播放/暂停 |

## 自定义

### 修改配色

编辑 `styles.css` 中的 CSS 变量或直接修改颜色值。主要颜色为 `#007bff`（蓝色）。

### 修改问卷内容

编辑 `index.html` 中 `#annotationModal` 部分可以修改问卷标题、标签和范围。

### 调整滑动条范围

在 `index.html` 中找到 `<input type="range">` 元素，修改 `min`, `max`, `step` 属性。

## 常见问题

**Q: 视频不播放？**
A: 确保视频文件路径正确，且浏览器支持该视频格式（MP4 推荐）。

**Q: 标注数据如何保存？**
A: 当前版本数据存储在浏览器内存中。刷新页面会丢失。建议通过浏览器控制台导出 JSON 或集成后端存储。

**Q: 如何导出标注数据？**
A: 在浏览器控制台运行：
```javascript
JSON.stringify(window.annotationSystem.annotationData)
```

## 技术栈

- HTML5
- CSS3（Flexbox, Grid）
- Vanilla JavaScript（无框架依赖）
- HTML5 Video API

## 许可证

MIT License

## 作者

实验互动系统开发小组

## 支持

如有问题或建议，请联系开发团队。
