import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Download,
  Key,
  Zap,
  AlertTriangle,
  Info,
} from "lucide-react"
import Link from "next/link"
import { TutorialNavigation } from "@/components/tutorial-navigation"
import { CodeBlock } from "@/components/code-block"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Quick Start Guide - Gemini CLI Documentation",
  description: "Get started with Gemini CLI in under 5 minutes. Installation, setup, and first commands guide.",
  keywords: "Gemini CLI quick start, installation guide, setup tutorial, getting started",
}

export default function QuickStartPage() {
  return (
    <div className="container py-12 max-w-6xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Documentation
          </Link>
        </Button>

        <div className="flex items-center gap-4 mb-6">
          <Badge variant="default" className="bg-gradient-to-r from-green-600 to-emerald-600">
            Quick Start
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />5 minutes
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Quick Start Guide
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Get up and running with Gemini CLI in under 5 minutes. This guide covers installation, authentication, and
          your first commands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Prerequisites */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                Prerequisites
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <Terminal className="h-8 w-8 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold">Node.js 16+</div>
                    <div className="text-sm text-muted-foreground">Required runtime</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <Key className="h-8 w-8 mr-3 text-purple-500" />
                  <div>
                    <div className="font-semibold">Google Account</div>
                    <div className="text-sm text-muted-foreground">For authentication</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <Zap className="h-8 w-8 mr-3 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Command Line</div>
                    <div className="text-sm text-muted-foreground">Basic familiarity</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Step 1: Installation */}
          <section id="installation">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <h2 className="text-3xl font-bold">Installation</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Install Gemini CLI globally using npm. This makes the{" "}
              <code className="bg-muted px-2 py-1 rounded">gemini</code> command available system-wide.
            </p>

            <CodeBlock language="bash" code="npm install -g @google/gemini-cli" title="Install Gemini CLI Globally" />

            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Permission Issues?</AlertTitle>
              <AlertDescription>
                On macOS/Linux, you might need to use <code>sudo npm install -g @google/gemini-cli</code> if you
                encounter permission errors.
              </AlertDescription>
            </Alert>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Verify Installation</h3>
              <CodeBlock language="bash" code="gemini --version" title="Check Version" />
              <p className="text-sm text-muted-foreground mt-2">
                You should see the version number if installation was successful.
              </p>
            </div>
          </section>

          <Separator />

          {/* Step 2: Authentication */}
          <section id="authentication">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <h2 className="text-3xl font-bold">Authentication</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Authenticate with your Google account to access Gemini API services. This will open your browser for OAuth
              flow.
            </p>

            <CodeBlock language="bash" code="gemini auth login" title="Authenticate with Google" />

            <Alert className="mt-6">
              <Info className="h-4 w-4" />
              <AlertTitle>What happens next?</AlertTitle>
              <AlertDescription>
                Your browser will open to Google's OAuth page. Sign in with your Google account and grant permissions to
                Gemini CLI.
              </AlertDescription>
            </Alert>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Verify Authentication</h3>
              <CodeBlock language="bash" code="gemini auth status" title="Check Authentication Status" />
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Success!</strong> You should see your account email and API quota information.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Step 3: First Command */}
          <section id="first-command">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <h2 className="text-3xl font-bold">Your First Command</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Let's generate some code using Gemini CLI. Try this simple example to see the AI in action.
            </p>

            <CodeBlock
              language="bash"
              code='gemini generate "Create a simple Hello World function in Python"'
              title="Generate Python Code"
            />

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Expected Output</h3>
              <CodeBlock
                language="python"
                code={`def hello_world():
    """
    A simple function that prints Hello World to the console.
    """
    print("Hello, World!")

# Example usage
if __name__ == "__main__":
    hello_world()`}
                title="Generated Python Code"
              />
            </div>
          </section>

          <Separator />

          {/* Step 4: Essential Commands */}
          <section id="essential-commands">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <h2 className="text-3xl font-bold">Essential Commands</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Here are the most important commands you'll use daily with Gemini CLI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Terminal className="h-5 w-5 mr-2 text-blue-500" />
                    Interactive Chat
                  </CardTitle>
                  <CardDescription>Start a conversation with Gemini</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" code="gemini chat" />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Analyze Files
                  </CardTitle>
                  <CardDescription>Get insights about your code</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" code="gemini analyze --file app.js" />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-green-500" />
                    Get Help
                  </CardTitle>
                  <CardDescription>View all available commands</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" code="gemini --help" />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2 text-purple-500" />
                    Batch Processing
                  </CardTitle>
                  <CardDescription>Process multiple files</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock language="bash" code="gemini batch --directory ./src" />
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Next Steps */}
          <section id="next-steps">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                5
              </div>
              <h2 className="text-3xl font-bold">Next Steps</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Congratulations! You're now ready to explore the full power of Gemini CLI. Here's what to learn next:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Advanced Usage</CardTitle>
                  <CardDescription>Learn complex prompting techniques and workflow automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/tutorials/advanced-usage">
                      Explore Advanced Features
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">API Reference</CardTitle>
                  <CardDescription>Complete documentation of all commands and options</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/docs/api-reference">
                      View API Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    Examples Gallery
                  </CardTitle>
                  <CardDescription>Real-world examples and use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/docs/examples">
                      Browse Examples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Join Community</CardTitle>
                  <CardDescription>Connect with other developers and get help</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/community">
                      Join Discord
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
              { id: "essential-commands", title: "Essential Commands" },
              { id: "next-steps", title: "Next Steps" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
