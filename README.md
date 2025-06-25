# Gemini CLI Tutorial Website 🚀

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.geminicli.cc)](https://www.geminicli.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

> 🌐 **Live Website**: [https://www.geminicli.cc/](https://www.geminicli.cc/)

**The most comprehensive resource for learning and mastering Google's Gemini CLI.** Build powerful AI applications with confidence through our extensive tutorials, documentation, and hands-on examples.

![Gemini CLI Website Screenshot](https://github.com/user/repo/blob/main/docs/images/website-preview.png)

## ✨ Features

### 🎯 **Comprehensive Learning Platform**
- **50+ Interactive Tutorials** - From beginner to advanced levels
- **Complete Documentation** - Installation, authentication, commands, and configuration
- **Hands-on Examples** - Real-world code samples and use cases
- **Best Practices** - Security, performance, and workflow optimization

### 🌍 **Multilingual Support**
- **12 Languages** supported with real-time switching
- **Localized Content** - Native language tutorials and documentation
- **Global Community** - Connect with developers worldwide

### 💻 **Interactive Experience**
- **Web-based Terminal** - Practice commands directly in your browser
- **Syntax Highlighting** - Beautiful code presentation with Prism.js
- **Auto-completion** - Smart suggestions for faster learning
- **Live Demos** - See Gemini CLI in action

### 🎨 **Modern Design**
- **Responsive Layout** - Perfect on desktop, tablet, and mobile
- **Dark/Light Mode** - Choose your preferred theme
- **Smooth Animations** - Powered by Framer Motion
- **Accessible UI** - WCAG compliant design

### ⚡ **High Performance**
- **Static Site Generation** - Lightning-fast page loads
- **CDN Distribution** - Global content delivery via Vercel
- **Optimized Images** - Next.js Image optimization
- **SEO Optimized** - Complete meta tags and sitemap

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0+ 
- **npm** 7.0+ or **yarn** 1.22+ or **pnpm** 8.0+
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/sxyseo/geminicli.cc.git
cd geminicli.cc

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Optional: Analytics and tracking
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Optional: Feature flags
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
NEXT_PUBLIC_FEATURE_COMMUNITY=true
```

## 📖 Website Sections

### 🏠 **Homepage**
- Hero section with feature highlights
- Interactive terminal demo
- Featured tutorials showcase
- Community statistics
- Call-to-action sections

### 📚 **Documentation**
Comprehensive guides covering:

#### **Installation Guide** (`/docs/installation`)
- System requirements for all platforms
- Package manager support (npm, yarn, pnpm, bun)
- Platform-specific instructions (Windows, macOS, Linux)
- Installation verification and troubleshooting

#### **Authentication Guide** (`/docs/authentication`)
- API key setup with Google AI Studio
- OAuth 2.0 configuration for teams
- Service account setup for production
- Security best practices
- Common authentication issues

#### **Commands Reference** (`/docs/commands`)
- Core commands (chat, ask, generate, analyze)
- File operations (review, explain, refactor)
- Configuration management
- Advanced features and batch processing
- Global options and help system

#### **Configuration Guide** (`/docs/configuration`)
- Configuration file setup and hierarchy
- Environment variables
- Configuration validation and migration
- Best practices and common mistakes

### 🎓 **Tutorials** (`/tutorials`)
Step-by-step learning paths:

- **Getting Started** - Basic installation and first commands
- **Advanced Usage** - Complex workflows and integrations
- **Custom Plugins** - Extending Gemini CLI functionality
- **Best Practices** - Production-ready configurations

### 🎮 **Playground** (`/playground`)
- Interactive terminal emulator
- Pre-loaded examples and demos
- Real-time command execution
- Shareable playground sessions

### 👥 **Community** (`/community`)
- Discord server integration
- GitHub repository links
- Community guidelines
- Contribution opportunities

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18](https://reactjs.org/)** - Latest React features

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations

### **Code & Content**
- **[Prism.js](https://prismjs.com/)** - Syntax highlighting
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark/light mode
- **Markdown Support** - Rich content rendering

### **Development & Deployment**
- **[Vercel](https://vercel.com/)** - Hosting and deployment
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 📁 Project Structure

```
geminicli.cc/
├── app/                          # Next.js App Router
│   ├── (root)/
│   │   ├── page.tsx             # Homepage
│   │   └── layout.tsx           # Root layout
│   ├── docs/                    # Documentation pages
│   │   ├── installation/        # Installation guide
│   │   ├── authentication/      # Auth setup guide
│   │   ├── commands/            # Commands reference
│   │   ├── configuration/       # Config guide
│   │   └── quick-start/         # Quick start guide
│   ├── tutorials/               # Tutorial pages
│   │   ├── getting-started/
│   │   ├── advanced-usage/
│   │   └── custom-plugins/
│   ├── playground/              # Interactive playground
│   ├── community/               # Community page
│   ├── api/                     # API routes
│   │   ├── sitemap/            # Sitemap generation
│   │   └── robots/             # Robots.txt
│   ├── globals.css             # Global styles
│   └── layout.tsx              # App layout
├── components/                  # Reusable components
│   ├── ui/                     # shadcn/ui components
│   ├── code-block.tsx          # Syntax highlighted code
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer component
│   ├── hero.tsx                # Homepage hero
│   ├── features.tsx            # Feature showcase
│   ├── terminal-demo.tsx       # Interactive terminal
│   └── ...                     # Other components
├── lib/                        # Utility functions
│   └── utils.ts               # Common utilities
├── public/                     # Static assets
│   ├── images/                # Website images
│   └── icons/                 # Icon files
├── styles/                     # Additional styles
├── hooks/                      # Custom React hooks
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### **Color Palette**
```css
/* Light Mode */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 222.2 47.4% 11.2%;
--secondary: 210 40% 98%;
--muted: 210 40% 96%;
--accent: 210 40% 94%;

/* Dark Mode */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 210 40% 98%;
--secondary: 217.2 32.6% 17.5%;
--muted: 217.2 32.6% 17.5%;
--accent: 217.2 32.6% 17.5%;
```

### **Typography**
- **Font Family**: Inter (system font stack)
- **Headings**: Font weights 600-800
- **Body**: Font weight 400-500
- **Code**: JetBrains Mono

### **Responsive Breakpoints**
```css
sm: 640px    /* Mobile large */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop small */
xl: 1280px   /* Desktop */
2xl: 1536px  /* Desktop large */
```

## 🚀 Deployment

### **Vercel (Recommended)**

The site is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### **Manual Deployment**

```bash
# Build the application
npm run build

# Export static files (if needed)
npm run export

# Serve locally to test
npm start
```

### **Environment Variables for Production**

```env
# Required for production
NEXT_PUBLIC_SITE_URL=https://www.geminicli.cc

# Optional analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Feature flags
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
```

## 📊 Performance Metrics

### **Core Web Vitals**
- **Largest Contentful Paint (LCP)**: < 1.2s
- **First Input Delay (FID)**: < 100ms  
- **Cumulative Layout Shift (CLS)**: < 0.1

### **Lighthouse Scores**
- **Performance**: 95+ 🟢
- **Accessibility**: 100 🟢
- **Best Practices**: 100 🟢
- **SEO**: 100 🟢

### **Bundle Analysis**
```bash
# Analyze bundle size
npm run analyze

# Check bundle composition
npx @next/bundle-analyzer
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Bug Reports** - Found an issue? Let us know!
- 💡 **Feature Requests** - Have ideas for improvements?
- 📝 **Documentation** - Help improve our guides
- 🌐 **Translations** - Add support for more languages
- 🎨 **Design** - Improve UI/UX and accessibility

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### **Code Style Guidelines**

- Use **TypeScript** for all new code
- Follow **ESLint** and **Prettier** configurations
- Write **descriptive commit messages**
- Add **tests** for new features
- Update **documentation** as needed

### **Content Guidelines**

- **Clear and concise** writing
- **Step-by-step** tutorials with examples
- **Code samples** should be tested and working
- **Screenshots** for visual guidance
- **Accessibility** considerations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **🌐 Website**: [https://www.geminicli.cc/](https://www.geminicli.cc/)
- **📚 Documentation**: [https://www.geminicli.cc/docs](https://www.geminicli.cc/docs)
- **🎓 Tutorials**: [https://www.geminicli.cc/tutorials](https://www.geminicli.cc/tutorials)
- **🎮 Playground**: [https://www.geminicli.cc/playground](https://www.geminicli.cc/playground)
- **💬 Discord Community**: [Join our Discord](https://discord.gg/gemini-cli)
- **📊 Vercel Analytics**: [Performance Dashboard](https://vercel.com/sxyseos-projects/geminicli.cc)

## 🙏 Acknowledgments

- **Google** - For creating the amazing Gemini CLI
- **Vercel** - For excellent hosting and deployment platform
- **shadcn** - For the beautiful UI component library
- **Community Contributors** - For tutorials, feedback, and improvements

---

<div align="center">
  <p>
    <strong>Built with ❤️ by the Gemini CLI community</strong>
  </p>
  <p>
    <a href="https://www.geminicli.cc/">Visit Website</a> • 
    <a href="https://www.geminicli.cc/docs">Documentation</a> • 
    <a href="https://www.geminicli.cc/tutorials">Tutorials</a> • 
    <a href="https://discord.gg/gemini-cli">Community</a>
  </p>
</div>
