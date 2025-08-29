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
      className={`relative py-16 px-4 sm:px-6 lg:px-8 ${
        gradient ? "bg-gradient-to-br from-[#f0ede4] via-[#e8e4db] to-[#f0ede4]" : "bg-[#f0ede4]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5a4324] mb-6 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.h2
            className="text-xl md:text-2xl text-[#2244ae] font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            className="text-lg text-[#8b7355] max-w-2xl mx-auto mb-8 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {description}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
