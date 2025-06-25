import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gemini CLI Tutorial - Complete Guide & Documentation",
  description:
    "Learn Gemini CLI with comprehensive tutorials, best practices, and advanced development guides. Master AI-powered command line tools.",
  keywords: "Gemini CLI, AI CLI, Google Gemini, Command Line, Tutorial, Documentation, API, Development",
  authors: [{ name: "Gemini CLI Team" }],
  openGraph: {
    title: "Gemini CLI Tutorial - Complete Guide & Documentation",
    description: "Learn Gemini CLI with comprehensive tutorials, best practices, and advanced development guides.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ja_JP", "ko_KR", "es_ES", "fr_FR", "de_DE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini CLI Tutorial",
    description: "Master AI-powered command line tools with our comprehensive guide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://gemini-cli-tutorial.com" />
        <link rel="alternate" hrefLang="en" href="https://gemini-cli-tutorial.com/en" />
        <link rel="alternate" hrefLang="zh" href="https://gemini-cli-tutorial.com/zh" />
        <link rel="alternate" hrefLang="ja" href="https://gemini-cli-tutorial.com/ja" />
        <link rel="alternate" hrefLang="ko" href="https://gemini-cli-tutorial.com/ko" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gemini CLI Tutorial",
              url: "https://gemini-cli-tutorial.com",
              description: "Comprehensive Gemini CLI tutorials and documentation",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://gemini-cli-tutorial.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 w-full">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
