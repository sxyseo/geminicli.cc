# Gemini CLI 教程网站 🚀

[![网站状态](https://img.shields.io/website?url=https%3A%2F%2Fwww.geminicli.cc)](https://www.geminicli.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/部署于-Vercel-black?logo=vercel)](https://vercel.com/)

> 🌐 **官方网站**: [https://www.geminicli.cc/](https://www.geminicli.cc/)

**学习和掌握 Google Gemini CLI 的最全面资源。** 通过我们丰富的教程、文档和实践示例，自信地构建强大的 AI 应用程序。

![Gemini CLI 网站截图](https://github.com/sxyseo/geminicli.cc/blob/main/docs/images/website-preview.png)

## 🌍 多语言版本

- [🇺🇸 English](README.md)
- [🇨🇳 简体中文](README.zh-CN.md) (当前)
- [🇯🇵 日本語](README.ja.md)
- [🇰🇷 한국어](README.ko.md)
- [🇪🇸 Español](README.es.md)
- [🇫🇷 Français](README.fr.md)
- [🇩🇪 Deutsch](README.de.md)
- [🇷🇺 Русский](README.ru.md)

## ✨ 核心特性

### 🎯 **全面的学习平台**
- **50+ 交互式教程** - 从初学者到高级教程
- **完整文档** - 安装、认证、命令和配置指南
- **实际案例** - 真实世界的代码示例和用例
- **最佳实践** - 安全性、性能和工作流程优化

### 🌍 **多语言支持**
- **12种语言** 支持实时切换
- **本地化内容** - 原生语言教程和文档
- **全球社区** - 连接全世界的开发者

### 💻 **交互式体验**
- **基于Web的终端** - 直接在浏览器中练习命令
- **语法高亮** - 使用Prism.js的精美代码展示
- **智能补全** - 更快学习的智能建议
- **实时演示** - 看到Gemini CLI的实际运行效果

### 🎨 **现代化设计**
- **响应式布局** - 在桌面、平板和手机上完美显示
- **深色/浅色模式** - 选择您喜欢的主题
- **流畅动画** - 由Framer Motion驱动
- **无障碍UI** - 符合WCAG标准的设计

### ⚡ **高性能**
- **静态站点生成** - 闪电般的页面加载速度
- **CDN分发** - 通过Vercel的全球内容分发
- **图片优化** - Next.js图片优化
- **SEO优化** - 完整的元标签和站点地图

## 🚀 快速开始

### 系统要求

- **Node.js** 18.0+ 
- **npm** 7.0+ 或 **yarn** 1.22+ 或 **pnpm** 8.0+
- **Git** 版本控制工具

### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/sxyseo/geminicli.cc.git
cd geminicli.cc

# 安装依赖
npm install
# 或者
yarn install
# 或者
pnpm install

# 启动开发服务器
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

### 环境配置

在根目录创建 `.env.local` 文件：

```env
# 可选：分析和跟踪
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# 可选：功能标志
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
NEXT_PUBLIC_FEATURE_COMMUNITY=true
```

## 📖 网站功能区

### 🏠 **首页**
- 功能亮点的Hero区域
- 交互式终端演示
- 精选教程展示
- 社区统计数据
- 行动召唤区域

### 📚 **文档**
包含全面指南：

#### **安装指南** (`/docs/installation`)
- 所有平台的系统要求
- 包管理器支持 (npm, yarn, pnpm, bun)
- 平台特定说明 (Windows, macOS, Linux)
- 安装验证和故障排除

#### **认证指南** (`/docs/authentication`)
- Google AI Studio API密钥设置
- 团队OAuth 2.0配置
- 生产环境服务账户设置
- 安全最佳实践
- 常见认证问题

#### **命令参考** (`/docs/commands`)
- 核心命令 (chat, ask, generate, analyze)
- 文件操作 (review, explain, refactor)
- 配置管理
- 高级功能和批处理
- 全局选项和帮助系统

#### **配置指南** (`/docs/configuration`)
- 配置文件设置和层次结构
- 环境变量
- 配置验证和迁移
- 最佳实践和常见错误

### 🎓 **教程** (`/tutorials`)
分步学习路径：

- **入门指南** - 基础安装和首次命令
- **高级用法** - 复杂工作流程和集成
- **自定义插件** - 扩展Gemini CLI功能
- **最佳实践** - 生产就绪配置

### 🎮 **演练场** (`/playground`)
- 交互式终端模拟器
- 预加载示例和演示
- 实时命令执行
- 可分享的演练场会话

### 👥 **社区** (`/community`)
- Discord服务器集成
- GitHub仓库链接
- 社区指南
- 贡献机会

## 🛠️ 技术栈

### **前端框架**
- **[Next.js 14](https://nextjs.org/)** - 带App Router的React框架
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全开发
- **[React 18](https://reactjs.org/)** - 最新React特性

### **样式和UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的CSS框架
- **[shadcn/ui](https://ui.shadcn.com/)** - 精美的组件库
- **[Lucide React](https://lucide.dev/)** - 现代图标库
- **[Framer Motion](https://www.framer.com/motion/)** - 流畅动画

### **代码和内容**
- **[Prism.js](https://prismjs.com/)** - 语法高亮
- **[next-themes](https://github.com/pacocoursey/next-themes)** - 深色/浅色模式
- **Markdown支持** - 丰富的内容渲染

### **开发和部署**
- **[Vercel](https://vercel.com/)** - 托管和部署
- **[ESLint](https://eslint.org/)** - 代码检查
- **[Prettier](https://prettier.io/)** - 代码格式化

## 📁 项目结构

```
geminicli.cc/
├── app/                          # Next.js App Router
│   ├── (root)/
│   │   ├── page.tsx             # 首页
│   │   └── layout.tsx           # 根布局
│   ├── docs/                    # 文档页面
│   │   ├── installation/        # 安装指南
│   │   ├── authentication/      # 认证设置指南
│   │   ├── commands/            # 命令参考
│   │   ├── configuration/       # 配置指南
│   │   └── quick-start/         # 快速开始指南
│   ├── tutorials/               # 教程页面
│   │   ├── getting-started/
│   │   ├── advanced-usage/
│   │   └── custom-plugins/
│   ├── playground/              # 交互式演练场
│   ├── community/               # 社区页面
│   ├── api/                     # API路由
│   │   ├── sitemap/            # 站点地图生成
│   │   └── robots/             # Robots.txt
│   ├── globals.css             # 全局样式
│   └── layout.tsx              # 应用布局
├── components/                  # 可复用组件
│   ├── ui/                     # shadcn/ui组件
│   ├── code-block.tsx          # 语法高亮代码
│   ├── header.tsx              # 导航头部
│   ├── footer.tsx              # 页脚组件
│   ├── hero.tsx                # 首页英雄区
│   ├── features.tsx            # 功能展示
│   ├── terminal-demo.tsx       # 交互式终端
│   └── ...                     # 其他组件
├── lib/                        # 工具函数
│   └── utils.ts               # 通用工具
├── public/                     # 静态资源
│   ├── images/                # 网站图片
│   └── icons/                 # 图标文件
├── styles/                     # 附加样式
├── hooks/                      # 自定义React Hooks
├── package.json               # 依赖项
├── tailwind.config.ts         # Tailwind配置
├── next.config.mjs            # Next.js配置
└── tsconfig.json              # TypeScript配置
```

## 🎨 设计系统

### **调色板**
```css
/* 浅色模式 */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--secondary: 210 40% 98%;
--muted: 210 40% 96%;
--accent: 210 40% 94%;

/* 深色模式 */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 210 40% 98%;
--secondary: 217.2 32.6% 17.5%;
--muted: 217.2 32.6% 17.5%;
--accent: 217.2 32.6% 17.5%;
```

### **字体系统**
- **字体族**: Inter (系统字体栈)
- **标题**: 字重 600-800
- **正文**: 字重 400-500
- **代码**: JetBrains Mono

### **响应式断点**
```css
sm: 640px    /* 大屏手机 */
md: 768px    /* 平板 */
lg: 1024px   /* 小屏桌面 */
xl: 1280px   /* 桌面 */
2xl: 1536px  /* 大屏桌面 */
```

## 🚀 部署

### **Vercel (推荐)**

网站针对Vercel部署进行了优化：

```bash
# 安装Vercel CLI
npm i -g vercel

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

### **手动部署**

```bash
# 构建应用
npm run build

# 导出静态文件 (如需要)
npm run export

# 本地测试服务
npm start
```

### **生产环境变量**

```env
# 生产环境必需
NEXT_PUBLIC_SITE_URL=https://www.geminicli.cc

# 可选分析
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# 功能标志
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
```

## 📊 性能指标

### **核心Web指标**
- **最大内容绘制 (LCP)**: < 1.2秒
- **首次输入延迟 (FID)**: < 100毫秒  
- **累积布局偏移 (CLS)**: < 0.1

### **Lighthouse评分**
- **性能**: 95+ 🟢
- **可访问性**: 100 🟢
- **最佳实践**: 100 🟢
- **SEO**: 100 🟢

### **包分析**
```bash
# 分析包大小
npm run analyze

# 检查包组成
npx @next/bundle-analyzer
```

## 🤝 贡献

我们欢迎社区的贡献！以下是您可以帮助的方式：

### **贡献方式**
- 🐛 **Bug报告** - 发现问题？告诉我们！
- 💡 **功能请求** - 有改进想法？
- 📝 **文档** - 帮助改进我们的指南
- 🌐 **翻译** - 增加更多语言支持
- 🎨 **设计** - 改善UI/UX和可访问性

### **开发工作流程**

1. **Fork仓库**
2. **创建功能分支**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **进行更改**
4. **运行测试和检查**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **提交更改**
   ```bash
   git commit -m "添加惊人功能"
   ```
6. **推送到您的fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **创建Pull Request**

### **代码风格指南**

- 所有新代码使用 **TypeScript**
- 遵循 **ESLint** 和 **Prettier** 配置
- 编写 **描述性提交信息**
- 为新功能添加 **测试**
- 根据需要更新 **文档**

### **内容指南**

- **清晰简洁** 的写作
- **分步骤** 的教程与示例
- **代码示例** 应经过测试且可工作
- **截图** 用于视觉指导
- **可访问性** 考虑

## 📄 许可证

本项目使用 **MIT许可证** - 详见 [LICENSE](LICENSE) 文件。

## 🔗 相关链接

- **🌐 官方网站**: [https://www.geminicli.cc/](https://www.geminicli.cc/)
- **📚 文档**: [https://www.geminicli.cc/docs](https://www.geminicli.cc/docs)
- **🎓 教程**: [https://www.geminicli.cc/tutorials](https://www.geminicli.cc/tutorials)
- **🎮 演练场**: [https://www.geminicli.cc/playground](https://www.geminicli.cc/playground)
- **💬 Discord社区**: [加入我们的Discord](https://discord.gg/gemini-cli)
- **📊 Vercel分析**: [性能仪表板](https://vercel.com/sxyseos-projects/geminicli.cc)

## 🙏 致谢

- **Google** - 创造了出色的Gemini CLI
- **Vercel** - 优秀的托管和部署平台
- **shadcn** - 精美的UI组件库
- **社区贡献者** - 教程、反馈和改进

---

<div align="center">
  <p>
    <strong>由Gemini CLI社区用❤️构建</strong>
  </p>
  <p>
    <a href="https://www.geminicli.cc/">访问网站</a> • 
    <a href="https://www.geminicli.cc/docs">文档</a> • 
    <a href="https://www.geminicli.cc/tutorials">教程</a> • 
    <a href="https://discord.gg/gemini-cli">社区</a>
  </p>
</div> 