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
  Code,
  Package,
  Puzzle,
  Rocket,
  Info,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { TutorialNavigation } from "@/components/tutorial-navigation"
import { CodeBlock } from "@/components/code-block"
import { TutorialProgress } from "@/components/tutorial-progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Building Custom Plugins - Gemini CLI Tutorial",
  description:
    "Learn to create custom plugins for Gemini CLI to extend functionality and integrate with your specific workflows.",
  keywords: "Gemini CLI plugins, custom extensions, plugin development, CLI customization, advanced tutorial",
}

export default function CustomPluginsTutorial() {
  const steps = [
    { id: "plugin-architecture", title: "Plugin Architecture", completed: false },
    { id: "basic-plugin", title: "Basic Plugin", completed: false },
    { id: "advanced-features", title: "Advanced Features", completed: false },
    { id: "testing", title: "Testing", completed: false },
    { id: "publishing", title: "Publishing", completed: false },
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
            <Badge variant="destructive" className="bg-gradient-to-r from-red-600 to-pink-600">
              Advanced
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              60 minutes
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-1" />
              Plugin Developer
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Building Custom Plugins
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Create your own plugins to extend Gemini CLI functionality for specific use cases and integrate with your
            development workflow.
          </p>

          <TutorialProgress steps={steps} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Prerequisites */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20">
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
                    <span>Completed Advanced Usage tutorial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Strong JavaScript/TypeScript knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Understanding of Node.js and npm</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Familiarity with CLI development concepts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Separator />

            {/* Plugin Architecture */}
            <section id="plugin-architecture">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Plugin Architecture</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Understanding the Gemini CLI plugin system and how to structure your custom plugins.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Puzzle className="h-5 w-5 mr-2 text-blue-500" />
                    Plugin Structure
                  </h3>
                  <p className="text-muted-foreground mb-4">A typical Gemini CLI plugin structure:</p>
                  <CodeBlock
                    language="text"
                    code={`my-gemini-plugin/
├── package.json
├── README.md
├── src/
│   ├── index.ts          # Main plugin entry point
│   ├── commands/         # Command implementations
│   │   ├── analyze.ts
│   │   └── generate.ts
│   ├── utils/           # Utility functions
│   │   └── helpers.ts
│   └── types/           # TypeScript type definitions
│       └── index.ts
├── tests/               # Test files
│   └── commands.test.ts
└── docs/                # Documentation
    └── usage.md`}
                    title="Plugin Directory Structure"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Package className="h-5 w-5 mr-2 text-green-500" />
                    Plugin Manifest
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The <code>package.json</code> defines your plugin metadata:
                  </p>
                  <CodeBlock
                    language="json"
                    code={`{
  "name": "gemini-plugin-myfeature",
  "version": "1.0.0",
  "description": "Custom plugin for specialized workflows",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "keywords": ["gemini-cli", "plugin", "ai", "development"],
  "gemini": {
    "plugin": true,
    "version": "^2.0.0",
    "commands": {
      "mycommand": {
        "description": "Custom command description",
        "usage": "gemini mycommand [options]",
        "examples": [
          "gemini mycommand --input file.js",
          "gemini mycommand --batch --pattern '**/*.ts'"
        ]
      }
    },
    "hooks": {
      "pre-generate": "./hooks/pre-generate.js",
      "post-analyze": "./hooks/post-analyze.js"
    }
  },
  "peerDependencies": {
    "@google/gemini-cli": "^2.0.0"
  }
}`}
                    title="package.json"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-purple-500" />
                    Plugin Interface
                  </h3>
                  <p className="text-muted-foreground mb-4">Define TypeScript interfaces for your plugin:</p>
                  <CodeBlock
                    language="typescript"
                    code={`// src/types/index.ts
export interface PluginConfig {
  name: string;
  version: string;
  commands: Record<string, CommandDefinition>;
  hooks?: Record<string, string>;
}

export interface CommandDefinition {
  description: string;
  usage: string;
  examples: string[];
  handler: CommandHandler;
  options?: CommandOption[];
}

export interface CommandHandler {
  (args: CommandArgs, context: PluginContext): Promise<CommandResult>;
}

export interface CommandArgs {
  [key: string]: any;
  _: string[]; // Positional arguments
}

export interface PluginContext {
  gemini: GeminiClient;
  config: UserConfig;
  logger: Logger;
  fs: FileSystem;
}

export interface CommandResult {
  success: boolean;
  data?: any;
  error?: string;
  output?: string;
}`}
                    title="Plugin Type Definitions"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Basic Plugin */}
            <section id="basic-plugin">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Creating a Basic Plugin</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Let's create a simple plugin that adds custom code analysis capabilities.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Plugin Entry Point</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/index.ts
import { Plugin, PluginContext } from '@google/gemini-cli';
import { analyzeComplexity } from './commands/analyze-complexity';
import { generateTests } from './commands/generate-tests';

export default class MyCustomPlugin implements Plugin {
  name = 'my-custom-plugin';
  version = '1.0.0';

  async initialize(context: PluginContext): Promise<void> {
    context.logger.info('Initializing My Custom Plugin...');
    
    // Register commands
    context.registerCommand('analyze-complexity', analyzeComplexity);
    context.registerCommand('generate-tests', generateTests);
    
    // Register hooks
    context.registerHook('pre-analyze', this.preAnalyzeHook);
    context.registerHook('post-generate', this.postGenerateHook);
  }

  private async preAnalyzeHook(context: PluginContext, args: any): Promise<void> {
    context.logger.debug('Running pre-analyze hook');
    // Custom logic before analysis
  }

  private async postGenerateHook(context: PluginContext, result: any): Promise<void> {
    context.logger.debug('Running post-generate hook');
    // Custom logic after generation
  }
}`}
                    title="src/index.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Command Implementation</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/commands/analyze-complexity.ts
import { CommandHandler, CommandArgs, PluginContext, CommandResult } from '../types';
import * as fs from 'fs';
import * as path from 'path';

export const analyzeComplexity: CommandHandler = async (
  args: CommandArgs,
  context: PluginContext
): Promise<CommandResult> => {
  try {
    const { file, threshold = 10 } = args;
    
    if (!file) {
      return {
        success: false,
        error: 'File path is required'
      };
    }

    // Read file content
    const filePath = path.resolve(file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Analyze with Gemini
    const analysisPrompt = \`
Analyze the complexity of this code and provide:
1. Cyclomatic complexity score
2. Cognitive complexity score  
3. Maintainability index
4. Suggestions for improvement
5. Highlight functions with complexity > \${threshold}

Code:
\${content}
\`;

    const analysis = await context.gemini.generate({
      prompt: analysisPrompt,
      model: 'gemini-pro',
      temperature: 0.1
    });

    // Parse and format results
    const result = {
      file: filePath,
      analysis: analysis.text,
      timestamp: new Date().toISOString(),
      threshold
    };

    // Save results if requested
    if (args.output) {
      const outputPath = path.resolve(args.output);
      fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
      context.logger.info(\`Analysis saved to \${outputPath}\`);
    }

    return {
      success: true,
      data: result,
      output: analysis.text
    };

  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};`}
                    title="src/commands/analyze-complexity.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Utility Functions</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/utils/helpers.ts
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

export class FileUtils {
  static async findFiles(pattern: string, options: { ignore?: string[] } = {}): Promise<string[]> {
    const files = await glob(pattern, {
      ignore: options.ignore || ['node_modules/**', 'dist/**', '*.test.*']
    });
    return files;
  }

  static readFile(filePath: string): string {
    return fs.readFileSync(path.resolve(filePath), 'utf8');
  }

  static writeFile(filePath: string, content: string): void {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  }

  static getFileExtension(filePath: string): string {
    return path.extname(filePath).toLowerCase();
  }

  static isCodeFile(filePath: string): boolean {
    const codeExtensions = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java', '.cpp', '.c', '.cs'];
    return codeExtensions.includes(this.getFileExtension(filePath));
  }
}

export class PromptUtils {
  static createContextualPrompt(basePrompt: string, context: {
    language?: string;
    framework?: string;
    style?: string;
  }): string {
    let prompt = basePrompt;
    
    if (context.language) {
      prompt += \`\nLanguage: \${context.language}\`;
    }
    
    if (context.framework) {
      prompt += \`\nFramework: \${context.framework}\`;
    }
    
    if (context.style) {
      prompt += \`\nCode style: \${context.style}\`;
    }
    
    return prompt;
  }

  static formatCodeBlock(code: string, language: string): string {
    return \`\`\`\${language}\n\${code}\n\`\`\`\`;
  }
}`}
                    title="src/utils/helpers.ts"
                  />
                </div>
              </div>

              <Alert className="mt-6">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Best Practices</AlertTitle>
                <AlertDescription>
                  Always validate input parameters, handle errors gracefully, and provide meaningful feedback to users.
                  Use TypeScript for better development experience and type safety.
                </AlertDescription>
              </Alert>
            </section>

            <Separator />

            {/* Advanced Features */}
            <section id="advanced-features">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  3
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Advanced Plugin Features</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Implement advanced features like configuration management, caching, and interactive prompts.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Configuration Management</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/config/manager.ts
import * as fs from 'fs';
import * as path from 'path';
import { PluginContext } from '../types';

export interface PluginConfig {
  complexity: {
    threshold: number;
    includeTests: boolean;
    outputFormat: 'json' | 'markdown' | 'html';
  };
  analysis: {
    includeMetrics: string[];
    excludePatterns: string[];
  };
  cache: {
    enabled: boolean;
    ttl: number; // Time to live in seconds
  };
}

export class ConfigManager {
  private config: PluginConfig;
  private configPath: string;

  constructor(private context: PluginContext) {
    this.configPath = path.join(process.cwd(), '.gemini-plugin.json');
    this.loadConfig();
  }

  private loadConfig(): void {
    const defaultConfig: PluginConfig = {
      complexity: {
        threshold: 10,
        includeTests: false,
        outputFormat: 'json'
      },
      analysis: {
        includeMetrics: ['complexity', 'maintainability', 'duplication'],
        excludePatterns: ['node_modules/**', '*.test.*', 'dist/**']
      },
      cache: {
        enabled: true,
        ttl: 3600
      }
    };

    try {
      if (fs.existsSync(this.configPath)) {
        const userConfig = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
        this.config = { ...defaultConfig, ...userConfig };
      } else {
        this.config = defaultConfig;
        this.saveConfig();
      }
    } catch (error) {
      this.context.logger.warn('Failed to load config, using defaults');
      this.config = defaultConfig;
    }
  }

  private saveConfig(): void {
    try {
      fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.context.logger.error('Failed to save config:', error.message);
    }
  }

  get(key: string): any {
    return key.split('.').reduce((obj, k) => obj?.[k], this.config);
  }

  set(key: string, value: any): void {
    const keys = key.split('.');
    const lastKey = keys.pop()!;
    const target = keys.reduce((obj, k) => obj[k] = obj[k] || {}, this.config);
    target[lastKey] = value;
    this.saveConfig();
  }

  getConfig(): PluginConfig {
    return this.config;
  }
}`}
                    title="src/config/manager.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Caching System</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/cache/manager.ts
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

export interface CacheEntry {
  data: any;
  timestamp: number;
  hash: string;
}

export class CacheManager {
  private cacheDir: string;

  constructor() {
    this.cacheDir = path.join(process.cwd(), '.gemini-cache');
    this.ensureCacheDir();
  }

  private ensureCacheDir(): void {
    if (!fs.existsSync(this.cacheDir)) {
      fs.mkdirSync(this.cacheDir, { recursive: true });
    }
  }

  private generateKey(input: string): string {
    return crypto.createHash('md5').update(input).digest('hex');
  }

  private getCachePath(key: string): string {
    return path.join(this.cacheDir, \`\${key}.json\`);
  }

  async get(key: string, ttl: number = 3600): Promise<any | null> {
    try {
      const cachePath = this.getCachePath(key);

      if (!fs.existsSync(cachePath)) {
        return null;
      }

      const entry: CacheEntry = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

      const now = Date.now();

      if (now - entry.timestamp > ttl * 1000) {
        fs.unlinkSync(cachePath);
        return null;
      }

      return entry.data;
    } catch (error) {
      return null;
    }
  }

  async set(key: string, data: any): Promise<void> {
    try {
      const cachePath = this.getCachePath(key);
      const entry: CacheEntry = {
        data,
        timestamp: Date.now(),
        hash: this.generateKey(JSON.stringify(data))
      };

      fs.writeFileSync(cachePath, JSON.stringify(entry));
    } catch (error) {
      // Silently fail cache writes
    }
  }

  async clear(): Promise<void> {
    try {
      const files = fs.readdirSync(this.cacheDir);
      for (const file of files) {
        fs.unlinkSync(path.join(this.cacheDir, file));
      }
    } catch (error) {
      // Silently fail cache clears
    }
  }
}`}
                    title="src/cache/manager.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Interactive Prompts</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// src/interactive/prompts.ts
import * as readline from 'readline';

export class InteractivePrompts {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async confirm(message: string): Promise<boolean> {
    const answer = await this.ask(\`\${message} (y/N): \`);
    return ['y', 'yes', 'true', '1'].includes(answer.toLowerCase());
  }

  async select(message: string, options: string[]): Promise<string> {
    console.log(message);
    options.forEach((option, index) => {
      console.log(\`  \${index + 1}. \${option}\`);
    });

    while (true) {
      const answer = await this.ask('Select an option (number): ');
      const index = parseInt(answer) - 1;
      
      if (index >= 0 && index < options.length) {
        return options[index];
      }
      
      console.log('Invalid selection. Please try again.');
    }
  }

  async multiSelect(message: string, options: string[]): Promise<string[]> {
    console.log(message);
    options.forEach((option, index) => {
      console.log(\`  \${index + 1}. \${option}\`);
    });

    const answer = await this.ask('Select options (comma-separated numbers): ');
    const indices = answer.split(',')
      .map(s => parseInt(s.trim()) - 1)
      .filter(i => i >= 0 && i < options.length);

    return indices.map(i => options[i]);
  }

  close(): void {
    this.rl.close();
  }

  private ask(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, resolve);
    });
  }
}`}
                    title="src/interactive/prompts.ts"
                  />
                </div>
              </div>
            </section>

            <Separator />

            {/* Testing */}
            <section id="testing">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Testing Your Plugin</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Implement comprehensive testing to ensure your plugin works reliably across different scenarios.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Unit Tests</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// tests/commands.test.ts
import { analyzeComplexity } from '../src/commands/analyze-complexity';
import { PluginContext } from '../src/types';
import * as fs from 'fs';

// Mock dependencies
jest.mock('fs');
const mockFs = fs as jest.Mocked<typeof fs>;

describe('analyzeComplexity command', () => {
  let mockContext: PluginContext;

  beforeEach(() => {
    mockContext = {
      gemini: {
        generate: jest.fn().mockResolvedValue({
          text: 'Mock analysis result'
        })
      },
      logger: {
        info: jest.fn(),
        error: jest.fn(),
        debug: jest.fn()
      }
    } as any;

    mockFs.readFileSync.mockReturnValue('mock file content');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should analyze file complexity successfully', async () => {
    const args = {
      file: 'test.js',
      threshold: 5
    };

    const result = await analyzeComplexity(args, mockContext);

    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.data.file).toContain('test.js');
    expect(mockContext.gemini.generate).toHaveBeenCalledWith({
      prompt: expect.stringContaining('Analyze the complexity'),
      model: 'gemini-pro',
      temperature: 0.1
    });
  });

  it('should return error when file is not provided', async () => {
    const args = {};

    const result = await analyzeComplexity(args, mockContext);

    expect(result.success).toBe(false);
    expect(result.error).toBe('File path is required');
  });

  it('should save output when requested', async () => {
    const args = {
      file: 'test.js',
      output: 'analysis.json'
    };

    mockFs.writeFileSync.mockImplementation(() => {});

    const result = await analyzeComplexity(args, mockContext);

    expect(result.success).toBe(true);
    expect(mockFs.writeFileSync).toHaveBeenCalledWith(
      expect.stringContaining('analysis.json'),
      expect.any(String)
    );
  });
});`}
                    title="tests/commands.test.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Integration Tests</h3>
                  <CodeBlock
                    language="typescript"
                    code={`// tests/integration.test.ts
import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

describe('Plugin Integration Tests', () => {
  const testDir = path.join(__dirname, 'fixtures');
  const testFile = path.join(testDir, 'sample.js');

  beforeAll(() => {
    // Create test fixtures
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    fs.writeFileSync(testFile, \`
function complexFunction(a, b, c) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        return a + b + c;
      } else {
        return a + b;
      }
    } else {
      return a;
    }
  } else {
    return 0;
  }
}
\`);
  });

  afterAll(() => {
    // Cleanup
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
    if (fs.existsSync(testDir)) {
      fs.rmdirSync(testDir);
    }
  });

  it('should run complexity analysis via CLI', (done) => {
    const child = spawn('gemini', ['analyze-complexity', '--file', testFile], {
      stdio: 'pipe'
    });

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', (code) => {
      expect(code).toBe(0);
      expect(output).toContain('complexity');
      done();
    });
  }, 10000);

  it('should handle invalid file paths gracefully', (done) => {
    const child = spawn('gemini', ['analyze-complexity', '--file', 'nonexistent.js'], {
      stdio: 'pipe'
    });

    let errorOutput = '';
    child.stderr.on('data', (data) => {
      errorOutput += data.toString();
    });

    child.on('close', (code) => {
      expect(code).not.toBe(0);
      expect(errorOutput).toContain('error');
      done();
    });
  });
});`}
                    title="tests/integration.test.ts"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Test Configuration</h3>
                  <CodeBlock
                    language="json"
                    code={`{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:integration": "jest --testPathPattern=integration",
    "lint": "eslint src/**/*.ts",
    "build": "tsc",
    "dev": "tsc --watch"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "roots": ["<rootDir>/src", "<rootDir>/tests"],
    "testMatch": ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
    "collectCoverageFrom": [
      "src/**/*.ts",
      "!src/**/*.d.ts",
      "!src/index.ts"
    ],
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}`}
                    title="package.json (test configuration)"
                  />
                </div>
              </div>

              <Alert className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Testing Best Practices</AlertTitle>
                <AlertDescription>
                  Write tests for both success and failure scenarios. Mock external dependencies like the Gemini API to
                  ensure tests run quickly and reliably. Include integration tests to verify end-to-end functionality.
                </AlertDescription>
              </Alert>
            </section>

            <Separator />

            {/* Publishing */}
            <section id="publishing">
              <div className="flex items-center mb-6">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Publishing Your Plugin</h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Package and distribute your plugin so others can use it in their Gemini CLI workflows.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Build Configuration</h3>
                  <CodeBlock
                    language="json"
                    code={`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}`}
                    title="tsconfig.json"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">NPM Publishing</h3>
                  <CodeBlock
                    language="bash"
                    code={`# Build the plugin
npm run build

# Run tests
npm test

# Update version
npm version patch  # or minor/major

# Publish to npm
npm publish

# Install globally for testing
npm install -g gemini-plugin-myfeature

# Register with Gemini CLI
gemini plugin install gemini-plugin-myfeature`}
                    title="Publishing Commands"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">Documentation</h3>
                  <CodeBlock
                    language="markdown"
                    code={`# My Custom Gemini CLI Plugin

A powerful plugin that extends Gemini CLI with advanced code analysis capabilities.

## Installation

\`\`\`bash
npm install -g gemini-plugin-myfeature
gemini plugin install gemini-plugin-myfeature
\`\`\`

## Commands

### analyze-complexity

Analyzes code complexity and provides detailed metrics.

\`\`\`bash
gemini analyze-complexity --file src/app.js --threshold 10
\`\`\`

**Options:**
- \`--file\` (required): Path to the file to analyze
- \`--threshold\` (optional): Complexity threshold (default: 10)
- \`--output\` (optional): Save results to file

### generate-tests

Generates comprehensive unit tests for your code.

\`\`\`bash
gemini generate-tests --file src/utils.js --framework jest
\`\`\`

**Options:**
- \`--file\` (required): Path to the file to generate tests for
- \`--framework\` (optional): Testing framework (jest, mocha, vitest)
- \`--output\` (optional): Output directory for test files

## Configuration

Create a \`.gemini-plugin.json\` file in your project root:

\`\`\`json
{
  "complexity": {
    "threshold": 15,
    "includeTests": false
  },
  "analysis": {
    "includeMetrics": ["complexity", "maintainability"]
  }
}
\`\`\`

## Examples

\`\`\`bash
# Analyze a single file
gemini analyze-complexity --file src/app.js

# Generate tests for all components
gemini generate-tests --pattern "src/components/*.js" --framework jest

# Batch analysis with custom threshold
gemini analyze-complexity --pattern "src/**/*.js" --threshold 5 --output report.json
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT`}
                    title="README.md"
                  />
                </div>
              </div>

              <Alert className="mt-6">
                <Rocket className="h-4 w-4" />
                <AlertTitle>Distribution Tips</AlertTitle>
                <AlertDescription>
                  Follow semantic versioning, provide comprehensive documentation, and include examples. Consider
                  creating a GitHub repository with CI/CD for automated testing and publishing.
                </AlertDescription>
              </Alert>
            </section>

            <Separator />

            {/* Next Steps */}
            <section id="next-steps">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Next Steps</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Congratulations! You've learned how to create, test, and publish custom Gemini CLI plugins. Here are
                some ideas for further development:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                      Plugin Marketplace
                    </CardTitle>
                    <CardDescription>Explore existing plugins and share your creations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/community/plugins">
                        Browse Plugins
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                      Advanced Examples
                    </CardTitle>
                    <CardDescription>Study real-world plugin implementations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/docs/examples/plugins">
                        View Examples
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
                { id: "plugin-architecture", title: "Plugin Architecture" },
                { id: "basic-plugin", title: "Basic Plugin" },
                { id: "advanced-features", title: "Advanced Features" },
                { id: "testing", title: "Testing" },
                { id: "publishing", title: "Publishing" },
                { id: "next-steps", title: "Next Steps" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
