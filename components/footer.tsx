"use client"

import Link from "next/link"
import { Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "API Reference", href: "/api" },
      { name: "Changelog", href: "/changelog" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Examples", href: "/examples" },
      { name: "Blog", href: "/blog" },
    ],
    community: [
      { name: "Discord", href: "https://discord.gg/gemini-cli" },
      { name: "GitHub", href: "https://github.com/google/gemini-cli" },
      { name: "Twitter", href: "https://twitter.com/gemini-cli" },
      { name: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/gemini-cli" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Terminal className="h-6 w-6" />
              <span className="font-bold text-xl">Gemini CLI</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              The most comprehensive resource for learning and mastering Google's Gemini CLI. Build powerful AI
              applications with confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-foreground">
                Sitemap
              </Link>
              <Link href="/rss.xml" className="text-sm text-muted-foreground hover:text-foreground">
                RSS
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.product")}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.community")}</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Gemini CLI Tutorial. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
