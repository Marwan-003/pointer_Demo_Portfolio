import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Zap, Target, Users, Award, Clock, Shield, ArrowRight, Sparkles } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    avatar: "/team-member-1.png",
    description: "Full-stack developer with 8+ years of experience in modern web technologies.",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "/team-member-2.png",
    description: "Creative designer focused on user-centered design and conversion optimization.",
  },
  {
    name: "Mike Rodriguez",
    role: "Project Manager",
    avatar: "/team-member-3.png",
    description: "Ensures projects are delivered on time with exceptional quality and communication.",
  },
]

const strengths = [
  {
    icon: Zap,
    title: "Speed",
    description: "Fast development cycles without compromising quality. We deliver projects efficiently.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Quality",
    description: "High-quality code, modern design, and best practices in every project we deliver.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Support",
    description: "Continuous support and maintenance to keep your website running smoothly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Experience",
    description: "Years of experience in web development across various industries and technologies.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <div className="absolute inset-0">
            <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="floating-orb absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float-delayed"></div>
            <div className="morphing-bg absolute inset-0 opacity-30"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">About Pointer Agency</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Built by{" "}
                <span className="text-primary relative">
                  Passion
                  <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-lg -z-10"></div>
                </span>
                , Driven by <span className="gradient-text">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                A young but ambitious team with speed, quality, and continuous support. We exist to turn your digital
                dreams into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 lg:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge
                    variant="outline"
                    className="w-fit px-4 py-2 text-sm font-medium border-primary/30 bg-primary/5"
                  >
                    Who We Are
                  </Badge>
                  <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                    We're{" "}
                    <span className="gradient-text relative">
                      Pointer
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      Pointer is a dynamic web development agency founded on the belief that every business deserves a
                      powerful digital presence. We specialize in creating custom websites that not only look stunning
                      but also drive real business results.
                    </p>
                    <p className="text-pretty">
                      Our team combines technical expertise with creative vision to deliver websites that stand out in
                      today's competitive digital landscape. From startups to established enterprises, we've helped
                      businesses across industries establish their online presence and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative space-y-6">
                  <div className="diagonal-card-container">
                    <Card className="magnetic-card border-0 shadow-xl bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <Target className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Mission Focused</h3>
                            <p className="text-muted-foreground">
                              Delivering exceptional web solutions that drive business growth
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="diagonal-card-container ml-8">
                    <Card className="magnetic-card border-0 shadow-xl bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                            <Users className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Client Centered</h3>
                            <p className="text-muted-foreground">
                              Your success is our priority in every project we undertake
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="diagonal-card-container ml-4">
                    <Card className="magnetic-card border-0 shadow-xl bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">Innovation Driven</h3>
                            <p className="text-muted-foreground">Using cutting-edge technologies to build the future</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="split-screen-left p-12 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-r border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower businesses with exceptional web solutions that drive growth, enhance user experience, and
                    establish a strong digital presence. We believe every business deserves a website that truly
                    represents their brand and achieves their goals.
                  </p>
                </div>
              </div>
              <div className="split-screen-right p-12 bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-secondary/20">
                      <Award className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the leading web development agency known for innovation, quality, and client success. We
                    envision a digital world where every business has the tools and presence they need to thrive in the
                    modern marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                The passionate individuals behind every successful project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                          <AvatarImage
                            src={`/abstract-geometric-shapes.png?key=okawh&height=96&width=96&query=${member.name.replace(" ", "%20")}%20professional%20headshot`}
                            alt={member.name}
                          />
                          <AvatarFallback className="text-2xl bg-primary/20 text-primary">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                          {member.role}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our <span className="gradient-text">Partners in Success</span>
              </h2>
              <p className="text-lg text-muted-foreground">Trusted by businesses across various industries</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[
                { name: "TechCorp", logo: "tech%20company%20logo" },
                { name: "StartupHub", logo: "startup%20company%20logo" },
                { name: "RetailPlus", logo: "retail%20company%20logo" },
                { name: "HealthCare Pro", logo: "healthcare%20company%20logo" },
                { name: "EduLearn", logo: "education%20company%20logo" },
                { name: "FinanceFirst", logo: "finance%20company%20logo" },
              ].map((partner, index) => (
                <div key={index} className="group">
                  <div className="relative p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <img
                      src={`/abstract-geometric-shapes.png?key=3fcpa&height=60&width=120&query=${partner.logo}`}
                      alt={partner.name}
                      className="h-12 w-auto mx-auto opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">Pointer</span>
              </h2>
              <p className="text-lg text-muted-foreground">Our key strengths that set us apart</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strengths.map((strength, index) => (
                <div key={index} className="strength-card group">
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-primary/5 backdrop-blur-sm h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="relative mb-6">
                        <div className="circular-progress w-20 h-20 mx-auto">
                          <div
                            className={`w-16 h-16 rounded-full ${strength.bgColor} flex items-center justify-center mx-auto border-2 border-primary/20`}
                          >
                            <strength.icon className={`h-8 w-8 ${strength.color}`} />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {strength.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">{strength.description}</p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-5 w-5 text-primary mx-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
