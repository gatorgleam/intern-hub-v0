import { Navigation } from "@/components/navigation"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EmptyState
          title="Week Not Found"
          description="The week you're looking for doesn't exist or may have been moved."
        >
          <Link href="/tasks">
            <Button className="mt-4">Back to All Weeks</Button>
          </Link>
        </EmptyState>
      </main>
    </div>
  )
}
