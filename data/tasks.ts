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

export type Week = {
  id: string
  title: string
  description: string
  tasks: Task[]
}

export const weeks: Week[] = [
  {
    id: "week-1",
    title: "Week 1: Foundation & First Deliverables",
    description:
      "Get familiar with our tools, brand voice, and deliver your first content pieces across social media, portfolio work, and research.",
    tasks: [
      {
        id: "week1-social-gator-gleam",
        title: "Social (Gator Gleam): Create weekly social media content",
        category: "Social",
        goal: "Produce 3–4 posts that reinforce Gator Gleam's brand and attract leads.",
        audience: "Small biz owners, startups, local service pros.",
        deliverables: [
          "2 IG carousels",
          "1 Reel/TikTok",
          "1 LinkedIn post",
          "1 X post + caption",
          "Post-Bridge schedule",
        ],
        successMetric: "100% scheduled; ≥1 post hits benchmark ER.",
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
      {
        id: "week1-social-social-affair",
        title: 'Social (Client "Social Affair"): Create social posts',
        category: "Social",
        goal: "Ship a 1-week content pack for Social Affair.",
        audience: "Their core customer.",
        deliverables: ["3 carousels", "captions", "cover images", "schedule plan"],
        steps: [
          "Review client feeds and tone",
          "Draft 1-week calendar and concepts",
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
      {
        id: "week1-portfolio-1031cs-screenshots",
        title: "Portfolio (1031 Capital Solutions): Capture website screenshots",
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
      {
        id: "week1-research-revamp-leads",
        title: "Research Project: Southern California website revamp leads",
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
    ],
  },
  {
    id: "week-2",
    title: "Week 2: Building Skills & Expanding Portfolio",
    description:
      "Build on Week 1's foundation with more advanced content creation, additional client work, and expanded research projects to strengthen your marketing skills.",
    tasks: [
      {
        id: "week2-social-gator-gleam",
        title: "Social (Gator Gleam): Advanced content with performance focus",
        category: "Social",
        goal: "Create 4-5 posts with improved design skills and analyze what worked from Week 1.",
        audience: "Small biz owners, startups, local service pros.",
        deliverables: [
          "3 IG carousels (more advanced design)",
          "1 Reel/TikTok with trending elements",
          "1 LinkedIn post with industry insights",
          "Post-Bridge schedule with optimal timing",
          "Brief analysis of Week 1 performance",
        ],
        successMetric: "Improved engagement from Week 1; cleaner designs.",
        steps: [
          "Review Week 1 posts - what got best engagement?",
          "Research current trends and incorporate them",
          "Create more sophisticated carousel designs",
          "Write captions with stronger hooks and CTAs",
          "Schedule at optimal times based on analytics",
          "Document what you learned for Week 3",
        ],
        ctas: [
          { label: "Join Slack", href: LINKS.slackInvite },
          { label: "Open Drive", href: LINKS.drive },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week2-social-social-affair-expanded",
        title: 'Social (Client "Social Affair"): Expanded content package',
        category: "Social",
        goal: "Create a more comprehensive 2-week content package with varied formats.",
        audience: "Social Affair's target customers.",
        deliverables: [
          "5 carousels with different themes",
          "2 single-image posts",
          "1 video/reel concept and script",
          "Captions with strategic hashtag research",
          "2-week content calendar",
        ],
        steps: [
          "Analyze their current content performance",
          "Brainstorm diverse content themes",
          "Create varied visual formats",
          "Research and test new hashtag combinations",
          "Write engaging captions with clear CTAs",
          "Present organized content calendar",
        ],
        ctas: [
          { label: "Open Instagram", href: LINKS.socialAffairIG },
          { label: "Open Facebook", href: LINKS.socialAffairFB },
          { label: "Open Drive", href: LINKS.drive },
        ],
      },
      {
        id: "week2-portfolio-website-audit",
        title: "Portfolio Project: Complete website audit & recommendations",
        category: "Portfolio",
        goal: "Conduct a comprehensive audit of a local business website and create improvement recommendations.",
        audience: "Local business owners needing website improvements.",
        deliverables: [
          "Website audit checklist and findings",
          "Before/after mockup designs",
          "SEO improvement recommendations",
          "User experience enhancement suggestions",
          "Professional audit report document",
        ],
        successMetric: "Complete audit with 10+ actionable recommendations.",
        steps: [
          "Find a local business with an outdated website",
          "Conduct full audit (design, UX, SEO, mobile, speed)",
          "Create mockups showing potential improvements",
          "Research SEO opportunities and keywords",
          "Write professional audit report",
          "Present findings in organized document",
        ],
        ctas: [
          { label: "Open Drive", href: LINKS.drive },
          { label: "Join Slack", href: LINKS.slackInvite },
        ],
      },
      {
        id: "week2-research-content-strategy",
        title: "Research Project: Industry content strategy analysis",
        category: "Research",
        goal: "Research successful content strategies in digital marketing and create recommendations for Gator Gleam.",
        deliverables: [
          "Analysis of 5 successful marketing agencies' content",
          "Content theme and format recommendations",
          "Posting frequency and timing insights",
          "Engagement strategy suggestions",
          "Implementation roadmap document",
        ],
        steps: [
          "Identify 5 successful digital marketing agencies",
          "Analyze their content themes, formats, and frequency",
          "Track their engagement patterns and timing",
          "Document what makes their content successful",
          "Create actionable recommendations for Gator Gleam",
          "Present findings in professional report",
        ],
        ctas: [
          { label: "Open Drive", href: LINKS.drive },
          { label: "Join Slack", href: LINKS.slackInvite },
        ],
      },
    ],
  },
]

export const tasks: Task[] = weeks.flatMap((week) => week.tasks)
