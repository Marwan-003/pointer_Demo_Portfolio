import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic Plan",
    price: "$1,500",
    period: "one-time",
    description: "Perfect for small businesses and startups looking to establish their online presence.",
    icon: Zap,
    color: "text-primary",
    bgColor: "bg-primary/10",
    popular: false,
    features: [
      "Landing Page Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "Google Analytics Setup",
      "1 Month Free Support",
      "Basic Performance Optimization",
    ],
    deliverables: [
      "Professional landing page",
      "Mobile-optimized design",
      "SEO-friendly structure",
      "Contact form functionality",
    ],
  },
  {
    name: "Standard Plan",
    price: "$3,500",
    period: "one-time",
    description: "Ideal for growing businesses that need a comprehensive web presence with management capabilities.",
    icon: Star,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    popular: true,
    features: [
      "Multi-page Website (up to 8 pages)",
      "Custom Admin Dashboard",
      "Content Management System",
      "Advanced SEO Optimization",
      "Blog/News Section",
      "Email Newsletter Integration",
      "3 Months Free Maintenance",
      "Performance & Security Optimization",
      "Social Media Integration",
      "Google Analytics & Search Console",
    ],
    deliverables: [
      "Complete multi-page website",
      "Custom admin dashboard",
      "Content management system",
      "Blog functionality",
    ],
  },
  {
    name: "Premium Plan",
    price: "$6,500",
    period: "one-time",
    description: "Complete solution for established businesses requiring advanced features and ongoing support.",
    icon: Crown,
    color: "text-primary",
    bgColor: "bg-primary/10",
    popular: false,
    features: [
      "Full Website / E-Commerce Platform",
      "Advanced Admin Dashboard",
      "Payment Gateway Integration",
      "Inventory Management System",
      "User Account Management",
      "Advanced Analytics & Reporting",
      "24/7 Priority Support",
      "6 Months Free Maintenance",
      "Custom Integrations (CRM, Email, etc.)",
      "Advanced Security Features",
      "Performance Monitoring",
      "Regular Backups & Updates",
    ],
    deliverables: [
      "Full e-commerce platform",
      "Advanced admin dashboard",
      "Payment processing",
      "User management system",
    ],
  },
]

const addOns = [
  {
    name: "Additional Pages",
    price: "$200",
    description: "Add extra pages to your website",
  },
  {
    name: "E-commerce Integration",
    price: "$1,500",
    description: "Add online store functionality",
  },
  {
    name: "Custom Integrations",
    price: "$500",
    description: "Connect with third-party services",
  },
  {
    name: "Advanced SEO Package",
    price: "$800",
    description: "Comprehensive SEO optimization",
  },
]

export default function PlansPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Plans Made Simple. Pick What <span className="gradient-text">Fits You</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Clear, transparent pricing with features tailored to different business stages. Let clients self-select
                their plan without confusion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`card-magnetic border-0 shadow-xl relative overflow-hidden ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 shadow-lg animate-pulse-gentle">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

                  <CardHeader className="text-center pb-6 relative z-10">
                    <div
                      className={`w-20 h-20 rounded-2xl ${plan.bgColor} flex items-center justify-center mx-auto mb-6 shadow-lg animate-glow-subtle`}
                    >
                      <plan.icon className={`h-10 w-10 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold gradient-text">{plan.price}</div>
                      <div className="text-sm text-muted-foreground font-medium">{plan.period}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-4">{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Features Included:</h4>
                      <div className="grid gap-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start text-sm">
                            <div className="p-1 rounded-full bg-primary/20 mr-3 flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary">What You Get:</h4>
                      <div className="grid gap-2">
                        {plan.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-start text-sm">
                            <div className="p-1 rounded-full bg-secondary/20 mr-3 flex-shrink-0 mt-0.5">
                              <CheckCircle className="h-3 w-3 text-secondary" />
                            </div>
                            <span className="text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full btn-modern shadow-lg" size="lg" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Choose This Plan
                        <plan.icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Optional <span className="gradient-text">Add-ons</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Enhance your website with additional features and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg text-center">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                    <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to launch, here's how we bring your project to life
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    week: "Week 1",
                    title: "Discovery & Planning",
                    description: "We analyze your requirements, create wireframes, and plan the project timeline.",
                  },
                  {
                    week: "Week 2-3",
                    title: "Design & Development",
                    description: "Our team creates the design and begins development using modern technologies.",
                  },
                  {
                    week: "Week 4",
                    title: "Testing & Refinement",
                    description: "Thorough testing across devices and browsers, with refinements based on feedback.",
                  },
                  {
                    week: "Week 5",
                    title: "Launch & Support",
                    description: "Website goes live with full documentation and ongoing support begins.",
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <Badge variant="outline" className="text-sm">
                        {phase.week}
                      </Badge>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What's included in the maintenance period?",
                  answer:
                    "Maintenance includes security updates, bug fixes, content updates, and technical support during business hours.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at any time. We'll credit your previous investment toward the new plan.",
                },
                {
                  question: "Do you provide hosting services?",
                  answer:
                    "We can recommend reliable hosting providers and help with setup, but hosting costs are separate from our development fees.",
                },
                {
                  question: "What if I need custom features not listed?",
                  answer:
                    "We offer custom development services. Contact us to discuss your specific requirements and get a personalized quote.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get <span className="gradient-text">Started</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose your plan and let's create something amazing together. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
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
