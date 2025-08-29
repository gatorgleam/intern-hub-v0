"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChecklistItemProps {
  id: string
  children: React.ReactNode
  defaultChecked?: boolean
  onToggle?: (checked: boolean) => void
  className?: string
}

export function ChecklistItem({ id, children, defaultChecked = false, onToggle, className }: ChecklistItemProps) {
  const [checked, setChecked] = useState(defaultChecked)

  useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem(`checklist-${id}`)
    if (stored !== null) {
      setChecked(stored === "true")
    }
  }, [id])

  const handleToggle = () => {
    const newChecked = !checked
    setChecked(newChecked)
    localStorage.setItem(`checklist-${id}`, newChecked.toString())
    onToggle?.(newChecked)
  }

  return (
    <div className={cn("flex items-start gap-3 group", className)}>
      <button
        onClick={handleToggle}
        className={cn(
          "flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200 ease-out mt-0.5 shrink-0",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "hover:scale-110 active:scale-95",
          checked
            ? "bg-primary border-primary text-primary-foreground shadow-sm animate-in zoom-in duration-200"
            : "border-muted-foreground/30 hover:border-primary/50 hover:shadow-sm",
        )}
        aria-pressed={checked}
        aria-label={checked ? "Mark as incomplete" : "Mark as complete"}
      >
        {checked && (
          <Check className={cn("w-3 h-3 transition-all duration-200 ease-out", "animate-in zoom-in duration-200")} />
        )}
      </button>
      <div
        className={cn("flex-1 transition-all duration-200 ease-out", checked && "text-muted-foreground line-through")}
        aria-live="polite"
      >
        {children}
      </div>
    </div>
  )
}
