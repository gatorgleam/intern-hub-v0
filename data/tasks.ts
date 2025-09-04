export const LINKS = {
  slackInvite: "https://join.slack.com/t/gatorgleam/shared_invite/zt-3aio6v7n8-GfDWzdGBkHU6kIq4hYe2iQ",
  drive: "https://drive.google.com/drive/u/0/folders/1MZ7C19r_Mn04Rbb-4WrmxDpzpqtifhHB",
  postBridge: "https://www.post-bridge.com/dashboard/create",
  canvaStyleGuide:
    "https://www.canva.com/design/DAGxU3sz2eE/dJP4Q1dKzNcwx1YkJqk_aw/edit?utm_content=DAGxU3sz2eE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  site1031: "https://1031capitalsolutions.com",
  socialAffairIG: "https://www.instagram.com/socialaffairvenue/",
  socialAffairFB: "https://www.facebook.com/profile.php?id=100084027847229",
  trelloBoard:
    "https://trello.com/invite/b/68aa28a72f176a8ee6f622e0/ATTI2954874fa849662a50bc3ab431f3aafdB840BAE0/weekly-intern-tasks-gator-gleam",
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
          "Add completed content to Trello card",
          "Move to 'Review' column for approval",
          "Schedule in Post-Bridge once approved (note publish links)",
        ],
        ctas: [
          { label: "Join Slack", href: LINKS.slackInvite },
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
          { label: "Get Assets from Drive", href: LINKS.drive },
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
          "Add completed content to Trello card for approval",
        ],
        ctas: [
          { label: "Open Instagram", href: LINKS.socialAffairIG },
          { label: "Open Facebook", href: LINKS.socialAffairFB },
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Get Assets from Drive", href: LINKS.drive },
        ],
      },
      {
        id: "week1-portfolio-1031cs-screenshots",
        title: "Portfolio (1031 Capital Solutions): Capture website screenshots",
        category: "Portfolio",
        goal: "Produce polished screenshots for Gator Gleam's portfolio.",
        audience: "Future web/marketing clients.",
        deliverables: ["12–16 annotated screenshots (desktop + mobile)", "2 device mockups", "1 before/after collage"],
        successMetric: "Approved screenshots ready for Post-Bridge scheduling",
        steps: [
          "Make shot list (hero, nav, key sections, footer, forms)",
          "Capture desktop @ 1440px + mobile @ 390px",
          "Clean up (crop/alignment), add subtle annotations",
          "Place top 2 shots in device mockups",
          "Export PNGs; naming: YYYYMMDD_1031CS_section_v01",
          "Add completed screenshots to Trello card",
          'Add "Portfolio notes" (what you improved + results)',
          "Share 1 image in #content on Slack",
        ],
        ctas: [
          { label: "Open 1031 Capital Solutions", href: LINKS.site1031 },
          { label: "Open Trello Board", href: LINKS.trelloBoard },
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
          "Add completed research to Trello card for review",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
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
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
          { label: "Get Assets from Drive", href: LINKS.drive },
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
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Get Assets from Drive", href: LINKS.drive },
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
          { label: "Open Trello Board", href: LINKS.trelloBoard },
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
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Join Slack", href: LINKS.slackInvite },
        ],
      },
    ],
  },
  {
    id: "week-3",
    title: "Week 3 — Content Foundations: Carousels + Competitors + On-Page Basics + GSC",
    description:
      "Master content foundations with Instagram carousels, competitive analysis, keyword research, and Google Search Console setup.",
    tasks: [
      {
        id: "week3-instagram-carousel",
        title: "Design a 10-Slide Instagram Carousel in Canva",
        week: 3,
        category: "Content",
        goal: "Produce a swipe-worthy educational carousel aligned to Gator Gleam's style.",
        deliverables: ["PNG set + caption copy + hashtags"],
        steps: [
          "Choose one Intern Hub topic; outline 10 slides (hook → 3–5 tips → CTA)",
          "Use brand colors and readable typography; add alt text in the caption",
          "Export slides at 1080×1350",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week3-competitor-scan",
        title: "Competitor Scan (Instagram & YouTube)",
        week: 3,
        category: "Research",
        goal: "Identify 3 content ideas we should emulate/beat.",
        deliverables: ["1-page summary"],
        steps: [
          "Pick 3 competitors; log top 3 posts by engagement",
          "Note hooks, formats, posting frequency, and calls-to-action",
          "Propose 3 new post ideas w/ hook lines",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week3-keyword-research",
        title: "Keyword Research Basics (Ahrefs/Alt Tools OK)",
        week: 3,
        category: "SEO",
        goal: "Find 10 keywords for upcoming content.",
        deliverables: ["Sheet with 10 keywords + notes"],
        steps: [
          "Gather seed terms from site & FAQs",
          "Validate with tool (volume, difficulty, intent)",
          "Output: main keyword + 2–3 supporting terms each",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week3-google-search-console",
        title: "Set Up/Review Google Search Console (GSC)",
        week: 3,
        category: "SEO",
        goal: "Ensure property is verified and know core reports.",
        deliverables: ["1-page GSC snapshot"],
        steps: [
          "Verify property (if needed)",
          "Explore Performance, Pages/Indexing, Sitemaps",
          "List 3 insights + 2 actions",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-4",
    title: "Week 4 — Scheduling + On-Page SEO + SEO Crash Course + Content Draft",
    description:
      "Learn social media scheduling, improve on-page SEO, complete SEO fundamentals, and draft optimized blog content.",
    tasks: [
      {
        id: "week4-meta-scheduling",
        title: "Schedule 1 Week of Posts in Meta Business Suite",
        week: 4,
        category: "Social",
        goal: "Queue 5 posts (mix: carousels, reels/shorts, single images).",
        deliverables: ["Screenshot of calendar + post links"],
        steps: [
          "Upload assets; write captions & hashtags",
          "Schedule for optimal times; add alt text",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week4-meta-titles",
        title: "Write Meta Titles & Descriptions for 5 Pages",
        week: 4,
        category: "SEO",
        goal: "Improve CTR with compelling, keyword-aligned metadata.",
        deliverables: ["Metadata sheet"],
        steps: [
          "Map 1 focus keyword per page",
          "Draft title (≤60 chars) & description (≤155 chars)",
          "Include value prop + CTA; avoid truncation",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week4-seo-crash-course",
        title: "SEO Crash Course (Watch & Note-take)",
        week: 4,
        category: "SEO",
        goal: "Learn key SEO concepts used here.",
        deliverables: ["Notes (PDF)"],
        steps: [
          "Watch intro course; take notes on on-page, links, tech",
          "List 3 optimizations we can ship next month",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week4-blog-post-draft",
        title: "Draft a 700–900 Word Blog Post (Keyword From Week 3)",
        week: 4,
        category: "Content",
        goal: "Create a draft optimized for the chosen keyword.",
        deliverables: ["Google Doc link"],
        steps: [
          "Outline H1/H2s; write intro hook; add internal links",
          "Add meta title/description; include CTA",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-5",
    title: "Week 5 — Video Production: CapCut + Hooks + UGC Scripting + Reels/Shorts",
    description:
      "Master video editing with CapCut, create compelling hooks, script UGC ads, and publish your first reel.",
    tasks: [
      {
        id: "week5-capcut-basics",
        title: "CapCut Desktop Basics",
        week: 5,
        category: "Video",
        goal: "Edit a 30–45s reel/short from raw b-roll.",
        deliverables: ["MP4 file + caption"],
        steps: [
          "Import clips; trim; add captions & music",
          "Export vertical 1080×1920",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week5-hook-lines",
        title: "Write 15 Hook Lines (Short-Form)",
        week: 5,
        category: "Content",
        goal: "Build a hook bank for future posts.",
        deliverables: ["Hook bank (doc)"],
        steps: [
          "Study hook formulas; write 15 variations across 3 themes",
          "Validate 3 best with teammates",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week5-ugc-script",
        title: "UGC Ad Script (30–45s)",
        week: 5,
        category: "Content",
        goal: "Draft a direct-response UGC script (Hook → Problem → Solution → CTA).",
        deliverables: ["Script (doc)"],
        steps: [
          "Pick a service; draft script & shot list",
          "Add on-screen text cues and CTA",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week5-publish-reel",
        title: "Publish 1 Reel/Short",
        week: 5,
        category: "Social",
        goal: "Post natively; track performance.",
        deliverables: ["URL + metrics screenshot"],
        steps: [
          "Upload; use 1 best hook; add hashtags and cover",
          "Record 24–72h metrics (views, watch time, saves)",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-6",
    title: "Week 6 — Analytics Core: GA4 + UTM Links + Reporting",
    description:
      "Master Google Analytics 4, implement UTM tracking, and create your first analytics reports.",
    tasks: [
      {
        id: "week6-ga4-orientation",
        title: "GA4 Orientation",
        week: 6,
        category: "Analytics",
        goal: "Navigate Reports, Explorations, Key Events.",
        deliverables: ["Notes + screenshots"],
        steps: [
          "Watch intro; open GA4 property",
          "Note 5 metrics we'll track weekly",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week6-utm-links",
        title: "Build UTM Links for 5 Posts",
        week: 6,
        category: "Analytics",
        goal: "Track campaign performance properly.",
        deliverables: ["UTM sheet + links"],
        steps: [
          "Use Campaign URL Builder; set source/medium/campaign",
          "Add to scheduled posts",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week6-utm-data-ga4",
        title: "See UTM Data in GA4",
        week: 6,
        category: "Analytics",
        goal: "Confirm UTMs are populating.",
        deliverables: ["1-page mini-report"],
        steps: [
          "Check Acquisition reports; create quick Explore if needed",
          "Screenshot top source/medium",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week6-gtm-primer",
        title: "(Optional Stretch) GTM Primer",
        week: 6,
        category: "Analytics",
        goal: "Understand tags/triggers/variables conceptually.",
        deliverables: ["Notes on 3 tag ideas we might add later"],
        steps: [
          "Learn basic GTM concepts and structure",
          "Identify potential implementation opportunities",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-7",
    title: "Week 7 — Lead Gen: Lead Magnet + Landing Page (Mailchimp or Unbounce)",
    description:
      "Create your first lead magnet, build a landing page, and design promotional materials for lead generation.",
    tasks: [
      {
        id: "week7-lead-magnet",
        title: "Create a 6–8 Page Lead Magnet in Canva (PDF)",
        week: 7,
        category: "Lead Gen",
        goal: "Design a checklist/guide that solves one problem.",
        deliverables: ["PDF + cover image"],
        steps: [
          "Outline; design in Canva; export PDF",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week7-landing-page",
        title: "Build a Landing Page (Choose Mailchimp or Unbounce)",
        week: 7,
        category: "Lead Gen",
        goal: "Publish a simple opt-in page.",
        deliverables: ["Live URL + screenshots"],
        steps: [
          "Create page; add compelling headline, bullets, form",
          "Connect to an email list; set confirmation",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week7-ad-creative-draft",
        title: "Hook + Ad Creative Draft for Lead Magnet",
        week: 7,
        category: "Content",
        goal: "3 hooks and 1 static + 1 short-form video concept.",
        deliverables: ["Doc with hooks + mockups"],
        steps: [
          "Draft 3 compelling hooks for the lead magnet",
          "Create mockups for static and video ad concepts",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week7-qa-landing-page",
        title: "QA the Landing Page",
        week: 7,
        category: "QA",
        goal: "Mobile, load speed, form submission, thank-you flow.",
        deliverables: ["QA checklist + fixes list"],
        steps: [
          "Test mobile responsiveness and load speed",
          "Verify form submission and thank-you flow",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-8",
    title: "Week 8 — Social Audit + Analytics + Testimonials",
    description:
      "Conduct comprehensive social media audit, analyze performance metrics, and collect client testimonials.",
    tasks: [
      {
        id: "week8-social-audit",
        title: "Social Media Audit",
        week: 8,
        category: "Analytics",
        goal: "Assess our Instagram/YouTube health.",
        deliverables: ["Audit doc (template)"],
        steps: [
          "Inventory; pull 90-day metrics; identify top 5 posts",
          "Recommend 5 actions",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week8-hootsuite-analytics",
        title: "Hootsuite Analytics (or native) Overview",
        week: 8,
        category: "Analytics",
        goal: "Learn to pull post-level and profile reports.",
        deliverables: ["Screenshots + 3 insights"],
        steps: [
          "Navigate analytics dashboard and reporting features",
          "Extract key insights from performance data",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week8-testimonials",
        title: "Ask for 2 Testimonials (Scripts)",
        week: 8,
        category: "Business Development",
        goal: "Collect 2 quotes from past clients.",
        deliverables: ["2 confirmations or scheduled calls"],
        steps: [
          "Adapt script; email 3 clients; follow up once",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week8-community-engagement",
        title: "Community Engagement Routine (Instagram)",
        week: 8,
        category: "Social",
        goal: "30-minute engagement block SOP.",
        deliverables: ["SOP + first-run metrics (comments, replies, saves)"],
        steps: [
          "Develop systematic engagement routine",
          "Track and measure engagement activities",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-9",
    title: "Week 9 — Performance: Core Web Vitals + PageSpeed + Image Export + Lighthouse",
    description:
      "Master website performance optimization including Core Web Vitals, PageSpeed insights, and Lighthouse audits.",
    tasks: [
      {
        id: "week9-core-web-vitals",
        title: "Learn Core Web Vitals (INP, LCP, CLS)",
        week: 9,
        category: "Performance",
        goal: "Understand metrics and thresholds.",
        deliverables: ["Notes + how they affect UX/SEO"],
        steps: [
          "Study Core Web Vitals fundamentals",
          "Document impact on user experience and SEO",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week9-pagespeed-insights",
        title: "Run PageSpeed Insights on 3 Pages",
        week: 9,
        category: "Performance",
        goal: "Find 3 fixes we can request.",
        deliverables: ["PSI screenshots + action list"],
        steps: [
          "Analyze PageSpeed Insights for key pages",
          "Identify and prioritize performance improvements",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week9-image-optimization",
        title: "Export Optimized Images from Canva",
        week: 9,
        category: "Performance",
        goal: "Reduce image weight without quality loss.",
        deliverables: ["Before/after sizes"],
        steps: [
          "Learn image optimization techniques in Canva",
          "Compare file sizes before and after optimization",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week9-lighthouse-audit",
        title: "Run a Lighthouse Audit",
        week: 9,
        category: "Performance",
        goal: "Capture a baseline and list 5 improvements.",
        deliverables: ["Lighthouse report + recommendations"],
        steps: [
          "Conduct comprehensive Lighthouse audit",
          "Document findings and improvement recommendations",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-10",
    title: "Week 10 — Outreach: Influencers + Backlinks + Cold Email + Offer One-Pager",
    description:
      "Develop outreach strategies including influencer partnerships, link building, cold email campaigns, and value propositions.",
    tasks: [
      {
        id: "week10-influencer-shortlist",
        title: "Micro-Influencer Shortlist (YouTube/IG)",
        week: 10,
        category: "Outreach",
        goal: "10 creators with audience/brand fit.",
        deliverables: ["Sheet w/ reach, rate estimate, angle"],
        steps: [
          "Research and identify relevant micro-influencers",
          "Analyze audience fit and engagement rates",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week10-link-building",
        title: "Link Building 101",
        week: 10,
        category: "SEO",
        goal: "Identify 5 realistic link opportunities.",
        deliverables: ["Prospect list + angle (guest post, resource, local)"],
        steps: [
          "Research link building opportunities",
          "Develop outreach angles and value propositions",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week10-cold-email-sequence",
        title: "Cold Email Sequence (3 Emails)",
        week: 10,
        category: "Outreach",
        goal: "Write outreach for influencers or backlinks.",
        deliverables: ["3-step sequence (value-led, short, specific CTA)"],
        steps: [
          "Craft compelling email subject lines and openings",
          "Structure value-driven follow-up sequence",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week10-offer-sheet",
        title: "One-Page Offer Sheet",
        week: 10,
        category: "Business Development",
        goal: "Clarify our value props, proof, CTAs.",
        deliverables: ["PDF one-pager"],
        steps: [
          "Design compelling value proposition layout",
          "Include social proof and clear calls-to-action",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-11",
    title: "Week 11 — Campaign Planning + Email + Measurement",
    description:
      "Plan comprehensive marketing campaigns, execute email marketing, and establish measurement frameworks.",
    tasks: [
      {
        id: "week11-campaign-plan",
        title: "30-Day Campaign Plan",
        week: 11,
        category: "Strategy",
        goal: "Timeline, goals, channels, assets, KPIs.",
        deliverables: ["1-page plan"],
        steps: [
          "Define campaign objectives and target audience",
          "Create timeline with key milestones and deliverables",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week11-mailchimp-campaign",
        title: "Mailchimp Email Campaign",
        week: 11,
        category: "Email Marketing",
        goal: "Create & schedule 1 promo email for the lead magnet.",
        deliverables: ["Draft + preview + send time"],
        steps: [
          "Design email template with compelling copy",
          "Set up automation and scheduling",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week11-ga4-goals",
        title: "GA4 Goals & Report Snapshot",
        week: 11,
        category: "Analytics",
        goal: "Define success metrics; pull baseline.",
        deliverables: ["KPI list + baseline screenshot"],
        steps: [
          "Establish key performance indicators",
          "Create baseline measurements for tracking",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week11-hook-bank-refresh",
        title: "Hook Bank Refresh (Add 10)",
        week: 11,
        category: "Content",
        goal: "Expand hooks aligned to campaign.",
        deliverables: ["Updated hook bank"],
        steps: [
          "Research current trends and viral content",
          "Create campaign-specific hook variations",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
  {
    id: "week-12",
    title: "Week 12 — Reporting + Portfolio + Handoff",
    description:
      "Create comprehensive reports, build portfolio pieces, and prepare professional handoff documentation.",
    tasks: [
      {
        id: "week12-looker-studio-dashboard",
        title: "Looker Studio GA4 Dashboard (Starter)",
        week: 12,
        category: "Analytics",
        goal: "Build a simple dashboard (traffic, source/medium, conversions).",
        deliverables: ["Share link + PDF export"],
        steps: [
          "Connect GA4 data to Looker Studio",
          "Create visualizations for key metrics",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week12-case-study",
        title: "1-Page Case Study",
        week: 12,
        category: "Portfolio",
        goal: "Document a win from the internship (carousel performance, lead magnet sign-ups, etc.).",
        deliverables: ["1-page PDF (problem → actions → results → next steps)"],
        steps: [
          "Select highest-impact project from internship",
          "Structure case study with clear problem-solution narrative",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
      {
        id: "week12-presentation-deck",
        title: "Canva Slide Deck (10 Slides)",
        week: 12,
        category: "Presentation",
        goal: "Present key outcomes and recommendations.",
        deliverables: ["Shareable deck link"],
        steps: [
          "Summarize major accomplishments and learnings",
          "Include data-driven results and recommendations",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
      },
      {
        id: "week12-trello-handoff",
        title: "Trello Handoff",
        week: 12,
        category: "Project Management",
        goal: "Clean up all cards; ensure everything is reviewable.",
        deliverables: ["Board is organized by weeks; all attachments present; blockers noted"],
        steps: [
          "Organize all completed work by week",
          "Ensure all deliverables are properly attached and documented",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
      },
    ],
  },
]

export const tasks: Task[] = weeks.flatMap((week) => week.tasks)
