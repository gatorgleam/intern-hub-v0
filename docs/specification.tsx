You
are
an
expert
Next.js + Tailwind
UX
engineer.Refactor
my
project
“MyIntern Hub” to be clear
for interns, organized, and visually fun
—without breaking routes or core copy.

STACK & CONSTRAINTS\
- Framework: Next.js (App Router
if present)
. Styling: Tailwind CSS.
- Keep existing routes, data fetching, and component names when possible.\
- Don’t add heavy UI libs. OK to use Framer Motion (micro-animations) and lucide-react
if already installed;
otherwise
keep
it
vanilla.
\
- Accessibility first (semantic HTML, keyboard focus states, aria-labels, visible focus rings).

GOALS
1) Information Architecture\
   - Clean nav
with groups
: Dashboard, Onboarding (/onboarding), Tasks (/tasks), Resources (/resources), Submissions (/submissions), FAQ (/faq).
   - Add breadcrumbs where useful and a persistent PageHeader (title + short description) on each page.

2) Onboarding Page (/onboarding)\
   - Convert into a step-by-step checklist
with sections
:\
     • Getting Access (Slack invite, Drive, Post-Bridge)
     • Tools & Links (Canva Style Guide)
     • Week 1 Tasks (auto-surface from seeded data)
     • How to Submit Work\
   - Each step is a Card
with
: title, 1–2 sentence summary, bullet checklist, and a prominent “Mark as done” toggle (aria-live
for status)
.\
   - Turn plain links into Buttons (e.g., “Join Slack,” “Open Drive,” “Create in Post-Bridge,” “View Canva Style Guide”).\
   - Add a compact “At-a-glance” panel at the top
for deadlines/today’s tasks (don’t hardcode dates).
\
3) Tasks Page (/tasks)\
   - Task list
with filters (Status: Not Started / In Progress / Blocked / Done;
Category
Week
) and a search input.\
   - Each TaskCard shows: title, short goal, audience, deliverables, success metric, steps, CTA buttons (Drive, Slack, Post-Bridge, Canva, client links).
   - Include <EmptyState/>
for no results.

4) Visual
Design & Motion
\
   - Friendly, professional style: generous spacing, consistent radii (rounded-2xl), subtle shadows, balanced white space.
   - Tailwind theme tokens (update tailwind.config.js → theme.extend.colors):
     primary: #2244ae, secondary: #5886b8, accent: #5a4324, background: #f0ede4
   - Tasteful micro-animations: button hover/press, card hover lift, checklist toggles (≤200ms, ease-out), avoid layout shift.

5) Copy Clarity (light edits only)
   - Keep original meaning, but rewrite confusing lines
for clarity/actionability.\
   - Tone
: plain language
for new interns; short sentences and
bullets.
\
6) Responsive & A11y\
   - Mobile-first
grids / cards
collapse
cleanly
ensure
color
contrast
keyboard
navigability
aria - live
for toggle states.
\
RESOURCES & LINKS (use these in CTAs)
\
- Slack Invite (use PERSONAL email to create the account): https://join.slack.com/t/gatorgleam/shared_invite/zt-3aio6v7n8-GfDWzdGBkHU6kIq4hYe2iQ
- Drive: https://drive.google.com/drive/u/0/folders/1MZ7C19r_Mn04Rbb-4WrmxDpzpqtifhHB
- Post-Bridge: https://www.post-bridge.com/dashboard/create
- Canva Style Guide: https://www.canva.com/design/DAGxU3sz2eE/dJP4Q1dKzNcwx1YkJqk_aw/edit?utm_content=DAGxU3sz2eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
- 1031 Capital Solutions: https://1031capitalsolutions.com
- Social Affair Instagram: https://www.instagram.com/socialaffairvenue/
- Social Affair Facebook: https://www.facebook.com/profile.php?id=100084027847229

FILE: /data/tasks.ts  (create this file)
----------------------------------------------------------------
export const LINKS = {
  slackInvite: "https://join.slack.com/t/gatorgleam/shared_invite/zt-3aio6v7n8-GfDWzdGBkHU6kIq4hYe2iQ",
  drive: "https://drive.google.com/drive/u/0/folders/1MZ7C19r_Mn04Rbb-4WrmxDpzpqtifhHB",
  postBridge: "https://www.post-bridge.com/dashboard/create",
  canvaStyleGuide:
    "https://www.canva.com/design/DAGxU3sz2eE/dJP4Q1dKzNcwx1YkJqk_aw/edit?utm_content=DAGxU3sz2eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  site1031: "https://1031capitalsolutions.com",
  socialAffairIG: "https://www.instagram.com/socialaffairvenue/",
  socialAffairFB: "https://www.facebook.com/profile.php?id=100084027847229",
}

export type TaskStatus = "Not Started" | "In Progress" | "Blocked" | "Done"

export type Task = {
  id: string
  title: string
  week?: number
  category?: string
  goal?: string
  audience?: string
  deliverables?: string[]
  successMetric?: string
  steps?: string[]
  ctas?: { label: string; href: string }[]
  status: TaskStatus
}

export const tasks: Task[] = [
  // Task 1
  {
    id: "week1-social-gator-gleam",
    title: "Social (Gator Gleam): Create weekly social media content",
    week: 1,
    category: "Social",
    goal: "Produce 5–7 posts that reinforce Gator Gleam’s brand and attract leads.",
    audience: "Small biz owners, startups, local service pros.",
    deliverables: [
      "3 IG carousels",
      "2 Reels/TikToks",
      "2 LinkedIn posts",
      "2 X posts + captions",
      "Post-Bridge schedule",
    ],
    successMetric: "100% scheduled; ≥2 posts hit benchmark ER.",
    steps: [
      "Draft content calendar (7 days) + hooks",
      "Design carousels in Canva; script Reels",
      "Write captions with CTAs + hashtags",
      "QA: brand voice, specs, spelling, UTM on links",
      "Post for approval in Drive",
      "Schedule in Post-Bridge (note publish links)",
    ],
    ctas: [
      { label: "Join Slack", href: LINKS.slackInvite },
      { label: "Open Drive", href: LINKS.drive },
      { label: "Create in Post-Bridge", href: LINKS.postBridge },
      { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
    ],
    status: "Not Started",
  },

  // Task 2
  {
    id: "week1-social-social-affair",
    title: "Social (Client “Social Affair”): Create social posts",
    week: 1,
    category: "Social",
    goal: "Ship a 2-week content pack for Social Affair.",
    audience: "Their core customer.",
    deliverables: ["6 carousels", "captions", "cover images", "schedule plan"],
    steps: [
      "Review client feeds and tone",
      "Draft 2-week calendar and concepts",
      "Design carousels and covers",
      "Write/edit captions",
      "Prepare schedule plan for approval",
    ],
    ctas: [
      { label: "Open Instagram", href: LINKS.socialAffairIG },
      { label: "Open Facebook", href: LINKS.socialAffairFB },
      { label: "Open Drive", href: LINKS.drive },
    ],
    status: "Not Started",
  },

  // Task 3
  {
    id: "week1-portfolio-1031cs-screenshots",
    title: "Portfolio (1031 Capital Solutions): Capture website screenshots",
    week: 1,
    category: "Portfolio",
    goal: "Produce polished screenshots for Gator Gleam’s portfolio.",
    audience: "Future web/marketing clients.",
    deliverables: ["12–16 annotated screenshots (desktop + mobile)", "2 device mockups", "1 before/after collage"],
    successMetric: "Ready-to-publish Drive folder",
    steps: [
      "Make shot list (hero, nav, key sections, footer, forms)",
      "Capture desktop @ 1440px + mobile @ 390px",
      "Clean up (crop/alignment), add subtle annotations",
      "Place top 2 shots in device mockups",
      "Export PNGs; naming: YYYYMMDD_1031CS_section_v01",
      "Upload to Drive; attach folder link",
      "Add “Portfolio notes” (what you improved + results)",
      "Share 1 image in #content on Slack",
    ],
    ctas: [
      { label: "Open 1031 Capital Solutions", href: LINKS.site1031 },
      { label: "Open Drive", href: LINKS.drive },
      { label: "Open Slack", href: LINKS.slackInvite },
    ],
    status: "Not Started",
  },

  // Task 4
  {
    id: "week1-research-revamp-leads",
    title: "Research Project: Southern California website revamp leads",
    week: 1,
    category: "Research",
    goal: "Find businesses in Southern California with sites that need a revamp and prep cold emails.",
    deliverables: [
      "Company list with website link, phone number, and email address",
      "Draft emails to each company in a Google Doc",
    ],
    steps: [
      "Find websites that need a revamp",
      "Create a list of companies (website, phone, email)",
      "Draft cold emails to each company in a Google document",
    ],
    ctas: [
      { label: "Open Drive", href: LINKS.drive },
      { label: "Open Slack", href: LINKS.slackInvite },
    ],
    status: "Not Started",
  },
]

FILE: /data/onboarding.ts  (create this file)
\
----------------------------------------------------------------
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

TAILWIND
THEME (edit tailwind.config.js)
\
----------------------------------------------------------------
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2244ae",
        secondary: "#5886b8",
        accent: "#5a4324",
        background: "#f0ede4",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
}

IMPLEMENTATION
DETAILS
\
----------------------------------------------------------------
- Create shared components: <PageHeader/>, <Card/>, <Button/>, <Badge/>, <ChecklistItem/>, <TaskCard/>, <EmptyState/>.\
- Replace raw <a>
with styled <Button asChild><Link/>
</Button>
for CTAs (Slack invite, Drive, Post-Bridge, Canva, client links).\
- Persist onboarding
“done” states locally (e.g., localStorage keyed by step id)
with aria-live announcements
for toggles.\
- On /onboarding, auto-surface “Week
1
Tasks
” by reading tasks where week === 1.\
- On /tasks, implement filters (status/category/week) and search over title & goal
include
an
EmptyState
when
no
results.
\
- Add small note at top of /onboarding: Slack signup MUST use PERSONAL email.

ACCEPTANCE CRITERIA
----------------------------------------------------------------\
- /onboarding renders all sections
with working
“Mark as done” toggles and CTAs (Join Slack uses the invite
Canva
button
present
).\
- /tasks shows all four Week 1 tasks
filters
and
search
work
CTAs
render as Buttons
with proper hover/focus
states.
\
- Motion is subtle, consistent, and performant
no
layout
shift
on
load.
\
- Lighthouse: ≥90 Accessibility, ≥90 Best Practices on a sample page.

DELIVERABLES
----------------------------------------------------------------
- Updated pages/components implementing the structure above.
- tailwind.config.js updated
with brand tokens.
- /data/tasks.ts
and / data / onboarding.ts
created
and
wired
to / tasks
and /onboarding.
- Short
README
section
explaining
where
tasks / onboarding
live
and
the
“use PERSONAL email
for Slack” requirement.
