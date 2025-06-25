# Gemini CLI チュートリアルサイト 🚀

[![ウェブサイト](https://img.shields.io/website?url=https%3A%2F%2Fwww.geminicli.cc)](https://www.geminicli.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/デプロイ先-Vercel-black?logo=vercel)](https://vercel.com/)

> 🌐 **公式サイト**: [https://www.geminicli.cc/](https://www.geminicli.cc/)

**Google Gemini CLIを学習し、マスターするための最も包括的なリソースです。** 豊富なチュートリアル、ドキュメント、実践的な例を通じて、強力なAIアプリケーションを自信を持って構築できます。

![Gemini CLI ウェブサイトスクリーンショット](https://github.com/sxyseo/geminicli.cc/blob/main/docs/images/website-preview.png)

## 🌍 言語版

- [🇺🇸 English](README.md)
- [🇨🇳 简体中文](README.zh-CN.md)
- [🇯🇵 日本語](README.ja.md) (現在)
- [🇰🇷 한국어](README.ko.md)
- [🇪🇸 Español](README.es.md)
- [🇫🇷 Français](README.fr.md)
- [🇩🇪 Deutsch](README.de.md)
- [🇷🇺 Русский](README.ru.md)

## ✨ 主な機能

### 🎯 **包括的な学習プラットフォーム**
- **50以上のインタラクティブチュートリアル** - 初心者から上級者まで
- **完全なドキュメント** - インストール、認証、コマンド、設定ガイド
- **実践的な例** - 実世界のコードサンプルとユースケース
- **ベストプラクティス** - セキュリティ、パフォーマンス、ワークフロー最適化

### 🌍 **多言語サポート**
- **12言語**のリアルタイム切り替えサポート
- **ローカライズされたコンテンツ** - ネイティブ言語のチュートリアルとドキュメント
- **グローバルコミュニティ** - 世界中の開発者とつながる

### 💻 **インタラクティブな体験**
- **Web ベースターミナル** - ブラウザで直接コマンドを練習
- **シンタックスハイライト** - Prism.jsによる美しいコード表示
- **自動補完** - より速い学習のためのスマートな提案
- **ライブデモ** - Gemini CLIの実際の動作を確認

### 🎨 **モダンなデザイン**
- **レスポンシブレイアウト** - デスクトップ、タブレット、モバイルで完璧
- **ダーク/ライトモード** - お好みのテーマを選択
- **スムーズなアニメーション** - Framer Motionによる駆動
- **アクセシブルUI** - WCAG準拠のデザイン

### ⚡ **高パフォーマンス**
- **静的サイト生成** - 高速なページ読み込み
- **CDN配信** - Vercelによるグローバルコンテンツ配信
- **画像最適化** - Next.js画像最適化
- **SEO最適化** - 完全なメタタグとサイトマップ

## 🚀 クイックスタート

### 前提条件

- **Node.js** 18.0+ 
- **npm** 7.0+ または **yarn** 1.22+ または **pnpm** 8.0+
- **Git** バージョン管理

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/sxyseo/geminicli.cc.git
cd geminicli.cc

# 依存関係をインストール
npm install
# または
yarn install
# または
pnpm install

# 開発サーバーを起動
npm run dev
# または
yarn dev
# または
pnpm dev
```

### 環境設定

ルートディレクトリに `.env.local` ファイルを作成：

```env
# オプション：分析とトラッキング
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# オプション：機能フラグ
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
NEXT_PUBLIC_FEATURE_COMMUNITY=true
```

## 🛠️ テクノロジースタック

### **フロントエンドフレームワーク**
- **[Next.js 14](https://nextjs.org/)** - App Routerを使用したReactフレームワーク
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全な開発
- **[React 18](https://reactjs.org/)** - 最新のReact機能

### **スタイリングとUI**
- **[Tailwind CSS](https://tailwindcss.com/)** - ユーティリティファーストのCSSフレームワーク
- **[shadcn/ui](https://ui.shadcn.com/)** - 美しいコンポーネントライブラリ
- **[Lucide React](https://lucide.dev/)** - モダンなアイコンライブラリ
- **[Framer Motion](https://www.framer.com/motion/)** - スムーズなアニメーション

### **開発とデプロイ**
- **[Vercel](https://vercel.com/)** - ホスティングとデプロイ
- **[ESLint](https://eslint.org/)** - コードリンティング
- **[Prettier](https://prettier.io/)** - コードフォーマッティング

## 🚀 デプロイ

### **Vercel（推奨）**

サイトはVercelデプロイに最適化されています：

```bash
# Vercel CLIをインストール
npm i -g vercel

# プレビューにデプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

## 📊 パフォーマンスメトリクス

### **Core Web Vitals**
- **Largest Contentful Paint (LCP)**: < 1.2秒
- **First Input Delay (FID)**: < 100ミリ秒  
- **Cumulative Layout Shift (CLS)**: < 0.1

### **Lighthouseスコア**
- **パフォーマンス**: 95+ 🟢
- **アクセシビリティ**: 100 🟢
- **ベストプラクティス**: 100 🟢
- **SEO**: 100 🟢

## 🤝 貢献

コミュニティからの貢献を歓迎します！以下の方法でお手伝いいただけます：

### **貢献方法**
- 🐛 **バグレポート** - 問題を発見しましたか？お知らせください！
- 💡 **機能リクエスト** - 改善のアイデアはありますか？
- 📝 **ドキュメント** - ガイドの改善にご協力ください
- 🌐 **翻訳** - より多くの言語サポートを追加
- 🎨 **デザイン** - UI/UXとアクセシビリティの向上

### **開発ワークフロー**

1. **リポジトリをフォーク**
2. **機能ブランチを作成**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **変更を加える**
4. **テストとリンティングを実行**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **変更をコミット**
   ```bash
   git commit -m "素晴らしい機能を追加"
   ```
6. **フォークにプッシュ**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **プルリクエストを作成**

## 📄 ライセンス

このプロジェクトは **MITライセンス** の下でライセンスされています - 詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 🔗 リンク

- **🌐 公式サイト**: [https://www.geminicli.cc/](https://www.geminicli.cc/)
- **📚 ドキュメント**: [https://www.geminicli.cc/docs](https://www.geminicli.cc/docs)
- **🎓 チュートリアル**: [https://www.geminicli.cc/tutorials](https://www.geminicli.cc/tutorials)
- **🎮 プレイグラウンド**: [https://www.geminicli.cc/playground](https://www.geminicli.cc/playground)
- **💬 Discordコミュニティ**: [Discordに参加](https://discord.gg/gemini-cli)
- **📊 Vercel分析**: [パフォーマンスダッシュボード](https://vercel.com/sxyseos-projects/geminicli.cc)

## 🙏 謝辞

- **Google** - 素晴らしいGemini CLIを作成
- **Vercel** - 優れたホスティングとデプロイプラットフォーム
- **shadcn** - 美しいUIコンポーネントライブラリ
- **コミュニティ貢献者** - チュートリアル、フィードバック、改善

---

<div align="center">
  <p>
    <strong>Gemini CLIコミュニティによって❤️で構築</strong>
  </p>
  <p>
    <a href="https://www.geminicli.cc/">サイトを訪問</a> • 
    <a href="https://www.geminicli.cc/docs">ドキュメント</a> • 
    <a href="https://www.geminicli.cc/tutorials">チュートリアル</a> • 
    <a href="https://discord.gg/gemini-cli">コミュニティ</a>
  </p>
</div> 