import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

const topContributors = [
  {
    name: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 156,
    role: "Core Maintainer",
    github: "alexchen",
  },
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 89,
    role: "Plugin Developer",
    github: "sarahj",
  },
  {
    name: "Mike Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 67,
    role: "Documentation",
    github: "mikero",
  },
  {
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 45,
    role: "Community Manager",
    github: "emmaw",
  },
]

const recentDiscussions = [
  {
    title: "Best practices for large codebase analysis",
    author: "DevMaster",
    replies: 23,
    category: "Tips & Tricks",
    time: "2 hours ago",
  },
  {
    title: "New plugin for VS Code integration",
    author: "CodeNinja",
    replies: 15,
    category: "Plugins",
    time: "4 hours ago",
  },
  {
    title: "Performance optimization techniques",
    author: "SpeedDemon",
    replies: 31,
    category: "Performance",
    time: "6 hours ago",
  },
  {
    title: "Gemini CLI v2.1 feature requests",
    author: "FutureBuilder",
    replies: 42,
    category: "Feature Requests",
    time: "1 day ago",
  },
]

const upcomingEvents = [
  {
    title: "Gemini CLI Workshop",
    date: "Dec 15, 2024",
    time: "2:00 PM UTC",
    type: "Workshop",
    attendees: 156,
  },
  {
    title: "Community Showcase",
    date: "Dec 22, 2024",
    time: "3:00 PM UTC",
    type: "Showcase",
    attendees: 89,
  },
  {
    title: "Q&A with Core Team",
    date: "Jan 5, 2025",
    time: "1:00 PM UTC",
    type: "Q&A",
    attendees: 234,
  },
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
            <Twitter className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <CardTitle>Twitter Updates</CardTitle>
            <CardDescription>Follow us for the latest news, tips, updates, and community highlights.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Followers</span>
                <span className="text-blue-500">12,000+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Weekly Posts</span>
                <span>15+</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Follow Us
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Top Contributors */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Top Contributors</h2>
          <Button variant="outline" asChild>
            <Link href="/community/contributors">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topContributors.map((contributor) => (
            <Card key={contributor.name} className="text-center">
              <CardContent className="pt-6">
                <Avatar className="h-16 w-16 mx-auto mb-4">
                  <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                  <AvatarFallback>
                    {contributor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{contributor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{contributor.role}</p>
                <Badge variant="secondary">
                  <Trophy className="h-3 w-3 mr-1" />
                  {contributor.contributions} contributions
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recent Discussions</h2>
          <Button variant="outline" asChild>
            <Link href="/community/discussions">View All</Link>
          </Button>
        </div>
        <div className="space-y-4">
          {recentDiscussions.map((discussion) => (
            <Card key={discussion.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{discussion.category}</Badge>
                      <span className="text-sm text-muted-foreground">{discussion.time}</span>
                    </div>
                    <h3 className="font-semibold mb-1">{discussion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      by {discussion.author} • {discussion.replies} replies
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{event.type}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                <CardTitle className="text-lg">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    {event.time}
                  </div>
                </div>
                <Button className="w-full">Register</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Community Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Heart className="h-8 w-8 mx-auto mb-4 text-red-500" />
            <h3 className="font-semibold mb-2">Be Respectful</h3>
            <p className="text-sm text-muted-foreground">Treat all community members with respect and kindness.</p>
          </div>
          <div className="text-center">
            <Code className="h-8 w-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">Share Knowledge</h3>
            <p className="text-sm text-muted-foreground">Help others learn and grow by sharing your expertise.</p>
          </div>
          <div className="text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-4 text-green-500" />
            <h3 className="font-semibold mb-2">Stay Curious</h3>
            <p className="text-sm text-muted-foreground">
              Keep learning and exploring new possibilities with Gemini CLI.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
