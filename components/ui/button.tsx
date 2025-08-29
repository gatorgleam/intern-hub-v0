import type * as React from "react"

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl border-0",
    destructive: "bg-destructive text-white shadow-lg hover:bg-destructive/90 hover:shadow-xl border-0",
    outline:
      "border-2 border-primary/30 bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg text-primary",
    secondary: "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/80 hover:shadow-xl border-0",
    ghost: "hover:bg-accent/20 hover:text-accent-foreground text-foreground/80 hover:shadow-md",
    link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
  },
  size: {
    default: "h-12 px-6 py-3 text-base",
    sm: "h-10 px-4 py-2 text-sm",
    lg: "h-14 px-8 py-4 text-lg",
    icon: "h-12 w-12 text-base",
  },
}

function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
}) {
  const variantClasses = buttonVariants.variant[variant] || buttonVariants.variant.default
  const sizeClasses = buttonVariants.size[size] || buttonVariants.size.default

  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-center font-semibold transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

  return <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props} />
}

export { Button, buttonVariants }
