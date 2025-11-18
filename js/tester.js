/**
 * 测试脚本 - 在浏览器控制台中运行
 * 用于调试和测试系统功能
 */

class AnnotationSystemTester {
    /**
     * 测试系统初始化
     */
    static testInitialization() {
        console.log('=== 系统初始化测试 ===');
        console.log('✓ 应用对象:', window.annotationSystem ? '✓ 已加载' : '✗ 未加载');
        console.log('✓ 视频列表:', window.annotationSystem?.videos?.length || 0, '个视频');
        console.log('✓ DataManager:', typeof DataManager !== 'undefined' ? '✓ 已加载' : '✗ 未加载');
        console.log('✓ 配置工具:', typeof generateEvenAnnotationPoints !== 'undefined' ? '✓ 已加载' : '✗ 未加载');
    }

    /**
     * 列出所有视频
     */
    static listVideos() {
        console.log('=== 可用视频列表 ===');
        window.annotationSystem.videos.forEach((video, idx) => {
            console.log(`${idx + 1}. ${video.title}`);
            console.log(`   - 时长: ${video.duration}秒`);
            console.log(`   - 标注点: ${video.annotationPoints?.length || 0}个`);
        });
    }

    /**
     * 测试视频选择
     */
    static selectTestVideo(index = 0) {
        console.log(`=== 选择视频 ${index} ===`);
        window.annotationSystem.selectVideo(index);
        console.log('✓ 已选择:', window.annotationSystem.currentVideo.title);
    }

    /**
     * 测试标注数据
     */
    static testAnnotationData() {
        console.log('=== 标注数据测试 ===');
        console.log('✓ 当前视频:', window.annotationSystem.currentVideo?.title);
        console.log('✓ 标注点数:', window.annotationSystem.annotationPoints?.length);
        console.log('✓ 已完成标注:', Object.keys(window.annotationSystem.annotationData).length, '个');
        console.log('✓ 标注数据:', window.annotationSystem.annotationData);
    }

    /**
     * 模拟添加标注
     */
    static mockAnnotation() {
        console.log('=== 模拟标注数据 ===');
        const mockData = {
            5: { pleasure: 0.5, arousal: 0.3, dominance: 0.2, empathy: 5 },
            15: { pleasure: -0.2, arousal: 0.8, dominance: 0.4, empathy: 6 },
            25: { pleasure: 0.8, arousal: -0.3, dominance: 0.6, empathy: 7 }
        };
        
        window.annotationSystem.annotationData = mockData;
        window.annotationSystem.renderHistory();
        console.log('✓ 已添加模拟数据');
        console.log(mockData);
    }

    /**
     * 测试数据导出
     */
    static testExport() {
        console.log('=== 数据导出测试 ===');
        
        // 测试 JSON
        try {
            const json = JSON.stringify(window.annotationSystem.annotationData);
            console.log('✓ JSON 导出成功，大小:', (json.length / 1024).toFixed(2), 'KB');
        } catch (e) {
            console.error('✗ JSON 导出失败:', e);
        }

        // 测试 CSV
        try {
            let csv = '时间戳,Pleasure,Arousal,Dominance,Empathy\n';
            Object.keys(window.annotationSystem.annotationData).forEach(time => {
                const a = window.annotationSystem.annotationData[time];
                csv += `${time},${a.pleasure},${a.arousal},${a.dominance},${a.empathy}\n`;
            });
            console.log('✓ CSV 导出成功，大小:', (csv.length / 1024).toFixed(2), 'KB');
        } catch (e) {
            console.error('✗ CSV 导出失败:', e);
        }

        // 测试本地存储
        try {
            DataManager.saveToLocalStorage('test_data', window.annotationSystem.annotationData);
            console.log('✓ 本地存储成功');
        } catch (e) {
            console.error('✗ 本地存储失败:', e);
        }
    }

    /**
     * 生成统计报告
     */
    static generateReport() {
        console.log('=== 统计报告 ===');
        const report = DataManager.generateReport(window.annotationSystem.annotationData);
        console.table(report);
        return report;
    }

    /**
     * 性能测试
     */
    static performanceTest() {
        console.log('=== 性能测试 ===');
        
        // 测试添加大量标注
        console.time('添加1000条标注');
        const testData = {};
        for (let i = 0; i < 1000; i++) {
            testData[i] = {
                pleasure: Math.random() * 2 - 1,
                arousal: Math.random() * 2 - 1,
                dominance: Math.random() * 2 - 1,
                empathy: Math.floor(Math.random() * 7) + 1
            };
        }
        console.timeEnd('添加1000条标注');

        // 测试导出
        console.time('导出JSON');
        JSON.stringify(testData);
        console.timeEnd('导出JSON');

        // 测试查询
        console.time('查询报告');
        DataManager.generateReport(testData);
        console.timeEnd('查询报告');
    }

    /**
     * 完整系统检查
     */
    static fullCheck() {
        console.log('%c=== 完整系统检查 ===', 'font-size: 16px; color: #007bff; font-weight: bold');
        
        this.testInitialization();
        console.log('');
        
        this.listVideos();
        console.log('');
        
        // 选择第一个视频并测试
        if (window.annotationSystem.videos.length > 0) {
            this.selectTestVideo(0);
            console.log('');
            this.mockAnnotation();
            console.log('');
            this.generateReport();
            console.log('');
            this.testExport();
        }

        console.log('%c✓ 系统检查完成', 'color: green; font-weight: bold');
    }

    /**
     * 快速参考
     */
    static help() {
        console.log(`
%c标注系统测试工具 - 使用指南%c

常用命令:
  • AnnotationSystemTester.fullCheck()           - 完整系统检查
  • AnnotationSystemTester.listVideos()          - 列出所有视频
  • AnnotationSystemTester.testInitialization()  - 测试初始化
  • AnnotationSystemTester.mockAnnotation()      - 添加模拟数据
  • AnnotationSystemTester.generateReport()      - 生成统计报告
  • AnnotationSystemTester.testExport()          - 测试数据导出
  • AnnotationSystemTester.performanceTest()     - 性能测试

快速访问:
  • window.annotationSystem               - 应用主对象
  • window.annotationSystem.currentVideo  - 当前视频
  • window.annotationSystem.annotationData - 标注数据
  • DataManager                           - 数据管理工具
        `, 'font-size: 14px; color: #007bff; font-weight: bold', 'color: #666');
    }
}

// 自动加载提示
console.log('%c✓ 标注系统测试工具已加载\n输入 AnnotationSystemTester.help() 获取帮助', 'color: green; font-weight: bold');
