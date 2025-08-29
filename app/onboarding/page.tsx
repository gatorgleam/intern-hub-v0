"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OnboardingSection } from "@/components/onboarding-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { onboarding, type OnboardingStep } from "@/data/onboarding"
import { tasks } from "@/data/tasks"

export default function OnboardingPage() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load completed steps from localStorage
    const completed = new Set<string>()
    onboarding.forEach((step) => {
      step.checklist.forEach((_, index) => {
        const stored = localStorage.getItem(`checklist-${step.id}-${index}`)
        if (stored === "true") {
          completed.add(step.id)
        }
      })
    })
    setCompletedSteps(completed)
  }, [])

  // Group onboarding steps by section
  const sections = onboarding.reduce(
    (acc, step) => {
      if (!acc[step.section]) {
        acc[step.section] = []
      }
      acc[step.section].push(step)
      return acc
    },
    {} as Record<string, OnboardingStep[]>,
  )

  // Get Week 1 tasks for the at-a-glance panel
  const week1Tasks = tasks.filter((task) => task.week === 1)

  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Onboarding" }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        title="Welcome to Gator Gleam!"
        subtitle="Let's Get You Started"
        description="Follow this step-by-step guide to get set up and start your first week with confidence."
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Important Note */}
        <div className="mb-8 p-4 bg-accent/50 border border-accent rounded-2xl">
          <div className="flex items-start gap-3">
            <span className="text-lg mt-0.5 shrink-0">⚠️</span>
            <div>
              <h3 className="font-semibold text-accent-foreground mb-1">Important</h3>
              <p className="text-sm text-accent-foreground">
                When joining Slack, you <strong>MUST use your PERSONAL email address</strong> to create the account, not
                a work email.
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-lg">🕐</span>
              At-a-Glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background/50 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">{completedSteps.size}</div>
                <div className="text-sm text-muted-foreground">Onboarding Steps Complete</div>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-xl">
                <div className="text-2xl font-bold text-secondary mb-1">{week1Tasks.length}</div>
                <div className="text-sm text-muted-foreground">Week 1 Tasks Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onboarding Sections */}
        <div className="space-y-12">
          {Object.entries(sections).map(([sectionName, steps]) => (
            <section key={sectionName}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-balance">{sectionName}</h2>
                <Badge variant="outline" className="text-xs">
                  {steps.length} step{steps.length !== 1 ? "s" : ""}
                </Badge>
              </div>

              <div className="grid gap-6">
                {steps.map((step) => (
                  <OnboardingSection
                    key={step.id}
                    step={step}
                    className={completedSteps.has(step.id) ? "ring-2 ring-primary/20" : ""}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Week 1 Tasks Preview */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold">Your Week 1 Tasks</h2>
            <Badge variant="secondary" className="text-xs">
              {week1Tasks.length} tasks
            </Badge>
          </div>

          <Card className="bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-lg">🕐</span>
                Ready to Start Working?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Once you've completed the onboarding steps above, head over to the Tasks page to see your full Week 1
                assignment details.
              </p>

              <div className="space-y-2 mb-4">
                {week1Tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <span className="text-sm font-medium text-balance">{task.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href="/tasks"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                >
                  View All Tasks
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
