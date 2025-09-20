import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Layout, Smartphone, Search, Shield, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Custom Dynamic Websites",
    description: "Business sites, blogs, educational portals, and news websites built with modern technologies.",
    gradient: "from-primary to-secondary",
    delay: "0s",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Full online stores with product management, shopping carts, and secure checkout systems.",
    gradient: "from-secondary to-accent",
    delay: "0.1s",
  },
  {
    icon: Layout,
    title: "Multi-Page Business Sites",
    description: "Professional websites for corporates, agencies, consultancies, and startups.",
    gradient: "from-accent to-primary",
    delay: "0.2s",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimized for mobile, tablet, and desktop devices with perfect user experience.",
    gradient: "from-primary via-secondary to-accent",
    delay: "0.3s",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your website rank higher in search results.",
    gradient: "from-secondary to-primary",
    delay: "0.4s",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing security updates, performance optimization, and technical support.",
    gradient: "from-accent via-primary to-secondary",
    delay: "0.5s",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Zap className="h-4 w-4" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Web Development that Works for <span className="gradient-text animate-gradient">Your Business</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            From small landing pages to full e-commerce platforms, every website is dynamic, responsive, and tailored to
            your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover glass border-0 shadow-2xl group relative overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base lg:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                  {service.description}
                </CardDescription>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="btn-modern bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
          >
            <Link href="/services" className="flex items-center">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
