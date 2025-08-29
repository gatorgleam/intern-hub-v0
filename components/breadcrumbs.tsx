import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav className={cn("flex items-center text-sm mb-6", className)} aria-label="Breadcrumb">
      <ol className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="text-muted-foreground mx-3 select-none flex items-center">→</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium flex items-center">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
