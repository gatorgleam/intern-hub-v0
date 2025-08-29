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
}

export const tasks: Task[] = [
  // Task 1
  {
    id: "week1-social-gator-gleam",
    title: "Social (Gator Gleam): Create weekly social media content",
    week: 1,
    category: "Social",
    goal: "Produce 5–7 posts that reinforce Gator Gleam's brand and attract leads.",
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
  },

  // Task 2
  {
    id: "week1-social-social-affair",
    title: 'Social (Client "Social Affair"): Create social posts',
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
  },

  // Task 3
  {
    id: "week1-portfolio-1031cs-screenshots",
    title: "Portfolio (1031 Capital Solutions): Capture website screenshots",
    week: 1,
    category: "Portfolio",
    goal: "Produce polished screenshots for Gator Gleam's portfolio.",
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
      'Add "Portfolio notes" (what you improved + results)',
      "Share 1 image in #content on Slack",
    ],
    ctas: [
      { label: "Open 1031 Capital Solutions", href: LINKS.site1031 },
      { label: "Open Drive", href: LINKS.drive },
      { label: "Open Slack", href: LINKS.slackInvite },
    ],
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
  },
]
