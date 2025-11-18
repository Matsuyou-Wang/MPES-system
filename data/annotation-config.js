/**
 * 视频标注点配置生成工具
 * 用于快速生成和管理标注点
 */

// 示例：自动生成等间隔的标注点
function generateEvenAnnotationPoints(videoDuration, intervalSeconds) {
    const points = [];
    for (let time = intervalSeconds; time < videoDuration; time += intervalSeconds) {
        points.push({ time: time });
    }
    return points;
}

// 示例：根据特定关键句的时间戳创建标注点
const ANNOTATION_TEMPLATE = {
    // 日常对话 - 每个说话人的关键句
    dailyConversation: [
        { time: 5, speaker: '说话人A', content: '你今天过得怎么样?' },
        { time: 15, speaker: '说话人B', content: '还不错，就是有点累。' },
        { time: 25, speaker: '说话人A', content: '那你想去散步吗?' },
        { time: 35, speaker: '说话人B', content: '好啊，我很想去。' }
    ],

    // 情感访谈 - 情感表达明显的句子
    emotionalInterview: [
        { time: 10, emotion: 'joy', intensity: 'high' },
        { time: 30, emotion: 'sadness', intensity: 'medium' },
        { time: 50, emotion: 'anger', intensity: 'high' },
        { time: 70, emotion: 'fear', intensity: 'low' }
    ]
};

// 导出模板
function exportTemplate(templateName, annotationPoints) {
    const config = {
        title: `从${templateName}创建的视频`,
        path: `assets/your-video.mp4`,
        duration: 0,  // 需要手动填写
        annotationPoints: annotationPoints.map(point => ({ time: point.time }))
    };
    console.log(JSON.stringify(config, null, 2));
    return config;
}

// 示例使用
console.log('标注点生成工具已加载');
console.log('使用示例：');
console.log('1. generateEvenAnnotationPoints(120, 10) - 生成120秒视频，每10秒一个标注点');
console.log('2. exportTemplate("dailyConversation", ANNOTATION_TEMPLATE.dailyConversation)');
