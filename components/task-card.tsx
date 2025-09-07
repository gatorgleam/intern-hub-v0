"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Users, CheckCircle, Target, Zap } from "lucide-react"
import type { Task } from "@/data/tasks"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TaskCardProps {
  task: Task
  className?: string
  index?: number
}

export function TaskCard({ task, className, index = 0 }: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="animate-fade-in-up perspective-1000"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={cn(
          "relative overflow-hidden group transition-all duration-500 ease-out h-full",
          "hover:shadow-2xl hover:shadow-primary/20 border-2 border-transparent",
          "hover:border-primary/20 glass hover:scale-102 hover:-translate-y-1",
          className,
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-4 right-4 w-1 h-1 bg-primary/30 rounded-full animate-float-particle" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-primary/30 rounded-full animate-float-particle-delayed" />
          <div className="absolute top-12 right-12 w-1 h-1 bg-primary/30 rounded-full animate-float-particle-delayed-2" />
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-lg leading-tight text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                {task.title}
              </CardTitle>
            </div>
          </div>
          {task.goal && <p className="text-sm text-muted-foreground text-pretty mt-2">{task.goal}</p>}
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          {task.audience && (
            <div className="group/section">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Audience</span>
              </h4>
              <p className="text-sm text-muted-foreground group-hover/section:text-foreground transition-colors duration-200 ml-6">
                {task.audience}
              </p>
            </div>
          )}

          {task.deliverables && task.deliverables.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Deliverables</span>
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                {task.deliverables.map((deliverable, deliverableIndex) => (
                  <li
                    key={deliverableIndex}
                    className="flex items-start gap-2 group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-primary mt-1 transition-all duration-200 hover:scale-150">•</span>
                    <span className="group-hover/item:text-foreground transition-colors duration-200 flex-1">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {task.successMetric && (
            <div className="group/section">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Success Metric</span>
              </h4>
              <p className="text-sm text-muted-foreground group-hover/section:text-foreground transition-colors duration-200 ml-6">
                {task.successMetric}
              </p>
            </div>
          )}

          {task.steps && task.steps.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Steps</span>
              </h4>
              <ol className="text-sm text-muted-foreground space-y-2 ml-6">
                {task.steps.map((step, stepIndex) => (
                  <li
                    key={stepIndex}
                    className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-primary font-medium text-xs bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 hover:scale-110 hover:rotate-12">
                      {stepIndex + 1}
                    </span>
                    <span className="group-hover/item:text-foreground transition-colors duration-200 flex-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {task.trainingVideos && task.trainingVideos.length > 0 && (
            <div>
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <span className="text-red-500 text-sm">🎥</span>
                <span>Training Videos</span>
              </h4>
              <div className="space-y-2 ml-6">
                {task.trainingVideos.map((video, videoIndex) => (
                  <div key={videoIndex} className="group/video">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1"
                    >
                      <span className="text-red-500 transition-all duration-200 hover:scale-125">▶️</span>
                      <span className="group-hover/video:underline">{video.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-50 group-hover/video:opacity-100 transition-all duration-200" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {task.ctas && task.ctas.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {task.ctas.map((cta, ctaIndex) => (
                  <div
                    key={ctaIndex}
                    className="animate-fade-in-scale"
                    style={{ animationDelay: `${(index * 0.1) + 1.2 + ctaIndex * 0.1}s` }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-transparent transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:scale-105 hover:-translate-y-0.5 group/button text-sm font-semibold min-w-[100px]"
                    >
                      <a
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5"
                      >
                        <span className="group-hover/button:text-primary transition-colors duration-200">
                          {cta.label}
                        </span>
                        <ExternalLink className="w-3 h-3 group-hover/button:text-primary transition-all duration-200 group-hover/button:rotate-45 group-hover/button:scale-110" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
            {task.week && (
              <span className="bg-primary/10 px-2 py-1 rounded-full hover:scale-110 hover:bg-primary/20 transition-all duration-200">
                Week {task.week}
              </span>
            )}
            {task.category && task.week && <span>•</span>}
            {task.category && (
              <span className="bg-secondary/10 px-2 py-1 rounded-full hover:scale-110 hover:bg-secondary/20 transition-all duration-200">
                {task.category}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
