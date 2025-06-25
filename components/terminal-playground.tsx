"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Play, RotateCcw, Copy, Check } from "lucide-react"

interface TerminalLine {
  type: "command" | "output" | "error"
  content: string
  timestamp: Date
}

export function TerminalPlayground() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: "Welcome to Gemini CLI Playground! Try some commands below.",
      timestamp: new Date(),
    },
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const exampleCommands = {
    basic: ["gemini --help", "gemini --version", "gemini auth status"],
    generation: [
      'gemini generate "Hello world in Python"',
      'gemini generate "React component for user profile"',
      'gemini generate "SQL query to find top customers"',
    ],
    analysis: ["gemini analyze --file example.js", "gemini analyze --directory ./src", "gemini review --file app.py"],
    chat: [
      'gemini chat "Explain recursion"',
      'gemini chat "Best practices for API design"',
      "gemini chat --model gemini-pro",
    ],
  }

  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const simulateCommand = async (command: string) => {
    setIsProcessing(true)

    // Add command to terminal
    setLines((prev) => [
      ...prev,
      {
        type: "command",
        content: `$ ${command}`,
        timestamp: new Date(),
      },
    ])

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    // Generate mock response based on command
    let response = ""
    let responseType: "output" | "error" = "output"

    if (command.includes("--help")) {
      response = `Gemini CLI v2.0.0

Usage: gemini [command] [options]

Commands:
  auth      Manage authentication
  generate  Generate code or content
  chat      Interactive chat mode
  analyze   Analyze files or code

Options:
  --help    Show help
  --version Show version`
    } else if (command.includes("auth status")) {
      response = "✓ Authenticated as user@example.com\n✓ API quota: 1000/1000 requests remaining"
    } else if (command.includes("generate")) {
      response = `# Generated Python Hello World

print("Hello, World!")

# This is a simple Python program that prints "Hello, World!" to the console.
# It's often used as a first program when learning a new programming language.`
    } else if (command.includes("chat")) {
      response = `Recursion is a programming technique where a function calls itself to solve a problem.

Key components:
1. Base case: A condition that stops the recursion
2. Recursive case: The function calling itself with modified parameters

Example in Python:
def factorial(n):
    if n <= 1:  # Base case
        return 1
    return n * factorial(n - 1)  # Recursive case`
    } else if (command.includes("analyze")) {
      response = `Analysis of example.js:

✓ Syntax: Valid JavaScript
✓ Complexity: Low (Cyclomatic complexity: 3)
✓ Performance: Good
⚠ Suggestions: Consider adding error handling
⚠ Security: No issues found

Lines of code: 45
Functions: 3
Variables: 8`
    } else {
      response = `Command not recognized: ${command}`
      responseType = "error"
    }

    setLines((prev) => [
      ...prev,
      {
        type: responseType,
        content: response,
        timestamp: new Date(),
      },
    ])

    setIsProcessing(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentCommand.trim() && !isProcessing) {
      simulateCommand(currentCommand.trim())
      setCurrentCommand("")
      setCommandHistory((prev) => [...prev, currentCommand.trim()])
      setHistoryIndex(-1)
    }
  }

  const clearTerminal = () => {
    setLines([
      {
        type: "output",
        content: "Terminal cleared. Welcome back to Gemini CLI Playground!",
        timestamp: new Date(),
      },
    ])
  }

  const copyToClipboard = async (content: string) => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > -1) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentCommand(newIndex === -1 ? "" : commandHistory[commandHistory.length - 1 - newIndex])
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Terminal */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-muted-foreground flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  Gemini CLI Playground
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={clearTerminal}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <div ref={terminalRef} className="flex-1 bg-black text-green-400 font-mono text-sm p-4 overflow-y-auto">
                {lines.map((line, index) => (
                  <div key={index} className="mb-2 group">
                    <div
                      className={`${
                        line.type === "command"
                          ? "text-blue-400"
                          : line.type === "error"
                            ? "text-red-400"
                            : "text-green-400"
                      }`}
                    >
                      {line.content.split("\n").map((text, i) => (
                        <div key={i}>{text}</div>
                      ))}
                    </div>
                    {line.type === "output" && line.content.length > 50 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 h-6 px-2 text-xs"
                        onClick={() => copyToClipboard(line.content)}
                      >
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    )}
                  </div>
                ))}
                {isProcessing && <div className="text-yellow-400 animate-pulse">Processing...</div>}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t bg-muted/50">
                <div className="flex space-x-2">
                  <div className="flex-1 flex items-center space-x-2 bg-black text-green-400 font-mono px-3 py-2 rounded">
                    <span className="text-blue-400">$</span>
                    <Input
                      value={currentCommand}
                      onChange={(e) => setCurrentCommand(e.target.value)}
                      placeholder="Enter a command..."
                      className="bg-transparent border-0 text-green-400 placeholder:text-green-600 focus-visible:ring-0 flex-1"
                      disabled={isProcessing}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <Button type="submit" disabled={isProcessing || !currentCommand.trim()}>
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Examples and Help */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Example Commands</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(exampleCommands).map(([category, commands]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold mb-1">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {commands.map((cmd, index) => (
                    <div key={index} className="group">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left font-mono text-sm h-auto p-2"
                        onClick={() => setCurrentCommand(cmd)}
                      >
                        <span className="text-blue-600 mr-2">$</span>
                        {cmd}
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-2">
                <Badge variant="secondary" className="mt-0.5">
                  Tip
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Use <code className="bg-muted px-1 rounded">--help</code> with any command to see available options
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Badge variant="secondary" className="mt-0.5">
                  Tip
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Try different prompts with the <code className="bg-muted px-1 rounded">generate</code> command
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Badge variant="secondary" className="mt-0.5">
                  Tip
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Use <code className="bg-muted px-1 rounded">chat</code> for interactive conversations
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Playground Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Safe environment</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No API key required</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Simulated responses</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Copy output easily</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
