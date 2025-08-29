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
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        title="Marketing Intern Tasks"
        subtitle="Gator Gleam Digital Marketing Agency"
        description="Your weekly assignments, resources, and step-by-step guides to excel as a marketing intern."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Input
                placeholder="Search weeks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {filteredWeeks.length} weeks available • {totalTasks} total tasks
            </span>
          </div>
        </div>

        {filteredWeeks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWeeks.map((week) => (
              <Link key={week.id} href={`/tasks/${week.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary">{week.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{week.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {week.tasks.length} tasks
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        View Tasks →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <EmptyState
            title={searchQuery ? "No weeks match your search" : "No weeks found"}
            description={
              searchQuery
                ? "Try adjusting your search terms to see more results."
                : "There are no weeks available at the moment."
            }
          >
            {searchQuery && (
              <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
                Clear search
              </Button>
            )}
          </EmptyState>
        )}
      </main>
    </div>
  )
}
