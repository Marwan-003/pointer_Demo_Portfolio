"use client"

import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, Sparkles, Rocket, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const particleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createParticle = () => {
      if (!particleRef.current) return

      const particle = document.createElement("div")
      particle.className = "particle animate-particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDuration = Math.random() * 15 + 15 + "s"
      particle.style.animationDelay = Math.random() * 8 + "s"

      particleRef.current.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 30000)
    }

    const interval = setInterval(createParticle, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 min-h-screen flex items-center">
      <div className="absolute inset-0 hero-gradient dark:hero-gradient light:hero-gradient-light"></div>
      <div ref={particleRef} className="absolute inset-0 pointer-events-none"></div>

      <div className="absolute top-20 left-20 w-96 h-96 morph-shape animate-morph opacity-20"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 morph-shape animate-morph opacity-15"
        style={{ animationDelay: "8s" }}
      ></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-glow-subtle animate-float"></div>
        <div
          className="absolute top-40 right-20 w-1.5 h-1.5 bg-secondary rounded-full animate-glow-subtle animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-accent rounded-full animate-glow-subtle animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-modern border border-primary/20 text-sm font-medium text-primary mb-6 animate-glow-subtle">
              <Sparkles className="h-4 w-4 animate-pulse-gentle" />
              <span className="gradient-text-advanced">Award-Winning Web Agency</span>
              <Star className="h-4 w-4 fill-current animate-pulse-gentle" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-8xl font-bold text-balance leading-tight">
                Crafting Digital{" "}
                <span className="gradient-text-advanced text-glow-subtle animate-gradient block lg:inline">
                  Masterpieces
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                We transform ambitious ideas into stunning digital experiences that captivate audiences and drive
                unprecedented business growth through innovative design and cutting-edge technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="group btn-modern bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-semibold rounded-2xl"
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-3 h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-modern glass-modern border-2 border-primary/20 hover:border-primary/40 px-12 py-7 text-lg font-semibold rounded-2xl bg-transparent"
              >
                <Link href="/projects" className="flex items-center">
                  Explore Portfolio
                  <Rocket className="ml-3 h-5 w-5 transition-all duration-300 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-16">
              <div className="text-center group cursor-pointer card-magnetic rounded-2xl p-6 glass-modern">
                <div className="text-3xl lg:text-5xl font-bold gradient-text-advanced mb-2 group-hover:scale-110 transition-all duration-500">
                  50+
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium group-hover:text-primary transition-colors">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center group cursor-pointer card-magnetic rounded-2xl p-6 glass-modern">
                <div className="text-3xl lg:text-5xl font-bold gradient-text-advanced mb-2 group-hover:scale-110 transition-all duration-500">
                  100%
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium group-hover:text-primary transition-colors">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center group cursor-pointer card-magnetic rounded-2xl p-6 glass-modern">
                <div className="text-3xl lg:text-5xl font-bold gradient-text-advanced mb-2 group-hover:scale-110 transition-all duration-500">
                  24/7
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium group-hover:text-primary transition-colors">
                  Expert Support
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bento-grid">
              <div className="bento-item wide card-magnetic glass-modern border border-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl flex items-center justify-center mb-6 animate-3d-rotate">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">Custom Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bespoke solutions crafted with precision and innovation
                </p>
              </div>

              <div className="bento-item card-magnetic glass-modern border border-secondary/10">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-secondary via-accent to-secondary rounded-2xl flex items-center justify-center mb-6 animate-3d-rotate"
                  style={{ animationDelay: "10s" }}
                >
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">Optimized performance that exceeds expectations</p>
              </div>

              <div className="bento-item card-magnetic glass-modern border border-accent/10">
                <div
                  className="w-16 h-16 bg-gradient-to-br from-accent via-primary to-accent rounded-2xl flex items-center justify-center mb-6 animate-3d-rotate"
                  style={{ animationDelay: "20s" }}
                >
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">Stunning Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Award-winning designs that captivate and convert
                </p>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float animate-glow-subtle blur-xl"></div>
            <div
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float animate-glow-subtle blur-xl"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
