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

        // 滑动条元素
        this.sliders = {
            pleasure: document.getElementById('pleasureSlider'),
            arousal: document.getElementById('arousalSlider'),
            dominance: document.getElementById('dominanceSlider'),
            empathy: document.getElementsByName('empathy'),
            pleasureLeft: document.getElementById('pleasureSliderLeft'),
            arousalLeft: document.getElementById('arousalSliderLeft'),
            dominanceLeft: document.getElementById('dominanceSliderLeft'),
            pleasureRight: document.getElementById('pleasureSliderRight'),
            arousalRight: document.getElementById('arousalSliderRight'),
            dominanceRight: document.getElementById('dominanceSliderRight')
        };

        // 显示值元素
        this.valueDisplays = {
            pleasure: document.getElementById('pleasureValue'),
            arousal: document.getElementById('arousalValue'),
            dominance: document.getElementById('dominanceValue'),
            empathy: null, // Radio buttons don't need value display
            pleasureLeft: document.getElementById('pleasureValueLeft'),
            arousalLeft: document.getElementById('arousalValueLeft'),
            dominanceLeft: document.getElementById('dominanceValueLeft'),
            pleasureRight: document.getElementById('pleasureValueRight'),
            arousalRight: document.getElementById('arousalValueRight'),
            dominanceRight: document.getElementById('dominanceValueRight')
        };

        this.modalTimestamp = document.getElementById('modalTimestamp');

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
        
        // 恢复之前的标注（如果有）
        const existingAnnotation = this.annotationData[point.time];
        if (existingAnnotation) {
            console.log('恢复已有标注数据:', existingAnnotation);
            this.sliders.pleasureLeft.value = existingAnnotation.pleasureLeft || 0;
            this.sliders.arousalLeft.value = existingAnnotation.arousalLeft || 0;
            this.sliders.dominanceLeft.value = existingAnnotation.dominanceLeft || 0;
            this.sliders.pleasureRight.value = existingAnnotation.pleasureRight || 0;
            this.sliders.arousalRight.value = existingAnnotation.arousalRight || 0;
            this.sliders.dominanceRight.value = existingAnnotation.dominanceRight || 0;
            this.setEmpathyValue(existingAnnotation.empathy || 4);
            this.updateSliderValues();
        } else {
            console.log('使用默认值初始化表单');
            // 重置为默认值
            this.sliders.pleasureLeft.value = 0;
            this.sliders.arousalLeft.value = 0;
            this.sliders.dominanceLeft.value = 0;
            this.sliders.pleasureRight.value = 0;
            this.sliders.arousalRight.value = 0;
            this.sliders.dominanceRight.value = 0;
            this.setEmpathyValue(4);
            this.updateSliderValues();
        }

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
        this.sliders.pleasureLeft.value = 0;
        this.sliders.arousalLeft.value = 0;
        this.sliders.dominanceLeft.value = 0;
        this.sliders.pleasureRight.value = 0;
        this.sliders.arousalRight.value = 0;
        this.sliders.dominanceRight.value = 0;
        this.setEmpathyValue(4);
        this.updateSliderValues();
    }

    updateSliderValues() {
        this.valueDisplays.pleasureLeft.textContent = parseFloat(this.sliders.pleasureLeft.value).toFixed(3);
        this.valueDisplays.arousalLeft.textContent = parseFloat(this.sliders.arousalLeft.value).toFixed(3);
        this.valueDisplays.dominanceLeft.textContent = parseFloat(this.sliders.dominanceLeft.value).toFixed(3);
        this.valueDisplays.pleasureRight.textContent = parseFloat(this.sliders.pleasureRight.value).toFixed(3);
        this.valueDisplays.arousalRight.textContent = parseFloat(this.sliders.arousalRight.value).toFixed(3);
        this.valueDisplays.dominanceRight.textContent = parseFloat(this.sliders.dominanceRight.value).toFixed(3);
        // No need to update empathy display - radio buttons handle their own state
    }

    renderHistory() {
        this.historyList.innerHTML = '';

        this.annotationPoints.forEach(point => {
            const annotation = this.annotationData[point.time];
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            if (annotation) {
                historyItem.classList.add('completed');
                historyItem.innerHTML = `
                    <div>
                        <span class="history-time">${this.formatTime(point.time)}</span>
                        <div class="history-values">
                            PAD: (${annotation.pleasure.toFixed(3)}, ${annotation.arousal.toFixed(3)}, ${annotation.dominance.toFixed(3)}) | 
                            Empathy: ${annotation.empathy}
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
            const data = {
                pleasureLeft: parseFloat(this.sliders.pleasureLeft.value),
                arousalLeft: parseFloat(this.sliders.arousalLeft.value),
                dominanceLeft: parseFloat(this.sliders.dominanceLeft.value),
                pleasureRight: parseFloat(this.sliders.pleasureRight.value),
                arousalRight: parseFloat(this.sliders.arousalRight.value),
                dominanceRight: parseFloat(this.sliders.dominanceRight.value),
                empathy: this.getEmpathyValue()
            };
            this.saveAnnotation(this.currentAnnotationPoint, data);
        });

        this.clearBtn.addEventListener('click', () => {
            this.clearAnnotationForm();
        });

        this.closeModalBtn.addEventListener('click', () => {
            // 如果有当前标注点，保存数据并继续
            if (this.currentAnnotationPoint && !this.annotationData[this.currentAnnotationPoint.time]) {
                const data = {
                    pleasureLeft: parseFloat(this.sliders.pleasureLeft.value),
                    arousalLeft: parseFloat(this.sliders.arousalLeft.value),
                    dominanceLeft: parseFloat(this.sliders.dominanceLeft.value),
                    pleasureRight: parseFloat(this.sliders.pleasureRight.value),
                    arousalRight: parseFloat(this.sliders.arousalRight.value),
                    dominanceRight: parseFloat(this.sliders.dominanceRight.value),
                    empathy: this.getEmpathyValue()
                };
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

        // 滑动条更新
        Object.values(this.sliders).forEach(slider => {
            slider.addEventListener('input', () => this.updateSliderValues());
        });

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

    // Helper methods for empathy radio buttons
    setEmpathyValue(value) {
        // Set the radio button for empathy
        if (this.sliders.empathy && this.sliders.empathy.length > 0) {
            for (let radio of this.sliders.empathy) {
                radio.checked = (radio.value == value);
            }
        }
    }

    getEmpathyValue() {
        // Get the selected empathy value from radio buttons
        if (this.sliders.empathy && this.sliders.empathy.length > 0) {
            for (let radio of this.sliders.empathy) {
                if (radio.checked) {
                    return parseInt(radio.value);
                }
            }
        }
        return 4; // Default value
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    window.annotationSystem = new AnnotationSystem();
});
