import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/professional-woman-avatar.png",
    rating: 5,
    content:
      "Pointer delivered exactly what we needed. The website is fast, beautiful, and our customers love it. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder, ShopLocal",
    avatar: "/professional-man-avatar.png",
    rating: 5,
    content:
      "Outstanding work! They built our e-commerce platform from scratch and provided excellent ongoing support.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "/professional-woman-avatar-2.png",
    rating: 5,
    content:
      "The team at Pointer is incredibly professional. They understood our vision and brought it to life perfectly.",
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Trusted by Clients, Proven by <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground">Real testimonials show credibility and client satisfaction</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-base mb-6 text-muted-foreground">"{review.content}"</blockquote>
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
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
