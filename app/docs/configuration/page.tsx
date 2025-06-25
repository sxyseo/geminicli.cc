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
  Settings,
  FileText,
  Layers,
  Shield,
  Zap,
  Globe,
  Terminal,
  CheckCircle,
  Info,
  AlertCircle,
  Copy,
  Edit,
  Folder,
  Monitor,
} from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export const metadata: Metadata = {
  title: "Configuration Guide - Gemini CLI Documentation",
  description: "Complete configuration guide for Gemini CLI including settings, preferences, and customization options.",
  keywords: "Gemini CLI configuration, settings, preferences, config file, environment variables, customization",
}

export default function ConfigurationPage() {
  const configSections = [
    {
      id: "authentication",
      title: "Authentication",
      description: "API keys, OAuth, and credentials",
      icon: Shield,
      settings: ["apiKey", "authMethod", "tokenRefresh", "credentials"]
    },
    {
      id: "models",
      title: "Models & AI",
      description: "Model selection and AI parameters",
      icon: Zap,
      settings: ["defaultModel", "temperature", "maxTokens", "topP"]
    },
    {
      id: "output",
      title: "Output & Display",
      description: "Formatting and display options",
      icon: Monitor,
      settings: ["outputFormat", "colorOutput", "verbose", "streaming"]
    },
    {
      id: "performance",
      title: "Performance",
      description: "Caching, timeouts, and optimization",
      icon: Layers,
      settings: ["cache", "timeout", "retries", "parallel"]
    },
  ]

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <span className="text-foreground">Configuration</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="default" className="mb-4">
            <Settings className="h-3 w-3 mr-1" />
            Configuration Guide
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Configuration & Settings
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Customize Gemini CLI to fit your workflow. Learn about configuration files, 
            environment variables, and all available settings.
          </p>
        </div>

        {/* Configuration Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Config Files
                </CardTitle>
                <CardDescription>JSON/YAML configuration files</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• ~/.config/gemini/config.json</li>
                  <li>• Project-specific configs</li>
                  <li>• JSON or YAML format</li>
                  <li>• Version controlled</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5" />
                  Environment Variables
                </CardTitle>
                <CardDescription>Shell environment configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• GEMINI_API_KEY</li>
                  <li>• GEMINI_MODEL</li>
                  <li>• System-wide settings</li>
                  <li>• CI/CD friendly</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  CLI Commands
                </CardTitle>
                <CardDescription>Interactive configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• gemini config set</li>
                  <li>• gemini config get</li>
                  <li>• Runtime overrides</li>
                  <li>• Command-line flags</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Configuration File Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration File Setup</h2>
          
          <div className="space-y-8">
            {/* File Locations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Configuration File Locations</h3>
              <div className="space-y-4">
                <Alert>
                  <Folder className="h-4 w-4" />
                  <AlertTitle>Configuration Priority</AlertTitle>
                  <AlertDescription>
                    Gemini CLI looks for configuration in this order:
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Command-line flags (highest priority)</li>
                      <li>Environment variables</li>
                      <li>Project config file (./gemini.config.json)</li>
                      <li>User config file (~/.config/gemini/config.json)</li>
                      <li>Global config file (/etc/gemini/config.json)</li>
                      <li>Default values (lowest priority)</li>
                    </ol>
                  </AlertDescription>
                </Alert>

                <Tabs defaultValue="user" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="user">User Config</TabsTrigger>
                    <TabsTrigger value="project">Project Config</TabsTrigger>
                    <TabsTrigger value="global">Global Config</TabsTrigger>
                  </TabsList>

                  <TabsContent value="user" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">User Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Personal settings that apply to all projects for the current user.
                      </p>
                      <CodeBlock
                        language="bash"
                        code={`# Create user config directory
mkdir -p ~/.config/gemini

# Create config file
cat > ~/.config/gemini/config.json << 'EOF'
{
  "auth": {
    "apiKey": "your-api-key-here",
    "method": "api-key"
  },
  "models": {
    "default": "gemini-pro",
    "temperature": 0.7,
    "maxTokens": 2048
  },
  "output": {
    "format": "markdown",
    "color": true,
    "streaming": true
  }
}
EOF`}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="project" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Project Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Project-specific settings that can be version controlled.
                      </p>
                      <CodeBlock
                        language="bash"
                        code={`# Create project config
cat > ./gemini.config.json << 'EOF'
{
  "models": {
    "default": "gemini-pro",
    "codeReview": "gemini-pro",
    "documentation": "gemini-pro"
  },
  "generation": {
    "templates": "./templates",
    "outputDir": "./generated"
  },
  "rules": {
    "maxFileSize": "10MB",
    "excludePatterns": ["node_modules", "*.test.js"]
  }
}
EOF

# Add to .gitignore if needed
echo "gemini.config.local.json" >> .gitignore`}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="global" className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Global Configuration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        System-wide settings for all users (requires admin privileges).
                      </p>
                      <CodeBlock
                        language="bash"
                        code={`# Create global config (Linux/macOS)
sudo mkdir -p /etc/gemini
sudo tee /etc/gemini/config.json << 'EOF'
{
  "api": {
    "endpoint": "https://api.gemini.company.com",
    "timeout": 30000
  },
  "security": {
    "allowUnsafeOperations": false,
    "requireAuthentication": true
  },
  "logging": {
    "level": "info",
    "file": "/var/log/gemini/gemini.log"
  }
}
EOF

# Windows global config
# %ProgramData%\\Gemini\\config.json`}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Configuration Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration Reference</h2>
          
          <div className="space-y-8">
            {configSections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <section.icon className="h-5 w-5" />
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="options" className="w-full">
                    <TabsList>
                      <TabsTrigger value="options">Options</TabsTrigger>
                      <TabsTrigger value="example">Example</TabsTrigger>
                      <TabsTrigger value="cli">CLI Commands</TabsTrigger>
                    </TabsList>

                    <TabsContent value="options" className="space-y-4">
                      {section.id === "authentication" && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Setting</th>
                                <th className="text-left py-2">Type</th>
                                <th className="text-left py-2">Description</th>
                                <th className="text-left py-2">Default</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2"><code>auth.apiKey</code></td>
                                <td>string</td>
                                <td>Google AI Studio API key</td>
                                <td>-</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>auth.method</code></td>
                                <td>enum</td>
                                <td>api-key, oauth, service-account</td>
                                <td>api-key</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>auth.tokenRefresh</code></td>
                                <td>boolean</td>
                                <td>Auto-refresh OAuth tokens</td>
                                <td>true</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>auth.credentialsFile</code></td>
                                <td>string</td>
                                <td>Path to service account JSON</td>
                                <td>-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {section.id === "models" && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Setting</th>
                                <th className="text-left py-2">Type</th>
                                <th className="text-left py-2">Description</th>
                                <th className="text-left py-2">Default</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2"><code>models.default</code></td>
                                <td>string</td>
                                <td>Default model to use</td>
                                <td>gemini-pro</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>models.temperature</code></td>
                                <td>number</td>
                                <td>Creativity level (0.0-1.0)</td>
                                <td>0.7</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>models.maxTokens</code></td>
                                <td>number</td>
                                <td>Maximum response length</td>
                                <td>2048</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>models.topP</code></td>
                                <td>number</td>
                                <td>Nucleus sampling parameter</td>
                                <td>0.9</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {section.id === "output" && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Setting</th>
                                <th className="text-left py-2">Type</th>
                                <th className="text-left py-2">Description</th>
                                <th className="text-left py-2">Default</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2"><code>output.format</code></td>
                                <td>enum</td>
                                <td>text, markdown, json, yaml</td>
                                <td>markdown</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>output.color</code></td>
                                <td>boolean</td>
                                <td>Enable colored output</td>
                                <td>true</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>output.streaming</code></td>
                                <td>boolean</td>
                                <td>Stream responses as they generate</td>
                                <td>true</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>output.verbose</code></td>
                                <td>boolean</td>
                                <td>Show detailed information</td>
                                <td>false</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {section.id === "performance" && (
                        <div className="bg-muted/50 rounded-lg p-4">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Setting</th>
                                <th className="text-left py-2">Type</th>
                                <th className="text-left py-2">Description</th>
                                <th className="text-left py-2">Default</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2"><code>cache.enabled</code></td>
                                <td>boolean</td>
                                <td>Enable response caching</td>
                                <td>true</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>cache.ttl</code></td>
                                <td>number</td>
                                <td>Cache TTL in seconds</td>
                                <td>3600</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>network.timeout</code></td>
                                <td>number</td>
                                <td>Request timeout in ms</td>
                                <td>30000</td>
                              </tr>
                              <tr>
                                <td className="py-2"><code>network.retries</code></td>
                                <td>number</td>
                                <td>Number of retry attempts</td>
                                <td>3</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="example" className="space-y-4">
                      {section.id === "authentication" && (
                        <CodeBlock
                          language="json"
                          code={`{
  "auth": {
    "apiKey": "AIzaSyC...your-api-key",
    "method": "api-key",
    "tokenRefresh": true,
    "timeout": 30000
  }
}`}
                        />
                      )}

                      {section.id === "models" && (
                        <CodeBlock
                          language="json"
                          code={`{
  "models": {
    "default": "gemini-pro",
    "temperature": 0.7,
    "maxTokens": 2048,
    "topP": 0.9,
    "presencePenalty": 0.0,
    "frequencyPenalty": 0.0
  }
}`}
                        />
                      )}

                      {section.id === "output" && (
                        <CodeBlock
                          language="json"
                          code={`{
  "output": {
    "format": "markdown",
    "color": true,
    "streaming": true,
    "verbose": false,
    "indent": 2,
    "wrap": 80
  }
}`}
                        />
                      )}

                      {section.id === "performance" && (
                        <CodeBlock
                          language="json"
                          code={`{
  "cache": {
    "enabled": true,
    "ttl": 3600,
    "directory": "~/.cache/gemini"
  },
  "network": {
    "timeout": 30000,
    "retries": 3,
    "retryDelay": 1000
  }
}`}
                        />
                      )}
                    </TabsContent>

                    <TabsContent value="cli" className="space-y-4">
                      {section.id === "authentication" && (
                        <CodeBlock
                          language="bash"
                          code={`# Set API key
gemini config set auth.apiKey "your-api-key"

# Change auth method
gemini config set auth.method oauth

# View auth settings
gemini config get auth`}
                        />
                      )}

                      {section.id === "models" && (
                        <CodeBlock
                          language="bash"
                          code={`# Set default model
gemini config set models.default gemini-pro

# Adjust creativity
gemini config set models.temperature 0.8

# Set token limit
gemini config set models.maxTokens 4096`}
                        />
                      )}

                      {section.id === "output" && (
                        <CodeBlock
                          language="bash"
                          code={`# Set output format
gemini config set output.format json

# Enable verbose mode
gemini config set output.verbose true

# Disable streaming
gemini config set output.streaming false`}
                        />
                      )}

                      {section.id === "performance" && (
                        <CodeBlock
                          language="bash"
                          code={`# Enable caching
gemini config set cache.enabled true

# Set timeout
gemini config set network.timeout 60000

# Configure retries
gemini config set network.retries 5`}
                        />
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Environment Variables */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Environment Variables</h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Environment variables provide a convenient way to configure Gemini CLI, 
              especially in automated environments like CI/CD pipelines.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Available Environment Variables</CardTitle>
                <CardDescription>Complete list of supported environment variables</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Variable</th>
                        <th className="text-left py-2">Config Equivalent</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2"><code>GEMINI_API_KEY</code></td>
                        <td><code>auth.apiKey</code></td>
                        <td>Google AI Studio API key</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_MODEL</code></td>
                        <td><code>models.default</code></td>
                        <td>Default model to use</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_TEMPERATURE</code></td>
                        <td><code>models.temperature</code></td>
                        <td>Default temperature setting</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_MAX_TOKENS</code></td>
                        <td><code>models.maxTokens</code></td>
                        <td>Maximum tokens per response</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_TIMEOUT</code></td>
                        <td><code>network.timeout</code></td>
                        <td>Request timeout in milliseconds</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_CONFIG_FILE</code></td>
                        <td>-</td>
                        <td>Path to custom config file</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_CACHE_DIR</code></td>
                        <td><code>cache.directory</code></td>
                        <td>Cache directory path</td>
                      </tr>
                      <tr>
                        <td className="py-2"><code>GEMINI_LOG_LEVEL</code></td>
                        <td><code>logging.level</code></td>
                        <td>Logging level (debug, info, warn, error)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Setting Environment Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="bash" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="bash">Bash/Zsh</TabsTrigger>
                    <TabsTrigger value="fish">Fish</TabsTrigger>
                    <TabsTrigger value="powershell">PowerShell</TabsTrigger>
                    <TabsTrigger value="docker">Docker</TabsTrigger>
                  </TabsList>

                  <TabsContent value="bash">
                    <CodeBlock
                      language="bash"
                      code={`# Temporary (current session)
export GEMINI_API_KEY="your-api-key"
export GEMINI_MODEL="gemini-pro"
export GEMINI_TEMPERATURE="0.8"

# Permanent (add to ~/.bashrc or ~/.zshrc)
echo 'export GEMINI_API_KEY="your-api-key"' >> ~/.bashrc
echo 'export GEMINI_MODEL="gemini-pro"' >> ~/.bashrc
source ~/.bashrc`}
                    />
                  </TabsContent>

                  <TabsContent value="fish">
                    <CodeBlock
                      language="bash"
                      code={`# Temporary
set -x GEMINI_API_KEY "your-api-key"
set -x GEMINI_MODEL "gemini-pro"

# Permanent
set -Ux GEMINI_API_KEY "your-api-key"
set -Ux GEMINI_MODEL "gemini-pro"`}
                    />
                  </TabsContent>

                  <TabsContent value="powershell">
                    <CodeBlock
                      language="powershell"
                      code={`# Temporary
$env:GEMINI_API_KEY = "your-api-key"
$env:GEMINI_MODEL = "gemini-pro"

# Permanent (current user)
[Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "your-api-key", "User")
[Environment]::SetEnvironmentVariable("GEMINI_MODEL", "gemini-pro", "User")`}
                    />
                  </TabsContent>

                  <TabsContent value="docker">
                    <CodeBlock
                      language="dockerfile"
                      code={`# Dockerfile
ENV GEMINI_API_KEY=your-api-key
ENV GEMINI_MODEL=gemini-pro
ENV GEMINI_TEMPERATURE=0.7

# Docker run
docker run -e GEMINI_API_KEY=your-api-key \\
           -e GEMINI_MODEL=gemini-pro \\
           your-image

# Docker Compose
version: '3.8'
services:
  app:
    image: your-image
    environment:
      GEMINI_API_KEY: your-api-key
      GEMINI_MODEL: gemini-pro`}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Advanced Configuration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Advanced Configuration</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configuration Profiles</CardTitle>
                <CardDescription>Use different configurations for different environments</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Create development profile
gemini config profile create development
gemini config set models.temperature 0.9 --profile development

# Create production profile  
gemini config profile create production
gemini config set models.temperature 0.3 --profile production

# Switch profiles
gemini config profile use development

# List profiles
gemini config profile list`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuration Validation</CardTitle>
                <CardDescription>Validate your configuration for errors</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Validate current configuration
gemini config validate

# Validate specific config file
gemini config validate --file ./custom-config.json

# Check configuration completeness
gemini config check

# Show effective configuration
gemini config show --resolved`}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuration Schema</CardTitle>
                <CardDescription>JSON schema for configuration validation</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="bash"
                  code={`# Generate configuration schema
gemini config schema > gemini-config.schema.json

# Validate against schema
npm install -g ajv-cli
ajv validate -s gemini-config.schema.json -d your-config.json`}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Configuration Migration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration Migration</h2>
          
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Version Compatibility</AlertTitle>
            <AlertDescription>
              Configuration format may change between major versions. 
              Use migration tools to update your configuration files.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Migration Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`# Check if migration is needed
gemini config migrate --check

# Migrate configuration to latest format
gemini config migrate --backup

# Migrate specific file
gemini config migrate --file old-config.json --output new-config.json

# Show migration preview
gemini config migrate --dry-run`}
              />
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Configuration Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use project-specific configs for teams
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Store sensitive data in environment variables
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Version control your config files
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use profiles for different environments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Document custom configurations
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Validate configs before deployment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertCircle className="h-5 w-5" />
                  Avoid These Mistakes
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
                    Don't use overly high temperature values
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't set timeout values too low
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't ignore configuration validation errors
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't use production configs in development
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    Don't modify global configs without testing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Configuration Complete!
              </CardTitle>
              <CardDescription className="text-green-600 dark:text-green-300">
                You now know how to configure Gemini CLI for optimal performance and workflow integration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/tutorials/getting-started">
                    <div className="font-semibold mb-1">Start Building</div>
                    <div className="text-sm opacity-90">Apply your configuration in practice</div>
                    <ArrowRight className="h-4 w-4 mt-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                  <Link href="/docs/commands">
                    <div className="font-semibold mb-1">Explore Commands</div>
                    <div className="text-sm opacity-75">Learn about all available commands</div>
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
            <Link href="/docs/commands">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Commands
            </Link>
          </Button>
          <Button asChild>
            <Link href="/tutorials/getting-started">
              Getting Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 