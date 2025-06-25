"use client"

import { useLanguage } from "@/components/language-provider"

export function SEOContent() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h2 className="text-3xl font-bold mb-8">Complete Gemini CLI Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div>
              <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Installation and setup guide</li>
                <li>• Authentication with Google Cloud</li>
                <li>• Basic commands and usage</li>
                <li>• Configuration best practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom plugin development</li>
                <li>• Workflow automation</li>
                <li>• API integration patterns</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Code generation and review</li>
                <li>• Documentation automation</li>
                <li>• Content creation workflows</li>
                <li>• Data analysis and insights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security considerations</li>
                <li>• Rate limiting strategies</li>
                <li>• Error handling patterns</li>
                <li>• Testing and debugging</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Gemini CLI?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Gemini CLI represents the cutting edge of AI-powered development tools. Built by Google, it provides
              developers with unprecedented access to advanced language models through a simple, intuitive command-line
              interface. Whether you're generating code, analyzing data, or automating workflows, Gemini CLI offers the
              performance and reliability you need for production applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
