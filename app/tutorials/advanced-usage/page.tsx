import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Terminal,
  Code,
  Zap,
  Settings,
  FileText,
  GitBranch,
  AlertTriangle,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { TutorialNavigation } from "@/components/tutorial-navigation"
import { CodeBlock } from "@/components/code-block"
import { TutorialProgress } from "@/components/tutorial-progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { secrets } from "some-secrets-module" // Declare secrets variable
import { file } from "some-file-module" // Declare file variable

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
              Intermediate
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              30 minutes
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-1" />
              AI Expert
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
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Basic knowledge of JSON and YAML</span>
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
- Rate limiting protection
"`}
                    title="Context-aware Generation"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-500" />
                    Template-based Prompts
                  </h3>
                  <p className="text-muted-foreground mb-4">Use templates for consistent results:</p>
                  <CodeBlock
                    language="bash"
                    code={`gemini generate --template "api-endpoint" "
Create a REST API endpoint for user management with:
- Resource: users
- Operations: CRUD (Create, Read, Update, Delete)
- Authentication: JWT tokens
- Validation: Joi schema
- Database: MongoDB with Mongoose
"`}
                    title="Template-based Generation"
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

            {/* Workflow Automation */}
            <section id="workflow-automation">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Workflow Automation</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Automate repetitive development tasks using Gemini CLI scripts and workflows.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <GitBranch className="h-5 w-5 mr-2 text-blue-500" />
                    Git Integration Workflow
                  </h3>
                  <p className="text-muted-foreground mb-4">Automate code review and commit message generation:</p>
                  <CodeBlock
                    language="bash"
                    code={`#!/bin/bash
# Auto-review and commit workflow

# Analyze changes
gemini analyze --git-diff --output review.md

# Generate commit message
COMMIT_MSG=$(gemini generate "Create a conventional commit message for these changes" --input review.md)

# Review and commit
echo "Proposed commit message: $COMMIT_MSG"
read -p "Proceed with commit? (y/n): " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "$COMMIT_MSG"
fi`}
                    title="git-workflow.sh"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Terminal className="h-5 w-5 mr-2 text-green-500" />
                    CI/CD Pipeline Integration
                  </h3>
                  <p className="text-muted-foreground mb-4">Integrate Gemini CLI into your CI/CD pipeline:</p>
                  <CodeBlock
                    language="yaml"
                    code={`name: AI-Powered Code Review
on: [pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Gemini CLI
        run: npm install -g @google/gemini-cli

      - name: Authenticate\
        run: gemini auth login --token ${{ secrets.GEMINI_TOKEN }}

      - name: Analyze Changes
        run: |
          gemini analyze --git-diff --format json > analysis.json
          gemini generate "Create a PR review comment based on this analysis" --input analysis.json > review.md
          
      - name: Post Review
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('review.md', 'utf8');
            github.rest.pulls.createReview({
              owner: context.repo.owner,
              repo: context.repo.repo,
              pull_number: context.issue.number,
              body: review,
              event: 'COMMENT'
            });
`}
                    title=".github/workflows/ai-review.yml"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Custom Workflow Scripts
                  </h3>
                  <p className="text-muted-foreground mb-4">Create reusable workflow scripts:</p>
                  <CodeBlock
                    language="javascript"
                    code={`#!/usr/bin/env node
// generate-docs.js - Auto-generate documentation

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function generateDocs() {
  console.log('🤖 Generating documentation with Gemini CLI...');
  
  // Find all source files
  const sourceFiles = execSync('find src -name "*.ts" -o -name "*.js"', { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean);
  
  for (const file of sourceFiles) {
    console.log(\`📝 Processing \${file}...\`);
    
    // Generate documentation for each file
    const docContent = execSync(
      \`gemini generate "Create comprehensive JSDoc documentation for this code" --file "\${file}"\`,
      { encoding: 'utf8' }
    );
    
    // Save documentation
    const docPath = file.replace('src/', 'docs/').replace(/\.js$/, '.ts'); // Replace .js with .ts
    fs.mkdirSync(path.dirname(docPath), { recursive: true });
    fs.writeFileSync(docPath, docContent);
  }
  
  console.log('✅ Documentation generation complete!');
}

generateDocs().catch(console.error);`}
                    title="generate-docs.js"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Configuration */}
            <section id="configuration">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  3
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
                    Create a global configuration file at <code>~/.gemini/config.json</code>:
                  </p>
                  <CodeBlock
                    language="json"
                    code={`{
  "defaultModel": "gemini-pro",
  "maxTokens": 8192,
  "temperature": 0.7,
  "outputFormat": "markdown",
  "profiles": {
    "development": {
      "model": "gemini-pro",
      "temperature": 0.3,
      "systemPrompt": "You are a senior software developer. Provide clean, well-documented code with best practices."
    },
    "creative": {
      "model": "gemini-pro",
      "temperature": 0.9,
      "systemPrompt": "You are a creative coding assistant. Think outside the box and suggest innovative solutions."
    },
    "review": {
      "model": "gemini-pro",
      "temperature": 0.1,
      "systemPrompt": "You are a code reviewer. Focus on security, performance, and maintainability."
    }
  },
  "aliases": {
    "review": "analyze --profile review",
    "docs": "generate --profile development 'Create documentation for this code'",
    "test": "generate --profile development 'Create comprehensive unit tests'"
  }
}`}
                    title="~/.gemini/config.json"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Project-specific Configuration</h3>
                  <p className="text-muted-foreground mb-4">
                    Create project-specific settings with <code>.gemini.json</code>:
                  </p>
                  <CodeBlock
                    language="json"
                    code={`{
  "extends": "~/.gemini/config.json",
  "project": {
    "name": "My React App",
    "type": "react-typescript",
    "framework": "Next.js 14"
  },
  "rules": {
    "codeStyle": "prettier",
    "linting": "eslint",
    "testing": "jest"
  },
  "templates": {
    "component": "Create a React component with TypeScript, following our project conventions",
    "hook": "Create a custom React hook with proper TypeScript types and JSDoc",
    "api": "Create a Next.js API route with input validation and error handling"
  },
  "ignore": [
    "node_modules/**",
    "dist/**",
    "*.test.ts",
    "*.spec.ts"
  ]
}`}
                    title=".gemini.json"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Using Profiles</h3>
                  <p className="text-muted-foreground mb-4">Switch between different configurations:</p>
                  <CodeBlock
                    language="bash"
                    code={`# Use development profile
gemini generate --profile development "Create a user service class"

# Use creative profile for brainstorming
gemini chat --profile creative "Help me think of innovative features for my app"

# Use review profile for code analysis
gemini analyze --profile review --file src/components/UserForm.tsx

# Set default profile
gemini config set defaultProfile development`}
                    title="Using Configuration Profiles"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Batch Processing */}
            <section id="batch-processing">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Batch Processing</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Process multiple files and perform bulk operations efficiently with Gemini CLI.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Batch File Analysis</h3>
                  <CodeBlock
                    language="bash"
                    code={`# Analyze all TypeScript files in src directory
gemini batch analyze --pattern "src/**/*.ts" --output analysis-report.json

# Generate documentation for all components
gemini batch generate --pattern "src/components/*.tsx" --template "Create JSDoc documentation" --output docs/

# Review all files changed in last commit
gemini batch analyze --git-diff HEAD~1 --format markdown > code-review.md`}
                    title="Batch Analysis Commands"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Parallel Processing</h3>
                  <CodeBlock
                    language="bash"
                    code={`# Process files in parallel (faster for large codebases)
gemini batch generate --pattern "src/**/*.js" --parallel 4 --template "Add TypeScript types"

# Limit concurrent requests to avoid rate limiting
gemini batch analyze --pattern "**/*.py" --concurrency 2 --delay 1000`}
                    title="Parallel Processing Options"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Custom Batch Scripts</h3>
                  <CodeBlock
                    language="bash"
                    code={`#!/bin/bash
# migrate-to-typescript.sh - Convert JS files to TypeScript

echo "🔄 Starting JavaScript to TypeScript migration..."

# Find all JS files
find src -name "*.js" -not -path "*/node_modules/*" | while read file; do
    echo "Converting $file..."
    
    # Generate TypeScript version
    ts_content=$(gemini generate "Convert this JavaScript file to TypeScript with proper types" --file "$file")
    
    # Create TypeScript file
    ts_file="${file}.ts" # Corrected line
    echo "$ts_content" > "$ts_file"
    
    # Verify the conversion
    if npx tsc --noEmit "$ts_file" 2>/dev/null; then
        echo "✅ Successfully converted $file to $ts_file"
        rm "$file"  # Remove original JS file
    else
        echo "❌ Failed to convert $file, keeping original"
        rm "$ts_file"
    fi
done

echo "🎉 Migration complete!"`}
                    title="migrate-to-typescript.sh"
                  />
                </div>
              </div>

              <Alert className="mt-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Rate Limiting</AlertTitle>
                <AlertDescription>
                  Be mindful of API rate limits when processing large numbers of files. Use the{" "}
                  <code>--delay</code> and <code>--concurrency</code> options to control request frequency.
                </AlertDescription>
              </Alert>
            </section>

            <Separator />

            {/* Integration */}
            <section id="integration">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Tool Integration</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Integrate Gemini CLI with your favorite development tools and editors.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">VS Code Integration</h3>
                  <p className="text-muted-foreground mb-4">Create custom VS Code tasks:</p>
                  <CodeBlock
                    language="json"
                    code={`{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Gemini: Generate Documentation",
      "type": "shell",
      "command": "gemini",
      "args": [
        "generate",
        "Create comprehensive JSDoc documentation for this code",
        "--file",
        "\${file}"
      ],
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      }
    },
    {
      "label": "Gemini: Code Review",
      "type": "shell",
      "command": "gemini",
      "args": [
        "analyze",
        "--file",
        "\${file}",
        "--format",
        "markdown"
      ],
      "group": "test"
    }
  ]
}`}
                    title=".vscode/tasks.json"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Vim/Neovim Integration</h3>
                  <CodeBlock
                    language="vim"
                    code={`" Add to your .vimrc or init.vim

" Generate documentation for current file
command! GeminiDocs !gemini generate "Create documentation" --file %

" Analyze current file
command! GeminiAnalyze !gemini analyze --file % --format markdown

" Generate code from visual selection
vnoremap <leader>gg :!gemini generate "Improve this code"<CR>

" Custom function for interactive generation
function! GeminiGenerate()
    let prompt = input('Gemini prompt: ')
    if !empty(prompt)
        execute '!gemini generate "' . prompt . '" --file %'
    endif
endfunction

nnoremap <leader>gp :call GeminiGenerate()<CR>`}
                    title="Vim Configuration"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Package.json Scripts</h3>
                  <CodeBlock
                    language="json"
                    code={`{
  "scripts": {
    "ai:docs": "gemini batch generate --pattern 'src/**/*.ts' --template 'Generate JSDoc documentation'",
    "ai:review": "gemini analyze --git-diff --format markdown > review.md",
    "ai:test": "gemini batch generate --pattern 'src/**/*.ts' --template 'Create unit tests' --output tests/",
    "ai:refactor": "gemini generate 'Suggest refactoring improvements' --directory src/",
    "ai:migrate": "./scripts/migrate-to-typescript.sh",
    "precommit": "npm run ai:review && git add review.md"
  }
}`}
                    title="package.json"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Next Steps */}
            <section id="next-steps">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Next Steps</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                You've mastered advanced Gemini CLI techniques! Here's what to explore next:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                      Custom Plugins
                    </CardTitle>
                    <CardDescription>Learn to build your own Gemini CLI plugins and extensions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/tutorials/custom-plugins">
                        Build Plugins
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                      API Reference
                    </CardTitle>
                    <CardDescription>Explore the complete API documentation and command reference</CardDescription>
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
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TutorialNavigation
              sections={[
                { id: "complex-prompting", title: "Complex Prompting" },
                { id: "workflow-automation", title: "Workflow Automation" },
                { id: "configuration", title: "Configuration" },
                { id: "batch-processing", title: "Batch Processing" },
                { id: "integration", title: "Integration" },
                { id: "next-steps", title: "Next Steps" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
