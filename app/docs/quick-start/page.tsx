import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Terminal,
  Zap,
  Download,
  Key,
  Code,
  BookOpen,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Quick Start - Gemini CLI Documentation",
  description: "Get up and running with Gemini CLI in minutes. Installation, authentication, and first commands.",
  keywords: "Gemini CLI quick start, installation guide, setup tutorial, getting started",
}

export default function QuickStartPage() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <span className="text-foreground">Quick Start</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Quick Start
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get Started with Gemini CLI
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get up and running with Gemini CLI in just a few minutes. This guide will walk you through installation, 
            authentication, and your first AI-powered commands.
          </p>
        </div>

        {/* Time Estimate */}
        <Card className="mb-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="flex items-center gap-3 pt-6">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Estimated time: 5-10 minutes</span>
          </CardContent>
        </Card>

        {/* Prerequisites Alert */}
        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Prerequisites:</strong> Node.js 16+ and npm/yarn installed on your system.
          </AlertDescription>
        </Alert>

        {/* Step 1: Installation */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              1
            </div>
            <h2 className="text-2xl font-bold">Installation</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Install via npm
              </h3>
              <CodeBlock
                language="bash"
                code={`# Install globally
npm install -g @google/gemini-cli

# Or using yarn
yarn global add @google/gemini-cli`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Verify Installation</h3>
              <CodeBlock
                language="bash"
                code={`gemini --version`}
              />
              <p className="text-sm text-muted-foreground mt-2">
                This should output the installed version number.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Step 2: Authentication */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              2
            </div>
            <h2 className="text-2xl font-bold">Authentication</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Key className="h-5 w-5" />
                Set up API Access
              </h3>
              <p className="text-muted-foreground mb-4">
                You'll need a Google AI Studio API key to use Gemini CLI.
              </p>
              
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Go to <a href="https://makersuite.google.com/app/apikey" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google AI Studio</a></li>
                  <li>Click "Create API Key"</li>
                  <li>Copy your API key</li>
                </ol>
              </div>

              <CodeBlock
                language="bash"
                code={`# Authenticate with your API key
gemini auth login

# Or set environment variable
export GEMINI_API_KEY="your-api-key-here"`}
              />
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Step 3: First Commands */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              3
            </div>
            <h2 className="text-2xl font-bold">Your First Commands</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                Basic Chat
              </h3>
              <CodeBlock
                language="bash"
                code={`# Start an interactive chat session
gemini chat

# Or ask a single question
gemini ask "Explain how JavaScript closures work"`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Code Generation
              </h3>
              <CodeBlock
                language="bash"
                code={`# Generate a React component
gemini generate --type component --name Button

# Generate from a prompt
gemini generate "Create a Python function to calculate fibonacci"`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">File Analysis</h3>
              <CodeBlock
                language="bash"
                code={`# Analyze a code file
gemini analyze src/components/Button.jsx

# Get suggestions for improvements
gemini review --file src/utils/helpers.js`}
              />
            </div>
          </div>
        </section>

        {/* Success Card */}
        <Card className="mb-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              You're All Set!
            </CardTitle>
            <CardDescription className="text-green-600 dark:text-green-300">
              Congratulations! You've successfully installed and configured Gemini CLI. 
              You're ready to start building AI-powered applications.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learn the Basics
                </CardTitle>
                <CardDescription>
                  Follow our comprehensive getting started tutorial.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/tutorials/getting-started">
                    Start Tutorial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Explore Examples
                </CardTitle>
                <CardDescription>
                  See real-world examples and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/docs">
                    View Examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t">
          <Button variant="outline" asChild>
            <Link href="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Docs
            </Link>
          </Button>
          <Button asChild>
            <Link href="/tutorials/getting-started">
              Getting Started Tutorial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
