"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Zap, Globe, Code, Shield, Workflow, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Terminal,
      title: t("features.terminal.title"),
      description: t("features.terminal.description"),
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Zap,
      title: t("features.performance.title"),
      description: t("features.performance.description"),
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.2,
    },
    {
      icon: Globe,
      title: t("features.multilingual.title"),
      description: t("features.multilingual.description"),
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: Code,
      title: t("features.integration.title"),
      description: t("features.integration.description"),
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-red-500 to-rose-500",
      delay: 0.5,
    },
    {
      icon: Workflow,
      title: t("features.workflow.title"),
      description: t("features.workflow.description"),
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.6,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="gradient-text">{t("features.title")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("features.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">{feature.description}</CardDescription>
                  <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
