import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ProjectsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
