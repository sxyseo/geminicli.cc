import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  Key,
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  Eye,
  EyeOff,
  Copy,
  Settings,
  Lock,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Authentication Guide - Gemini CLI Documentation",
  description: "Complete authentication guide for Gemini CLI including API key setup, OAuth, and security best practices.",
  keywords: "Gemini CLI authentication, API key, Google AI Studio, OAuth, security, configuration",
}

export default function AuthenticationPage() {
  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <span className="text-foreground">Authentication</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4">
            <Key className="h-3 w-3 mr-1" />
            Authentication Guide
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Authentication & API Keys
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Set up secure authentication for Gemini CLI to access Google's AI services. 
            Learn about API keys, OAuth, and security best practices.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Authentication Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Key
                </CardTitle>
                <CardDescription>Simple and direct authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Quick setup</li>
                  <li>• Best for personal use</li>
                  <li>• Environment variables</li>
                  <li>• No browser required</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  OAuth 2.0
                </CardTitle>
                <CardDescription>Secure delegated access</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• More secure</li>
                  <li>• Team collaboration</li>
                  <li>• Granular permissions</li>
                  <li>• Token refresh</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Service Account
                </CardTitle>
                <CardDescription>Server-to-server authentication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Production ready</li>
                  <li>• CI/CD integration</li>
                  <li>• No user interaction</li>
                  <li>• JSON key files</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* API Key Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">API Key Setup (Recommended)</h2>
          
          <div className="space-y-8">
            {/* Step 1: Get API Key */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Get Your API Key</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  First, you'll need to create an API key from Google AI Studio:
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <ol className="list-decimal list-inside space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-medium mt-1">1.</span>
                      <div>
                        <p>Visit <a href="https://makersuite.google.com/app/apikey" className="text-primary hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                          Google AI Studio <ExternalLink className="h-3 w-3" />
                        </a></p>
                        <p className="text-sm text-muted-foreground">Sign in with your Google account</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-medium mt-1">2.</span>
                      <div>
                        <p>Click the <strong>"Create API Key"</strong> button</p>
                        <p className="text-sm text-muted-foreground">Choose an existing project or create a new one</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sm font-medium mt-1">3.</span>
                      <div>
                        <p>Copy your API key and store it securely</p>
                        <p className="text-sm text-muted-foreground">This key will only be shown once</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Security Warning</AlertTitle>
                  <AlertDescription>
                    Never share your API key publicly or commit it to version control. 
                    Treat it like a password and store it securely.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            {/* Step 2: Configure CLI */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Configure Gemini CLI</h3>
              </div>

              <Tabs defaultValue="interactive" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="interactive">Interactive</TabsTrigger>
                  <TabsTrigger value="environment">Environment</TabsTrigger>
                  <TabsTrigger value="config">Config File</TabsTrigger>
                </TabsList>

                <TabsContent value="interactive" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Interactive Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The easiest way to set up authentication. Gemini CLI will prompt you for your API key.
                    </p>
                    <CodeBlock
                      language="bash"
                      code={`# Start interactive authentication
gemini auth login

# Follow the prompts to enter your API key
# The key will be securely stored for future use`}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="environment" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Environment Variable</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Set your API key as an environment variable. Great for CI/CD and server environments.
                    </p>
                    
                    <Tabs defaultValue="bash" className="w-full">
                      <TabsList>
                        <TabsTrigger value="bash">Bash/Zsh</TabsTrigger>
                        <TabsTrigger value="fish">Fish</TabsTrigger>
                        <TabsTrigger value="powershell">PowerShell</TabsTrigger>
                        <TabsTrigger value="cmd">CMD</TabsTrigger>
                      </TabsList>

                      <TabsContent value="bash">
                        <CodeBlock
                          language="bash"
                          code={`# Temporary (current session only)
export GEMINI_API_KEY="your_api_key_here"

# Permanent (add to ~/.bashrc or ~/.zshrc)
echo 'export GEMINI_API_KEY="your_api_key_here"' >> ~/.bashrc
source ~/.bashrc`}
                        />
                      </TabsContent>

                      <TabsContent value="fish">
                        <CodeBlock
                          language="bash"
                          code={`# Temporary (current session only)
set -x GEMINI_API_KEY "your_api_key_here"

# Permanent (add to ~/.config/fish/config.fish)
set -Ux GEMINI_API_KEY "your_api_key_here"`}
                        />
                      </TabsContent>

                      <TabsContent value="powershell">
                        <CodeBlock
                          language="powershell"
                          code={`# Temporary (current session only)
$env:GEMINI_API_KEY = "your_api_key_here"

# Permanent (current user)
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your_api_key_here", "User")

# System-wide (requires admin)
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your_api_key_here", "Machine")`}
                        />
                      </TabsContent>

                      <TabsContent value="cmd">
                        <CodeBlock
                          language="cmd"
                          code={`# Temporary (current session only)
set GEMINI_API_KEY=your_api_key_here

# Permanent (current user)
setx GEMINI_API_KEY "your_api_key_here"`}
                        />
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>

                <TabsContent value="config" className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Configuration File</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Store your API key in a configuration file. Useful for project-specific settings.
                    </p>
                    <CodeBlock
                      language="bash"
                      code={`# Create config directory
mkdir -p ~/.config/gemini

# Create config file
cat > ~/.config/gemini/config.json << EOF
{
  "apiKey": "your_api_key_here",
  "model": "gemini-pro",
  "maxTokens": 2048
}
EOF

# Or use the CLI command
gemini config set apiKey "your_api_key_here"`}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* OAuth 2.0 Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">OAuth 2.0 Setup (Advanced)</h2>
          
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>When to use OAuth</AlertTitle>
            <AlertDescription>
              OAuth is recommended for team environments, applications that need granular permissions, 
              or when you want to avoid storing API keys directly.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Create OAuth Credentials</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Go to <a href="https://console.cloud.google.com/apis/credentials" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
                  <li>Create or select a project</li>
                  <li>Click "Create Credentials" → "OAuth 2.0 Client ID"</li>
                  <li>Configure OAuth consent screen if prompted</li>
                  <li>Select "Desktop application" as application type</li>
                  <li>Download the JSON credentials file</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Configure OAuth</h3>
              <CodeBlock
                language="bash"
                code={`# Set credentials file path
export GOOGLE_APPLICATION_CREDENTIALS="path/to/credentials.json"

# Start OAuth flow
gemini auth login --oauth

# This will open a browser for authentication
# Follow the prompts to authorize access`}
              />
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Service Account */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Account (Production)</h2>
          
          <Alert className="mb-6">
            <Shield className="h-4 w-4" />
            <AlertTitle>Production Use</AlertTitle>
            <AlertDescription>
              Service accounts are ideal for production environments, CI/CD pipelines, 
              and server-to-server authentication where no user interaction is possible.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">1. Create Service Account</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Go to <a href="https://console.cloud.google.com/iam-admin/serviceaccounts" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Service Accounts page</a></li>
                  <li>Click "Create Service Account"</li>
                  <li>Enter name and description</li>
                  <li>Grant necessary roles (AI Platform User)</li>
                  <li>Create and download JSON key file</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Configure Service Account</h3>
              <CodeBlock
                language="bash"
                code={`# Set service account key file
export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account-key.json"

# Verify authentication
gemini auth status

# Alternative: Use gcloud to activate service account
gcloud auth activate-service-account --key-file="path/to/service-account-key.json"`}
              />
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Verify Authentication</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Check Authentication Status</h3>
              <CodeBlock
                language="bash"
                code={`# Check current authentication status
gemini auth status

# Test with a simple query
gemini ask "Hello, can you hear me?"

# Check available models
gemini models list`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Expected Output</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <pre className="text-sm">
{`✓ Authentication: Success
✓ API Key: ••••••••••••••••••••••••••••••••••••••••abc123
✓ Project: my-ai-project
✓ Quota: 1000 requests/day remaining
✓ Models: gemini-pro, gemini-pro-vision available`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Security Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Security Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                  <Lock className="h-5 w-5" />
                  Do's
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use environment variables for API keys
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Rotate API keys regularly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use least privilege principle
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Monitor API usage and quotas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use service accounts in production
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Enable API restrictions when possible
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertCircle className="h-5 w-5" />
                  Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't commit API keys to version control
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't share API keys in chat/email
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't use API keys in client-side code
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't use overly broad permissions
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't ignore quota warnings
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't use the same key everywhere
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Troubleshooting */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
          
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Authentication failed: Invalid API key</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>If you see authentication errors:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Verify your API key is correct and hasn't been revoked</li>
                  <li>Check that the API key has proper permissions</li>
                  <li>Ensure you're using the right environment variable name</li>
                  <li>Try generating a new API key</li>
                </ul>
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Quota exceeded</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>If you hit quota limits:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Check your usage in Google Cloud Console</li>
                  <li>Request quota increase if needed</li>
                  <li>Implement rate limiting in your application</li>
                  <li>Consider using multiple API keys for higher limits</li>
                </ul>
              </AlertDescription>
            </Alert>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>OAuth callback issues</AlertTitle>
              <AlertDescription className="space-y-2">
                <p>If OAuth authentication fails:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Ensure redirect URIs are correctly configured</li>
                  <li>Check that OAuth consent screen is configured</li>
                  <li>Verify the application is not in testing mode for external users</li>
                  <li>Try clearing browser cookies and cache</li>
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
                Authentication Complete!
              </CardTitle>
              <CardDescription className="text-green-600 dark:text-green-300">
                Perfect! You've successfully set up authentication. Now you're ready to use all Gemini CLI features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/docs/commands">
                    <div className="font-semibold mb-1">Explore Commands</div>
                    <div className="text-sm opacity-90">Learn about all available commands</div>
                    <ArrowRight className="h-4 w-4 mt-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/tutorials/getting-started">
                    <div className="font-semibold mb-1">Getting Started Tutorial</div>
                    <div className="text-sm opacity-75">Follow step-by-step examples</div>
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
            <Link href="/docs/installation">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Installation
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/commands">
              Commands
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 