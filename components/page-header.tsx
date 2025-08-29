import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-2 mb-8", className)}>
      <h1 className="text-3xl font-bold tracking-tight text-balance">{title}</h1>
      {description && <p className="text-muted-foreground text-lg text-pretty max-w-2xl">{description}</p>}
    </div>
  )
}
