import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Slack, FolderOpen, Palette, Globe } from "lucide-react"
import { LINKS } from "@/data/tasks"

const resources = [
  {
    title: "Slack Workspace",
    description: "Join the team communication hub and get help when you need it.",
    href: LINKS.slackInvite,
    icon: Slack,
    category: "Communication",
  },
  {
    title: "Google Drive",
    description: "Access shared files, upload your work, and collaborate on documents.",
    href: LINKS.drive,
    icon: FolderOpen,
    category: "File Storage",
  },
  {
    title: "Post-Bridge",
    description: "Schedule and manage social media content across platforms.",
    href: LINKS.postBridge,
    icon: Globe,
    category: "Social Media",
  },
  {
    title: "Canva Style Guide",
    description: "Brand guidelines, colors, fonts, and design templates.",
    href: LINKS.canvaStyleGuide,
    icon: Palette,
    category: "Design",
  },
]

const clientResources = [
  {
    title: "1031 Capital Solutions",
    description: "Client website for portfolio screenshot project.",
    href: LINKS.site1031,
    category: "Client Site",
  },
  {
    title: "Social Affair Instagram",
    description: "Client Instagram account for social media content.",
    href: LINKS.socialAffairIG,
    category: "Social Media",
  },
  {
    title: "Social Affair Facebook",
    description: "Client Facebook page for social media content.",
    href: LINKS.socialAffairFB,
    category: "Social Media",
  },
]

export default function ResourcesPage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Resources" }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <PageHeader
          title="Resources"
          description="Quick access to all the tools, links, and client resources you need."
        />

        {/* Main Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Essential Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.title} className="hover:shadow-md transition-all duration-200 ease-out">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {resource.category}
                      </span>
                      <Button size="sm" asChild>
                        <a href={resource.href} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                          Open
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Client Resources */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Client Resources</h2>
          <div className="grid gap-4">
            {clientResources.map((resource) => (
              <Card key={resource.title} className="hover:shadow-sm transition-all duration-200 ease-out">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {resource.category}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={resource.href} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                          Visit
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
