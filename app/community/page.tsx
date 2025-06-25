import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  MessageCircle,
  Twitter,
  Users,
  Star,
  GitFork,
  Calendar,
  Trophy,
  Heart,
  Code,
  BookOpen,
  Clock,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gemini CLI Community - Connect with Developers Worldwide",
  description:
    "Join the Gemini CLI community. Connect with developers, share projects, get help, and contribute to the ecosystem.",
  keywords: "Gemini CLI community, Discord, GitHub, developers, open source, contributions",
}

const communityStats = [
  { icon: Users, label: "Active Users", value: "25,000+", color: "text-blue-500" },
  { icon: Star, label: "GitHub Stars", value: "8,500+", color: "text-yellow-500" },
  { icon: GitFork, label: "Forks", value: "1,200+", color: "text-green-500" },
  { icon: MessageCircle, label: "Discord Members", value: "5,000+", color: "text-purple-500" },
]

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Community</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with thousands of developers worldwide. Share knowledge, get help, and contribute to the Gemini CLI
          ecosystem.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {communityStats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="pt-6">
              <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Community Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <CardTitle>Discord Community</CardTitle>
            <CardDescription>
              Join our active Discord server for real-time discussions, help, and community events.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Online Members</span>
                <span className="text-green-500">1,234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Total Members</span>
                <span>5,000+</span>
              </div>
            </div>
            <Button className="w-full">
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Discord
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Github className="h-12 w-12 mx-auto mb-4 text-gray-900 dark:text-white" />
            <CardTitle>GitHub Repository</CardTitle>
            <CardDescription>
              Contribute to the project, report issues, and help improve Gemini CLI for everyone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Stars</span>
                <span className="text-yellow-500">8,500+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Contributors</span>
                <span>156</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Twitter className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <CardTitle>Follow Updates</CardTitle>
            <CardDescription>
              Stay updated with the latest news, features, and community highlights on Twitter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Followers</span>
                <span className="text-blue-400">12.5K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Weekly Updates</span>
                <span>5-7</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Follow @GeminiCLI
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already building amazing AI applications with Gemini CLI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/tutorials/getting-started">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">
              <Code className="mr-2 h-5 w-5" />
              View Documentation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
