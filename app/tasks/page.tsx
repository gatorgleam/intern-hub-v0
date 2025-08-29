"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TaskCard } from "@/components/task-card"
import { EmptyState } from "@/components/empty-state"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { tasks, type TaskStatus } from "@/data/tasks"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

const statusOptions: TaskStatus[] = ["Not Started", "Blocked", "Done"]
const categoryOptions = Array.from(new Set(tasks.map((task) => task.category).filter(Boolean))) as string[]
const weekOptions = Array.from(new Set(tasks.map((task) => task.week).filter(Boolean))).sort() as number[]

export default function TasksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | "All">("All")
  const [selectedCategory, setSelectedCategory] = useState<string | "All">("All")
  const [selectedWeek, setSelectedWeek] = useState<number | "All">("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.goal?.toLowerCase().includes(searchQuery.toLowerCase())

      // Status filter
      const matchesStatus = selectedStatus === "All" || task.status === selectedStatus

      // Category filter
      const matchesCategory = selectedCategory === "All" || task.category === selectedCategory

      // Week filter
      const matchesWeek = selectedWeek === "All" || task.week === selectedWeek

      return matchesSearch && matchesStatus && matchesCategory && matchesWeek
    })
  }, [searchQuery, selectedStatus, selectedCategory, selectedWeek])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedStatus("All")
    setSelectedCategory("All")
    setSelectedWeek("All")
  }

  const hasActiveFilters =
    searchQuery !== "" || selectedStatus !== "All" || selectedCategory !== "All" || selectedWeek !== "All"

  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Tasks" }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection
        title="Your Tasks"
        subtitle="Stay Organized & Productive"
        description="Track your assignments, manage your work, and achieve your internship goals."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Search and Filter Controls */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search tasks by title or goal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5 h-auto">
                      {
                        [selectedStatus !== "All", selectedCategory !== "All", selectedWeek !== "All"].filter(Boolean)
                          .length
                      }
                    </Badge>
                  )}
                </Button>

                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2 text-muted-foreground">
                    <X className="w-4 h-4" />
                    Clear filters
                  </Button>
                )}
              </div>

              {/* Filter Options */}
              {showFilters && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                  {/* Status Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <div className="flex flex-wrap gap-2">
                      {["All", ...statusOptions].map((status) => (
                        <Button
                          key={status}
                          variant={selectedStatus === status ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedStatus(status as TaskStatus | "All")}
                          className="text-xs h-7"
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {["All", ...categoryOptions].map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="text-xs h-7"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Week Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Week</label>
                    <div className="flex flex-wrap gap-2">
                      {["All", ...weekOptions].map((week) => (
                        <Button
                          key={week}
                          variant={selectedWeek === week ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedWeek(week as number | "All")}
                          className="text-xs h-7"
                        >
                          {week === "All" ? "All" : `Week ${week}`}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Showing {filteredTasks.length} of {tasks.length} tasks
            </span>
            {hasActiveFilters && (
              <Badge variant="outline" className="text-xs">
                Filtered
              </Badge>
            )}
          </div>

          {/* Quick Status Stats */}
          <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground">
            {statusOptions.map((status) => {
              const count = filteredTasks.filter((task) => task.status === status).length
              return (
                <div key={status} className="flex items-center gap-1">
                  <div
                    className={cn("w-2 h-2 rounded-full", {
                      "bg-muted-foreground": status === "Not Started",
                      "bg-destructive": status === "Blocked",
                      "bg-primary": status === "Done",
                    })}
                  />
                  <span>
                    {count} {status}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tasks Grid */}
        {filteredTasks.length > 0 ? (
          <div className="grid gap-6">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={hasActiveFilters ? "No tasks match your filters" : "No tasks found"}
            description={
              hasActiveFilters
                ? "Try adjusting your search terms or clearing some filters to see more results."
                : "There are no tasks available at the moment."
            }
            icon={<Search className="w-12 h-12" />}
          >
            {hasActiveFilters && (
              <Button variant="outline" onClick={clearFilters} className="mt-4 bg-transparent">
                Clear all filters
              </Button>
            )}
          </EmptyState>
        )}
      </main>
    </div>
  )
}
