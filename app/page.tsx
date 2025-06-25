import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TutorialPreview } from "@/components/tutorial-preview"
import { TerminalDemo } from "@/components/terminal-demo"
import { CommunitySection } from "@/components/community-section"
import { SEOContent } from "@/components/seo-content"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <TerminalDemo />
      <TutorialPreview />
      <CommunitySection />
      <SEOContent />
    </div>
  )
}
