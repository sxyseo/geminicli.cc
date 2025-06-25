import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Package,
  Terminal,
  CheckCircle,
  AlertCircle,
  Info,
  Monitor,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Installation Guide - Gemini CLI Documentation",
  description: "Complete installation guide for Gemini CLI across different platforms and package managers.",
  keywords: "Gemini CLI installation, npm install, yarn install, package manager, setup guide",
}

export default function InstallationPage() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <span className="text-foreground">Installation</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4">
            <Download className="h-3 w-3 mr-1" />
            Installation Guide
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Installing Gemini CLI
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get Gemini CLI installed on your system quickly and easily. Choose from multiple installation methods 
            and platform-specific instructions.
          </p>
        </div>

        {/* System Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Operating System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Windows 10/11</li>
                  <li>• macOS 10.15+</li>
                  <li>• Linux (Ubuntu 18.04+)</li>
                  <li>• WSL2 (Windows)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Node.js
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Node.js 16.0+ required</li>
                  <li>• Node.js 18.0+ recommended</li>
                  <li>• npm 7.0+ or yarn 1.22+</li>
                  <li>• TypeScript support included</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• 512MB RAM minimum</li>
                  <li>• 100MB disk space</li>
                  <li>• Internet connection</li>
                  <li>• Terminal/Command Prompt</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Quick Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Installation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Install with npm (Recommended)</h3>
              <p className="text-muted-foreground mb-4">
                The most common way to install Gemini CLI. npm comes bundled with Node.js.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Global Installation</h4>
                  <CodeBlock
                    language="bash"
                    code="npm install -g @google/gemini-cli"
                  />
                </div>

                <div>
                  <h4 className="font-medium mb-2">Verify Installation</h4>
                  <CodeBlock
                    language="bash"
                    code="gemini --version"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Alternative Package Managers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Yarn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="bash"
                      code="yarn global add @google/gemini-cli"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">pnpm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="bash"
                      code="pnpm install -g @google/gemini-cli"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bun</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock
                      language="bash"
                      code="bun install -g @google/gemini-cli"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Platform-Specific Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Platform-Specific Instructions</h2>
          
          <div className="space-y-8">
            {/* Windows */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Windows
                </CardTitle>
                <CardDescription>
                  Installation instructions for Windows 10/11 and WSL2
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Command Prompt / PowerShell</h4>
                  <CodeBlock
                    language="bash"
                    code="npm install -g @google/gemini-cli"
                  />
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Windows Security</AlertTitle>
                  <AlertDescription>
                    If you encounter execution policy issues, run: 
                    <code className="ml-1 bg-muted px-1 rounded">Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* macOS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  macOS
                </CardTitle>
                <CardDescription>
                  Installation instructions for macOS using Terminal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Using npm</h4>
                  <CodeBlock
                    language="bash"
                    code="npm install -g @google/gemini-cli"
                  />
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Permission Issues</AlertTitle>
                  <AlertDescription>
                    If you get permission errors, avoid using sudo. Instead, configure npm to use a different directory.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Linux */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Linux
                </CardTitle>
                <CardDescription>
                  Installation instructions for various Linux distributions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Ubuntu/Debian</h4>
                  <CodeBlock
                    language="bash"
                    code={`# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Gemini CLI
npm install -g @google/gemini-cli`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Verify Installation</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Check Version</h3>
              <CodeBlock
                language="bash"
                code="gemini --version"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Should output the current version number, e.g., "2.1.0"
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Check Help</h3>
              <CodeBlock
                language="bash"
                code="gemini --help"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Should display all available commands and options
              </p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Command not found: gemini</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>If you get "command not found" error:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Ensure Node.js and npm are properly installed</li>
                  <li>Check if npm global bin directory is in your PATH</li>
                  <li>Try reinstalling: <code>npm uninstall -g @google/gemini-cli && npm install -g @google/gemini-cli</code></li>
                  <li>Restart your terminal or run <code>source ~/.bashrc</code></li>
                </ul>
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Permission denied (EACCES)</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>If you encounter permission errors:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Configure npm to use a different directory</li>
                  <li>Use a Node.js version manager like nvm</li>
                  <li>Consider using local installation instead of global</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Installation Complete!
              </CardTitle>
              <CardDescription className="text-green-600 dark:text-green-300">
                Great! You have successfully installed Gemini CLI. Here is what to do next:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/docs/authentication">
                    <div className="font-semibold mb-1">Set up Authentication</div>
                    <div className="text-sm opacity-90">Configure your Google AI Studio API key</div>
                    <ArrowRight className="h-4 w-4 mt-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/docs/quick-start">
                    <div className="font-semibold mb-1">Quick Start Guide</div>
                    <div className="text-sm opacity-75">Learn the basics in 5 minutes</div>
                    <ArrowRight className="h-4 w-4 mt-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
            <Link href="/docs/authentication">
              Authentication
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 