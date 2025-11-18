const VIDEOS = [
    {
        title: 'Session 01F - Script 01-1',
        path: 'assets/Ses01F_script01_1.mp4',
        duration: 429,
        annotationPoints: [
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
            { time: 330 },
            { time: 360 },
            { time: 390 },
            { time: 420 }
        ]
    },
    {
        title: 'Session 01F - Script 01-2',
        path: 'assets/Ses01F_script01_2.mp4',
        duration: 151,  // 2分31秒
        annotationPoints: [
            { time: 21.66 },
            { time: 45.24 },
            { time: 58.2 },
            { time: 82.65 },
            { time: 108.1825 },
            { time: 123.23 },
            { time: 147.51 }
        ]
    },
    {
        title: 'Session 01F - Script 01-3',
        path: 'assets/Ses01F_script01_3.mp4',
        duration: 464,  // 7分44秒
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
            { time: 330 },
            { time: 360 },
            { time: 390 },
            { time: 420 },
            { time: 450 }
        ]
    },
    {
        title: 'Session 01F - Script 02-1',
        path: 'assets/Ses01F_script02_1.mp4',
        duration: 331,  // 5分31秒
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
            { time: 320 }
        ]
    },
    {
        title: 'Session 01F - Script 02-2',
        path: 'assets/Ses01F_script02_2.mp4',
        duration: 482,  // 8分2秒
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
            { time: 330 },
            { time: 360 },
            { time: 390 },
            { time: 420 },
            { time: 450 },
            { time: 480 }
        ]
    },
    {
        title: 'Session 01F - Script 03-1',
        path: 'assets/Ses01F_script03_1.mp4',
        duration: 279,  // 4分39秒
        annotationPoints: [
            { time: 10 },
            { time: 30 },
            { time: 50 },
            { time: 70 },
            { time: 90 },
            { time: 110 },
            { time: 130 },
            { time: 150 },
            { time: 170 },
            { time: 190 },
            { time: 210 },
            { time: 230 },
            { time: 250 },
            { time: 270 }
        ]
    },
    {
        title: 'Session 01F - Script 03-2',
        path: 'assets/Ses01F_script03_2.mp4',
        duration: 315,  // 5分15秒
        annotationPoints: [
            { time: 10 },
            { time: 30 },
            { time: 50 },
            { time: 70 },
            { time: 90 },
            { time: 110 },
            { time: 130 },
            { time: 150 },
            { time: 170 },
            { time: 190 },
            { time: 210 },
            { time: 230 },
            { time: 250 },
            { time: 270 },
            { time: 290 },
            { time: 310 }
        ]
    }
];

function addVideo(videoData) {
    if (videoData.title && videoData.path && videoData.duration !== undefined) {
        VIDEOS.push(videoData);
        if (window.annotationSystem) {
            window.annotationSystem.videos = VIDEOS;
            window.annotationSystem.renderVideoList();
        }
    } else {
        console.error('Invalid video data. Required: title, path, duration');
    }
}

function removeVideo(index) {
    if (index >= 0 && index < VIDEOS.length) {
        VIDEOS.splice(index, 1);
        if (window.annotationSystem) {
            window.annotationSystem.renderVideoList();
        }
    }
}

function getAllVideos() {
    return VIDEOS;
}
