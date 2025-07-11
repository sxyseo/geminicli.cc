"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Sparkles, Zap, Code, Terminal } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Interactive cursor effect - only on desktop */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 hidden lg:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge with CSS animation - ALWAYS VISIBLE */}
          <div className="mb-6 sm:mb-8 hero-animate-1">
            <Badge 
              variant="secondary" 
              className="hero-badge hero-permanent-visible-inline px-4 sm:px-6 py-2 text-sm font-medium glass relative z-10 inline-flex items-center"
            >
              <Sparkles className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap font-semibold">
                {t("hero.badge")}
              </span>
            </Badge>
          </div>

          {/* Title with CSS animation - ALWAYS VISIBLE */}
          <h1 className="hero-text hero-permanent-visible hero-animate-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 sm:mb-8">
            <span className="hero-text hero-permanent-visible gradient-text-stable block font-extrabold">
              {t("hero.title")}
            </span>
            <span className="hero-text hero-permanent-visible block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
              Gemini CLI
            </span>
          </h1>

          {/* Description with CSS animation - ALWAYS VISIBLE */}
          <p className="hero-text hero-permanent-visible hero-animate-3 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            {t("hero.description")}
          </p>

          {/* Buttons with CSS animation */}
          <div className="hero-animate-4 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <Button
              size="lg"
              className="btn-enhanced px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25"
              asChild
            >
              <Link href="/tutorials/getting-started">
                <Zap className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                {t("hero.getStarted")}
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-enhanced px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold glass hover:bg-white/20 dark:hover:bg-black/20"
              asChild
            >
              <Link href="/playground">
                <Play className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                {t("hero.tryDemo")}
              </Link>
            </Button>
          </div>

          {/* Stats with CSS animation */}
          <div className="hero-animate-5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
            {[
              { icon: Code, value: "50+", label: t("hero.stats.tutorials") },
              { icon: Terminal, value: "10k+", label: t("hero.stats.downloads") },
              { icon: Star, value: "12", label: t("hero.stats.languages") },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-2xl glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="h-6 sm:h-8 w-6 sm:w-8 mx-auto mb-3 sm:mb-4 text-blue-600" />
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with CSS animation */}
      <div className="hero-animate-6 absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
