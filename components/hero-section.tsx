"use client"

import { motion } from "framer-motion"
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
    <motion.section
      className={`relative section-padding container-padding ${
        gradient ? "bg-gradient-to-br from-background via-muted to-background" : "bg-background"
      } bg-grid-subtle`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight title-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.h2
            className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-gentle-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            className="animate-fade-in-scale"
          >
            {children}
          </motion.div>
        )}
      </div>

      <div className="section-divider" />
    </motion.section>
  )
}
