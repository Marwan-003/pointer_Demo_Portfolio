import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "/client-avatar-1.png",
    rating: 5,
    content:
      "Pointer delivered exactly what we needed. The website is fast, beautiful, and our customers love it. The team was professional throughout the entire process and delivered on time. Highly recommended!",
    project: "Corporate Website",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "ShopLocal",
    avatar: "/client-avatar-2.png",
    rating: 5,
    content:
      "Outstanding work! They built our e-commerce platform from scratch and provided excellent ongoing support. Our sales have increased by 40% since the launch. The admin dashboard is incredibly user-friendly.",
    project: "E-commerce Platform",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    avatar: "/client-avatar-3.png",
    rating: 5,
    content:
      "The team at Pointer is incredibly professional. They understood our vision and brought it to life perfectly. The landing page they created has a 35% conversion rate, which exceeded our expectations.",
    project: "Landing Page",
    date: "January 2024",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Practice Manager",
    company: "HealthCare Plus",
    avatar: "/client-avatar-4.png",
    rating: 5,
    content:
      "Working with Pointer was a game-changer for our medical practice. The appointment booking system works flawlessly, and our patients love the new website. HIPAA compliance was handled perfectly.",
    project: "Healthcare Website",
    date: "December 2023",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Store Owner",
    company: "FashionHub",
    avatar: "/client-avatar-5.png",
    rating: 5,
    content:
      "The fashion e-commerce site they built is stunning! The mobile experience is fantastic, and the wishlist feature has increased customer engagement significantly. Sales are up 60% since launch.",
    project: "Fashion E-commerce",
    date: "November 2023",
  },
  {
    id: 6,
    name: "Robert Martinez",
    role: "Director",
    company: "EduLearn Academy",
    avatar: "/client-avatar-6.png",
    rating: 5,
    content:
      "The learning management system Pointer created for us is exceptional. Students and instructors find it intuitive to use. The progress tracking features have improved our course completion rates by 25%.",
    project: "Education Platform",
    date: "October 2023",
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Startup Founder",
    company: "InnovateTech",
    avatar: "/client-avatar-7.png",
    rating: 5,
    content:
      "Pointer helped us launch our startup with a professional website that perfectly represents our brand. The SEO optimization they provided has helped us rank #1 for our target keywords.",
    project: "Startup Website",
    date: "September 2023",
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogisticsPro",
    avatar: "/client-avatar-8.png",
    rating: 5,
    content:
      "The corporate website Pointer built for us has transformed our online presence. Lead generation has increased by 50%, and clients frequently compliment us on our professional website.",
    project: "Corporate Website",
    date: "August 2023",
  },
]

const stats = [
  {
    number: "4.9/5",
    label: "Average Rating",
    description: "Based on 50+ client reviews",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "All projects delivered successfully",
  },
  {
    number: "95%",
    label: "Repeat Clients",
    description: "Clients who return for more projects",
  },
  {
    number: "24h",
    label: "Response Time",
    description: "Average support response time",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Trusted by Clients, Proven by <span className="gradient-text">Results</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Real testimonials show credibility and client satisfaction. See what our clients say about working with
                Pointer and the results we've delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-lg card-hover">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-lg text-muted-foreground">Real feedback from real clients who have worked with us</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="card-hover border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <Badge variant="outline" className="ml-auto text-xs">
                        {review.project}
                      </Badge>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <blockquote className="text-base text-muted-foreground pl-6">"{review.content}"</blockquote>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-sm">{review.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {review.role}, {review.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Highlights */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground">Measurable results that speak for themselves</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-lg font-semibold mb-2">Sales Increase</div>
                  <div className="text-sm text-muted-foreground">
                    ShopLocal saw a 40% increase in sales after their e-commerce platform launch
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-lg font-semibold mb-2">Conversion Rate</div>
                  <div className="text-sm text-muted-foreground">
                    GrowthCo's landing page achieved a 35% conversion rate, exceeding expectations
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-8">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-lg font-semibold mb-2">Course Completion</div>
                  <div className="text-sm text-muted-foreground">
                    EduLearn Academy improved course completion rates by 25% with their new LMS
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Join Our <span className="gradient-text">Success Stories</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create something amazing together and add your success story to our growing list of satisfied
                clients.
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
