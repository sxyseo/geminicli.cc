"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Copy, Check, RotateCcw } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function TerminalDemo() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [typingText, setTypingText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const commands = [
    {
      command: "npm install -g @google/gemini-cli",
      output: t("terminal.install.output"),
      description: t("terminal.install.description"),
    },
    {
      command: "gemini auth login",
      output: t("terminal.auth.output"),
      description: t("terminal.auth.description"),
    },
    {
      command: 'gemini generate "Create a React component"',
      output: t("terminal.generate.output"),
      description: t("terminal.generate.description"),
    },
    {
      command: "gemini chat --model gemini-pro",
      output: t("terminal.chat.output"),
      description: t("terminal.chat.description"),
    },
  ]

  const typeCommand = async (command: string) => {
    setIsTyping(true)
    setTypingText("")

    for (let i = 0; i <= command.length; i++) {
      setTypingText(command.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 50))
    }

    setIsTyping(false)
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const playDemo = async () => {
    setIsPlaying(true)
    setCurrentStep(0)

    for (let i = 0; i < commands.length; i++) {
      await typeCommand(commands[i].command)
      setCurrentStep(i + 1)
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    setIsPlaying(false)
  }

  const resetDemo = () => {
    setCurrentStep(0)
    setIsPlaying(false)
    setTypingText("")
    setIsTyping(false)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t("terminal.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {t("terminal.subtitle")}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={playDemo}
              disabled={isPlaying}
              className="btn-enhanced px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Play className="mr-2 h-4 w-4" />
              {isPlaying ? t("terminal.playing") : t("terminal.playDemo")}
            </Button>
            <Button onClick={resetDemo} variant="outline" className="btn-enhanced px-6 py-3">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black text-green-400 font-mono shadow-2xl border-0 overflow-hidden">
            <CardHeader className="pb-4 bg-gradient-to-r from-gray-800 to-gray-700">
              <CardTitle className="text-sm text-green-300 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div
                    className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Gemini CLI Terminal
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  className={`transition-all duration-500 ${index < currentStep ? "opacity-100" : "opacity-40"}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: index < currentStep ? 1 : 0.4, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between group">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <span className="text-cyan-400 font-bold">$</span>
                        <span className="ml-3 text-lg">
                          {index === currentStep - 1 && isTyping ? typingText : cmd.command}
                          {index === currentStep - 1 && isTyping && <span className="animate-pulse">|</span>}
                        </span>
                      </div>
                      {index < currentStep && (
                        <motion.div
                          className="text-gray-300 text-base mb-3 pl-6 bg-gray-800/50 p-4 rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5 }}
                        >
                          {cmd.output}
                        </motion.div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-700"
                      onClick={() => copyToClipboard(cmd.command, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  {index < currentStep && (
                    <motion.p
                      className="text-sm text-gray-500 mt-2 pl-6 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {cmd.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              {isPlaying && currentStep <= commands.length && (
                <motion.div
                  className="flex items-center text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400 mr-3"></div>
                  Processing...
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
