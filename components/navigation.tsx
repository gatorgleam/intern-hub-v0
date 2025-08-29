"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BookOpen, CheckSquare, FolderOpen, Upload, HelpCircle, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Onboarding", href: "/onboarding", icon: BookOpen },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Resources", href: "/resources", icon: FolderOpen },
  { name: "Submissions", href: "/submissions", icon: Upload },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      className="bg-card/80 border-b border-border sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-card/95 via-card/90 to-card/95"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="relative">
              <Link
                href="/"
                className="text-xl font-bold text-[#5a4324] hover:text-[#2244ae] transition-colors duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#2244ae]" />
                  MyIntern Hub
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item, index) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden group",
                        "hover:shadow-lg hover:shadow-primary/20",
                        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg animate-pulse-glow"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? "text-primary-foreground" : "group-hover:text-primary",
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <span className="relative z-10">{item.name}</span>
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100"
                          initial={false}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="md:hidden">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="transition-all duration-300 ease-out hover:bg-primary/10 hover:shadow-lg relative overflow-hidden group"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-2 space-y-1">
                {navigation.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 ease-out relative overflow-hidden group",
                          "hover:shadow-md hover:shadow-primary/10",
                          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isActive
                            ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={cn(
                            "transition-colors duration-300",
                            isActive ? "text-primary-foreground" : "group-hover:text-primary",
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.div>
                        <span className="relative z-10">{item.name}</span>
                        {!isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
