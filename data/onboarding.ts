import { LINKS } from "./tasks"

export type OnboardingStep = {
  id: string
  section: "Getting Access" | "Tools & Links" | "Week 1 Tasks" | "How to Submit Work"
  title: string
  summary: string
  checklist: string[]
  ctas?: { label: string; href: string }[]
  note?: string
}

export const onboarding: OnboardingStep[] = [
  {
    id: "access-slack",
    section: "Getting Access",
    title: "Join Slack (Gator Gleam)",
    summary: "Create your Slack account and say hello in #all-gator-gleam.",
    checklist: [
      "Click the invite link",
      "Create account using your PERSONAL email",
      "Set display name to: First Last",
      "Post a short intro in #general",
    ],
    ctas: [{ label: "Join Slack", href: LINKS.slackInvite }],
    note: "Use your PERSONAL email to create the Slack account.",
  },
  {
    id: "access-drive",
    section: "Getting Access",
    title: "Get access to Google Drive",
    summary: "Access the shared Drive folder to get logos, graphics, and other assets for your tasks.",
    checklist: [
      "Open the shared folder",
      "Browse available assets and resources",
      "Bookmark the folder for easy access during tasks",
    ],
    ctas: [{ label: "Open Drive", href: LINKS.drive }],
  },
  {
    id: "access-postbridge",
    section: "Getting Access",
    title: "Set up Post-Bridge",
    summary: "Confirm your Post-Bridge login and access the create page.",
    checklist: ["Open the create dashboard", "Confirm you can schedule a draft"],
    ctas: [{ label: "Open Post-Bridge", href: LINKS.postBridge }],
  },
  {
    id: "access-trello",
    section: "Getting Access",
    title: "Join the Trello Board",
    summary: "Join the Weekly Intern Tasks board to manage your work submissions.",
    checklist: [
      "Click the Trello invite link",
      "Accept the board invitation",
      "Familiarize yourself with the board columns",
      "Test adding a card to the 'To Do' column",
    ],
    ctas: [{ label: "Join Trello Board", href: LINKS.trelloBoard }],
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
  },
  {
    id: "submit-work",
    section: "How to Submit Work",
    title: "Submission & Approvals",
    summary: "How to submit completed work using the Trello board workflow.",
    checklist: [
      "Create cards in Trello for each completed task",
      "Add your completed content to the appropriate Trello card",
      "Move cards to 'Review' column when ready for approval",
      "Wait for cards to be moved to 'Approved' with scheduling comments",
    ],
    ctas: [
      { label: "Open Trello Board", href: LINKS.trelloBoard },
      { label: "Open Post-Bridge", href: LINKS.postBridge },
      { label: "Join Slack", href: LINKS.slackInvite },
    ],
  },
]
