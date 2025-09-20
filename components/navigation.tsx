"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Plans", href: "/plans" },
  { name: "Reviews", href: "/reviews" },
  { name: "Our Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl gradient-text">Pointer</span>
              <span className="text-xs text-muted-foreground font-medium">Digital Agency</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-primary/10 group",
                  pathname === item.href
                    ? "text-primary bg-primary/15 font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-primary/5",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="btn-modern bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 group">
              <Link href="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
                  <span className="sr-only">Toggle menu</span>
                  <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] glass border-l border-primary/10">
                <div className="flex flex-col space-y-2 mt-12">
                  <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-primary/10">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold">P</span>
                    </div>
                    <div>
                      <span className="font-bold text-lg gradient-text">Pointer</span>
                      <p className="text-xs text-muted-foreground">Digital Agency</p>
                    </div>
                  </div>

                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl group",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5",
                      )}
                    >
                      <span>{item.name}</span>
                      {pathname === item.href && <Sparkles className="h-4 w-4 text-primary" />}
                    </Link>
                  ))}

                  <div className="pt-6 mt-6 border-t border-primary/10">
                    <Button className="w-full btn-modern bg-primary hover:bg-primary/90 text-primary-foreground py-3 group">
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
