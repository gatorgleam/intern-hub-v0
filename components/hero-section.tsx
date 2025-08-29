"use client"

import type { ReactNode } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  gradient?: boolean
}

export function HeroSection({ title, subtitle, description, children, gradient = true }: HeroSectionProps) {
  return (
    <section
      className={`relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${
        gradient ? "bg-gradient-to-br from-background via-muted to-background" : "bg-background"
      } overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight animate-slide-up animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-primary">
          {title}
        </h1>

        {subtitle && (
          <h2
            className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </h2>
        )}

        {description && (
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {description}
          </p>
        )}

        {children && (
          <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
