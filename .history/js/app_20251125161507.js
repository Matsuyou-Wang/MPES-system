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

        // 状态
        this.currentVideo = null;
        this.currentVideoIndex = -1;
        this.annotationPoints = []; // 标注点信息
        this.annotationData = {}; // 储存标注数据 { timestamp: { pleasure, arousal, dominance, empathy } }
        this.isModalOpen = false;
        this.currentAnnotationPoint = null;
        this.isPaused = true;
        this.segmentCheckHandler = null; // 用于重播片段的时间检查

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
            
            // 从 DIALOG_DATA 加载对话点数据
            if (typeof DIALOG_DATA !== 'undefined') {
                this.videos = this.videos.map(video => {
                    const videoPath = video.path.split('/').pop(); // 获取文件名
                    const dialogPoints = DIALOG_DATA[videoPath] || [];
                    return {
                        ...video,
                        annotationPoints: dialogPoints
                    };
                });
                console.log(`加载了 ${this.videos.length} 个${selectedGender}视频，包含对话数据`);
            } else {
                console.warn('DIALOG_DATA not loaded, using video data without dialog points');
            }
            
            this.renderVideoList();
            this.renderQuickVideoList();
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
        this.annotationPoints = this.currentVideo.annotationPoints || [];

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
        console.log(`显示注释模态框: 时间=${point.time}`);
        this.modalTimestamp.textContent = this.formatTime(point.time);
        
        // 存储当前point以供重播使用
        this.currentAnnotationPoint = point;
        
        // 设置小窗视频播放器
        const clipPlayer = document.getElementById('clipPlayer');
        if (clipPlayer && this.currentVideo) {
            clipPlayer.src = this.currentVideo.path;
            const startTime = point.f_start || point.m_start || (point.time - 5);
            const endTime = point.m_end || point.f_end || point.time;
            
            // 存储片段的起止时间到clipPlayer
            clipPlayer.dataset.startTime = startTime;
            clipPlayer.dataset.endTime = endTime;
            
            // 设置初始播放位置
            clipPlayer.currentTime = startTime;
        }
        
        // 显示对话文本
        const speaker1Text = document.getElementById('speaker1Text');
        const speaker2Text = document.getElementById('speaker2Text');
        if (point.f_text && point.m_text) {
            speaker1Text.textContent = point.f_text;
            speaker2Text.textContent = point.m_text;
        } else {
            speaker1Text.textContent = 'No transcript available';
            speaker2Text.textContent = 'No transcript available';
        }
        
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

        this.modal.classList.add('show');
        this.isModalOpen = true;
        console.log('模态框已设置为显示状态');
    }

    closeAnnotationModal() {
        // 清理小窗视频
        const clipPlayer = document.getElementById('clipPlayer');
        if (clipPlayer) {
            clipPlayer.pause();
            if (clipPlayer._segmentEndHandler) {
                clipPlayer.removeEventListener('timeupdate', clipPlayer._segmentEndHandler);
                clipPlayer._segmentEndHandler = null;
            }
        }
        
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
        const sliders = this.empathyQuestions[questionName];
        if (sliders && sliders.length > 0) {
            // 对于slider，设置value
            sliders[0].value = value !== null ? value : 4;
        }
    }

    getQuestionValue(questionName) {
        const sliders = this.empathyQuestions[questionName];
        if (sliders && sliders.length > 0) {
            // 对于slider，直接返回值
            return parseInt(sliders[0].value);
        }
        return 4; // 默认值
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
                historyItem.innerHTML = `
                    <div>
                        <span class="history-time">${this.formatTime(point.time)}</span>
                        <div class="history-values">
                            Empathy Assessment: ${completedCount}/9 questions answered
                        </div>
                    </div>
                    <div class="history-actions">
                        <span class="history-status">Completed</span>
                        <button class="history-edit-btn" data-time="${point.time}">Edit</button>
                    </div>
                `;
            } else {
                historyItem.innerHTML = `
                    <div>
                        <span class="history-time">${this.formatTime(point.time)}</span>
                        <div class="history-values">Pending</div>
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

        // 重播片段按钮
        const replaySegmentBtn = document.getElementById('replaySegmentBtn');
        console.log('Replay按钮元素:', replaySegmentBtn);
        if (replaySegmentBtn) {
            replaySegmentBtn.addEventListener('click', (e) => {
                console.log('Replay按钮被点击!');
                e.preventDefault();
                e.stopPropagation();
                
                const clipPlayer = document.getElementById('clipPlayer');
                console.log('clipPlayer:', clipPlayer);
                console.log('clipPlayer.dataset:', clipPlayer ? clipPlayer.dataset : null);
                
                if (clipPlayer && clipPlayer.dataset.startTime) {
                    const startTime = parseFloat(clipPlayer.dataset.startTime);
                    const endTime = parseFloat(clipPlayer.dataset.endTime);
                    
                    console.log(`重播小窗片段: ${startTime} 到 ${endTime}`);
                    
                    // 移除旧的监听器
                    if (clipPlayer._segmentEndHandler) {
                        clipPlayer.removeEventListener('timeupdate', clipPlayer._segmentEndHandler);
                    }
                    
                    // 设置小窗视频到开始位置并播放
                    clipPlayer.currentTime = startTime;
                    clipPlayer.play();
                    
                    // 监听播放,到达结束时间时暂停
                    const segmentEndHandler = () => {
                        if (clipPlayer.currentTime >= endTime) {
                            clipPlayer.pause();
                            clipPlayer.currentTime = startTime;
                        }
                    };
                    
                    clipPlayer._segmentEndHandler = segmentEndHandler;
                    clipPlayer.addEventListener('timeupdate', segmentEndHandler);
                } else {
                    console.error('clipPlayer或startTime不存在!');
                }
            });
        } else {
            console.error('找不到replaySegmentBtn按钮!');
        }

        this.closeModalBtn.addEventListener('click', () => {
            // 清理小窗视频
            const clipPlayer = document.getElementById('clipPlayer');
            if (clipPlayer) {
                clipPlayer.pause();
                if (clipPlayer._segmentEndHandler) {
                    clipPlayer.removeEventListener('timeupdate', clipPlayer._segmentEndHandler);
                    clipPlayer._segmentEndHandler = null;
                }
            }
            
            // 清理主视频的片段播放监听器
            if (this.videoPlayer._segmentEndHandler) {
                this.videoPlayer.removeEventListener('timeupdate', this.videoPlayer._segmentEndHandler);
                this.videoPlayer._segmentEndHandler = null;
            }
            
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

        // 播放/暂停
        this.playBtn.addEventListener('click', () => {
            this.videoPlayer.play();
        });

        this.pauseBtn.addEventListener('click', () => {
            this.videoPlayer.pause();
        });

        // 重播按钮
        const replayBtn = document.getElementById('replayBtn');
        if (replayBtn) {
            replayBtn.addEventListener('click', () => {
                this.videoPlayer.currentTime = 0;
                this.videoPlayer.play();
            });
        }

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

}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.annotationSystem = new AnnotationSystem();
});
