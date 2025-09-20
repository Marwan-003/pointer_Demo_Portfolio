import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Building2, ShoppingBag, GraduationCap, Heart, Zap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const clients = [
  {
    id: 1,
    name: "TechStart Inc.",
    logo: "/client-logo-techstart.png",
    industry: "Technology",
    description: "Leading software development company specializing in enterprise solutions.",
    project: "Corporate Website & Client Portal",
    results: "50% increase in lead generation",
    website: "#",
    icon: Building2,
  },
  {
    id: 2,
    name: "ShopLocal",
    logo: "/client-logo-shoplocal.png",
    industry: "E-commerce",
    description: "Local marketplace connecting consumers with neighborhood businesses.",
    project: "E-commerce Platform",
    results: "40% increase in sales",
    website: "#",
    icon: ShoppingBag,
  },
  {
    id: 3,
    name: "GrowthCo",
    logo: "/client-logo-growthco.png",
    industry: "Marketing",
    description: "Digital marketing agency helping businesses scale their online presence.",
    project: "Landing Page & Lead Generation",
    results: "35% conversion rate",
    website: "#",
    icon: Zap,
  },
  {
    id: 4,
    name: "HealthCare Plus",
    logo: "/client-logo-healthcare.png",
    industry: "Healthcare",
    description: "Modern medical practice focused on patient-centered care.",
    project: "Healthcare Website & Booking System",
    results: "60% reduction in phone bookings",
    website: "#",
    icon: Heart,
  },
  {
    id: 5,
    name: "FashionHub",
    logo: "/client-logo-fashionhub.png",
    industry: "Fashion",
    description: "Trendy fashion retailer with a focus on sustainable clothing.",
    project: "Fashion E-commerce Platform",
    results: "60% increase in online sales",
    website: "#",
    icon: ShoppingBag,
  },
  {
    id: 6,
    name: "EduLearn Academy",
    logo: "/client-logo-edulearn.png",
    industry: "Education",
    description: "Online education platform offering professional development courses.",
    project: "Learning Management System",
    results: "25% improvement in course completion",
    website: "#",
    icon: GraduationCap,
  },
  {
    id: 7,
    name: "InnovateTech",
    logo: "/client-logo-innovate.png",
    industry: "Startup",
    description: "AI-powered startup revolutionizing customer service automation.",
    project: "Startup Website & SEO",
    results: "#1 ranking for target keywords",
    website: "#",
    icon: Zap,
  },
  {
    id: 8,
    name: "LogisticsPro",
    logo: "/client-logo-logistics.png",
    industry: "Logistics",
    description: "Supply chain management company serving enterprise clients.",
    project: "Corporate Website",
    results: "50% increase in qualified leads",
    website: "#",
    icon: Building2,
  },
  {
    id: 9,
    name: "CreativeStudio",
    logo: "/client-logo-creative.png",
    industry: "Design",
    description: "Full-service creative agency specializing in brand identity.",
    project: "Portfolio Website",
    results: "200% increase in project inquiries",
    website: "#",
    icon: Users,
  },
]

const industries = [
  { name: "Technology", count: 12, icon: Building2 },
  { name: "E-commerce", count: 8, icon: ShoppingBag },
  { name: "Healthcare", count: 6, icon: Heart },
  { name: "Education", count: 5, icon: GraduationCap },
  { name: "Marketing", count: 4, icon: Zap },
  { name: "Other", count: 15, icon: Users },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Trusted by Leading <span className="gradient-text">Brands</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Displaying real businesses we've worked with builds credibility and trust. Our partners in success span
                across various industries and business sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We've helped businesses across diverse industries achieve their digital goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg text-center">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                    <div className="text-2xl font-bold text-primary">{industry.count}+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Partners in <span className="gradient-text">Success</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet some of the amazing businesses we've had the privilege to work with
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client) => (
                <Card key={client.id} className="card-hover border-0 shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={`${client.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{client.industry}</Badge>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{client.name}</CardTitle>
                    <CardDescription className="text-base">{client.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Project:</div>
                      <div className="text-sm">{client.project}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">Results:</div>
                      <div className="text-sm font-semibold text-primary">{client.results}</div>
                    </div>
                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <Link href={client.website}>
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos Grid */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Trusted by <span className="gradient-text">50+ Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join the growing list of successful businesses that trust Pointer
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {clients.slice(0, 6).map((client) => (
                <div
                  key={client.id}
                  className="flex items-center justify-center p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={80}
                    height={40}
                    className="object-contain max-h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Client <span className="gradient-text">Success Metrics</span>
              </h2>
              <p className="text-lg text-muted-foreground">Real results from real partnerships</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-lg font-semibold mb-1">Happy Clients</div>
                  <div className="text-sm text-muted-foreground">Across various industries</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-lg font-semibold mb-1">Client Retention</div>
                  <div className="text-sm text-muted-foreground">Return for additional projects</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <div className="text-lg font-semibold mb-1">Average Growth</div>
                  <div className="text-sm text-muted-foreground">In client business metrics</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-lg font-semibold mb-1">Project Success</div>
                  <div className="text-sm text-muted-foreground">On-time delivery rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Become Our Next <span className="gradient-text">Success Story</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the growing list of successful businesses that trust Pointer with their digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">View Our Work</Link>
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
