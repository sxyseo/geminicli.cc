import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Code,
  Terminal,
  Settings,
  Zap,
  Users,
  ArrowRight,
  Star,
  Download,
  GitBranch,
  Search,
  HelpCircle,
  Layers,
  Shield,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Documentation - Gemini CLI Complete Guide",
  description:
    "Comprehensive documentation for Gemini CLI including installation, configuration, commands, and advanced usage patterns.",
  keywords: "Gemini CLI documentation, API reference, commands, configuration, advanced guide",
}

export default function DocsPage() {
  const quickStartSections = [
    {
      title: "Installation",
      description: "Get Gemini CLI up and running in minutes",
      icon: Download,
      href: "/docs/installation",
      color: "bg-blue-500",
    },
    {
      title: "Authentication",
      description: "Set up secure access to Gemini API",
      icon: Shield,
      href: "/docs/authentication",
      color: "bg-green-500",
    },
    {
      title: "First Commands",
      description: "Run your first AI-powered commands",
      icon: Terminal,
      href: "/docs/commands",
      color: "bg-purple-500",
    },
    {
      title: "Configuration",
      description: "Customize CLI behavior and preferences",
      icon: Settings,
      href: "/docs/configuration",
      color: "bg-orange-500",
    },
  ]

  const features = [
    {
      title: "Code Generation",
      description: "Generate high-quality code in multiple programming languages",
      icon: Code,
      examples: ["Create React components", "Generate API endpoints", "Write unit tests"],
    },
    {
      title: "Code Analysis",
      description: "Analyze existing codebases for improvements and insights",
      icon: Search,
      examples: ["Security analysis", "Performance optimization", "Code quality review"],
    },
    {
      title: "Interactive Chat",
      description: "Have natural conversations about your code and projects",
      icon: Users,
      examples: ["Ask coding questions", "Get explanations", "Brainstorm solutions"],
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive development tasks",
      icon: Zap,
      examples: ["Git commit messages", "Documentation generation", "Code refactoring"],
    },
  ]

  const apiSections = [
    {
      title: "Core Commands",
      description: "Essential commands for daily development",
      commands: ["generate", "analyze", "chat", "help"],
      icon: Terminal,
    },
    {
      title: "Configuration",
      description: "Customize and configure your CLI experience",
      commands: ["config", "auth", "profile", "theme"],
      icon: Settings,
    },
    {
      title: "Advanced Features",
      description: "Power user features and integrations",
      commands: ["batch", "pipeline", "webhook", "plugin"],
      icon: Layers,
    },
  ]

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Complete Documentation
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gemini CLI Documentation
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about using Gemini CLI effectively. From basic commands to advanced automation workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-3">
              <Link href="/docs/quick-start">
                <Rocket className="mr-2 h-5 w-5" />
                Quick Start Guide
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-3">
              <Link href="/tutorials/getting-started">
                <Star className="mr-2 h-5 w-5" />
                Interactive Tutorial
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Start Cards */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSections.map((section, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" asChild className="w-full justify-between">
                    <Link href={section.href}>
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Core Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful capabilities that make Gemini CLI an essential tool for modern development workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Examples:</p>
                    {feature.examples.map((example, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* API Reference */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">API Reference</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete reference for all commands, options, and configuration settings.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {apiSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <section.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {section.commands.map((command, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <code className="text-sm font-mono">{command}</code>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/docs/commands/${command}`}>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-16" />

        {/* Example Usage */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Example Usage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See Gemini CLI in action with real-world examples and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Code Generation</h3>
              <CodeBlock
                language="bash"
                code={`# Generate a React component
gemini generate "Create a responsive login form component with validation"

# Generate API endpoints
gemini generate "Create a REST API for user management with CRUD operations"

# Generate tests
gemini generate "Write unit tests for the user service class" --file user.service.js`}
                title="Code Generation Examples"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Code Analysis</h3>
              <CodeBlock
                language="bash"
                code={`# Analyze a single file
gemini analyze --file src/components/UserForm.tsx

# Analyze git changes
gemini analyze --git-diff

# Security analysis
gemini analyze --security --directory src/`}
                title="Code Analysis Examples"
              />
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We're here to help you get the most out of Gemini CLI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tutorials">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Tutorials
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/google/gemini-cli" target="_blank" rel="noopener noreferrer">
                  <GitBranch className="mr-2 h-5 w-5" />
                  GitHub Repository
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
