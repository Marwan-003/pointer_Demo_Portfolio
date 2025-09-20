import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Globe,
  ShoppingCart,
  Layout,
  Smartphone,
  Search,
  Shield,
  Zap,
  Settings,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Custom Dynamic Websites",
    description: "Business sites, blogs, educational portals, and news websites built with modern technologies.",
    features: ["Custom CMS Integration", "Dynamic Content Management", "SEO Optimized", "Mobile Responsive"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    price: "Starting at $2,500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description: "Full online stores with product management, shopping carts, and secure checkout systems.",
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    price: "Starting at $4,500",
  },
  {
    icon: Layout,
    title: "Multi-Page Business Sites",
    description: "Professional websites for corporates, agencies, consultancies, and startups.",
    features: ["Professional Design", "Contact Forms", "Service Pages", "About Sections"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    price: "Starting at $1,800",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimized for mobile, tablet, and desktop devices with perfect user experience.",
    features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch-Friendly Interface", "Fast Loading"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    price: "Included in all packages",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to help your website rank higher in search results.",
    features: ["Keyword Optimization", "Meta Tags Setup", "Site Speed Optimization", "Analytics Integration"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    price: "Starting at $800",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing security updates, performance optimization, and technical support.",
    features: ["Security Monitoring", "Regular Updates", "Backup Services", "24/7 Support"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    price: "Starting at $200/month",
  },
]

const additionalServices = [
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website for better user experience and search rankings.",
  },
  {
    icon: Settings,
    title: "Third-Party Integrations",
    description: "Connect your website with CRM, email marketing, and other business tools.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track your website performance with detailed analytics and reporting.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0">
            <div className="animated-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Premium Web Development</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Web Development that Works for{" "}
                <span className="gradient-text relative">
                  Your Business
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                From small landing pages to full e-commerce platforms, every website is dynamic, responsive, and
                tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive web development solutions for every business need
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardHeader className="relative p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-xl ${service.bgColor} border border-primary/20 group-hover:scale-110 transition-transform`}
                        >
                          <service.icon className={`h-6 w-6 ${service.color}`} />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">
                            {service.price.includes("$") ? service.price.split(" ").pop() : service.price}
                          </div>
                          {service.price.includes("Starting") && (
                            <div className="text-xs text-muted-foreground">Starting at</div>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="p-0.5 rounded-full bg-primary/20 mr-2 flex-shrink-0">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button size="sm" className="w-full group-hover:shadow-md transition-all" asChild>
                        <Link href="/contact" className="flex items-center justify-center gap-2 text-sm">
                          Get Quote
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
          <div className="floating-orb absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          <div className="floating-orb absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float-delayed"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Additional <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Extra services to enhance your website's performance and functionality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader className="text-center p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                How we bring your vision to life in 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We understand your business goals, target audience, and project requirements.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Create wireframes and designs that align with your brand and user experience goals.",
                  icon: Layout,
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build your website using modern technologies and best practices for performance.",
                  icon: Settings,
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Deploy your website and provide ongoing support and maintenance as needed.",
                  icon: Zap,
                },
              ].map((process, index) => (
                <div key={index} className="group relative">
                  {/* Connection line for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                  )}

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative z-10 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto text-lg font-bold shadow-lg group-hover:scale-110 transition-transform">
                          {process.step}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                          <process.icon className="h-3 w-3 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
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
                Let's discuss your requirements and create a website that drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="group shadow-xl" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm border-primary/20 hover:bg-primary/5 bg-transparent"
                  asChild
                >
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
