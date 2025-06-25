import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini CLI Tutorials - Complete Learning Path",
  description:
    "Comprehensive tutorials for Gemini CLI from beginner to advanced. Learn installation, usage, best practices, and custom development.",
  keywords: "Gemini CLI tutorials, AI CLI guide, Google Gemini tutorial, command line AI, CLI documentation",
}

const tutorials = [
  {
    id: "getting-started",
    title: "Getting Started with Gemini CLI",
    description: "Learn the basics of installation, authentication, and your first AI-powered commands.",
    level: "Beginner",
    duration: "15 min",
    author: "Gemini Team",
    category: "Basics",
  },
  {
    id: "authentication",
    title: "Authentication & API Keys",
    description: "Complete guide to setting up authentication and managing API keys securely.",
    level: "Beginner",
    duration: "10 min",
    author: "Security Team",
    category: "Setup",
  },
  {
    id: "basic-commands",
    title: "Essential Commands",
    description: "Master the most important Gemini CLI commands for daily development work.",
    level: "Beginner",
    duration: "20 min",
    author: "Dev Team",
    category: "Commands",
  },
  {
    id: "advanced-prompting",
    title: "Advanced Prompting Techniques",
    description: "Learn how to craft effective prompts for better AI responses and code generation.",
    level: "Intermediate",
    duration: "30 min",
    author: "AI Expert",
    category: "Advanced",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Automate your development workflow with Gemini CLI scripts and integrations.",
    level: "Intermediate",
    duration: "45 min",
    author: "DevOps Team",
    category: "Automation",
  },
  {
    id: "custom-plugins",
    title: "Building Custom Plugins",
    description: "Create your own plugins to extend Gemini CLI functionality for specific use cases.",
    level: "Advanced",
    duration: "60 min",
    author: "Plugin Developer",
    category: "Development",
  },
]

const categories = ["All", "Basics", "Setup", "Commands", "Advanced", "Automation", "Development"]

export default function TutorialsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Gemini CLI Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master Gemini CLI with our comprehensive tutorials, from basic setup to advanced plugin development.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge
                  variant={
                    tutorial.level === "Beginner"
                      ? "default"
                      : tutorial.level === "Intermediate"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {tutorial.level}
                </Badge>
                <Badge variant="outline">{tutorial.category}</Badge>
              </div>
              <CardTitle className="text-xl">{tutorial.title}</CardTitle>
              <CardDescription className="text-base">{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-1" />
                  {tutorial.author}
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href={`/tutorials/${tutorial.id}`}>
                  Start Tutorial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
