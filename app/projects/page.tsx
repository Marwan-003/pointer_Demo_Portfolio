"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Filter, Sparkles, Eye, Code, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "TechCorp Solutions",
    description: "Modern corporate website with dynamic content management and client portal.",
    image: "/modern-corporate-website.png",
    tags: ["React", "Next.js", "CMS", "TypeScript"],
    category: "Corporate",
    url: "#",
    client: "TechCorp Inc.",
    year: "2024",
    objective: "Create a professional corporate presence with client portal functionality",
  },
  {
    id: 2,
    title: "ShopEasy E-commerce",
    description: "Full-featured online store with payment integration and inventory management.",
    image: "/ecommerce-website-design.png",
    tags: ["E-commerce", "Stripe", "Dashboard", "React"],
    category: "E-commerce",
    url: "#",
    client: "ShopEasy Ltd.",
    year: "2024",
    objective: "Build a scalable e-commerce platform with advanced inventory management",
  },
  {
    id: 3,
    title: "StartupLaunch Landing",
    description: "High-converting landing page for a tech startup with lead generation forms.",
    image: "/startup-landing-page-design.jpg",
    tags: ["Landing Page", "Conversion", "Analytics", "Next.js"],
    category: "Landing Page",
    url: "#",
    client: "StartupLaunch",
    year: "2024",
    objective: "Create a high-converting landing page to capture leads and drive signups",
  },
  {
    id: 4,
    title: "HealthCare Plus",
    description: "Medical practice website with appointment booking and patient portal.",
    image: "/healthcare-website-design.png",
    tags: ["Healthcare", "Booking", "Portal", "HIPAA"],
    category: "Corporate",
    url: "#",
    client: "HealthCare Plus",
    year: "2023",
    objective: "Develop a HIPAA-compliant website with integrated appointment booking",
  },
  {
    id: 5,
    title: "FashionHub Store",
    description: "Trendy fashion e-commerce site with advanced filtering and wishlist features.",
    image: "/fashion-ecommerce-design.png",
    tags: ["Fashion", "E-commerce", "Wishlist", "Mobile"],
    category: "E-commerce",
    url: "#",
    client: "FashionHub",
    year: "2023",
    objective: "Create a mobile-first fashion e-commerce experience with social features",
  },
  {
    id: 6,
    title: "EduLearn Platform",
    description: "Educational platform with course management and student progress tracking.",
    image: "/education-platform-design.png",
    tags: ["Education", "LMS", "Progress", "Video"],
    category: "Corporate",
    url: "#",
    client: "EduLearn Academy",
    year: "2023",
    objective: "Build a comprehensive learning management system for online education",
  },
]

const categories = ["All", "Corporate", "E-commerce", "Landing Page"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
            <div className="floating-orb absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float"></div>
            <div className="floating-orb absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float-delayed"></div>
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
                <Eye className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Our Portfolio</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Work that Speaks for{" "}
                <span className="gradient-text relative">
                  Itself
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Each project card is clear, professional, and shows the tech and purpose behind it. Explore our
                portfolio of successful web development projects.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-b border-primary/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center text-muted-foreground mr-6">
                <Filter className="h-4 w-4 mr-2" />
                <span className="font-medium">Filter by:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category ? "shadow-lg" : "hover:bg-primary/10 hover:border-primary/30"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`/ceholder-svg-key-l9yay-key-proj.jpg?key=l9yay&key=proj${project.id}&height=224&width=400&query=${project.title.replace(" ", "%20")}%20website%20design`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm border-primary/20">
                        {project.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button size="sm" className="shadow-lg">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center justify-between text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">Client</div>
                        <div className="font-medium">{project.client}</div>
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">Year</div>
                        <div className="font-medium">{project.year}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-muted-foreground mb-2 text-sm">Objective</div>
                      <div className="text-sm leading-relaxed">{project.objective}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5"></div>
          <div className="floating-orb absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
          <div className="floating-orb absolute bottom-10 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float-delayed"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground">Numbers that speak to our commitment and success</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  number: "50+",
                  title: "Projects Completed",
                  desc: "Across various industries",
                  color: "text-primary",
                },
                {
                  icon: Sparkles,
                  number: "25+",
                  title: "Happy Clients",
                  desc: "Satisfied with our work",
                  color: "text-secondary",
                },
                {
                  icon: Zap,
                  number: "100%",
                  title: "Success Rate",
                  desc: "Projects delivered on time",
                  color: "text-primary",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm text-center group hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {stat.title}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10"></div>
          <div className="absolute inset-0">
            <div className="floating-orb absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="floating-orb absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Ready to Get Started?</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Start Your <span className="gradient-text">Project</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's create something amazing together. Contact us to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm border-primary/20 hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
