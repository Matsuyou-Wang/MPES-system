# 部署和集成指南

## 快速部署

### 本地运行
1. 打开 `index.html` 文件到浏览器
2. 或者在项目根目录运行本地服务器：

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (需要安装 http-server)
npx http-server
```

然后访问：http://localhost:8000

### 产品部署
1. 将整个项目文件夹上传到服务器
2. 使用任何 Web 服务器（Nginx, Apache, etc.）提供静态文件
3. 如需动态功能，参考下面的后端集成部分

## 后端集成

### 数据持久化存储

当前系统的数据存储在浏览器内存中。为了实现数据持久化，需要集成后端。

#### 1. Node.js + Express 示例

**安装依赖：**
```bash
npm install express cors body-parser
```

**后端代码 (server.js)：**
```javascript
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

const dataDir = './data/annotations';

// 确保数据目录存在
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// 保存标注
app.post('/api/save-annotation', (req, res) => {
    const { videoId, annotations } = req.body;
    const filename = path.join(dataDir, `${videoId}-${Date.now()}.json`);
    
    fs.writeFile(filename, JSON.stringify(annotations, null, 2), (err) => {
        if (err) {
            res.status(500).json({ error: '保存失败' });
        } else {
            res.json({ success: true, filename });
        }
    });
});

// 加载标注
app.get('/api/load-annotation/:videoId', (req, res) => {
    const { videoId } = req.params;
    const files = fs.readdirSync(dataDir)
        .filter(f => f.startsWith(videoId))
        .sort()
        .reverse();
    
    if (files.length > 0) {
        const data = fs.readFileSync(path.join(dataDir, files[0]), 'utf8');
        res.json(JSON.parse(data));
    } else {
        res.json({});
    }
});

app.listen(3000, () => {
    console.log('服务器运行在 http://localhost:3000');
});
```

**前端调用：**
```javascript
// 修改 js/app.js 中的 saveAnnotation 方法
saveAnnotation(point, data) {
    // 存储标注数据
    this.annotationData[point.time] = data;
    
    // 发送到后端
    fetch('/api/save-annotation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            videoId: this.currentVideo.title,
            annotations: this.annotationData
        })
    }).catch(err => console.error('保存到服务器失败:', err));
    
    // ... 其余代码
}
```

#### 2. Python + Flask 示例

**安装依赖：**
```bash
pip install flask flask-cors
```

**后端代码 (app.py)：**
```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATA_DIR = './data/annotations'
os.makedirs(DATA_DIR, exist_ok=True)

@app.route('/api/save-annotation', methods=['POST'])
def save_annotation():
    data = request.json
    video_id = data.get('videoId')
    annotations = data.get('annotations')
    
    filename = f"{video_id}-{datetime.now().timestamp()}.json"
    filepath = os.path.join(DATA_DIR, filename)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(annotations, f, indent=2, ensure_ascii=False)
    
    return jsonify({'success': True, 'filename': filename})

@app.route('/api/load-annotation/<video_id>', methods=['GET'])
def load_annotation(video_id):
    files = [f for f in os.listdir(DATA_DIR) if f.startswith(video_id)]
    files.sort(reverse=True)
    
    if files:
        with open(os.path.join(DATA_DIR, files[0]), 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    
    return jsonify({})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

#### 3. PHP + MySQL 示例

**数据库表结构：**
```sql
CREATE TABLE annotations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    video_id VARCHAR(255),
    timestamp DECIMAL(10, 2),
    pleasure DECIMAL(3, 2),
    arousal DECIMAL(3, 2),
    dominance DECIMAL(3, 2),
    empathy INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX (video_id, timestamp)
);
```

**后端代码 (api.php)：**
```php
<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$pdo = new PDO('mysql:host=localhost;dbname=annotation_db', 'user', 'password');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    foreach ($data['annotations'] as $ts => $annotation) {
        $stmt = $pdo->prepare('
            INSERT INTO annotations 
            (video_id, timestamp, pleasure, arousal, dominance, empathy)
            VALUES (?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE 
            pleasure=VALUES(pleasure),
            arousal=VALUES(arousal),
            dominance=VALUES(dominance),
            empathy=VALUES(empathy)
        ');
        
        $stmt->execute([
            $data['videoId'],
            $ts,
            $annotation['pleasure'],
            $annotation['arousal'],
            $annotation['dominance'],
            $annotation['empathy']
        ]);
    }
    
    echo json_encode(['success' => true]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $videoId = $_GET['videoId'];
    $stmt = $pdo->prepare('
        SELECT timestamp, pleasure, arousal, dominance, empathy 
        FROM annotations 
        WHERE video_id = ?
        ORDER BY timestamp
    ');
    $stmt->execute([$videoId]);
    
    $result = [];
    foreach ($stmt->fetchAll() as $row) {
        $result[$row['timestamp']] = [
            'pleasure' => (float)$row['pleasure'],
            'arousal' => (float)$row['arousal'],
            'dominance' => (float)$row['dominance'],
            'empathy' => (int)$row['empathy']
        ];
    }
    
    echo json_encode($result);
}
?>
```

## 数据导出格式

### JSON 格式
```json
{
    "timestamp": "2024-01-15T10:30:00Z",
    "video": {
        "title": "示例视频",
        "duration": 120
    },
    "annotations": {
        "5": {
            "pleasure": 0.5,
            "arousal": 0.3,
            "dominance": 0.1,
            "empathy": 5
        },
        "15": {
            "pleasure": -0.2,
            "arousal": 0.8,
            "dominance": 0.4,
            "empathy": 6
        }
    },
    "totalItems": 2
}
```

### CSV 格式
```csv
时间戳,Pleasure,Arousal,Dominance,Empathy
5,0.5,0.3,0.1,5
15,-0.2,0.8,0.4,6
```

## 安全考虑

1. **CORS 配置**：生产环境中需要限制允许的来源
2. **数据验证**：在后端验证所有输入数据的范围
3. **认证**：添加用户认证防止未授权访问
4. **数据加密**：对敏感数据进行加密存储
5. **速率限制**：防止滥用 API

## 性能优化

1. **视频流**：使用 CDN 加速视频分发
2. **缓存**：使用浏览器缓存和服务器缓存
3. **数据库索引**：为 video_id 和 timestamp 建立索引
4. **异步保存**：后台异步保存数据防止阻塞
5. **压缩**：启用 gzip 压缩减少传输大小

## Docker 部署

**Dockerfile：**
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

**构建和运行：**
```bash
docker build -t annotation-system .
docker run -p 3000:3000 annotation-system
```

## 监控和日志

建议添加：
- 错误日志记录
- 用户活动日志
- 性能监控
- 数据备份机制

## 相关资源

- [HTML5 Video API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
