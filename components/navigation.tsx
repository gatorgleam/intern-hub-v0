"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/", icon: "🏠" },
  { name: "Onboarding", href: "/onboarding", icon: "📚" },
  { name: "Tasks", href: "/tasks", icon: "✅" },
  { name: "Resources", href: "/resources", icon: "📁" },
  { name: "Submissions", href: "/submissions", icon: "📤" },
  { name: "FAQ", href: "/faq", icon: "❓" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-card/95 via-card/90 to-card/95 animate-liquid-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="relative">
              <Link
                href="/"
                className="text-2xl md:text-3xl font-bold text-white hover:text-white transition-all duration-500 hover-magnetism animate-text-shimmer"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#2244ae] text-2xl animate-particle-float">⭐</span>
                  MyIntern Hub
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href

                return (
                  <div
                    key={item.name}
                    className="animate-slide-from-void"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden group hover-3d-lift",
                        "hover:shadow-lg hover:shadow-primary/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg animate-liquid-glow"
                          : "text-muted-foreground hover:text-foreground glass-advanced",
                      )}
                    >
                      <span className="text-base transition-all duration-300 group-hover:scale-110 group-hover:animate-particle-float">
                        {item.icon}
                      </span>
                      <span className="relative z-10 group-hover:animate-text-shimmer">{item.name}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-morphing-float" />
                      )}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition-all duration-300 ease-out hover:bg-primary/10 hover:shadow-lg relative overflow-hidden group pulse-ring hover-magnetism"
              aria-label="Toggle mobile menu"
            >
              <div className={`transition-transform duration-500 ${mobileMenuOpen ? "rotate-180 scale-110" : ""}`}>
                <span className="text-lg group-hover:animate-particle-float">{mobileMenuOpen ? "✕" : "☰"}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-morphing-float" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden border-t border-border glass-advanced backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-2 space-y-1">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <div key={item.name} className="animate-slide-from-void" style={{ animationDelay: `${index * 0.05}s` }}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden group hover-magnetism",
                      "hover:shadow-md hover:shadow-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md animate-liquid-glow"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="text-base transition-all duration-300 group-hover:scale-110 group-hover:animate-particle-float">
                      {item.icon}
                    </span>
                    <span className="relative z-10 group-hover:animate-text-shimmer">{item.name}</span>
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-morphing-float" />
                    )}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
