/**
 * 完整的IEMOCAP视频库数据 - 基于Excel对话数据的视频
 * 只包含有精确对话时间戳的视频，移除30秒间隔依赖
 */

const ALL_VIDEOS = {
    male: [
        { title: 'Session 01M - Script 01-1', path: 'assets/Ses01M_script01_1.mp4', duration: 428, annotationPoints: [] },
        { title: 'Session 01M - Script 01-2', path: 'assets/Ses01M_script01_2.mp4', duration: 168, annotationPoints: [] },
        { title: 'Session 01M - Script 01-3', path: 'assets/Ses01M_script01_3.mp4', duration: 518, annotationPoints: [] },
        { title: 'Session 01M - Script 02-1', path: 'assets/Ses01M_script02_1.mp4', duration: 404, annotationPoints: [] },
        { title: 'Session 01M - Script 02-2', path: 'assets/Ses01M_script02_2.mp4', duration: 544, annotationPoints: [] },
        { title: 'Session 01M - Script 03-1', path: 'assets/Ses01M_script03_1.mp4', duration: 301, annotationPoints: [] },
        { title: 'Session 01M - Script 03-2', path: 'assets/Ses01M_script03_2.mp4', duration: 339, annotationPoints: [] },
        { title: 'Session 02M - Script 01-1', path: 'assets/Ses02M_script01_1.mp4', duration: 356, annotationPoints: [] },
        { title: 'Session 02M - Script 02-1', path: 'assets/Ses02M_script02_1.mp4', duration: 318, annotationPoints: [] },
        { title: 'Session 02M - Script 02-2', path: 'assets/Ses02M_script02_2.mp4', duration: 414, annotationPoints: [] },
        { title: 'Session 02M - Script 03-2', path: 'assets/Ses02M_script03_2.mp4', duration: 258, annotationPoints: [] },
        { title: 'Session 03M - Script 01-1', path: 'assets/Ses03M_script01_1.mp4', duration: 425, annotationPoints: [] },
        { title: 'Session 03M - Script 01-2', path: 'assets/Ses03M_script01_2.mp4', duration: 174, annotationPoints: [] },
        { title: 'Session 03M - Script 01-3', path: 'assets/Ses03M_script01_3.mp4', duration: 418, annotationPoints: [] },
        { title: 'Session 03M - Script 02-1', path: 'assets/Ses03M_script02_1.mp4', duration: 353, annotationPoints: [] },
        { title: 'Session 03M - Script 02-2', path: 'assets/Ses03M_script02_2.mp4', duration: 458, annotationPoints: [] },
        { title: 'Session 03M - Script 03-1', path: 'assets/Ses03M_script03_1.mp4', duration: 269, annotationPoints: [] },
        { title: 'Session 04M - Script 02-1', path: 'assets/Ses04M_script02_1.mp4', duration: 315, annotationPoints: [] },
        { title: 'Session 04M - Script 02-2', path: 'assets/Ses04M_script02_2.mp4', duration: 359, annotationPoints: [] },
        { title: 'Session 04M - Script 03-2', path: 'assets/Ses04M_script03_2.mp4', duration: 303, annotationPoints: [] },
        { title: 'Session 05M - Script 01-1', path: 'assets/Ses05M_script01_1.mp4', duration: 358, annotationPoints: [] },
        { title: 'Session 05M - Script 01-2', path: 'assets/Ses05M_script01_2.mp4', duration: 142, annotationPoints: [] },
        { title: 'Session 05M - Script 01-3', path: 'assets/Ses05M_script01_3.mp4', duration: 441, annotationPoints: [] },
        { title: 'Session 05M - Script 02-2', path: 'assets/Ses05M_script02_2.mp4', duration: 455, annotationPoints: [] },
        { title: 'Session 05M - Script 03-1', path: 'assets/Ses05M_script03_1.mp4', duration: 247, annotationPoints: [] },
        { title: 'Session 05M - Script 03-2', path: 'assets/Ses05M_script03_2.mp4', duration: 267, annotationPoints: [] },
    ],
    
    female: [
        { title: 'Session 01F - Script 01-1', path: 'assets/Ses01F_script01_1.mp4', duration: 429, annotationPoints: [] },
        { title: 'Session 01F - Script 01-2', path: 'assets/Ses01F_script01_2.mp4', duration: 152, annotationPoints: [] },
        { title: 'Session 01F - Script 01-3', path: 'assets/Ses01F_script01_3.mp4', duration: 465, annotationPoints: [] },
        { title: 'Session 01F - Script 02-1', path: 'assets/Ses01F_script02_1.mp4', duration: 331, annotationPoints: [] },
        { title: 'Session 01F - Script 02-2', path: 'assets/Ses01F_script02_2.mp4', duration: 482, annotationPoints: [] },
        { title: 'Session 01F - Script 03-1', path: 'assets/Ses01F_script03_1.mp4', duration: 280, annotationPoints: [] },
        { title: 'Session 01F - Script 03-2', path: 'assets/Ses01F_script03_2.mp4', duration: 316, annotationPoints: [] },
        { title: 'Session 02F - Script 01-1', path: 'assets/Ses02F_script01_1.mp4', duration: 356, annotationPoints: [] },
        { title: 'Session 02F - Script 01-2', path: 'assets/Ses02F_script01_2.mp4', duration: 124, annotationPoints: [] },
        { title: 'Session 02F - Script 01-3', path: 'assets/Ses02F_script01_3.mp4', duration: 120, annotationPoints: [] },
        { title: 'Session 02F - Script 02-1', path: 'assets/Ses02F_script02_1.mp4', duration: 293, annotationPoints: [] },
        { title: 'Session 02F - Script 02-2', path: 'assets/Ses02F_script02_2.mp4', duration: 205, annotationPoints: [] },
        { title: 'Session 02F - Script 03-1', path: 'assets/Ses02F_script03_1.mp4', duration: 218, annotationPoints: [] },
        { title: 'Session 02F - Script 03-2', path: 'assets/Ses02F_script03_2.mp4', duration: 253, annotationPoints: [] },
        { title: 'Session 03F - Script 01-1', path: 'assets/Ses03F_script01_1.mp4', duration: 455, annotationPoints: [] },
        { title: 'Session 03F - Script 01-2', path: 'assets/Ses03F_script01_2.mp4', duration: 142, annotationPoints: [] },
        { title: 'Session 03F - Script 01-3', path: 'assets/Ses03F_script01_3.mp4', duration: 421, annotationPoints: [] },
        { title: 'Session 03F - Script 02-1', path: 'assets/Ses03F_script02_1.mp4', duration: 365, annotationPoints: [] },
        { title: 'Session 03F - Script 02-2', path: 'assets/Ses03F_script02_2.mp4', duration: 447, annotationPoints: [] },
        { title: 'Session 03F - Script 03-1', path: 'assets/Ses03F_script03_1.mp4', duration: 239, annotationPoints: [] },
        { title: 'Session 03F - Script 03-2', path: 'assets/Ses03F_script03_2.mp4', duration: 333, annotationPoints: [] },
        { title: 'Session 04F - Script 01-1', path: 'assets/Ses04F_script01_1.mp4', duration: 365, annotationPoints: [] },
        { title: 'Session 04F - Script 01-3', path: 'assets/Ses04F_script01_3.mp4', duration: 352, annotationPoints: [] },
        { title: 'Session 04F - Script 02-1', path: 'assets/Ses04F_script02_1.mp4', duration: 296, annotationPoints: [] },
        { title: 'Session 04F - Script 02-2', path: 'assets/Ses04F_script02_2.mp4', duration: 436, annotationPoints: [] },
        { title: 'Session 04F - Script 03-2', path: 'assets/Ses04F_script03_2.mp4', duration: 250, annotationPoints: [] },
        { title: 'Session 05F - Script 01-1', path: 'assets/Ses05F_script01_1.mp4', duration: 404, annotationPoints: [] },
        { title: 'Session 05F - Script 01-2', path: 'assets/Ses05F_script01_2.mp4', duration: 155, annotationPoints: [] },
        { title: 'Session 05F - Script 01-3', path: 'assets/Ses05F_script01_3.mp4', duration: 438, annotationPoints: [] },
        { title: 'Session 05F - Script 02-1', path: 'assets/Ses05F_script02_1.mp4', duration: 317, annotationPoints: [] },
        { title: 'Session 05F - Script 02-2', path: 'assets/Ses05F_script02_2.mp4', duration: 440, annotationPoints: [] },
    ]
};

// 获取指定性别的视频列表
function getVideosByGender(gender) {
    return ALL_VIDEOS[gender] || [];
}

// 导出数据
if (typeof window !== 'undefined') {
    window.ALL_VIDEOS = ALL_VIDEOS;
    window.getVideosByGender = getVideosByGender;
}
