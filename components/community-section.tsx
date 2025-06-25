"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, MessageCircle, Twitter, Users, Star, GitFork } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function CommunitySection() {
  const { t } = useLanguage()

  const communityStats = [
    { icon: Users, label: "Active Users", value: "25,000+" },
    { icon: Star, label: "GitHub Stars", value: "8,500+" },
    { icon: GitFork, label: "Forks", value: "1,200+" },
    { icon: MessageCircle, label: "Discord Members", value: "5,000+" },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("community.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("community.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Discord Community</CardTitle>
              <CardDescription>Join our active Discord server for real-time help and discussions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">{t("community.discord")}</Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Open Source</CardTitle>
              <CardDescription>Contribute to the project, report issues, and help improve Gemini CLI</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("community.github")}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Twitter className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Follow us on Twitter for the latest news, tips, and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                {t("community.twitter")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
