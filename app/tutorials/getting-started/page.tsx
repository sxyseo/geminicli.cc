import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Clock, User, ArrowLeft, ArrowRight, Terminal, Download, Key, Zap } from "lucide-react"
import Link from "next/link"
import { TutorialNavigation } from "@/components/tutorial-navigation"
import { CodeBlock } from "@/components/code-block"
import { TutorialProgress } from "@/components/tutorial-progress"

export const metadata: Metadata = {
  title: "Getting Started with Gemini CLI - Complete Beginner Guide",
  description:
    "Learn how to install, configure, and use Gemini CLI from scratch. Step-by-step tutorial for beginners with practical examples.",
  keywords: "Gemini CLI installation, getting started, beginner tutorial, AI CLI setup, Google Gemini",
}

export default function GettingStartedTutorial() {
  const steps = [
    { id: "installation", title: "Installation", completed: false },
    { id: "authentication", title: "Authentication", completed: false },
    { id: "first-command", title: "First Command", completed: false },
    { id: "basic-usage", title: "Basic Usage", completed: false },
    { id: "next-steps", title: "Next Steps", completed: false },
  ]

  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/tutorials">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tutorials
          </Link>
        </Button>

        <div className="flex items-center gap-4 mb-6">
          <Badge variant="default">Beginner</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            15 minutes
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-4 w-4 mr-1" />
            Gemini Team
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">Getting Started with Gemini CLI</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn the basics of installation, authentication, and your first AI-powered commands with Gemini CLI.
        </p>

        <TutorialProgress steps={steps} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Prerequisites */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Node.js 16+ installed on your system
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Basic familiarity with command line
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Google account for authentication
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* What You'll Learn */}
          <Card>
            <CardHeader>
              <CardTitle>What You'll Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Zap className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  How to install Gemini CLI globally
                </li>
                <li className="flex items-start">
                  <Key className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  Setting up authentication with Google
                </li>
                <li className="flex items-start">
                  <Terminal className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  Running your first AI-powered commands
                </li>
                <li className="flex items-start">
                  <Download className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                  Understanding basic CLI options and flags
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator />

          {/* Step 1: Installation */}
          <section id="installation">
            <h2 className="text-2xl font-bold mb-4">Step 1: Installation</h2>
            <p className="text-muted-foreground mb-6">
              First, let's install Gemini CLI globally using npm. This will make the <code>gemini</code> command
              available system-wide.
            </p>

            <CodeBlock language="bash" code="npm install -g @google/gemini-cli" title="Install Gemini CLI" />

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> You might need to use <code>sudo</code> on macOS/Linux if you encounter
                permission errors.
              </p>
            </div>

            <p className="mt-4 text-muted-foreground">Verify the installation by checking the version:</p>

            <CodeBlock language="bash" code="gemini --version" title="Verify Installation" />
          </section>

          <Separator />

          {/* Step 2: Authentication */}
          <section id="authentication">
            <h2 className="text-2xl font-bold mb-4">Step 2: Authentication</h2>
            <p className="text-muted-foreground mb-6">
              Before using Gemini CLI, you need to authenticate with your Google account. This process will open your
              browser and guide you through the OAuth flow.
            </p>

            <CodeBlock language="bash" code="gemini auth login" title="Authenticate with Google" />

            <div className="mt-4 space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm">
                  <strong>Success!</strong> After authentication, you'll see a confirmation message with your account
                  details.
                </p>
              </div>

              <p className="text-muted-foreground">You can check your authentication status anytime:</p>

              <CodeBlock language="bash" code="gemini auth status" title="Check Auth Status" />
            </div>
          </section>

          <Separator />

          {/* Step 3: First Command */}
          <section id="first-command">
            <h2 className="text-2xl font-bold mb-4">Step 3: Your First Command</h2>
            <p className="text-muted-foreground mb-6">
              Now let's run your first Gemini CLI command. We'll use the <code>generate</code> command to create some
              code.
            </p>

            <CodeBlock
              language="bash"
              code='gemini generate "Create a simple Hello World function in Python"'
              title="Generate Code"
            />

            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm font-medium mb-2">Expected Output:</p>
              <CodeBlock
                language="python"
                code={`def hello_world():
    """
    A simple function that prints Hello World
    """
    print("Hello, World!")

# Call the function
hello_world()`}
                title="Generated Python Code"
              />
            </div>
          </section>

          <Separator />

          {/* Step 4: Basic Usage */}
          <section id="basic-usage">
            <h2 className="text-2xl font-bold mb-4">Step 4: Basic Usage Patterns</h2>
            <p className="text-muted-foreground mb-6">
              Let's explore some common usage patterns and commands you'll use frequently.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Interactive Chat Mode</h3>
                <p className="text-muted-foreground mb-3">Start an interactive conversation with Gemini:</p>
                <CodeBlock language="bash" code="gemini chat" title="Start Chat Session" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Analyze Files</h3>
                <p className="text-muted-foreground mb-3">Analyze and get insights about your code files:</p>
                <CodeBlock language="bash" code="gemini analyze --file ./src/app.js" title="Analyze Code File" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Get Help</h3>
                <p className="text-muted-foreground mb-3">View available commands and options:</p>
                <CodeBlock language="bash" code="gemini --help" title="Show Help" />
              </div>
            </div>
          </section>

          <Separator />

          {/* Step 5: Next Steps */}
          <section id="next-steps">
            <h2 className="text-2xl font-bold mb-4">Step 5: Next Steps</h2>
            <p className="text-muted-foreground mb-6">
              Congratulations! You've successfully set up Gemini CLI and run your first commands. Here's what to explore
              next:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advanced Commands</CardTitle>
                  <CardDescription>Learn about complex prompting and workflow automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/tutorials/advanced-usage">
                      View Tutorial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">API Reference</CardTitle>
                  <CardDescription>Explore all available commands and options</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/docs/api-reference">
                      View Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <TutorialNavigation
            sections={[
              { id: "installation", title: "Installation" },
              { id: "authentication", title: "Authentication" },
              { id: "first-command", title: "First Command" },
              { id: "basic-usage", title: "Basic Usage" },
              { id: "next-steps", title: "Next Steps" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
