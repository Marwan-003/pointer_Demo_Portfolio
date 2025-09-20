"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "hello@pointer.agency",
    action: "mailto:hello@pointer.agency",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    value: "123 Innovation St, Tech City, TC 12345",
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    value: "Mon-Fri: 9AM-6PM EST",
    action: "#",
  },
]

const socialLinks = [
  { icon: Github, name: "GitHub", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: Twitter, name: "Twitter", url: "#" },
]

const projectTypes = [
  "Custom Website",
  "E-commerce Platform",
  "Landing Page",
  "Web Application",
  "Redesign Project",
  "Other",
]

const budgetRanges = ["Under $2,000", "$2,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

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
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Let's Connect</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
                Let's Build Something{" "}
                <span className="gradient-text relative">
                  Together
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Easy communication with clear forms and direct links. Make it simple for clients to reach out quickly
                and start their digital transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-32" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Start Your Project</h2>
                  <p className="text-lg text-muted-foreground">
                    Tell us about your project and we'll get back to you with a detailed proposal within 24 hours.
                  </p>
                </div>

                <Card className="border-0 shadow-2xl bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
                  <CardContent className="p-8 relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="projectType" className="text-sm font-medium">
                            Project Type *
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleSelectChange("projectType", value)}
                          >
                            <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary/40">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-sm font-medium">
                            Budget Range
                          </Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => handleSelectChange("budget", value)}
                          >
                            <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary/40">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-sm font-medium">
                          Project Timeline
                        </Label>
                        <Input
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          placeholder="e.g., ASAP, 2-3 months, flexible"
                          className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={5}
                          className="bg-background/50 border-primary/20 focus:border-primary/40 transition-all resize-none"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group shadow-xl hover:shadow-2xl transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 order-1 lg:order-2">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Ready to start your project? We're here to help bring your vision to life.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg bg-gradient-to-r from-background to-primary/5 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                            <a href={info.action} className="text-primary hover:underline font-medium text-sm">
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-secondary/5 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <MessageSquare className="h-5 w-5 mr-2 text-secondary" />
                      Follow Us
                    </CardTitle>
                    <CardDescription>Stay connected and see our latest work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="hover:bg-primary/10 hover:border-primary/30 transition-all bg-transparent"
                          asChild
                        >
                          <a href={social.url} aria-label={social.name}>
                            <social.icon className="h-4 w-4" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Quick Actions</h3>
                  <div className="grid gap-3">
                    <Button
                      variant="outline"
                      className="justify-start bg-gradient-to-r from-background to-primary/5 border-primary/20 hover:bg-primary/10 transition-all"
                      asChild
                    >
                      <a href="mailto:hello@pointer.agency">
                        <Mail className="mr-3 h-4 w-4 text-primary" />
                        Send us an email
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start bg-gradient-to-r from-background to-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all"
                      asChild
                    >
                      <a href="/services">
                        <Calendar className="mr-3 h-4 w-4 text-secondary" />
                        View our services
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">Quick answers to common questions about working with us</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Most projects take 3-6 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you work with businesses outside your local area?",
                  answer:
                    "Yes! We work with clients worldwide. All our communication and project management is done remotely using modern collaboration tools.",
                },
                {
                  question: "What information do you need to get started?",
                  answer:
                    "We'll need details about your business, project goals, target audience, preferred features, and any design preferences you have in mind.",
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer:
                    "Yes, we offer various maintenance and support packages to keep your website updated, secure, and performing optimally.",
                },
                {
                  question: "Can you help with hosting and domain setup?",
                  answer:
                    "We can help you choose the right hosting solution and assist with domain registration and DNS setup.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-gradient-to-r from-background to-primary/5 hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="floating-orb absolute top-10 left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="floating-orb absolute bottom-10 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-2xl">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl -z-10"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                We'll Respond Within <span className="gradient-text">24 Hours</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that time is valuable. That's why we guarantee a response to all inquiries within 24
                hours, usually much sooner. Ready to get started?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all" asChild>
                  <a href="#contact-form" className="flex items-center gap-2">
                    Send Message
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm border-primary/20 hover:bg-primary/5 bg-transparent"
                  asChild
                >
                  <a href="tel:+15551234567">Call Now</a>
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
