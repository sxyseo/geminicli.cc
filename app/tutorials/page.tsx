import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Clock, User, BookOpen, Zap, Code } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tutorials - Gemini CLI Learning Hub",
  description: "Comprehensive tutorials for mastering Gemini CLI - from beginner basics to advanced usage patterns.",
  keywords: "Gemini CLI tutorials, AI CLI learning, Google Gemini guide, development tutorials",
}

export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with Gemini CLI",
      description: "Learn the basics of installation, authentication, and your first AI-powered commands.",
      level: "Beginner",
      duration: "15 minutes",
      author: "Gemini Team",
      href: "/tutorials/getting-started",
      icon: BookOpen,
      color: "bg-green-500",
    },
    {
      title: "Advanced Usage Patterns",
      description: "Explore complex workflows, custom prompts, and integration with development tools.",
      level: "Advanced",
      duration: "45 minutes", 
      author: "Expert Developer",
      href: "/tutorials/advanced-usage",
      icon: Zap,
      color: "bg-orange-500",
    },
    {
      title: "Building Custom Plugins",
      description: "Create your own plugins to extend Gemini CLI functionality for specific use cases.",
      level: "Expert",
      duration: "60 minutes",
      author: "Plugin Developer",
      href: "/tutorials/custom-plugins", 
      icon: Code,
      color: "bg-purple-500",
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
              Learning Hub
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Gemini CLI Tutorials
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Master AI-powered development with our comprehensive tutorials. From basic setup to advanced automation workflows.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tutorials..." className="pl-10" />
          </div>
        </div>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${tutorial.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tutorial.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={tutorial.level === "Beginner" ? "default" : tutorial.level === "Advanced" ? "secondary" : "destructive"}>
                    {tutorial.level}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tutorial.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-3 w-3 mr-1" />
                    {tutorial.author}
                  </div>
                </div>
                <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                  <Link href={tutorial.href}>
                    Start Tutorial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">More Tutorials Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new content to help you master every aspect of Gemini CLI development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <h3 className="font-semibold mb-2">API Integration</h3>
                <p className="text-sm text-muted-foreground">Connect external services and APIs</p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <h3 className="font-semibold mb-2">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">Optimize for large codebases</p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">Share configs and workflows</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
