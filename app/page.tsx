"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { tasks } from "@/data/tasks"
import Link from "next/link"
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
      variant: "default" as const,
    },
    {
      title: "View Tasks",
      description: "See your Week 1 assignments and get started",
      href: "/tasks",
      variant: "outline" as const,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background floating-elements relative overflow-hidden">
      <Navigation />

      <HeroSection
        title="Welcome to MyIntern Hub"
        subtitle="Your Gateway to Success"
        description="Access resources, manage your internship journey, and get started with your assignments all in one place."
      />

      <main className="max-w-6xl mx-auto container-padding stagger-children">
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent animate-liquid-glow" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 animate-morphing-float">
              <div className="w-3 h-3 bg-primary/50 rounded-full" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold animate-text-shimmer mb-8">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <Card
                key={action.title}
                className="hover-3d-lift glass-advanced border-0 shadow-sm group cursor-pointer flex flex-col h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-4 left-4 w-1 h-1 bg-secondary/40 rounded-full animate-particle-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
                <div
                  className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-particle-float"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />

                <CardHeader className="flex-shrink-0">
                  <CardTitle className="font-heading text-lg group-hover:animate-text-shimmer transition-all duration-300">
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between space-y-4">
                  <p className="text-muted-foreground text-pretty flex-grow text-lg">{action.description}</p>
                  <Button
                    variant={action.variant}
                    asChild
                    className="w-full text-lg font-semibold h-14 mt-auto pulse-ring hover-magnetism min-w-full flex items-center justify-center"
                  >
                    <Link href={action.href} className="flex items-center justify-center w-full">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-secondary/30 to-transparent animate-liquid-glow" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 animate-morphing-float" style={{ animationDelay: "2s" }}>
              <div className="w-3 h-3 bg-secondary/50 rounded-full" />
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold animate-text-shimmer">Weekly Tasks</h2>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="bg-transparent text-base font-semibold min-w-[140px] h-10 hover-magnetism pulse-ring flex items-center justify-center"
            >
              <Link href="/tasks" className="flex items-center justify-center">
                View All Tasks
              </Link>
            </Button>
          </div>

          <Card className="hover-3d-lift glass-advanced border-0 shadow-sm group cursor-pointer relative overflow-hidden animate-liquid-glow">
            <div className="absolute top-6 right-6 w-2 h-2 bg-primary/20 rounded-full animate-particle-float" />
            <div
              className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-secondary/25 rounded-full animate-particle-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 right-12 w-1 h-1 bg-primary/30 rounded-full animate-particle-float"
              style={{ animationDelay: "2s" }}
            />

            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-balance group-hover:animate-text-shimmer transition-all duration-500">
                  Access Your Weekly Tasks
                </h3>
                <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
                  View all your weekly assignments organized by week. Each week contains carefully curated tasks to help
                  you learn and grow as a marketing intern.
                </p>
                <Button
                  asChild
                  className="text-lg font-semibold h-14 min-w-[180px] mt-6 pulse-ring hover-magnetism flex items-center justify-center"
                >
                  <Link href="/tasks" className="flex items-center justify-center gap-2">
                    Go to Tasks
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
