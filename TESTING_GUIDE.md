# 系统测试指南

## 修复的问题

### 1. 页面跳转流程修复
- **问题**：`user-info.html` 直接跳转到 `annotation.html`，跳过了性别选择页面
- **修复**：现在正确跳转到 `gender-selection.html`

### 2. 性别选择功能修复
- **问题**：点击 Female 选项也跳转到 Male 视频
- **修复**：`gender-selection.html` 现在正确处理 male 和 female 的点击事件

### 3. 视频加载逻辑修复
- **问题**：无论选择什么性别都加载男性视频
- **修复**：`annotation.html` 现在根据 URL 参数和 localStorage 正确加载对应性别的视频

## 完整流程测试步骤

### 步骤 1: 启动服务器
```bash
./start-server.sh
```
或者
```bash
python3 -m http.server 8009
```

### 步骤 2: 访问首页
打开浏览器访问：`http://localhost:8009/`

### 步骤 3: 填写用户信息
1. 选择国家（Country）
2. 选择年龄范围（Age Range）
3. 选择性别（Gender）- 这里的性别是用户本人的性别
4. 点击 "Continue" 按钮

**预期结果**：页面应该跳转到 `gender-selection.html`

### 步骤 4: 选择视频性别
1. 点击 "Male" 或 "Female" 卡片

**预期结果**：
- 点击 Male：跳转到 `annotation.html?gender=male`，显示男性视频列表
- 点击 Female：跳转到 `annotation.html?gender=female`，显示女性视频列表

### 步骤 5: 验证视频列表
**验证 Male 视频**：
- 标题应显示 "Male Videos"
- 视频列表应包含：Session 01M, 02M, 03M, 04M, 05M 等

**验证 Female 视频**：
- 标题应显示 "Female Videos"  
- 视频列表应包含：Session 01F, 02F, 03F, 04F, 05F 等

### 步骤 6: 测试返回功能
1. 点击 "Change Gender" 按钮

**预期结果**：返回到 `gender-selection.html`，可以重新选择性别

## 验证要点

### ✅ 正确的流程
```
index.html 
  ↓
user-info.html (填写国家、年龄、性别)
  ↓
gender-selection.html (选择要观看的视频性别)
  ↓
annotation.html?gender=male/female (显示对应性别的视频)
```

### ✅ 数据存储
打开浏览器开发者工具 → Application → Local Storage → localhost:8009

应该看到：
- `userInfo`: 包含用户的国家、年龄、性别信息
- `selectedGender`: 当前选择的视频性别（male 或 female）

### ✅ URL 参数
在 `annotation.html` 页面，URL 应该包含：
- `?gender=male` 或 `?gender=female`

## 常见问题排查

### 问题 1: 点击 Female 还是跳转到 Male 视频
**检查**：
1. 清除浏览器 localStorage
2. 刷新页面重新测试
3. 检查浏览器控制台是否有 JavaScript 错误

### 问题 2: 页面跳转不正确
**检查**：
1. 确保所有文件都已保存
2. 清除浏览器缓存
3. 硬刷新页面（Cmd/Ctrl + Shift + R）

### 问题 3: 视频列表为空
**检查**：
1. 确保 `data/videos-extended.js` 文件存在
2. 打开浏览器控制台查看是否有文件加载错误
3. 检查 `ALL_VIDEOS` 对象是否正确定义

## 调试工具

### 使用浏览器控制台
在任何页面打开控制台（F12），输入：
```javascript
// 查看当前 localStorage
console.log(localStorage.getItem('userInfo'));
console.log(localStorage.getItem('selectedGender'));

// 查看视频数据
console.log(ALL_VIDEOS);
console.log(window.videos);
```

### 使用系统诊断页面
访问 `http://localhost:8009/debug.html` 查看系统状态和诊断信息
