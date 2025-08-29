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
      className={`relative section-padding container-padding animate-fade-in ${
        gradient ? "bg-gradient-to-br from-background via-muted to-background" : "bg-background"
      } bg-grid-subtle`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight title-glow animate-slide-up">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-gentle-float animate-slide-up-delayed">
            {subtitle}
          </h2>
        )}

        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed animate-slide-up-delayed-2">
            {description}
          </p>
        )}

        {children && <div className="animate-fade-in-scale animate-slide-up-delayed-3">{children}</div>}
      </div>

      <div className="section-divider" />
    </section>
  )
}
