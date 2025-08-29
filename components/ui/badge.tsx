import type * as React from "react"

const badgeVariants = {
  variant: {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
    destructive: "border-transparent bg-destructive text-white hover:bg-destructive/90",
    outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
  },
}

function Badge({
  className = "",
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: keyof typeof badgeVariants.variant
}) {
  const variantClasses = badgeVariants.variant[variant] || badgeVariants.variant.default
  const baseClasses =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors"

  return <span className={`${baseClasses} ${variantClasses} ${className}`} {...props} />
}

export { Badge, badgeVariants }
