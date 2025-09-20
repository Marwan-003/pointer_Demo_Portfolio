import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProjects = [
  {
    title: "TechCorp Solutions",
    description: "Modern corporate website with dynamic content management and client portal.",
    image: "/modern-corporate-website.png",
    tags: ["React", "Next.js", "CMS"],
    category: "Corporate",
  },
  {
    title: "ShopEasy E-commerce",
    description: "Full-featured online store with payment integration and inventory management.",
    image: "/ecommerce-website-design.png",
    tags: ["E-commerce", "Stripe", "Dashboard"],
    category: "E-commerce",
  },
  {
    title: "StartupLaunch Landing",
    description: "High-converting landing page for a tech startup with lead generation forms.",
    image: "/startup-landing-page-design.jpg",
    tags: ["Landing Page", "Conversion", "Analytics"],
    category: "Landing Page",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Work that Speaks for <span className="gradient-text">Itself</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Each project card is clear, professional, and shows the tech and purpose behind it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
