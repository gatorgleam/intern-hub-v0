"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PageHeader } from "@/components/page-header"
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        title="Welcome to MyIntern Hub"
        subtitle="Your Gateway to Success"
        description="Access resources, manage your internship journey, and get started with your assignments all in one place."
      />

      <main className="max-w-6xl mx-auto container-padding py-16">
        <div className="mb-12">
          <PageHeader
            title="Dashboard"
            description="Welcome to your intern hub. Access everything you need to get started."
            className="title-glow"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Total Tasks",
              value: week1Tasks.length,
              subtitle: "Week 1 Tasks",
            },
            {
              title: "Available Tasks",
              value: week1Tasks.length,
              subtitle: "Ready to Start",
            },
            {
              title: "Current Week",
              value: "1",
              subtitle: "Getting Started",
            },
          ].map((stat) => (
            <Card key={stat.title} className="hover-lift glass border-0 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold title-glow mb-8">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action) => (
              <Card
                key={action.title}
                className="hover-lift glass border-0 shadow-sm group cursor-pointer flex flex-col h-full"
              >
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="font-heading text-lg">{action.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow justify-between space-y-4">
                  <p className="text-muted-foreground text-pretty flex-grow">{action.description}</p>
                  <Button variant={action.variant} asChild className="w-full hover-scale button-press mt-auto">
                    <Link href={action.href}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Recent Tasks */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold title-glow">Your Week 1 Tasks</h2>
            <Button variant="outline" size="sm" asChild className="hover-scale bg-transparent">
              <Link href="/tasks">View All</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {week1Tasks.slice(0, 3).map((task) => (
              <Card key={task.id} className="hover-lift glass border-0 shadow-sm border-l-4 border-l-primary group">
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
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
