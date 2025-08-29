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
    title: "Week 2: Scale & Optimize",
    description:
      "Build on Week 1's foundation by scaling content production, analyzing performance, and expanding into new marketing channels.",
    tasks: [
      {
        id: "week2-social-gator-gleam-advanced",
        title: "Social (Gator Gleam): Advanced content & performance analysis",
        category: "Social",
        goal: "Create 4-5 posts with A/B testing and analyze Week 1 performance to optimize strategy.",
        audience: "Small biz owners, startups, local service pros.",
        deliverables: [
          "2 IG carousels (1 A/B test variant)",
          "1 Reel/TikTok with trending audio",
          "1 LinkedIn thought leadership post",
          "1 X thread",
          "Performance report from Week 1",
          "Optimized content calendar for Week 3",
        ],
        successMetric: "20% improvement in engagement rate from Week 1 baseline.",
        steps: [
          "Analyze Week 1 performance metrics",
          "Identify top-performing content themes",
          "Create A/B test variants for best posts",
          "Research trending hashtags and audio",
          "Draft thought leadership content for LinkedIn",
          "Create performance report with recommendations",
          "Schedule all content with optimal timing",
        ],
        ctas: [
          { label: "Join Slack", href: LINKS.slackInvite },
          { label: "Open Drive", href: LINKS.drive },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week2-email-campaign",
        title: "Email Marketing: Launch nurture sequence",
        category: "Email",
        goal: "Create and launch a 5-email nurture sequence for new leads.",
        audience: "Website visitors and social media followers who downloaded lead magnets.",
        deliverables: [
          "5 email templates with subject lines",
          "Email sequence strategy document",
          "A/B test plan for subject lines",
          "Performance tracking setup",
        ],
        successMetric: "25%+ open rate, 5%+ click-through rate on sequence.",
        steps: [
          "Map customer journey and pain points",
          "Write email sequence (welcome, value, social proof, offer, follow-up)",
          "Design email templates in brand style",
          "Set up A/B tests for subject lines",
          "Configure automation and tracking",
          "Launch sequence and monitor metrics",
        ],
        ctas: [
          { label: "Open Drive", href: LINKS.drive },
          { label: "Join Slack", href: LINKS.slackInvite },
        ],
      },
      {
        id: "week2-content-repurposing",
        title: "Content Repurposing: Transform blog into multi-format content",
        category: "Content",
        goal: "Take 2 existing blog posts and repurpose into 15+ pieces of content across platforms.",
        audience: "Multi-platform audience (social, email, video, podcast).",
        deliverables: [
          "2 blog posts broken into micro-content",
          "6 quote graphics",
          "4 carousel posts",
          "2 video scripts",
          "3 email newsletter sections",
          "Content repurposing template for future use",
        ],
        successMetric: "15+ content pieces published across 4+ platforms.",
        steps: [
          "Select 2 high-performing blog posts",
          "Extract key quotes, statistics, and insights",
          "Create content matrix (platform x format)",
          "Design quote graphics and carousels",
          "Write video scripts and email sections",
          "Create reusable repurposing template",
          "Schedule content across platforms",
        ],
        ctas: [
          { label: "Open Drive", href: LINKS.drive },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
        ],
      },
      {
        id: "week2-competitor-analysis",
        title: "Competitive Intelligence: Deep-dive analysis & strategy",
        category: "Research",
        goal: "Analyze 5 competitors' marketing strategies and create actionable insights for Gator Gleam.",
        audience: "Internal team and potential clients.",
        deliverables: [
          "Competitor analysis spreadsheet",
          "Content gap analysis",
          "Pricing comparison chart",
          "Strategic recommendations document",
          "Opportunity identification report",
        ],
        successMetric: "3+ actionable strategies identified for immediate implementation.",
        steps: [
          "Identify 5 direct competitors",
          "Audit their social media, website, and content",
          "Analyze pricing, positioning, and messaging",
          "Identify content gaps and opportunities",
          "Document best practices and innovations",
          "Create strategic recommendations",
          "Present findings to team",
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
