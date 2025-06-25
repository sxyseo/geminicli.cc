import type { Metadata } from "next"
import { TerminalPlayground } from "@/components/terminal-playground"

export const metadata: Metadata = {
  title: "Gemini CLI Playground - Try It Online",
  description:
    "Interactive Gemini CLI playground. Try commands, experiment with AI prompts, and learn in a safe environment.",
  keywords: "Gemini CLI playground, online terminal, AI CLI demo, interactive tutorial",
}

export default function PlaygroundPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Gemini CLI Playground</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Try Gemini CLI commands in a safe, interactive environment. Perfect for learning and experimentation.
        </p>
      </div>

      <TerminalPlayground />
    </div>
  )
}
