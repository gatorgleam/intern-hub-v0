"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckSquare, TrendingUp, Sparkles, Zap, Target } from "lucide-react"
import { tasks } from "@/data/tasks"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const week1Tasks = tasks.filter((task) => task.week === 1)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickActions = [
    {
      title: "Start Onboarding",
      description: "Get set up with all the tools and access you need",
      href: "/onboarding",
      icon: BookOpen,
      variant: "default" as const,
    },
    {
      title: "View Tasks",
      description: "See your Week 1 assignments and get started",
      href: "/tasks",
      icon: CheckSquare,
      variant: "outline" as const,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        title="Welcome to MyIntern Hub"
        subtitle="Your Gateway to Success"
        description="Access resources, manage your internship journey, and get started with your assignments all in one place."
      />

      <main className="max-w-6xl mx-auto container-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <PageHeader
            title="Dashboard"
            description="Welcome to your intern hub. Access everything you need to get started."
            className="title-glow"
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: TrendingUp,
              title: "Total Tasks",
              value: week1Tasks.length,
              subtitle: "Week 1 Tasks",
              color: "text-primary",
              bgColor: "bg-primary/10",
              delay: 0.1,
            },
            {
              icon: Zap,
              title: "Available Tasks",
              value: week1Tasks.length,
              subtitle: "Ready to Start",
              color: "text-accent",
              bgColor: "bg-accent/10",
              delay: 0.2,
            },
            {
              icon: Target,
              title: "Current Week",
              value: "1",
              subtitle: "Getting Started",
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              delay: 0.3,
            },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
              >
                <Card className="hover-lift glass border-0 shadow-sm relative overflow-hidden">
                  <div
                    className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardHeader className="pb-3 relative z-10">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.div
                      className={`text-3xl font-bold ${stat.color} mb-1`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: stat.delay + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Quick Actions */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-heading font-bold title-glow">Quick Actions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                  }}
                >
                  <Card className="hover-lift glass border-0 shadow-sm group cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-heading">{action.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-pretty">{action.description}</p>
                      <Button variant={action.variant} asChild className="w-full hover-scale button-press">
                        <Link href={action.href}>Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Recent Tasks */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold title-glow">Your Week 1 Tasks</h2>
            <Button variant="outline" size="sm" asChild className="hover-scale bg-transparent">
              <Link href="/tasks">View All</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {week1Tasks.slice(0, 3).map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  type: "spring",
                }}
              >
                <Card className="hover-lift glass border-0 shadow-sm border-l-4 border-l-primary group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-balance group-hover:text-primary transition-colors">
                          {task.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-pretty">{task.goal}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
