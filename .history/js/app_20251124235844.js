/**
 * 标注系统主应用逻辑
 */

class AnnotationSystem {
    constructor() {
        // DOM 元素
        this.videoPlayer = document.getElementById('videoPlayer');
        this.videoList = document.getElementById('videoList');
        this.historyList = document.getElementById('historyList');
        this.modal = document.getElementById('annotationModal');
        this.confirmBtn = document.getElementById('confirmBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.playBtn = document.getElementById('playBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.currentTimeDisplay = document.getElementById('currentTime');
        this.durationDisplay = document.getElementById('duration');
        this.progressBar = document.getElementById('progress');
        this.progressBarContainer = document.querySelector('.progress-bar');
        this.editPanel = document.getElementById('editPanel');
        this.editList = document.getElementById('editList');
        this.closeEditPanel = document.querySelector('.close-edit-panel');
        this.selectionView = document.getElementById('selectionView');
        this.annotationView = document.getElementById('annotationView');
        this.closeModalBtn = document.querySelector('.close-btn');
        this.startBtn = document.getElementById('startBtn');
        this.quickVideoList = document.getElementById('quickVideoList');

        // 上下文视频播放器元素
        this.contextVideo = document.getElementById('contextVideo');
        this.replayBtn = document.getElementById('replayBtn');
        this.timeRange = document.getElementById('timeRange');

        // 问卷元素
        this.empathyQuestions = {
            concern: document.getElementsByName('concern'),
            expressiveness: document.getElementsByName('expressiveness'),
            emotional_resonance: document.getElementsByName('emotional_resonance'),
            warmth: document.getElementsByName('warmth'),
            attunement: document.getElementsByName('attunement'),
            cognitive_understanding: document.getElementsByName('cognitive_understanding'),
            understanding_feelings: document.getElementsByName('understanding_feelings'),
            acceptance: document.getElementsByName('acceptance'),
            responsiveness: document.getElementsByName('responsiveness')
        };

        // Empathy questions list
        this.questionNames = [
            'concern', 'expressiveness', 'emotional_resonance', 'warmth', 
            'attunement', 'cognitive_understanding', 'understanding_feelings', 
            'acceptance', 'responsiveness'
        ];

        this.modalTimestamp = document.getElementById('modalTimestamp');
        this.firstSpeakerText = document.getElementById('firstSpeakerText');
        this.secondSpeakerText = document.getElementById('secondSpeakerText');
        this.evaluatingLabel = document.getElementById('evaluatingLabel');
        this.evaluatedSpeaker = document.getElementById('evaluatedSpeaker');

        // 状态
        this.currentVideo = null;
        this.currentVideoIndex = -1;
        this.annotationPoints = []; // 标注点信息
        this.annotationData = {}; // 储存标注数据 { timestamp: { pleasure, arousal, dominance, empathy } }
        this.isModalOpen = false;
        this.currentAnnotationPoint = null;
        this.isPaused = true;

        // 初始化
        this.init();
    }

    init() {
        this.loadVideos();
        this.setupEventListeners();
    }

    loadVideos() {
        // 从 videos-extended.js 加载视频库数据（根据性别选择）
        const selectedGender = localStorage.getItem('selectedGender') || 'male';
        
        if (typeof ALL_VIDEOS !== 'undefined') {
            if (selectedGender === 'male' && ALL_VIDEOS.male) {
                this.videos = ALL_VIDEOS.male;
            } else if (selectedGender === 'female' && ALL_VIDEOS.female) {
                this.videos = ALL_VIDEOS.female;
            } else {
                this.videos = ALL_VIDEOS.male || [];
            }
            
            this.renderVideoList();
            this.renderQuickVideoList();
            console.log(`加载了 ${this.videos.length} 个${selectedGender}视频`);
        } else {
            console.error('ALL_VIDEOS data not loaded');
        }
    }

    renderVideoList() {
        this.videoList.innerHTML = '';
        this.videos.forEach((video, index) => {
            const li = document.createElement('li');
            li.className = 'video-item';
            li.innerHTML = `
                <div>${video.title}</div>
                <div style="font-size: 11px; color: #999; margin-top: 3px;">时长: ${this.formatTime(video.duration)}</div>
            `;
            li.addEventListener('click', () => this.selectVideo(index));
            this.videoList.appendChild(li);
        });
    }

    renderQuickVideoList() {
        if (!this.quickVideoList) return;
        
        this.quickVideoList.innerHTML = '';
        this.videos.forEach((video, index) => {
            const div = document.createElement('div');
            div.className = 'quick-video-item';
            div.innerHTML = `
                <input type="radio" name="quickVideo" value="${index}" id="video-${index}">
                <label for="video-${index}">${video.title}</label>
            `;
            
            const radio = div.querySelector('input[type="radio"]');
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    this.selectedVideoIndex = index;
                    this.enableStartButton();
                }
            });
            
            this.quickVideoList.appendChild(div);
        });
    }

    enableStartButton() {
        if (this.startBtn) {
            this.startBtn.disabled = false;
            console.log('Start button enabled');
        }
    }

    selectVideo(index) {
        this.currentVideoIndex = index;
        this.currentVideo = this.videos[index];
        this.annotationData = {};
        
        // 从dialog数据中加载annotation点
        this.loadDialogPoints(this.currentVideo.path);

        // 更新UI
        document.querySelectorAll('.video-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        // 切换到标注视图
        this.selectionView.classList.remove('active');
        this.annotationView.classList.add('active');

        // 设置视频源并重置播放器
        this.videoPlayer.src = this.currentVideo.path;
        this.videoPlayer.load();
        this.isPaused = true;
        this.updatePlayPauseButtons();

        // 清空历史
        this.renderHistory();

        // 监听视频时间更新
        this.setupVideoListeners();
        
        console.log(`视频已选择: ${this.currentVideo.title}, 包含 ${this.annotationPoints.length} 个对话点`);
    }

    loadDialogPoints(videoPath) {
        // 从video路径中提取文件名
        const videoFilename = videoPath.split('/').pop();
        
        console.log(`🔍 加载对话点 - 视频路径: ${videoPath}`);
        console.log(`📄 提取的文件名: ${videoFilename}`);
        console.log(`📊 DIALOG_DATA 类型:`, typeof DIALOG_DATA);
        console.log(`📊 DIALOG_DATA 是否存在:`, typeof DIALOG_DATA !== 'undefined');
        
        if (typeof DIALOG_DATA !== 'undefined') {
            console.log(`📊 DIALOG_DATA 中的视频数量:`, Object.keys(DIALOG_DATA).length);
            console.log(`🔍 检查视频 ${videoFilename} 是否在 DIALOG_DATA 中:`, DIALOG_DATA.hasOwnProperty(videoFilename));
            
            if (DIALOG_DATA[videoFilename]) {
                console.log(`✅ 找到对话数据!`);
                const allDialogPoints = DIALOG_DATA[videoFilename];
                console.log(`📊 总对话点数:`, allDialogPoints.length);
                
                // 根据视频性别过滤对话点
                // 女性视频(F)只显示M_end点，男性视频(M)只显示F_end点
                const isFemalVideo = videoFilename.includes('F_');
                
                this.annotationPoints = allDialogPoints.filter(point => {
                    if (isFemalVideo) {
                        return point.type === 'M_end'; // 女性视频只在男性说话结束时评分
                    } else {
                        return point.type === 'F_end'; // 男性视频只在女性说话结束时评分
                    }
                });
                
                console.log(`🎯 过滤后的对话点数 (${isFemalVideo ? 'F视频-M_end' : 'M视频-F_end'}):`, this.annotationPoints.length);
                console.log(`⏰ 前5个时间点:`, this.annotationPoints.slice(0, 5).map(p => `${p.time}s (${p.type})`));
                
                console.log(`✅ 使用Excel对话数据 - ${this.annotationPoints.length} 个时间点`);
            } else {
                console.log(`❌ 未找到 ${videoFilename} 的对话数据`);
                console.log(`📋 可用的视频列表:`, Object.keys(DIALOG_DATA).slice(0, 5));
                // fallback到30秒间隔
                this.annotationPoints = this.currentVideo.annotationPoints || [];
                console.log(`⚠️ 使用30秒默认间隔 - ${this.annotationPoints.length} 个时间点`);
            }
        } else {
            console.error(`❌ DIALOG_DATA 未定义`);
            // 如果没有对话数据，使用默认的30秒间隔
            console.warn(`未找到 ${videoFilename} 的对话数据，使用默认间隔`);
            this.annotationPoints = this.currentVideo.annotationPoints || [];
        }
    }

    setupVideoListeners() {
        // 移除旧监听器
        this.videoPlayer.removeEventListener('timeupdate', this.handleTimeUpdate);
        this.videoPlayer.removeEventListener('loadedmetadata', this.handleMetadataLoaded);

        // 添加新监听器
        this.videoPlayer.addEventListener('timeupdate', () => this.handleTimeUpdate());
        this.videoPlayer.addEventListener('loadedmetadata', () => this.handleMetadataLoaded());
        this.videoPlayer.addEventListener('play', () => {
            this.isPaused = false;
            this.updatePlayPauseButtons();
        });
        this.videoPlayer.addEventListener('pause', () => {
            this.isPaused = true;
            this.updatePlayPauseButtons();
        });
    }

    handleMetadataLoaded() {
        this.durationDisplay.textContent = this.formatTime(this.videoPlayer.duration);
    }

    handleTimeUpdate() {
        const currentTime = this.videoPlayer.currentTime;
        this.currentTimeDisplay.textContent = this.formatTime(currentTime);
        
        // 更新进度条
        const progress = (currentTime / this.videoPlayer.duration) * 100;
        this.progressBar.style.width = progress + '%';

        // 检查是否需要暂停和显示问卷
        this.checkAnnotationPoints(currentTime);
    }

    checkAnnotationPoints(currentTime) {
        // 如果模态框已打开，不再检查
        if (this.isModalOpen) return;

        for (let point of this.annotationPoints) {
            // 检查是否到达标注点（考虑浮点数精度）
            if (Math.abs(currentTime - point.time) < 1.0 && !point.triggered) {
                console.log(`注释点触发: 时间=${currentTime.toFixed(2)}, 目标=${point.time}`);
                point.triggered = true;
                this.pauseAndShowAnnotation(point);
                break;
            }
        }
    }

    pauseAndShowAnnotation(point) {
        console.log(`暂停视频并显示注释窗口: 时间=${point.time}`);
        this.videoPlayer.pause();
        this.isPaused = true;
        this.updatePlayPauseButtons();

        this.currentAnnotationPoint = point;
        this.showAnnotationModal(point);
    }

    showAnnotationModal(point) {
        console.log(`显示注释模态框: 时间=${point.time}, 类型=${point.type}`);
        this.modalTimestamp.textContent = this.formatTime(point.time);
        
        // 根据类型设置说话者标签
        if (point.type === 'F_end') {
            // 评估女性说话者（第二个说话者）
            this.evaluatingLabel.textContent = 'Second Speaker (Being Evaluated):';
            this.evaluatedSpeaker.textContent = 'second speaker';
        } else {
            // 评估男性说话者（第二个说话者）
            this.evaluatingLabel.textContent = 'Second Speaker (Being Evaluated):';
            this.evaluatedSpeaker.textContent = 'second speaker';
        }
        
        // 显示对话文本
        if (point.f_text) {
            this.firstSpeakerText.textContent = point.f_text;
        } else {
            this.firstSpeakerText.textContent = 'No text available';
        }
        
        if (point.m_text) {
            this.secondSpeakerText.textContent = point.m_text;
        } else {
            this.secondSpeakerText.textContent = 'No text available';
        }
        
        // 设置上下文视频播放器
        this.setupContextVideoPlayer(point);
        
        // 恢复之前的标注（如果有）
        const existingAnnotation = this.annotationData[point.time];
        if (existingAnnotation) {
            console.log('恢复已有标注数据:', existingAnnotation);
            this.setEmpathyValues(existingAnnotation);
        } else {
            console.log('使用默认值初始化表单');
            // 重置为默认值
            this.clearAnnotationForm();
        }

        this.currentAnnotationPoint = point;
        this.modal.classList.add('show');
        this.isModalOpen = true;
        console.log('模态框已设置为显示状态');
    }

    closeAnnotationModal() {
        this.modal.classList.remove('show');
        this.isModalOpen = false;
    }

    saveAnnotation(point, data) {
        // 存储标注数据
        this.annotationData[point.time] = data;
        
        // 更新历史记录
        this.renderHistory();

        // 关闭模态框
        this.closeAnnotationModal();

        // 继续播放视频
        this.videoPlayer.play();
        this.isPaused = false;
        this.updatePlayPauseButtons();
    }

    clearAnnotationForm() {
        this.questionNames.forEach(questionName => {
            this.setQuestionValue(questionName, null);
        });
    }

    // Helper methods for empathy questions
    setQuestionValue(questionName, value) {
        const radioButtons = this.empathyQuestions[questionName];
        if (radioButtons && radioButtons.length > 0) {
            for (let radio of radioButtons) {
                radio.checked = (radio.value == value);
            }
        }
    }

    getQuestionValue(questionName) {
        const radioButtons = this.empathyQuestions[questionName];
        if (radioButtons && radioButtons.length > 0) {
            for (let radio of radioButtons) {
                if (radio.checked) {
                    return parseInt(radio.value);
                }
            }
        }
        return null; // No selection
    }

    getEmpathyValues() {
        const data = {};
        this.questionNames.forEach(questionName => {
            data[questionName] = this.getQuestionValue(questionName);
        });
        return data;
    }

    setEmpathyValues(data) {
        this.questionNames.forEach(questionName => {
            if (data[questionName] !== undefined) {
                this.setQuestionValue(questionName, data[questionName]);
            }
        });
    }

    renderHistory() {
        this.historyList.innerHTML = '';

        this.annotationPoints.forEach(point => {
            const annotation = this.annotationData[point.time];
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            if (annotation) {
                historyItem.classList.add('completed');
                const completedCount = this.questionNames.filter(q => annotation[q] !== null && annotation[q] !== undefined).length;
                const typeLabel = point.type === 'F_end' ? 'Female speaker end' : 'Male speaker end';
                historyItem.innerHTML = `
                    <div>
                        <span class="history-time">${this.formatTime(point.time)}</span>
                        <div class="history-values">
                            ${typeLabel} | Empathy Assessment: ${completedCount}/9 questions answered
                        </div>
                    </div>
                    <div class="history-actions">
                        <span class="history-status">Completed</span>
                        <button class="history-edit-btn" data-time="${point.time}">Edit</button>
                    </div>
                `;
            } else {
                // 根据类型显示更清楚的标签
                const speakerLabel = point.type === 'F_end' ? 'Evaluating Female Speaker' : 'Evaluating Male Speaker';
                historyItem.innerHTML = `
                    <div>
                        <span class="history-time">${this.formatTime(point.time)}</span>
                        <div class="history-values">${speakerLabel} | Pending</div>
                    </div>
                    <span class="history-status pending">Incomplete</span>
                `;
            }

            this.historyList.appendChild(historyItem);
        });

        // Add edit button event listeners
        document.querySelectorAll('.history-edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const time = parseFloat(e.target.dataset.time);
                const point = this.annotationPoints.find(p => p.time === time);
                if (point) {
                    this.videoPlayer.currentTime = time;
                    this.showAnnotationModal(point);
                }
            });
        });
    }

    setupEventListeners() {
        // 按钮事件
        this.confirmBtn.addEventListener('click', () => {
            const data = this.getEmpathyValues();
            this.saveAnnotation(this.currentAnnotationPoint, data);
        });

        this.clearBtn.addEventListener('click', () => {
            this.clearAnnotationForm();
        });

        this.closeModalBtn.addEventListener('click', () => {
            // 如果有当前标注点，保存数据并继续
            if (this.currentAnnotationPoint && !this.annotationData[this.currentAnnotationPoint.time]) {
                const data = this.getEmpathyValues();
                this.saveAnnotation(this.currentAnnotationPoint, data);
            } else {
                this.closeAnnotationModal();
                this.videoPlayer.play();
                this.isPaused = false;
                this.updatePlayPauseButtons();
            }
        });

        // 上下文视频重播按钮
        if (this.replayBtn) {
            this.replayBtn.addEventListener('click', () => {
                this.replayContextSegment();
            });
        }

        // 播放/暂停
        this.playBtn.addEventListener('click', () => {
            this.videoPlayer.play();
        });

        this.pauseBtn.addEventListener('click', () => {
            this.videoPlayer.pause();
        });

        // Start Annotation 按钮
        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => {
                this.startAnnotation();
            });
        }

        // 进度条点击
        this.progressBarContainer.addEventListener('click', (e) => {
            const rect = this.progressBarContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.videoPlayer.currentTime = percent * this.videoPlayer.duration;
        });

        // 移除滑动条更新监听器（不再需要）

        // 编辑面板
        this.closeEditPanel.addEventListener('click', () => {
            this.editPanel.classList.add('hidden');
        });

        // 按键事件
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (this.isPaused && this.currentVideo) {
                    this.videoPlayer.play();
                } else if (!this.isPaused && this.currentVideo) {
                    this.videoPlayer.pause();
                }
            }
        });
    }

    updatePlayPauseButtons() {
        this.playBtn.disabled = !this.isPaused;
        this.pauseBtn.disabled = this.isPaused;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    startAnnotation() {
        console.log('Starting annotation...');
        
        if (this.selectedVideoIndex === undefined || this.selectedVideoIndex === null) {
            alert('Please select a video first!');
            return;
        }

        // 切换到注释视图
        this.selectionView.classList.remove('active');
        this.annotationView.classList.add('active');
        
        // 选择视频
        this.selectVideo(this.selectedVideoIndex);
        
        console.log(`Started annotation for video: ${this.videos[this.selectedVideoIndex].title}`);
    }

    setupContextVideoPlayer(point) {
        if (!this.contextVideo || !this.currentVideo) return;
        
        // 设置上下文视频源为当前视频
        this.contextVideo.src = this.currentVideo.path;
        
        // 确定片段的开始和结束时间
        let startTime, endTime;
        
        if (point.type === 'F_end') {
            // 从女性开始到女性结束
            startTime = point.f_start || point.time - 10; // 如果没有f_start，默认从10秒前开始
            endTime = point.f_end || point.time;
        } else {
            // 从男性开始到男性结束
            startTime = point.m_start || point.time - 10; // 如果没有m_start，默认从10秒前开始
            endTime = point.m_end || point.time;
        }
        
        // 存储片段信息
        this.currentContextSegment = { startTime, endTime };
        
        // 更新时间范围显示
        if (this.timeRange) {
            this.timeRange.textContent = `${this.formatTime(startTime)} - ${this.formatTime(endTime)}`;
        }
        
        // 设置视频到开始时间
        this.contextVideo.currentTime = startTime;
        
        console.log(`Context video setup: ${startTime}s - ${endTime}s`);
    }

    replayContextSegment() {
        if (!this.contextVideo || !this.currentContextSegment) return;
        
        const { startTime, endTime } = this.currentContextSegment;
        
        // 设置到开始时间并播放
        this.contextVideo.currentTime = startTime;
        this.contextVideo.play();
        
        // 监听时间更新，在结束时暂停
        const handleTimeUpdate = () => {
            if (this.contextVideo.currentTime >= endTime) {
                this.contextVideo.pause();
                this.contextVideo.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
        
        this.contextVideo.addEventListener('timeupdate', handleTimeUpdate);
        
        console.log(`Replaying context segment: ${startTime}s - ${endTime}s`);
    }

}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.annotationSystem = new AnnotationSystem();
});
