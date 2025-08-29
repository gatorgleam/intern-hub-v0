"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TaskCard } from "@/components/task-card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { weeks } from "@/data/tasks"
import Link from "next/link"
import { notFound } from "next/navigation"

interface WeekPageProps {
  params: {
    weekId: string
  }
}

export default function WeekPage({ params }: WeekPageProps) {
  const week = weeks.find((w) => w.id === params.weekId)

  if (!week) {
    notFound()
  }

  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Tasks", href: "/tasks" }, { label: week.title }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection title={week.title} subtitle="Gator Gleam Digital Marketing Agency" description={week.description} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-sm">
              {week.tasks.length} tasks
            </Badge>
          </div>
          <Link href="/tasks">
            <Button variant="outline">← Back to All Weeks</Button>
          </Link>
        </div>

        <div className="space-y-6">
          {week.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </div>
  )
}
