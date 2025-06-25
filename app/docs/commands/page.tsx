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
  Terminal,
  MessageCircle,
  Code,
  FileText,
  Settings,
  Search,
  Zap,
  CheckCircle,
  Info,
  Star,
  Play,
  Eye,
  Download,
  Upload,
  Trash2,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Commands Reference - Gemini CLI Documentation",
  description: "Complete command reference for Gemini CLI including all available commands, options, and examples.",
  keywords: "Gemini CLI commands, CLI reference, command line interface, API commands, gemini help",
}

export default function CommandsPage() {
  const commandCategories = [
    {
      id: "core",
      title: "Core Commands",
      description: "Essential commands for daily usage",
      icon: Zap,
      commands: [
        { name: "chat", description: "Start interactive chat session" },
        { name: "ask", description: "Ask a single question" },
        { name: "generate", description: "Generate code or content" },
        { name: "analyze", description: "Analyze files or code" },
      ]
    },
    {
      id: "auth",
      title: "Authentication",
      description: "Manage authentication and credentials",
      icon: Settings,
      commands: [
        { name: "auth login", description: "Authenticate with API key or OAuth" },
        { name: "auth logout", description: "Clear stored credentials" },
        { name: "auth status", description: "Check authentication status" },
        { name: "auth refresh", description: "Refresh OAuth tokens" },
      ]
    },
    {
      id: "config",
      title: "Configuration",
      description: "Manage CLI settings and preferences",
      icon: Settings,
      commands: [
        { name: "config get", description: "Get configuration values" },
        { name: "config set", description: "Set configuration values" },
        { name: "config list", description: "List all configurations" },
        { name: "config reset", description: "Reset to default settings" },
      ]
    },
    {
      id: "files",
      title: "File Operations",
      description: "Work with files and projects",
      icon: FileText,
      commands: [
        { name: "review", description: "Review code files" },
        { name: "explain", description: "Explain code functionality" },
        { name: "refactor", description: "Suggest code improvements" },
        { name: "test", description: "Generate test cases" },
      ]
    },
  ]

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <span className="text-foreground">Commands</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4">
            <Terminal className="h-3 w-3 mr-1" />
            Commands Reference
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Gemini CLI Commands
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete reference guide for all Gemini CLI commands. Learn syntax, options, and see practical examples.
          </p>
        </div>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commandCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2">
                    <category.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {category.commands.map((cmd) => (
                      <li key={cmd.name} className="text-sm">
                        <code className="bg-muted px-1 rounded text-xs">{cmd.name}</code>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Core Commands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Core Commands</h2>
          
          <div className="space-y-12">
            {/* Chat Command */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">gemini chat</h3>
                  <p className="text-muted-foreground">Start an interactive chat session with Gemini</p>
                </div>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList>
                  <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                  <TabsTrigger value="options">Options</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <CodeBlock
                    language="bash"
                    code={`# Start interactive chat
gemini chat

# Chat with specific model
gemini chat --model gemini-pro

# Chat with custom system prompt
gemini chat --system "You are a helpful coding assistant"`}
                  />
                </TabsContent>

                <TabsContent value="options" className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Option</th>
                          <th className="text-left py-2">Description</th>
                          <th className="text-left py-2">Default</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr>
                          <td className="py-2"><code>--model, -m</code></td>
                          <td>Model to use for chat</td>
                          <td>gemini-pro</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--system, -s</code></td>
                          <td>System prompt</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--temperature, -t</code></td>
                          <td>Creativity level (0.0-1.0)</td>
                          <td>0.7</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--max-tokens</code></td>
                          <td>Maximum response length</td>
                          <td>2048</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--history</code></td>
                          <td>Load chat history</td>
                          <td>false</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Creative Writing Session</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini chat --temperature 0.9 --system "You are a creative writing assistant"`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Code Review Session</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini chat --system "You are a senior code reviewer" --max-tokens 4096`}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Ask Command */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Search className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">gemini ask</h3>
                  <p className="text-muted-foreground">Ask a single question and get an immediate response</p>
                </div>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList>
                  <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                  <TabsTrigger value="options">Options</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <CodeBlock
                    language="bash"
                    code={`# Ask a simple question
gemini ask "What is the capital of France?"

# Ask about code
gemini ask "Explain how JavaScript closures work"

# Ask with context from file
gemini ask "Review this code" --file app.js`}
                  />
                </TabsContent>

                <TabsContent value="options" className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Option</th>
                          <th className="text-left py-2">Description</th>
                          <th className="text-left py-2">Default</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2"><code>--file, -f</code></td>
                          <td>Include file content as context</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--model, -m</code></td>
                          <td>Model to use</td>
                          <td>gemini-pro</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--temperature, -t</code></td>
                          <td>Creativity level</td>
                          <td>0.7</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--json</code></td>
                          <td>Output in JSON format</td>
                          <td>false</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>--stream</code></td>
                          <td>Stream response as it generates</td>
                          <td>true</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Quick Code Explanation</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini ask "Explain this function" --file utils/helper.js`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">JSON Output for Scripts</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini ask "List 5 programming languages" --json | jq '.languages[]'`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Multiple Files Context</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini ask "Find the bug in this code" --file src/main.js --file src/utils.js`}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Generate Command */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <Code className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">gemini generate</h3>
                  <p className="text-muted-foreground">Generate code, documentation, or other content</p>
                </div>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList>
                  <TabsTrigger value="basic">Basic Usage</TabsTrigger>
                  <TabsTrigger value="types">Content Types</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-4">
                  <CodeBlock
                    language="bash"
                    code={`# Generate from description
gemini generate "Create a React component for a button"

# Generate specific type
gemini generate --type component --name UserCard --framework react

# Generate with template
gemini generate --template api-route --name users`}
                  />
                </TabsContent>

                <TabsContent value="types" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Code Types</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li><code>component</code> - UI components</li>
                          <li><code>function</code> - Utility functions</li>
                          <li><code>class</code> - Class definitions</li>
                          <li><code>api</code> - API endpoints</li>
                          <li><code>test</code> - Test cases</li>
                          <li><code>config</code> - Configuration files</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Content Types</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li><code>docs</code> - Documentation</li>
                          <li><code>readme</code> - README files</li>
                          <li><code>schema</code> - Database schemas</li>
                          <li><code>mock</code> - Mock data</li>
                          <li><code>script</code> - Build scripts</li>
                          <li><code>dockerfile</code> - Docker files</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">React Component</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini generate --type component --name LoginForm --framework react --features "validation,typescript"`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">API Endpoint</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini generate --type api --name users --methods "GET,POST,PUT,DELETE" --framework express`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Test Suite</h4>
                      <CodeBlock
                        language="bash"
                        code={`gemini generate --type test --file src/utils.js --framework jest`}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* File Operations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">File Operations</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Analyze Command */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  gemini analyze
                </CardTitle>
                <CardDescription>Analyze code files for insights and patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock
                  language="bash"
                  code={`# Analyze a single file
gemini analyze src/app.js

# Analyze multiple files
gemini analyze src/**/*.js

# Deep analysis with metrics
gemini analyze --deep --metrics src/`}
                />
                
                <div className="text-sm">
                  <strong>Features:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Code complexity analysis</li>
                    <li>Security vulnerability detection</li>
                    <li>Performance optimization suggestions</li>
                    <li>Code quality metrics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Review Command */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  gemini review
                </CardTitle>
                <CardDescription>Get code review suggestions and improvements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock
                  language="bash"
                  code={`# Review code changes
gemini review --file src/component.js

# Review git diff
gemini review --diff HEAD~1

# Review with specific focus
gemini review --focus security,performance`}
                />
                
                <div className="text-sm">
                  <strong>Review areas:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Code style and conventions</li>
                    <li>Security best practices</li>
                    <li>Performance optimizations</li>
                    <li>Bug detection</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Explain Command */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  gemini explain
                </CardTitle>
                <CardDescription>Get detailed explanations of code functionality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock
                  language="bash"
                  code={`# Explain code function
gemini explain --file utils/parser.js

# Explain specific lines
gemini explain --file app.js --lines 15-30

# Explain algorithm
gemini explain --algorithm --file sort.py`}
                />
                
                <div className="text-sm">
                  <strong>Explanation types:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Function purpose and logic</li>
                    <li>Algorithm explanations</li>
                    <li>API usage patterns</li>
                    <li>Architecture decisions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Refactor Command */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  gemini refactor
                </CardTitle>
                <CardDescription>Get suggestions for code improvements and refactoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock
                  language="bash"
                  code={`# Suggest refactoring
gemini refactor --file legacy/old-code.js

# Focus on specific aspects
gemini refactor --focus readability,performance

# Apply suggestions
gemini refactor --apply --backup`}
                />
                
                <div className="text-sm">
                  <strong>Refactoring types:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Code simplification</li>
                    <li>Performance improvements</li>
                    <li>Modern syntax updates</li>
                    <li>Design pattern application</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Configuration Commands */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration & Settings</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration Management</CardTitle>
                <CardDescription>Manage Gemini CLI settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="get" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="get">Get</TabsTrigger>
                    <TabsTrigger value="set">Set</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                    <TabsTrigger value="reset">Reset</TabsTrigger>
                  </TabsList>

                  <TabsContent value="get" className="space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`# Get specific setting
gemini config get model

# Get all auth settings
gemini config get auth.*

# Get with default value
gemini config get temperature --default 0.7`}
                    />
                  </TabsContent>

                  <TabsContent value="set" className="space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`# Set default model
gemini config set model gemini-pro

# Set API endpoint
gemini config set api.endpoint https://api.example.com

# Set multiple values
gemini config set temperature=0.8 max_tokens=4096`}
                    />
                  </TabsContent>

                  <TabsContent value="list" className="space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`# List all configurations
gemini config list

# List with values
gemini config list --show-values

# List specific section
gemini config list auth`}
                    />
                  </TabsContent>

                  <TabsContent value="reset" className="space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`# Reset all settings
gemini config reset

# Reset specific setting
gemini config reset model

# Reset with confirmation
gemini config reset --confirm`}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Advanced Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Advanced Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Batch Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Process multiple files
gemini batch --command analyze --pattern "src/**/*.js"

# Batch generation
gemini batch --template component --data inputs.json

# Parallel processing
gemini batch --parallel 4 --timeout 30s`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Scripting & Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Run from script file
gemini script run automation.gm

# Watch for file changes
gemini watch --pattern "*.js" --command "review"

# Pipeline processing
gemini pipeline --config ci-pipeline.yaml`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Plugin System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# List installed plugins
gemini plugin list

# Install plugin
gemini plugin install @gemini/eslint-plugin

# Create custom plugin
gemini plugin create my-plugin --template typescript`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Model Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# List available models
gemini models list

# Get model info
gemini models info gemini-pro

# Compare models
gemini models compare --query "Hello world"`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Global Options */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Global Options</h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Option</th>
                      <th className="text-left py-2">Description</th>
                      <th className="text-left py-2">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2"><code>--help, -h</code></td>
                      <td>Show help information</td>
                      <td><code>gemini chat --help</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--version, -v</code></td>
                      <td>Show version number</td>
                      <td><code>gemini --version</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--verbose</code></td>
                      <td>Enable verbose output</td>
                      <td><code>gemini ask "Hello" --verbose</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--quiet, -q</code></td>
                      <td>Suppress non-essential output</td>
                      <td><code>gemini generate --quiet</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--config</code></td>
                      <td>Use custom config file</td>
                      <td><code>gemini --config ./custom.json chat</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--no-color</code></td>
                      <td>Disable colored output</td>
                      <td><code>gemini ask "Hello" --no-color</code></td>
                    </tr>
                    <tr>
                      <td className="py-2"><code>--output, -o</code></td>
                      <td>Specify output file</td>
                      <td><code>gemini generate -o result.js</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Getting Help
              </CardTitle>
              <CardDescription>
                Need help with a specific command? Use the built-in help system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`# General help
gemini --help

# Command-specific help
gemini chat --help
gemini generate --help

# List all commands
gemini help

# Search for commands
gemini help search "file"`}
              />
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t">
          <Button variant="outline" asChild>
            <Link href="/docs/authentication">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Authentication
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/configuration">
              Configuration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 