"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EmptyState } from "@/components/empty-state"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { weeks } from "@/data/tasks"
import Link from "next/link"

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredWeeks = useMemo(() => {
    if (searchQuery === "") return weeks

    return weeks.filter(
      (week) =>
        week.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        week.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery])

  const totalTasks = weeks.reduce((sum, week) => sum + week.tasks.length, 0)

  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Tasks" }]

  return (
    <div className="min-h-screen bg-background floating-elements relative overflow-hidden">
      <Navigation />

      <HeroSection
        title="Marketing Intern Tasks"
        subtitle="Gator Gleam Digital Marketing Agency"
        description="Your weekly assignments, resources, and step-by-step guides to excel as a marketing intern."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 stagger-children">
        <Breadcrumbs items={breadcrumbItems} />

        <Card className="mb-8 glass-advanced animate-liquid-glow border-0 shadow-lg relative overflow-hidden">
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-particle-float" />
          <CardContent className="p-6">
            <div className="relative">
              <Input
                placeholder="Search weeks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 glass-advanced border-0 focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground animate-text-shimmer">
              {filteredWeeks.length} weeks available • {totalTasks} total tasks
            </span>
          </div>
        </div>

        {filteredWeeks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {filteredWeeks.map((week, index) => (
              <Link key={week.id} href={`/tasks/${week.id}`}>
                <Card className="h-full hover-3d-lift glass-advanced border-0 shadow-lg cursor-pointer flex flex-col relative overflow-hidden animate-liquid-glow group">
                  <div
                    className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full animate-particle-float"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                  <div
                    className="absolute bottom-6 left-4 w-1 h-1 bg-secondary/30 rounded-full animate-particle-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />

                  <CardHeader className="pb-4 flex-grow">
                    <CardTitle className="text-xl font-semibold text-primary mb-2 group-hover:animate-text-shimmer transition-all duration-500">
                      {week.title}
                    </CardTitle>
                    <p className="text-base text-muted-foreground line-clamp-2">{week.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-end">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-base px-4 py-2 font-medium hover-magnetism transition-all duration-300"
                      >
                        {week.tasks.length} tasks
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary hover:text-primary-foreground text-base font-semibold min-w-[120px] justify-center bg-transparent pulse-ring hover-magnetism"
                      >
                        View Tasks →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass-advanced rounded-lg p-8">
            <EmptyState
              title={searchQuery ? "No weeks match your search" : "No weeks found"}
              description={
                searchQuery
                  ? "Try adjusting your search terms to see more results."
                  : "There are no weeks available at the moment."
              }
            >
              {searchQuery && (
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="mt-4 pulse-ring hover-magnetism"
                >
                  Clear search
                </Button>
              )}
            </EmptyState>
          </div>
        )}
      </main>
    </div>
  )
}
