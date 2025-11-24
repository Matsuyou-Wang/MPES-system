/**
 * 完整的IEMOCAP视频库数据 - 67个视频
 * 包含Sessions 1-5的所有男性和女性script序列
 */

const ALL_VIDEOS = {
    male: [
        // Session 1 Male (7 videos)
        { title: 'Session 01M - Script 01-1', path: 'assets/Ses01M_script01_1.mp4', duration: 427, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 01M - Script 01-2', path: 'assets/Ses01M_script01_2.mp4', duration: 385, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 01M - Script 01-3', path: 'assets/Ses01M_script01_3.mp4', duration: 302, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 01M - Script 02-1', path: 'assets/Ses01M_script02_1.mp4', duration: 348, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 01M - Script 02-2', path: 'assets/Ses01M_script02_2.mp4', duration: 315, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 01M - Script 03-1', path: 'assets/Ses01M_script03_1.mp4', duration: 465, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }, { time: 450 }] },
        { title: 'Session 01M - Script 03-2', path: 'assets/Ses01M_script03_2.mp4', duration: 298, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        
        // Session 2 Male (6 videos)
        { title: 'Session 02M - Script 01-1', path: 'assets/Ses02M_script01_1.mp4', duration: 352, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 02M - Script 01-2', path: 'assets/Ses02M_script01_2.mp4', duration: 318, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 02M - Script 01-3', path: 'assets/Ses02M_script01_3.mp4', duration: 391, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }] },
        { title: 'Session 02M - Script 02-1', path: 'assets/Ses02M_script02_1.mp4', duration: 435, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 02M - Script 02-2', path: 'assets/Ses02M_script02_2.mp4', duration: 386, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 02M - Script 03-1', path: 'assets/Ses02M_script03_1.mp4', duration: 273, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 02M - Script 03-2', path: 'assets/Ses02M_script03_2.mp4', duration: 364, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        
        // Session 3 Male (6 videos)
        { title: 'Session 03M - Script 01-1', path: 'assets/Ses03M_script01_1.mp4', duration: 295, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 03M - Script 01-2', path: 'assets/Ses03M_script01_2.mp4', duration: 372, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 03M - Script 02-1', path: 'assets/Ses03M_script02_1.mp4', duration: 384, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 03M - Script 02-2', path: 'assets/Ses03M_script02_2.mp4', duration: 268, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 03M - Script 03-1', path: 'assets/Ses03M_script03_1.mp4', duration: 315, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 03M - Script 03-2', path: 'assets/Ses03M_script03_2.mp4', duration: 384, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        
        // Session 4 Male (7 videos)
        { title: 'Session 04M - Script 01-1', path: 'assets/Ses04M_script01_1.mp4', duration: 295, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 04M - Script 01-2', path: 'assets/Ses04M_script01_2.mp4', duration: 385, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 04M - Script 01-3', path: 'assets/Ses04M_script01_3.mp4', duration: 302, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 04M - Script 02-1', path: 'assets/Ses04M_script02_1.mp4', duration: 348, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 04M - Script 02-2', path: 'assets/Ses04M_script02_2.mp4', duration: 315, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 04M - Script 03-1', path: 'assets/Ses04M_script03_1.mp4', duration: 465, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }, { time: 450 }] },
        { title: 'Session 04M - Script 03-2', path: 'assets/Ses04M_script03_2.mp4', duration: 298, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        
        // Session 5 Male (8 videos)
        { title: 'Session 05M - Script 01-1', path: 'assets/Ses05M_script01_1.mp4', duration: 440, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 05M - Script 01-1b', path: 'assets/Ses05M_script01_1b.mp4', duration: 354, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 05M - Script 01-2', path: 'assets/Ses05M_script01_2.mp4', duration: 454, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }, { time: 450 }] },
        { title: 'Session 05M - Script 01-3', path: 'assets/Ses05M_script01_3.mp4', duration: 247, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 05M - Script 02-1', path: 'assets/Ses05M_script02_1.mp4', duration: 354, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 05M - Script 02-2', path: 'assets/Ses05M_script02_2.mp4', duration: 454, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }, { time: 450 }] },
        { title: 'Session 05M - Script 03-1', path: 'assets/Ses05M_script03_1.mp4', duration: 247, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 05M - Script 03-2', path: 'assets/Ses05M_script03_2.mp4', duration: 266, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] }
    ],
    female: [
        // Session 1 Female (7 videos)
        { title: 'Session 01F - Script 01-1', path: 'assets/Ses01F_script01_1.mp4', duration: 427, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 01F - Script 01-2', path: 'assets/Ses01F_script01_2.mp4', duration: 385, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 01F - Script 01-3', path: 'assets/Ses01F_script01_3.mp4', duration: 302, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 01F - Script 02-1', path: 'assets/Ses01F_script02_1.mp4', duration: 348, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 01F - Script 02-2', path: 'assets/Ses01F_script02_2.mp4', duration: 315, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 01F - Script 03-1', path: 'assets/Ses01F_script03_1.mp4', duration: 465, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }, { time: 450 }] },
        { title: 'Session 01F - Script 03-2', path: 'assets/Ses01F_script03_2.mp4', duration: 298, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        
        // Session 2 Female (6 videos)
        { title: 'Session 02F - Script 01-1', path: 'assets/Ses02F_script01_1.mp4', duration: 352, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 02F - Script 01-2', path: 'assets/Ses02F_script01_2.mp4', duration: 318, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 02F - Script 01-3', path: 'assets/Ses02F_script01_3.mp4', duration: 360, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 02F - Script 02-1', path: 'assets/Ses02F_script02_1.mp4', duration: 435, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 02F - Script 02-2', path: 'assets/Ses02F_script02_2.mp4', duration: 386, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 02F - Script 03-1', path: 'assets/Ses02F_script03_1.mp4', duration: 273, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 02F - Script 03-2', path: 'assets/Ses02F_script03_2.mp4', duration: 364, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        
        // Session 3 Female (6 videos)
        { title: 'Session 03F - Script 01-1', path: 'assets/Ses03F_script01_1.mp4', duration: 295, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 03F - Script 01-2', path: 'assets/Ses03F_script01_2.mp4', duration: 372, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 03F - Script 02-1', path: 'assets/Ses03F_script02_1.mp4', duration: 384, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 03F - Script 02-2', path: 'assets/Ses03F_script02_2.mp4', duration: 268, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 03F - Script 03-1', path: 'assets/Ses03F_script03_1.mp4', duration: 315, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 03F - Script 03-2', path: 'assets/Ses03F_script03_2.mp4', duration: 384, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        
        // Session 4 Female (7 videos)
        { title: 'Session 04F - Script 01-1', path: 'assets/Ses04F_script01_1.mp4', duration: 295, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 04F - Script 01-2', path: 'assets/Ses04F_script01_2.mp4', duration: 385, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }] },
        { title: 'Session 04F - Script 01-3', path: 'assets/Ses04F_script01_3.mp4', duration: 351, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }] },
        { title: 'Session 04F - Script 02-1', path: 'assets/Ses04F_script02_1.mp4', duration: 296, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 04F - Script 02-2', path: 'assets/Ses04F_script02_2.mp4', duration: 435, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 04F - Script 03-1', path: 'assets/Ses04F_script03_1.mp4', duration: 208, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }] },
        { title: 'Session 04F - Script 03-2', path: 'assets/Ses04F_script03_2.mp4', duration: 249, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        
        // Session 5 Female (7 videos)
        { title: 'Session 05F - Script 01-1', path: 'assets/Ses05F_script01_1.mp4', duration: 316, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 05F - Script 01-2', path: 'assets/Ses05F_script01_2.mp4', duration: 287, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }] },
        { title: 'Session 05F - Script 01-3', path: 'assets/Ses05F_script01_3.mp4', duration: 438, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 05F - Script 02-1', path: 'assets/Ses05F_script02_1.mp4', duration: 316, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }] },
        { title: 'Session 05F - Script 02-2', path: 'assets/Ses05F_script02_2.mp4', duration: 439, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }, { time: 270 }, { time: 300 }, { time: 330 }, { time: 360 }, { time: 390 }, { time: 420 }] },
        { title: 'Session 05F - Script 03-1', path: 'assets/Ses05F_script03_1.mp4', duration: 243, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] },
        { title: 'Session 05F - Script 03-2', path: 'assets/Ses05F_script03_2.mp4', duration: 258, annotationPoints: [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 150 }, { time: 180 }, { time: 210 }, { time: 240 }] }
    ]
};

// 统计信息
console.log(`总计 ${ALL_VIDEOS.male.length + ALL_VIDEOS.female.length} 个视频`);
console.log(`男性序列: ${ALL_VIDEOS.male.length} 个视频`);
console.log(`女性序列: ${ALL_VIDEOS.female.length} 个视频`);

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ALL_VIDEOS;
} else if (typeof window !== 'undefined') {
    window.ALL_VIDEOS = ALL_VIDEOS;
}