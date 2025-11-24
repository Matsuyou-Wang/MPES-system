/**
 * 完整的IEMOCAP视频库数据
 * 包含男性和女性序列的所有视频
 */

const ALL_VIDEOS = {
    male: [
        // Session 1 Male
        {
            title: 'Session 01M - Script 01-1',
            path: 'assets/Ses01M_script01_1.mp4',
            duration: 427, // 需要实际测量
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
            title: 'Session 01M - Script 01-2',
            path: 'assets/Ses01M_script01_2.mp4',
            duration: 150, // 估计值
            annotationPoints: [
                { time: 20 },
                { time: 45 },
                { time: 70 },
                { time: 95 },
                { time: 120 },
                { time: 145 }
            ]
        },
        {
            title: 'Session 01M - Script 01-3',
            path: 'assets/Ses01M_script01_3.mp4',
            duration: 460, // 估计值
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
                { time: 420 },
                { time: 450 }
            ]
        },
        {
            title: 'Session 01M - Script 02-1',
            path: 'assets/Ses01M_script02_1.mp4',
            duration: 330, // 估计值
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
                { time: 320 }
            ]
        },
        {
            title: 'Session 01M - Script 02-2',
            path: 'assets/Ses01M_script02_2.mp4',
            duration: 480, // 估计值
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
                { time: 420 },
                { time: 450 }
            ]
        },
        {
            title: 'Session 01M - Script 03-1',
            path: 'assets/Ses01M_script03_1.mp4',
            duration: 280, // 估计值
            annotationPoints: [
                { time: 30 },
                { time: 60 },
                { time: 90 },
                { time: 120 },
                { time: 150 },
                { time: 180 },
                { time: 210 },
                { time: 240 },
                { time: 270 }
            ]
        },
        {
            title: 'Session 01M - Script 03-2',
            path: 'assets/Ses01M_script03_2.mp4',
            duration: 320, // 估计值
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
                { time: 300 }
            ]
        }
        // 后续Session 2-5的男性视频将在视频转换完成后添加
    ],
    female: [
        // Session 1 Female (现有的)
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
            duration: 151,
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
            duration: 464,
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
            duration: 331,
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
            duration: 482,
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
            duration: 279,
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
            duration: 315,
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
        // 后续Session 2-5的女性视频将在视频转换完成后添加
    ]
};

/**
 * 根据性别返回对应的视频列表
 */
function getVideosByGender(gender) {
    return ALL_VIDEOS[gender] || [];
}

/**
 * 获取所有视频（向后兼容）
 */
function getAllVideos() {
    return [...ALL_VIDEOS.female, ...ALL_VIDEOS.male];
}

// 向后兼容：如果没有指定性别，默认使用女性视频
const VIDEOS = ALL_VIDEOS.female;