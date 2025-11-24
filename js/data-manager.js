/**
 * 数据导入/导出工具
 * 用于管理标注数据的持久化
 */

class DataManager {
    /**
     * 导出标注数据为 JSON
     */
    static exportToJSON(annotationData, videoInfo, filename = 'annotation-data.json') {
        const data = {
            timestamp: new Date().toISOString(),
            video: videoInfo,
            annotations: annotationData,
            totalItems: Object.keys(annotationData).length
        };

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log('数据已导出:', data);
    }

    /**
     * 导出标注数据为 CSV
     */
    static exportToCSV(annotationData, videoInfo, filename = 'annotation-data.csv') {
        let csv = '时间戳,Pleasure,Arousal,Dominance,Empathy\n';

        Object.keys(annotationData).sort((a, b) => parseFloat(a) - parseFloat(b)).forEach(time => {
            const annotation = annotationData[time];
            csv += `${time},${annotation.pleasure},${annotation.arousal},${annotation.dominance},${annotation.empathy}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log('CSV已导出');
    }

    /**
     * 导入标注数据
     */
    static importFromJSON(file, callback) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                callback(data);
                console.log('数据已导入:', data);
            } catch (error) {
                console.error('导入失败:', error);
                alert('导入失败，请确保文件格式正确');
            }
        };
        reader.readAsText(file);
    }

    /**
     * 本地存储 - 保存到浏览器 LocalStorage
     */
    static saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            console.log('数据已保存到本地');
        } catch (error) {
            console.error('保存失败:', error);
        }
    }

    /**
     * 本地存储 - 从 LocalStorage 读取
     */
    static loadFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('读取失败:', error);
            return null;
        }
    }

    /**
     * 清空本地存储
     */
    static clearLocalStorage(key = null) {
        if (key) {
            localStorage.removeItem(key);
            console.log(`已清空: ${key}`);
        } else {
            localStorage.clear();
            console.log('已清空所有本地存储');
        }
    }

    /**
     * 生成统计报告
     */
    static generateReport(annotationData) {
        const values = Object.values(annotationData);
        
        if (values.length === 0) {
            return { error: '没有标注数据' };
        }

        const pleasure = values.map(v => v.pleasure);
        const arousal = values.map(v => v.arousal);
        const dominance = values.map(v => v.dominance);
        const empathy = values.map(v => v.empathy);

        const report = {
            totalAnnotations: values.length,
            pleasure: {
                mean: (pleasure.reduce((a, b) => a + b) / pleasure.length).toFixed(2),
                min: Math.min(...pleasure).toFixed(2),
                max: Math.max(...pleasure).toFixed(2),
                std: this.calculateStd(pleasure).toFixed(2)
            },
            arousal: {
                mean: (arousal.reduce((a, b) => a + b) / arousal.length).toFixed(2),
                min: Math.min(...arousal).toFixed(2),
                max: Math.max(...arousal).toFixed(2),
                std: this.calculateStd(arousal).toFixed(2)
            },
            dominance: {
                mean: (dominance.reduce((a, b) => a + b) / dominance.length).toFixed(2),
                min: Math.min(...dominance).toFixed(2),
                max: Math.max(...dominance).toFixed(2),
                std: this.calculateStd(dominance).toFixed(2)
            },
            empathy: {
                mean: (empathy.reduce((a, b) => a + b) / empathy.length).toFixed(2),
                min: Math.min(...empathy),
                max: Math.max(...empathy),
                std: this.calculateStd(empathy).toFixed(2)
            }
        };

        return report;
    }

    /**
     * 计算标准差
     */
    static calculateStd(arr) {
        const mean = arr.reduce((a, b) => a + b) / arr.length;
        const variance = arr.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / arr.length;
        return Math.sqrt(variance);
    }
}

// 使用示例
console.log('数据管理工具已加载');
console.log('可用方法:');
console.log('- DataManager.exportToJSON(data, videoInfo)');
console.log('- DataManager.exportToCSV(data, videoInfo)');
console.log('- DataManager.saveToLocalStorage(key, data)');
console.log('- DataManager.generateReport(data)');
