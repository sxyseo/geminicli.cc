import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Clock,
  User,
  ArrowLeft,
  Code,
  Settings,
  FileText,
  GitBranch,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { TutorialProgress } from "@/components/tutorial-progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Advanced Usage - Gemini CLI Tutorial",
  description:
    "Master advanced Gemini CLI techniques including complex prompting, workflow automation, and custom configurations.",
  keywords: "Gemini CLI advanced, complex prompting, workflow automation, CLI configuration, advanced tutorial",
}

export default function AdvancedUsageTutorial() {
  const steps = [
    { id: "complex-prompting", title: "Complex Prompting", completed: false },
    { id: "workflow-automation", title: "Workflow Automation", completed: false },
    { id: "configuration", title: "Configuration", completed: false },
    { id: "batch-processing", title: "Batch Processing", completed: false },
    { id: "integration", title: "Integration", completed: false },
  ]

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/tutorials">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tutorials
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              Advanced
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              45 minutes
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-1" />
              Expert Level
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Advanced Usage Patterns
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Explore complex workflows, custom prompts, and integration with development tools to maximize your
            productivity with Gemini CLI.
          </p>

          <TutorialProgress steps={steps} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Prerequisites */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
              <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 mr-3 text-green-500" />
                  Prerequisites
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Completed the Getting Started tutorial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Familiar with basic CLI commands</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Understanding of development workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Separator />

            {/* Complex Prompting */}
            <section id="complex-prompting">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Complex Prompting Techniques</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Learn how to craft sophisticated prompts that produce better, more targeted results from Gemini CLI.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-500" />
                    Multi-step Prompts
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Break complex tasks into multiple steps for better results:
                  </p>
                  <CodeBlock
                    language="bash"
                    code={`gemini generate "
Step 1: Create a React component for user authentication
Step 2: Include form validation with error handling
Step 3: Add loading states and success feedback
Step 4: Make it responsive for mobile devices
Step 5: Include TypeScript types and JSDoc comments
"`}
                    title="Multi-step Code Generation"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-purple-500" />
                    Context-aware Prompts
                  </h3>
                  <p className="text-muted-foreground mb-4">Provide context for more accurate results:</p>
                  <CodeBlock
                    language="bash"
                    code={`gemini generate --context "Next.js 14 app with TypeScript and Tailwind CSS" "
Create a server action for handling form submissions with:
- Input validation using Zod
- Database operations with Prisma
- Error handling and logging
"`}
                    title="Context-aware Generation"
                  />
                </div>
              </div>

              <Alert className="mt-6">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                  The more specific and detailed your prompts, the better the results. Include examples, constraints,
                  and desired output format.
                </AlertDescription>
              </Alert>
            </section>

            <Separator />

            {/* Configuration */}
            <section id="configuration">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Advanced Configuration</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Customize Gemini CLI behavior with advanced configuration options and profiles.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Global Configuration</h3>
                  <p className="text-muted-foreground mb-4">
                    Create a global configuration with custom profiles and settings.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Integration */}
            <section id="integration">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Development Integration</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Integrate Gemini CLI with your existing development workflow and tools.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <GitBranch className="h-5 w-5 mr-2 text-blue-500" />
                    Git Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">Automate code review and commit message generation:</p>
                  <CodeBlock
                    language="bash"
                    code={`# Analyze git diff and generate commit message
gemini analyze --git-diff
gemini generate "Create a conventional commit message for these changes"`}
                    title="Git Workflow Integration"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Reference</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Commands</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li><code>gemini generate --profile dev</code></li>
                      <li><code>gemini analyze --git-diff</code></li>
                      <li><code>gemini config set profile</code></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
