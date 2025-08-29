import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChecklistItem } from "@/components/checklist-item"
import { LINKS } from "@/data/tasks"

const submissionSteps = [
  {
    id: "upload-drafts",
    title: "Upload Drafts to Drive",
    description: "Create your work and save drafts to your personal Week 1 folder in Google Drive.",
    checklist: [
      "Create a Week 1 subfolder with your name",
      "Upload all draft files with clear naming (YYYYMMDD_project_version)",
      "Include any source files (Canva links, raw images, etc.)",
      "Add a brief note about what you created",
    ],
    cta: { label: "Open Drive", href: LINKS.drive },
    icon: "📤",
  },
  {
    id: "share-slack",
    title: "Share in Slack for Review",
    description: "Post preview links and ask for feedback in the #interns channel.",
    checklist: [
      "Share preview links or screenshots in #interns",
      "Include a brief description of what you created",
      "Ask specific questions if you need feedback",
      "Tag relevant team members if needed",
    ],
    cta: { label: "Open Slack", href: LINKS.slackInvite },
    icon: "💬",
  },
  {
    id: "schedule-approved",
    title: "Schedule Approved Content",
    description: "Once approved, schedule your content in Post-Bridge with proper timing.",
    checklist: [
      "Wait for approval before scheduling",
      "Use Post-Bridge to schedule at optimal times",
      "Double-check all captions and hashtags",
      "Record publish links in your task notes",
    ],
    cta: { label: "Open Post-Bridge", href: LINKS.postBridge },
    icon: "📅",
  },
]

export default function SubmissionsPage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "Submissions" }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <PageHeader
          title="Submissions & Approvals"
          description="Learn how to submit your work and get approvals for publishing."
        />

        {/* Important Note */}
        <div className="mb-8 p-4 bg-accent/10 border border-accent/20 rounded-2xl">
          <h3 className="font-semibold text-accent-foreground mb-2">Submission Workflow</h3>
          <p className="text-sm text-accent-foreground">
            All work must be reviewed and approved before publishing. Follow these steps to ensure smooth approvals and
            avoid delays.
          </p>
        </div>

        {/* Submission Steps */}
        <div className="space-y-8">
          {submissionSteps.map((step, index) => {
            return (
              <Card key={step.id} className="hover:shadow-md transition-all duration-200 ease-out">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step.icon}</span>
                    {step.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground text-pretty ml-11">{step.description}</p>
                </CardHeader>

                <CardContent className="ml-11">
                  <div className="space-y-3 mb-4">
                    {step.checklist.map((item, itemIndex) => (
                      <ChecklistItem key={`${step.id}-${itemIndex}`} id={`${step.id}-${itemIndex}`} className="text-sm">
                        {item}
                      </ChecklistItem>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <a href={step.cta.href} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                      {step.cta.label}
                      <span className="text-xs">↗</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tips Section */}
        <Card className="mt-12 bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
          <CardHeader>
            <CardTitle>Pro Tips for Faster Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Always include context when sharing work - explain what you created and why</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ask specific questions if you need feedback on particular aspects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Double-check spelling, grammar, and brand guidelines before submitting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Keep file names organized and descriptive for easy tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Don't schedule anything until you get explicit approval</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
