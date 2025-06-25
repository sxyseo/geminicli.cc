"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function TutorialPreview() {
  const { t } = useLanguage()

  const tutorials = [
    {
      title: t("tutorials.gettingStarted.title"),
      description: t("tutorials.gettingStarted.description"),
      level: t("tutorials.levels.beginner"),
      duration: "15 min",
      author: "Gemini Team",
      href: "/tutorials/getting-started",
    },
    {
      title: t("tutorials.advancedUsage.title"),
      description: t("tutorials.advancedUsage.description"),
      level: t("tutorials.levels.intermediate"),
      duration: "30 min",
      author: "AI Expert",
      href: "/tutorials/advanced-usage",
    },
    {
      title: t("tutorials.customPlugins.title"),
      description: t("tutorials.customPlugins.description"),
      level: t("tutorials.levels.advanced"),
      duration: "45 min",
      author: "Dev Community",
      href: "/tutorials/custom-plugins",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("tutorials.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("tutorials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{tutorial.level}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                <CardDescription className="text-base">{tutorial.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {tutorial.author}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={tutorial.href}>
                      {t("tutorials.readMore")}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/tutorials">
              {t("tutorials.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
