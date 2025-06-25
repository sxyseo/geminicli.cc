"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "zh" | "ja" | "ko" | "es" | "fr" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.tutorials": "Tutorials",
    "nav.docs": "Documentation",
    "nav.playground": "Playground",
    "nav.community": "Community",
    "nav.blog": "Blog",
    "nav.examples": "Examples",

    // Hero section
    "hero.badge": "New: Gemini CLI v2.0 Released",
    "hero.title": "Master AI-Powered",
    "hero.description":
      "Learn to build powerful AI applications with comprehensive tutorials, best practices, and hands-on examples using Google's Gemini CLI.",
    "hero.getStarted": "Get Started",
    "hero.tryDemo": "Try Demo",
    "hero.stats.tutorials": "Tutorials",
    "hero.stats.downloads": "Downloads",
    "hero.stats.languages": "Languages",

    // Features
    "features.title": "Why Choose Gemini CLI?",
    "features.subtitle": "Everything you need to build amazing AI applications",
    "features.terminal.title": "Interactive Terminal",
    "features.terminal.description":
      "Experience a powerful web-based terminal with syntax highlighting and auto-completion.",
    "features.performance.title": "High Performance",
    "features.performance.description":
      "Optimized for large codebases with intelligent caching and streaming responses.",
    "features.multilingual.title": "Multilingual Support",
    "features.multilingual.description": "Available in 12 languages with real-time switching and localized content.",
    "features.integration.title": "Easy Integration",
    "features.integration.description": "Seamlessly integrate with your existing workflow and development tools.",
    "features.security.title": "Enterprise Security",
    "features.security.description": "Built with security-first approach, GDPR compliant with data encryption.",
    "features.workflow.title": "Workflow Automation",
    "features.workflow.description": "Automate repetitive tasks with visual workflow builder and pre-built templates.",

    // Terminal demo
    "terminal.title": "See It In Action",
    "terminal.subtitle": "Watch how easy it is to get started with Gemini CLI",
    "terminal.playDemo": "Play Demo",
    "terminal.playing": "Playing...",
    "terminal.install.output": "✓ Gemini CLI installed successfully",
    "terminal.install.description": "Install the CLI globally using npm",
    "terminal.auth.output": "✓ Authentication successful",
    "terminal.auth.description": "Authenticate with your Google account",
    "terminal.generate.output": "✓ Component generated successfully",
    "terminal.generate.description": "Generate code using AI prompts",
    "terminal.chat.output": "✓ Chat session started",
    "terminal.chat.description": "Start interactive chat with Gemini",

    // Tutorials
    "tutorials.title": "Featured Tutorials",
    "tutorials.subtitle": "Step-by-step guides to master Gemini CLI",
    "tutorials.gettingStarted.title": "Getting Started with Gemini CLI",
    "tutorials.gettingStarted.description":
      "Learn the basics of installation, authentication, and your first AI-powered commands.",
    "tutorials.advancedUsage.title": "Advanced Usage Patterns",
    "tutorials.advancedUsage.description":
      "Explore complex workflows, custom prompts, and integration with development tools.",
    "tutorials.customPlugins.title": "Building Custom Plugins",
    "tutorials.customPlugins.description":
      "Create your own plugins to extend Gemini CLI functionality for specific use cases.",
    "tutorials.levels.beginner": "Beginner",
    "tutorials.levels.intermediate": "Intermediate",
    "tutorials.levels.advanced": "Advanced",
    "tutorials.readMore": "Read More",
    "tutorials.viewAll": "View All Tutorials",
    "tutorials.searchPlaceholder": "Search tutorials...",
    "tutorials.filterBy": "Filter by",
    "tutorials.allCategories": "All Categories",
    "tutorials.duration": "Duration",
    "tutorials.author": "Author",
    "tutorials.lastUpdated": "Last Updated",
    "tutorials.difficulty": "Difficulty",
    "tutorials.prerequisites": "Prerequisites",
    "tutorials.whatYouWillLearn": "What you'll learn",

    // Documentation
    "docs.title": "Documentation",
    "docs.subtitle": "Complete reference for Gemini CLI",
    "docs.quickStart": "Quick Start",
    "docs.apiReference": "API Reference",
    "docs.guides": "Guides",
    "docs.examples": "Examples",
    "docs.troubleshooting": "Troubleshooting",
    "docs.changelog": "Changelog",
    "docs.searchDocs": "Search documentation...",
    "docs.onThisPage": "On this page",
    "docs.previousPage": "Previous",
    "docs.nextPage": "Next",
    "docs.editPage": "Edit this page",
    "docs.lastModified": "Last modified",

    // Community
    "community.title": "Join Our Community",
    "community.subtitle": "Connect with developers worldwide",
    "community.discord": "Join Discord",
    "community.github": "GitHub",
    "community.twitter": "Follow Us",
    "community.discussions": "Discussions",
    "community.showcase": "Showcase",
    "community.contributors": "Contributors",
    "community.events": "Events",
    "community.newsletter": "Newsletter",
    "community.blog": "Blog",

    // Playground
    "playground.title": "Gemini CLI Playground",
    "playground.subtitle": "Try Gemini CLI commands in a safe, interactive environment",
    "playground.examples": "Examples",
    "playground.quickTips": "Quick Tips",
    "playground.features": "Playground Features",
    "playground.safeEnvironment": "Safe environment",
    "playground.noApiKey": "No API key required",
    "playground.simulatedResponses": "Simulated responses",
    "playground.copyOutput": "Copy output easily",
    "playground.clearTerminal": "Clear Terminal",
    "playground.runCommand": "Run Command",

    // Footer
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.community": "Community",
    "footer.legal": "Legal",
    "footer.description":
      "The most comprehensive resource for learning and mastering Google's Gemini CLI. Build powerful AI applications with confidence.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.retry": "Retry",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.share": "Share",
    "common.copy": "Copy",
    "common.copied": "Copied!",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.viewAll": "View All",
    "common.showMore": "Show More",
    "common.showLess": "Show Less",
  },
  zh: {
    // Navigation
    "nav.tutorials": "教程",
    "nav.docs": "文档",
    "nav.playground": "演练场",
    "nav.community": "社区",
    "nav.blog": "博客",
    "nav.examples": "示例",

    // Hero section
    "hero.badge": "新功能：Gemini CLI v2.0 发布",
    "hero.title": "掌握AI驱动的",
    "hero.description": "通过全面的教程、最佳实践和实践示例，学习使用Google Gemini CLI构建强大的AI应用程序。",
    "hero.getStarted": "开始使用",
    "hero.tryDemo": "试用演示",
    "hero.stats.tutorials": "教程",
    "hero.stats.downloads": "下载量",
    "hero.stats.languages": "语言",

    // Features
    "features.title": "为什么选择 Gemini CLI？",
    "features.subtitle": "构建出色AI应用程序所需的一切",
    "features.terminal.title": "交互式终端",
    "features.terminal.description": "体验强大的基于Web的终端，具有语法高亮和自动补全功能。",
    "features.performance.title": "高性能",
    "features.performance.description": "针对大型代码库进行优化，具有智能缓存和流式响应。",
    "features.multilingual.title": "多语言支持",
    "features.multilingual.description": "支持12种语言，实时切换和本地化内容。",
    "features.integration.title": "轻松集成",
    "features.integration.description": "与现有工作流程和开发工具无缝集成。",
    "features.security.title": "企业级安全",
    "features.security.description": "采用安全优先的方法构建，符合GDPR标准，具有数据加密功能。",
    "features.workflow.title": "工作流自动化",
    "features.workflow.description": "使用可视化工作流构建器和预构建模板自动化重复任务。",

    // Terminal demo
    "terminal.title": "实际演示",
    "terminal.subtitle": "看看使用 Gemini CLI 有多简单",
    "terminal.playDemo": "播放演示",
    "terminal.playing": "播放中...",
    "terminal.install.output": "✓ Gemini CLI 安装成功",
    "terminal.install.description": "使用 npm 全局安装 CLI",
    "terminal.auth.output": "✓ 身份验证成功",
    "terminal.auth.description": "使用您的 Google 账户进行身份验证",
    "terminal.generate.output": "✓ 组件生成成功",
    "terminal.generate.description": "使用 AI 提示生成代码",
    "terminal.chat.output": "✓ 聊天会话已启动",
    "terminal.chat.description": "与 Gemini 开始交互式聊天",

    // Tutorials
    "tutorials.title": "精选教程",
    "tutorials.subtitle": "掌握 Gemini CLI 的分步指南",
    "tutorials.gettingStarted.title": "Gemini CLI 入门",
    "tutorials.gettingStarted.description": "学习安装、身份验证和第一个AI驱动命令的基础知识。",
    "tutorials.advancedUsage.title": "高级使用模式",
    "tutorials.advancedUsage.description": "探索复杂的工作流程、自定义提示和与开发工具的集成。",
    "tutorials.customPlugins.title": "构建自定义插件",
    "tutorials.customPlugins.description": "创建自己的插件来扩展Gemini CLI的功能以适应特定用例。",
    "tutorials.levels.beginner": "初级",
    "tutorials.levels.intermediate": "中级",
    "tutorials.levels.advanced": "高级",
    "tutorials.readMore": "阅读更多",
    "tutorials.viewAll": "查看所有教程",
    "tutorials.searchPlaceholder": "搜索教程...",
    "tutorials.filterBy": "筛选",
    "tutorials.allCategories": "所有分类",
    "tutorials.duration": "时长",
    "tutorials.author": "作者",
    "tutorials.lastUpdated": "最后更新",
    "tutorials.difficulty": "难度",
    "tutorials.prerequisites": "前置要求",
    "tutorials.whatYouWillLearn": "你将学到",

    // Documentation
    "docs.title": "文档",
    "docs.subtitle": "Gemini CLI 完整参考",
    "docs.quickStart": "快速开始",
    "docs.apiReference": "API 参考",
    "docs.guides": "指南",
    "docs.examples": "示例",
    "docs.troubleshooting": "故障排除",
    "docs.changelog": "更新日志",
    "docs.searchDocs": "搜索文档...",
    "docs.onThisPage": "本页内容",
    "docs.previousPage": "上一页",
    "docs.nextPage": "下一页",
    "docs.editPage": "编辑此页",
    "docs.lastModified": "最后修改",

    // Community
    "community.title": "加入我们的社区",
    "community.subtitle": "与全球开发者连接",
    "community.discord": "加入 Discord",
    "community.github": "GitHub",
    "community.twitter": "关注我们",
    "community.discussions": "讨论",
    "community.showcase": "展示",
    "community.contributors": "贡献者",
    "community.events": "活动",
    "community.newsletter": "订阅通讯",
    "community.blog": "博客",

    // Playground
    "playground.title": "Gemini CLI 演练场",
    "playground.subtitle": "在安全的交互环境中尝试 Gemini CLI 命令",
    "playground.examples": "示例",
    "playground.quickTips": "快速提示",
    "playground.features": "演练场功能",
    "playground.safeEnvironment": "安全环境",
    "playground.noApiKey": "无需 API 密钥",
    "playground.simulatedResponses": "模拟响应",
    "playground.copyOutput": "轻松复制输出",
    "playground.clearTerminal": "清空终端",
    "playground.runCommand": "运行命令",

    // Footer
    "footer.product": "产品",
    "footer.resources": "资源",
    "footer.community": "社区",
    "footer.legal": "法律",
    "footer.description": "学习和掌握Google Gemini CLI的最全面资源。自信地构建强大的AI应用程序。",

    // Common
    "common.loading": "加载中...",
    "common.error": "错误",
    "common.retry": "重试",
    "common.cancel": "取消",
    "common.save": "保存",
    "common.edit": "编辑",
    "common.delete": "删除",
    "common.share": "分享",
    "common.copy": "复制",
    "common.copied": "已复制！",
    "common.search": "搜索",
    "common.filter": "筛选",
    "common.sort": "排序",
    "common.viewAll": "查看全部",
    "common.showMore": "显示更多",
    "common.showLess": "显示更少",
  },
  ja: {
    // Navigation
    "nav.tutorials": "チュートリアル",
    "nav.docs": "ドキュメント",
    "nav.playground": "プレイグラウンド",
    "nav.community": "コミュニティ",
    "nav.blog": "ブログ",
    "nav.examples": "例",

    // Hero section
    "hero.badge": "新機能：Gemini CLI v2.0 リリース",
    "hero.title": "AI駆動の",
    "hero.description":
      "包括的なチュートリアル、ベストプラクティス、実践的な例を通じて、Google Gemini CLIを使用して強力なAIアプリケーションを構築する方法を学びます。",
    "hero.getStarted": "始める",
    "hero.tryDemo": "デモを試す",
    "hero.stats.tutorials": "チュートリアル",
    "hero.stats.downloads": "ダウンロード",
    "hero.stats.languages": "言語",

    // Add more Japanese translations...
    "tutorials.title": "注目のチュートリアル",
    "tutorials.subtitle": "Gemini CLIをマスターするためのステップバイステップガイド",
    "docs.title": "ドキュメント",
    "docs.subtitle": "Gemini CLIの完全なリファレンス",
    "community.title": "コミュニティに参加",
    "community.subtitle": "世界中の開発者とつながる",
    "playground.title": "Gemini CLI プレイグラウンド",
    "playground.subtitle": "安全でインタラクティブな環境でGemini CLIコマンドを試す",
  },
  ko: {
    // Navigation
    "nav.tutorials": "튜토리얼",
    "nav.docs": "문서",
    "nav.playground": "플레이그라운드",
    "nav.community": "커뮤니티",
    "nav.blog": "블로그",
    "nav.examples": "예제",

    // Hero section
    "hero.badge": "새로운 기능: Gemini CLI v2.0 출시",
    "hero.title": "AI 기반",
    "hero.description":
      "포괄적인 튜토리얼, 모범 사례 및 실습 예제를 통해 Google Gemini CLI를 사용하여 강력한 AI 애플리케이션을 구축하는 방법을 배우세요.",
    "hero.getStarted": "시작하기",
    "hero.tryDemo": "데모 체험",
    "hero.stats.tutorials": "튜토리얼",
    "hero.stats.downloads": "다운로드",
    "hero.stats.languages": "언어",

    // Add more Korean translations...
    "tutorials.title": "주요 튜토리얼",
    "tutorials.subtitle": "Gemini CLI 마스터를 위한 단계별 가이드",
    "docs.title": "문서",
    "docs.subtitle": "Gemini CLI 완전 참조",
    "community.title": "커뮤니티 참여",
    "community.subtitle": "전 세계 개발자들과 연결",
    "playground.title": "Gemini CLI 플레이그라운드",
    "playground.subtitle": "안전한 대화형 환경에서 Gemini CLI 명령어 체험",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
