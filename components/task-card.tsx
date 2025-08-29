"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Zap, Target, Users, CheckCircle } from "lucide-react"
import type { Task } from "@/data/tasks"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface TaskCardProps {
  task: Task
  className?: string
  index?: number
}

const statusColors = {
  "Not Started": "outline",
  "In Progress": "secondary",
  Blocked: "destructive",
  Done: "default",
} as const

const statusIcons = {
  "Not Started": Target,
  "In Progress": Zap,
  Blocked: ExternalLink,
  Done: CheckCircle,
}

export function TaskCard({ task, className, index = 0 }: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const StatusIcon = statusIcons[task.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card
        className={cn(
          "relative overflow-hidden group transition-all duration-500 ease-out",
          "hover:shadow-2xl hover:shadow-primary/20 border-2 border-transparent",
          "hover:border-primary/20 glass",
          className,
        )}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${50 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              <CardTitle className="text-lg leading-tight text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text">
                {task.title}
              </CardTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Badge
                variant={statusColors[task.status]}
                className={cn(
                  "shrink-0 transition-all duration-300 ease-out flex items-center gap-1",
                  task.status === "Done" && "animate-pulse-glow",
                  "hover:shadow-lg",
                )}
              >
                <StatusIcon className="w-3 h-3" />
                {task.status}
              </Badge>
            </motion.div>
          </div>
          {task.goal && (
            <motion.p
              className="text-sm text-muted-foreground text-pretty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
            >
              {task.goal}
            </motion.p>
          )}
        </CardHeader>

        <CardContent className="space-y-4 relative z-10">
          {task.audience && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
              className="group/section"
            >
              <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                <Users className="w-3 h-3 text-primary" />
                Audience
              </h4>
              <p className="text-sm text-muted-foreground group-hover/section:text-foreground transition-colors duration-200">
                {task.audience}
              </p>
            </motion.div>
          )}

          {task.deliverables && task.deliverables.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
            >
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-secondary" />
                Deliverables
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {task.deliverables.map((deliverable, deliverableIndex) => (
                  <motion.li
                    key={deliverableIndex}
                    className="flex items-start gap-2 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 0.7 + deliverableIndex * 0.05,
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.span
                      className="text-primary mt-1 transition-all duration-200"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    >
                      •
                    </motion.span>
                    <span className="group-hover/item:text-foreground transition-colors duration-200">
                      {deliverable}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {task.successMetric && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
              className="group/section"
            >
              <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                <Target className="w-3 h-3 text-accent" />
                Success Metric
              </h4>
              <p className="text-sm text-muted-foreground group-hover/section:text-foreground transition-colors duration-200">
                {task.successMetric}
              </p>
            </motion.div>
          )}

          {task.steps && task.steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
            >
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-primary" />
                Steps
              </h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                {task.steps.map((step, stepIndex) => (
                  <motion.li
                    key={stepIndex}
                    className="flex items-start gap-2 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 1.0 + stepIndex * 0.05,
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.span
                      className="text-primary font-medium mt-0.5 text-xs transition-all duration-200 bg-primary/10 rounded-full w-5 h-5 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {stepIndex + 1}
                    </motion.span>
                    <span className="group-hover/item:text-foreground transition-colors duration-200">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          )}

          {task.ctas && task.ctas.length > 0 && (
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 1.1 }}
            >
              <div className="flex flex-wrap gap-2">
                {task.ctas.map((cta, ctaIndex) => (
                  <motion.div
                    key={ctaIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + 1.2 + ctaIndex * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="h-8 bg-transparent transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 group/button"
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
                        <motion.div whileHover={{ rotate: 45, scale: 1.2 }} transition={{ duration: 0.2 }}>
                          <ExternalLink className="w-3 h-3 group-hover/button:text-primary transition-colors duration-200" />
                        </motion.div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            className="flex items-center gap-2 pt-2 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 1.3 }}
          >
            {task.week && (
              <motion.span
                className="bg-primary/10 px-2 py-1 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 68, 174, 0.2)" }}
              >
                Week {task.week}
              </motion.span>
            )}
            {task.category && task.week && <span>•</span>}
            {task.category && (
              <motion.span
                className="bg-secondary/10 px-2 py-1 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(88, 134, 184, 0.2)" }}
              >
                {task.category}
              </motion.span>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
