import { LINKS } from "./tasks"

export type OnboardingStatus = "Not Started" | "In Progress" | "Done"

export type OnboardingStep = {
  id: string
  section: "Getting Access" | "Tools & Links" | "Week 1 Tasks" | "How to Submit Work"
  title: string
  summary: string
  checklist: string[]
  ctas?: { label: string; href: string }[]
  status?: OnboardingStatus
  note?: string
}

export const onboarding: OnboardingStep[] = [
  {
    id: "access-slack",
    section: "Getting Access",
    title: "Join Slack (Gator Gleam)",
    summary: "Create your Slack account and say hello in #general.",
    checklist: [
      "Click the invite link",
      "Create account using your PERSONAL email",
      "Set display name to: First Last",
      "Post a short intro in #general",
    ],
    ctas: [{ label: "Join Slack", href: LINKS.slackInvite }],
    note: "Use your PERSONAL email to create the Slack account.",
    status: "Not Started",
  },
  {
    id: "access-drive",
    section: "Getting Access",
    title: "Get access to Google Drive",
    summary: "Open the shared Drive folder and ensure you can view/upload.",
    checklist: [
      "Open the shared folder",
      "Create a Week 1 subfolder with your name",
      "Confirm you can upload a test doc",
    ],
    ctas: [{ label: "Open Drive", href: LINKS.drive }],
    status: "Not Started",
  },
  {
    id: "access-postbridge",
    section: "Getting Access",
    title: "Set up Post-Bridge",
    summary: "Confirm your Post-Bridge login and access the create page.",
    checklist: ["Open the create dashboard", "Confirm you can schedule a draft"],
    ctas: [{ label: "Open Post-Bridge", href: LINKS.postBridge }],
    status: "Not Started",
  },
  {
    id: "tools-style",
    section: "Tools & Links",
    title: "Review the Canva Style Guide",
    summary: "Use the brand style guide to keep visuals on-brand.",
    checklist: [
      "Open the Canva style guide",
      "Skim colors, fonts, layout examples",
      "Bookmark the guide for quick reference",
    ],
    ctas: [{ label: "View Canva Style Guide", href: LINKS.canvaStyleGuide }],
    status: "Not Started",
  },
  {
    id: "week1-tasks",
    section: "Week 1 Tasks",
    title: "Start Week 1 projects",
    summary: "Kick off the four Week 1 projects and track progress in /tasks.",
    checklist: [
      "Open /tasks and filter: Week = 1",
      "Start the Social (Gator Gleam) task",
      "Start the Social (Social Affair) task",
      "Start the Portfolio (1031 CS) task",
      "Start the Research Leads task",
      "Post questions in Slack if blocked",
    ],
    ctas: [
      { label: "Go to Tasks", href: "/tasks" },
      { label: "Join Slack", href: LINKS.slackInvite },
    ],
    status: "Not Started",
  },
  {
    id: "submit-work",
    section: "How to Submit Work",
    title: "Submission & Approvals",
    summary: "Where to put deliverables and how approvals work.",
    checklist: [
      "Upload drafts to your Week 1 Drive folder",
      "Share preview links in Slack #interns",
      "Schedule approved posts in Post-Bridge",
      "Record publish links in task notes",
    ],
    ctas: [
      { label: "Open Drive", href: LINKS.drive },
      { label: "Open Post-Bridge", href: LINKS.postBridge },
      { label: "Join Slack", href: LINKS.slackInvite },
    ],
    status: "Not Started",
  },
]
