"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckSquare, TrendingUp, Sparkles, Zap, Target } from "lucide-react"
import { tasks } from "@/data/tasks"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)
  const week1Tasks = tasks.filter((task) => task.week === 1)
  const completedTasks = week1Tasks.filter((task) => task.status === "Done")
  const inProgressTasks = week1Tasks.filter((task) => task.status === "In Progress")

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
      gradient: "from-primary to-secondary",
    },
    {
      title: "View Tasks",
      description: "See your Week 1 assignments and track progress",
      href: "/tasks",
      icon: CheckSquare,
      variant: "outline" as const,
      gradient: "from-secondary to-accent",
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background bg-dots relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <Navigation />

      <HeroSection
        title="Welcome to MyIntern Hub"
        subtitle="Your Gateway to Success"
        description="Track your progress, access resources, and manage your internship journey all in one place."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PageHeader
            title={
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
                Dashboard
              </span>
            }
            description="Welcome to your intern hub. Track your progress and access everything you need."
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: TrendingUp,
              title: "Tasks Complete",
              value: `${completedTasks.length}/${week1Tasks.length}`,
              subtitle: "Week 1 Progress",
              color: "text-primary",
              delay: 0.1,
            },
            {
              icon: Zap,
              title: "In Progress",
              value: inProgressTasks.length,
              subtitle: "Active Tasks",
              color: "text-secondary",
              delay: 0.2,
            },
            {
              icon: Target,
              title: "Current Week",
              value: "1",
              subtitle: "Getting Started",
              color: "text-accent",
              delay: 0.3,
            },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="perspective-1000"
              >
                <Card className="hover-lift hover-glow glass border-2 border-white/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="pb-3 relative z-10">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <motion.div
                      className={`text-2xl font-bold ${stat.color}`}
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
                    <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.section
          className="mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-xl font-semibold mb-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            Quick Actions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  className="perspective-1000"
                >
                  <Card className="hover-tilt glass border-2 border-white/20 relative overflow-hidden group cursor-pointer">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                    />
                    <motion.div
                      className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                    />
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center gap-3">
                        <motion.div
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                            color: "rgb(34, 68, 174)",
                          }}
                          transition={{ duration: 0.5 }}
                          className="p-2 rounded-lg bg-primary/10"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                          {action.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                      <Button variant={action.variant} asChild className="group-hover:animate-pulse-glow">
                        <Link href={action.href}>
                          <motion.span whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                            Get Started
                          </motion.span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Your Week 1 Tasks</h2>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild className="hover-glow bg-transparent">
                <Link href="/tasks">View All</Link>
              </Button>
            </motion.div>
          </div>

          <div className="space-y-3">
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
                whileHover={{
                  scale: 1.02,
                  x: 10,
                }}
              >
                <Card className="hover-lift glass border-l-4 border-l-primary/50 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <motion.h3
                          className="font-medium text-sm text-balance mb-1"
                          whileHover={{ color: "rgb(34, 68, 174)" }}
                        >
                          {task.title}
                        </motion.h3>
                        <p className="text-xs text-muted-foreground text-pretty">{task.goal}</p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge
                          variant={task.status === "Done" ? "default" : "outline"}
                          className="text-xs shrink-0 animate-morph-border"
                        >
                          {task.status}
                        </Badge>
                      </motion.div>
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
