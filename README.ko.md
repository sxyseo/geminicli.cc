# Gemini CLI 튜토리얼 웹사이트 🚀

[![웹사이트](https://img.shields.io/website?url=https%3A%2F%2Fwww.geminicli.cc)](https://www.geminicli.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/배포-Vercel-black?logo=vercel)](https://vercel.com/)

> 🌐 **공식 웹사이트**: [https://www.geminicli.cc/](https://www.geminicli.cc/)

**Google Gemini CLI를 학습하고 마스터하기 위한 가장 포괄적인 리소스입니다.** 광범위한 튜토리얼, 문서 및 실습 예제를 통해 강력한 AI 애플리케이션을 자신 있게 구축하세요.

![Gemini CLI 웹사이트 스크린샷](https://github.com/sxyseo/geminicli.cc/blob/main/docs/images/website-preview.png)

## 🌍 언어 버전

- [🇺🇸 English](README.md)
- [🇨🇳 简体中文](README.zh-CN.md)
- [🇯🇵 日本語](README.ja.md)
- [🇰🇷 한국어](README.ko.md) (현재)
- [🇪🇸 Español](README.es.md)
- [🇫🇷 Français](README.fr.md)
- [🇩🇪 Deutsch](README.de.md)
- [🇷🇺 Русский](README.ru.md)

## ✨ 주요 기능

### 🎯 **포괄적인 학습 플랫폼**
- **50개 이상의 인터랙티브 튜토리얼** - 초급자부터 고급자까지
- **완전한 문서** - 설치, 인증, 명령어, 구성 가이드
- **실습 예제** - 실제 코드 샘플과 사용 사례
- **모범 사례** - 보안, 성능, 워크플로우 최적화

### 🌍 **다국어 지원**
- **12개 언어** 실시간 전환 지원
- **현지화된 콘텐츠** - 네이티브 언어 튜토리얼과 문서
- **글로벌 커뮤니티** - 전 세계 개발자들과 연결

### 💻 **인터랙티브 경험**
- **웹 기반 터미널** - 브라우저에서 직접 명령어 연습
- **구문 강조** - Prism.js를 사용한 아름다운 코드 표시
- **자동 완성** - 더 빠른 학습을 위한 스마트 제안
- **라이브 데모** - Gemini CLI의 실제 작동 확인

### 🎨 **모던 디자인**
- **반응형 레이아웃** - 데스크톱, 태블릿, 모바일에서 완벽
- **다크/라이트 모드** - 선호하는 테마 선택
- **부드러운 애니메이션** - Framer Motion 구동
- **접근 가능한 UI** - WCAG 준수 디자인

### ⚡ **고성능**
- **정적 사이트 생성** - 번개같이 빠른 페이지 로딩
- **CDN 배포** - Vercel을 통한 글로벌 콘텐츠 배포
- **이미지 최적화** - Next.js 이미지 최적화
- **SEO 최적화** - 완전한 메타 태그와 사이트맵

## 🚀 빠른 시작

### 시스템 요구사항

- **Node.js** 18.0+ 
- **npm** 7.0+ 또는 **yarn** 1.22+ 또는 **pnpm** 8.0+
- **Git** 버전 관리

### 설치

```bash
# 리포지토리 클론
git clone https://github.com/sxyseo/geminicli.cc.git
cd geminicli.cc

# 의존성 설치
npm install
# 또는
yarn install
# 또는
pnpm install

# 개발 서버 시작
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

### 환경 설정

루트 디렉토리에 `.env.local` 파일 생성:

```env
# 선택사항: 분석 및 추적
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# 선택사항: 기능 플래그
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
NEXT_PUBLIC_FEATURE_COMMUNITY=true
```

## 🛠️ 기술 스택

### **프론트엔드 프레임워크**
- **[Next.js 14](https://nextjs.org/)** - App Router가 포함된 React 프레임워크
- **[TypeScript](https://www.typescriptlang.org/)** - 타입 안전 개발
- **[React 18](https://reactjs.org/)** - 최신 React 기능

### **스타일링 및 UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - 유틸리티 우선 CSS 프레임워크
- **[shadcn/ui](https://ui.shadcn.com/)** - 아름다운 컴포넌트 라이브러리
- **[Lucide React](https://lucide.dev/)** - 모던 아이콘 라이브러리
- **[Framer Motion](https://www.framer.com/motion/)** - 부드러운 애니메이션

### **개발 및 배포**
- **[Vercel](https://vercel.com/)** - 호스팅 및 배포
- **[ESLint](https://eslint.org/)** - 코드 린팅
- **[Prettier](https://prettier.io/)** - 코드 포맷팅

## 🚀 배포

### **Vercel (권장)**

사이트는 Vercel 배포에 최적화되어 있습니다:

```bash
# Vercel CLI 설치
npm i -g vercel

# 미리보기에 배포
vercel

# 프로덕션에 배포
vercel --prod
```

## 📊 성능 지표

### **Core Web Vitals**
- **Largest Contentful Paint (LCP)**: < 1.2초
- **First Input Delay (FID)**: < 100밀리초  
- **Cumulative Layout Shift (CLS)**: < 0.1

### **Lighthouse 점수**
- **성능**: 95+ 🟢
- **접근성**: 100 🟢
- **모범 사례**: 100 🟢
- **SEO**: 100 🟢

## 🤝 기여하기

커뮤니티의 기여를 환영합니다! 다음과 같은 방법으로 도움을 주실 수 있습니다:

### **기여 방법**
- 🐛 **버그 리포트** - 문제를 발견하셨나요? 알려주세요!
- 💡 **기능 요청** - 개선 아이디어가 있으신가요?
- 📝 **문서** - 가이드 개선에 도움을 주세요
- 🌐 **번역** - 더 많은 언어 지원 추가
- 🎨 **디자인** - UI/UX 및 접근성 개선

### **개발 워크플로우**

1. **리포지토리 포크**
2. **기능 브랜치 생성**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **변경사항 적용**
4. **테스트 및 린팅 실행**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **변경사항 커밋**
   ```bash
   git commit -m "놀라운 기능 추가"
   ```
6. **포크에 푸시**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **풀 리퀘스트 생성**

## 📄 라이선스

이 프로젝트는 **MIT 라이선스** 하에 라이선스가 부여됩니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🔗 링크

- **🌐 공식 웹사이트**: [https://www.geminicli.cc/](https://www.geminicli.cc/)
- **📚 문서**: [https://www.geminicli.cc/docs](https://www.geminicli.cc/docs)
- **🎓 튜토리얼**: [https://www.geminicli.cc/tutorials](https://www.geminicli.cc/tutorials)
- **🎮 플레이그라운드**: [https://www.geminicli.cc/playground](https://www.geminicli.cc/playground)
- **💬 Discord 커뮤니티**: [Discord에 참여](https://discord.gg/gemini-cli)
- **📊 Vercel 분석**: [성능 대시보드](https://vercel.com/sxyseos-projects/geminicli.cc)

## 🙏 감사의 말

- **Google** - 놀라운 Gemini CLI 제작
- **Vercel** - 우수한 호스팅 및 배포 플랫폼
- **shadcn** - 아름다운 UI 컴포넌트 라이브러리
- **커뮤니티 기여자들** - 튜토리얼, 피드백, 개선사항

---

<div align="center">
  <p>
    <strong>Gemini CLI 커뮤니티에서 ❤️로 제작</strong>
  </p>
  <p>
    <a href="https://www.geminicli.cc/">웹사이트 방문</a> • 
    <a href="https://www.geminicli.cc/docs">문서</a> • 
    <a href="https://www.geminicli.cc/tutorials">튜토리얼</a> • 
    <a href="https://discord.gg/gemini-cli">커뮤니티</a>
  </p>
</div> 