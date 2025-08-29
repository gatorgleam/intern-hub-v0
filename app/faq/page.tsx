import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LINKS } from "@/data/tasks"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What email should I use for Slack?",
        answer:
          "You MUST use your personal email address when creating your Slack account, not a work or school email. This ensures you maintain access and can receive notifications properly.",
      },
      {
        question: "Where do I find the Canva style guide?",
        answer:
          "The Canva style guide is linked in your onboarding checklist and resources page. It contains all brand colors, fonts, and design templates you need to follow.",
      },
      {
        question: "How do I access Google Drive?",
        answer:
          "Click the Drive link in your onboarding or resources page. Create a Week 1 subfolder with your name to organize your work.",
      },
    ],
  },
  {
    category: "Tasks & Workflow",
    questions: [
      {
        question: "How do I know what to work on first?",
        answer:
          "Start with the onboarding checklist to get access to all tools. Then check your Week 1 tasks - you can work on them in any order, but Social (Gator Gleam) is usually a good starting point.",
      },
      {
        question: "What if I get stuck on a task?",
        answer:
          "Post your question in the #interns Slack channel with details about what you're trying to do and where you're stuck. The team is there to help!",
      },
      {
        question: "How long should each task take?",
        answer:
          "Week 1 tasks are designed to take 1-2 days each. Don't worry about perfection - focus on learning and following the brand guidelines.",
      },
    ],
  },
  {
    category: "Submissions & Approvals",
    questions: [
      {
        question: "Do I need approval before posting anything?",
        answer:
          "Yes, absolutely. Never schedule or publish content without explicit approval. Upload drafts to Drive and share in Slack for review first.",
      },
      {
        question: "How do I name my files?",
        answer:
          "Use the format: YYYYMMDD_project_version (e.g., 20240115_GatorGleam_carousel_v01). This keeps everything organized and trackable.",
      },
      {
        question: "What if my work gets rejected?",
        answer:
          "Don't worry! Feedback is part of learning. Make the requested changes and resubmit. Ask questions if the feedback isn't clear.",
      },
    ],
  },
  {
    category: "Tools & Technical",
    questions: [
      {
        question: "I can't access Post-Bridge. What do I do?",
        answer:
          "Make sure you're using the correct login credentials. If you still can't access it, ask in Slack - the team can help reset your access.",
      },
      {
        question: "How do I take good screenshots for the portfolio project?",
        answer:
          "Use desktop resolution (1440px) and mobile (390px). Capture key sections like hero, navigation, and forms. Clean up with cropping and subtle annotations.",
      },
      {
        question: "What if a client link doesn't work?",
        answer:
          "Check if the URL is correct first. If it's still broken, report it in Slack so the team can provide an updated link.",
      },
    ],
  },
]

export default function FAQPage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/" }, { label: "FAQ" }]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about your internship and workflow."
        />

        <Card className="mb-8 glass-refined animate-subtle-glow border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-xl">❓</span>
              Need More Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base text-muted-foreground mb-4">
              Can't find what you're looking for? The team is always available to help in Slack.
            </p>
            <Button size="lg" asChild className="hover-gentle">
              <a href={LINKS.slackInvite} target="_blank" rel="noopener noreferrer" className="gap-2">
                Ask in Slack
                <span className="text-sm">↗</span>
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-8 stagger-children">
          {faqs.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-semibold mb-6 animate-text-shimmer">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, index) => (
                  <Card key={index} className="glass-refined hover-gentle transition-all duration-300 ease-out">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-muted-foreground text-pretty leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
