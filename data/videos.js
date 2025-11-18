/**
 * 视频库数据
 * 格式: 
 * {
 *   title: 视频标题,
 *   path: 视频文件路径,
 *   duration: 视频时长（秒）,
 *   annotationPoints: [
 *     { time: 标注时间戳（秒）}
 *   ]
 * }
 */

const VIDEOS = [
    {
        title: 'Session2 - Script01 (IEMOCAP)',
        path: 'assets/Ses02F_script01_1.mp4',
        duration: 355,  // 5分55秒 = 355秒
        annotationPoints: [
            { time: 10 },
            { time: 30 },
            { time: 60 },
            { time: 90 },
            { time: 120 },
            { time: 150 },
            { time: 180 },
            { time: 210 },
            { time: 240 },
            { time: 270 },
            { time: 300 },
            { time: 330 }
        ]
    },
    {
        title: '示例视频 1 - 日常对话',
        path: 'assets/sample-video-1.mp4',
        duration: 120,
        annotationPoints: [
            { time: 5 },
            { time: 15 },
            { time: 25 },
            { time: 35 },
            { time: 45 },
            { time: 55 },
            { time: 65 },
            { time: 75 },
            { time: 85 },
            { time: 95 }
        ]
    },
    {
        title: '示例视频 2 - 情感对话',
        path: 'assets/sample-video-2.mp4',
        duration: 180,
        annotationPoints: [
            { time: 10 },
            { time: 30 },
            { time: 50 },
            { time: 70 },
            { time: 90 },
            { time: 110 },
            { time: 130 },
            { time: 150 },
            { time: 170 }
        ]
    },
    {
        title: '示例视频 3 - 访谈',
        path: 'assets/sample-video-3.mp4',
        duration: 240,
        annotationPoints: [
            { time: 15 },
            { time: 40 },
            { time: 65 },
            { time: 90 },
            { time: 115 },
            { time: 140 },
            { time: 165 },
            { time: 190 },
            { time: 215 }
        ]
    }
];

/**
 * 添加新视频到库中
 * 使用方法: addVideo({ title: '...', path: '...', duration: ..., annotationPoints: [...] })
 */
function addVideo(videoData) {
    if (videoData.title && videoData.path && videoData.duration !== undefined) {
        VIDEOS.push(videoData);
        // 如果应用已初始化，更新列表
        if (window.annotationSystem) {
            window.annotationSystem.videos = VIDEOS;
            window.annotationSystem.renderVideoList();
        }
    } else {
        console.error('Invalid video data. Required: title, path, duration');
    }
}

/**
 * 移除指定索引的视频
 */
function removeVideo(index) {
    if (index >= 0 && index < VIDEOS.length) {
        VIDEOS.splice(index, 1);
        if (window.annotationSystem) {
            window.annotationSystem.renderVideoList();
        }
    }
}

/**
 * 获取所有视频
 */
function getAllVideos() {
    return VIDEOS;
}
