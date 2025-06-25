import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Book, Code, Wrench, HelpCircle, FileText, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini CLI Documentation - Complete Reference Guide",
  description:
    "Comprehensive documentation for Gemini CLI including API reference, guides, examples, and troubleshooting.",
  keywords: "Gemini CLI docs, API reference, CLI documentation, Google Gemini guide, command reference",
}

const docSections = [
  {
    title: "Quick Start",
    description: "Get up and running with Gemini CLI in minutes",
    icon: Zap,
    href: "/docs/quick-start",
    badge: "Popular",
    items: ["Installation Guide", "Authentication Setup", "First Commands", "Basic Configuration"],
  },
  {
    title: "API Reference",
    description: "Complete reference for all CLI commands and options",
    icon: Code,
    href: "/docs/api-reference",
    badge: "Complete",
    items: ["Command Reference", "Configuration Options", "Environment Variables", "Exit Codes"],
  },
  {
    title: "Guides",
    description: "In-depth guides for advanced usage and best practices",
    icon: Book,
    href: "/docs/guides",
    badge: "Detailed",
    items: ["Advanced Prompting", "Workflow Integration", "Custom Plugins", "Performance Optimization"],
  },
  {
    title: "Examples",
    description: "Real-world examples and use cases",
    icon: FileText,
    href: "/docs/examples",
    badge: "Practical",
    items: ["Code Generation", "Documentation Automation", "Code Review", "Data Analysis"],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and solutions",
    icon: Wrench,
    href: "/docs/troubleshooting",
    badge: "Helpful",
    items: ["Installation Issues", "Authentication Problems", "Performance Issues", "Error Messages"],
  },
  {
    title: "FAQ",
    description: "Frequently asked questions and answers",
    icon: HelpCircle,
    href: "/docs/faq",
    badge: "Updated",
    items: ["General Questions", "Technical Issues", "Billing & Limits", "Security & Privacy"],
  },
]

const popularDocs = [
  {
    title: "Installation & Setup",
    description: "Complete installation guide for all platforms",
    href: "/docs/installation",
    category: "Getting Started",
  },
  {
    title: "Authentication Guide",
    description: "How to authenticate and manage API keys",
    href: "/docs/authentication",
    category: "Setup",
  },
  {
    title: "Command Reference",
    description: "Complete list of all available commands",
    href: "/docs/commands",
    category: "Reference",
  },
  {
    title: "Configuration Options",
    description: "Customize Gemini CLI for your workflow",
    href: "/docs/configuration",
    category: "Configuration",
  },
]

export default function DocsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Everything you need to know about Gemini CLI, from basic usage to advanced integrations.
        </p>

        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documentation..." className="pl-10" />
        </div>
      </div>

      {/* Main Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {docSections.map((section) => (
          <Card key={section.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <section.icon className="h-8 w-8 text-primary" />
                <Badge variant="secondary">{section.badge}</Badge>
              </div>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <CardDescription className="text-base">{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href={section.href}>Explore {section.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popular Documentation */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularDocs.map((doc) => (
            <Card key={doc.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">
                      {doc.category}
                    </Badge>
                    <h3 className="font-semibold mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={doc.href}>Read More →</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" asChild className="h-auto p-4 flex-col">
            <Link href="/docs/changelog">
              <FileText className="h-6 w-6 mb-2" />
              Changelog
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto p-4 flex-col">
            <Link href="/docs/migration">
              <Code className="h-6 w-6 mb-2" />
              Migration Guide
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto p-4 flex-col">
            <Link href="/docs/contributing">
              <Book className="h-6 w-6 mb-2" />
              Contributing
            </Link>
          </Button>
          <Button variant="outline" asChild className="h-auto p-4 flex-col">
            <Link href="/docs/support">
              <HelpCircle className="h-6 w-6 mb-2" />
              Support
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
