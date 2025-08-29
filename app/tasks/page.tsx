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

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Card className="mb-8 glass-refined animate-subtle-glow border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="relative">
              <Input
                placeholder="Search weeks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 text-base h-12 glass-refined border-0 focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-base text-muted-foreground">
              {filteredWeeks.length} weeks available • {totalTasks} total tasks
            </span>
          </div>
        </div>

        {filteredWeeks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {filteredWeeks.map((week, index) => (
              <Link key={week.id} href={`/tasks/${week.id}`}>
                <Card className="h-full hover-gentle glass-refined border-0 shadow-lg cursor-pointer flex flex-col relative overflow-hidden group">
                  <CardHeader className="pb-4 flex-grow">
                    <CardTitle className="text-xl font-semibold text-primary mb-3 group-hover:animate-text-shimmer transition-all duration-500">
                      {week.title}
                    </CardTitle>
                    <p className="text-base text-muted-foreground line-clamp-2 leading-relaxed">{week.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col justify-end">
                    <div className="flex items-center justify-between gap-4">
                      <Badge
                        variant="secondary"
                        className="text-base px-4 py-2 font-medium transition-all duration-300"
                      >
                        {week.tasks.length} tasks
                      </Badge>
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-primary hover:text-primary-foreground text-base font-semibold min-w-[140px] h-12 flex items-center justify-center gap-2 bg-transparent hover-gentle transition-all duration-300"
                      >
                        <span>View Tasks</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass-refined rounded-lg p-8">
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
                  className="mt-4 hover-gentle h-10 min-w-[120px] flex items-center justify-center font-semibold"
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
