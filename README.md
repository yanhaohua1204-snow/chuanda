# DaDou 穿搭助手移动端 Demo

基于 Figma 设计的智能穿搭推荐小程序，提供 AI 搭配建议、衣橱管理和穿搭日记功能。

## 功能特点

- **抖音挂载入口**：模拟从抖音小程序进入的交互体验
- **AI 打字机效果**：智能分析穿搭视频，实时显示 AI 思考过程
- **穿搭推荐卡片**：根据用户衣橱生成个性化搭配方案
- **互动对话框**：支持与 AI 进行对话交互
- **底部导航**：可切换 AI 搭配、我的衣橱、穿搭手帐三个页面
- **页面滑动**：完整保留 Figma 原型的交互逻辑和滑动体验

## 技术栈

- React + TypeScript
- Tailwind CSS v4
- Vite

## 本地运行

1. 克隆仓库
```bash
git clone <your-repo-url>
cd code
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

4. 在浏览器中打开预览地址

## 项目结构

```
src/
├── app/
│   ├── App.tsx                # 主应用组件，路由管理
│   └── components/
│       ├── DouyinEntry.tsx    # 抖音挂载页
│       ├── AIThinking.tsx     # AI 思考页
│       ├── AIAnswer.tsx       # AI 回答页（带打字机效果）
│       ├── Wardrobe.tsx       # 我的衣橱页
│       └── OutfitJournal.tsx  # 穿搭手帐页
└── imports/                   # Figma 导入的组件和资源
```

## 页面说明

### 1. 抖音挂载页
- 从抖音视频页面点击"用我的衣橱试试看"进入应用
- 点击任意位置即可进入下一步

### 2. AI 思考页
- 显示"思考中..."加载状态
- 自动过渡到 AI 回答页（2秒）

### 3. AI 回答页（主页）
- **穿搭视频分析**：展示博主穿搭风格分析
- **AI 打字机效果**：逐字显示 AI 分析结果
- **单品识别衣橱匹配**：智能匹配用户衣橱中的单品
- **可替换按钮**：点击换一换图标更换推荐单品
- **底部对话框**：支持继续与 AI 对话

### 4. 我的衣橱
- 展示用户拥有的所有衣物单品
- 按类别分类展示
- 支持滚动浏览

### 5. 穿搭手帐
- 记录每日穿搭搭配
- 时间线方式展示历史搭配
- 支持滚动查看更多记录

## 推送到 GitHub

代码已经初始化为 Git 仓库并创建了初始提交。按照以下步骤推送到 GitHub：

1. 在 GitHub 上创建一个新的仓库（不要初始化 README）

2. 连接到远程仓库并推送
```bash
# 将 YOUR_USERNAME 和 YOUR_REPO 替换为您的 GitHub 用户名和仓库名
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

3. （可选）部署到 GitHub Pages
   - 在仓库设置中启用 Pages 功能
   - 选择从 main 分支部署

## 设计来源

本项目完全基于 Figma 设计稿实现，保持了原始设计的视觉风格和交互逻辑。

## 注意事项

- 本项目为 Demo 演示，AI 分析内容为预设文本
- 图片和数据均为示例内容
- 最佳浏览体验：移动端竖屏模式（宽度 414px）
