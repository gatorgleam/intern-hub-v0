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
  trainingVideos?: { title: string; url: string }[]
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
          "Step 1: Create a 7-day content calendar in Google Sheets with columns: Date, Platform, Post Type, Topic, Hook/Caption, Hashtags, Status",
          "Step 2: Brainstorm engaging hooks for each post - start with questions, bold statements, or 'Did you know...' facts",
          "Step 3: Design 2 carousels in Canva using brand colors and fonts (check style guide) - keep text large and readable",
          "Step 4: Script 1 Reel/TikTok video (30-60 seconds) with clear beginning, middle, end structure",
          "Step 5: Write captions for each post (100-150 words) including value, personality, and clear call-to-action",
          "Step 6: Research and add relevant hashtags - mix popular (#marketing) and niche (#gatorgleamtips) - 15-20 per post",
          "Step 7: Quality check everything - brand voice matches Gator Gleam style, image specs correct (1080x1080 for posts), all spelling/grammar perfect",
          "Step 8: Add UTM tracking codes to any website links (ask supervisor for company UTM structure)",
          "Step 9: Upload all completed content to your Trello card with clear file names and descriptions",
          "Step 10: Move your Trello card to 'Review' column and notify supervisor for approval",
          "Step 11: Once approved, schedule all posts in Post-Bridge for optimal times and save publish confirmation links",
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
          "Step 1: Visit Social Affair's Instagram and Facebook pages - study their current posts, tone, colors, and audience engagement",
          "Step 2: Note their brand personality - elegant, fun, professional? Take screenshots of their best-performing posts",
          "Step 3: Create a 1-week content calendar specifically for Social Affair - include event highlights, behind-the-scenes, and promotional content",
          "Step 4: Design 3 carousels in Canva matching their brand aesthetic - use their colors, fonts, and style preferences",
          "Step 5: Create eye-catching cover images for each carousel that entice users to swipe through",
          "Step 6: Write captions that match Social Affair's voice - include venue details, event information, and compelling calls-to-action",
          "Step 7: Research hashtags specific to their industry - event venue, wedding, party planning hashtags",
          "Step 8: Organize all content in a clear folder structure with client name and date",
          "Step 9: Upload everything to Trello with detailed descriptions and move to Review column",
          "Step 10: Prepare a brief presentation explaining your content strategy and creative decisions for client review",
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
          "Step 1: Visit 1031capitalsolutions.com and create a shot list - homepage hero, navigation menu, services section, about page, contact forms, footer",
          "Step 2: Set your browser to 1440px width (use developer tools) and take desktop screenshots of each section",
          "Step 3: Switch to mobile view (390px width) and capture the same sections on mobile devices",
          "Step 4: Use a screenshot tool like CleanShot X or built-in tools to ensure high quality captures",
          "Step 5: Edit screenshots in Canva or Photoshop - crop properly, align elements, adjust brightness if needed",
          "Step 6: Add subtle annotations with arrows pointing to key features or improvements you'd suggest",
          "Step 7: Choose your 2 best screenshots and place them in device mockups (iPhone and MacBook mockups available in Canva)",
          "Step 8: Export all images as PNG files with naming convention: 20240315_1031CS_homepage_v01.png",
          "Step 9: Upload all screenshots to your Trello card with organized folders (Desktop Screenshots, Mobile Screenshots, Mockups)",
          "Step 10: Write portfolio notes explaining what makes this website effective and what improvements you'd suggest",
          "Step 11: Share your best mockup image in the #content Slack channel with a brief description",
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
          "Step 1: Search for Southern California businesses using Google Maps, Yelp, and local business directories",
          "Step 2: Look for websites that appear outdated - poor mobile responsiveness, old design, slow loading, unclear navigation",
          "Step 3: Target small to medium businesses (restaurants, service providers, local retailers) who could benefit from web redesign",
          "Step 4: Create a detailed spreadsheet with columns: Company Name, Website URL, Phone Number, Email Address, Industry, Current Website Issues",
          "Step 5: Use tools like Hunter.io or LinkedIn to find contact email addresses for decision makers",
          "Step 6: Research each company's background, services, and target audience to personalize your approach",
          "Step 7: Draft personalized cold emails in a Google Doc - include specific observations about their current website",
          "Step 8: Structure emails: Compelling subject line, brief introduction, specific website insights, value proposition, clear call-to-action",
          "Step 9: Keep emails concise (under 150 words) and professional but friendly in tone",
          "Step 10: Include before/after website examples from Gator Gleam's portfolio to demonstrate capability",
          "Step 11: Upload completed research and email drafts to Trello with clear organization and move to Review",
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
          "Step 1: Analyze Week 1 performance - check Post-Bridge analytics for likes, comments, shares, and reach on each post",
          "Step 2: Identify patterns - which post types performed best? What time of day? Which hashtags worked?",
          "Step 3: Research current social media trends using TikTok trending page, Instagram Reels discovery, and Google Trends",
          "Step 4: Create 3 more sophisticated carousels with improved design elements - better typography, color gradients, professional layouts",
          "Step 5: Design 1 trending Reel/TikTok incorporating current sounds, effects, or viral formats relevant to marketing",
          "Step 6: Write stronger hooks for captions - use curiosity gaps, bold statements, or contrarian viewpoints",
          "Step 7: Improve CTAs to be more specific and actionable - 'Comment your biggest marketing challenge' vs 'What do you think?'",
          "Step 8: Schedule posts at optimal times based on Week 1 data and platform best practices",
          "Step 9: Create a LinkedIn post targeting business owners with industry insights and professional tone",
          "Step 10: Track all performance metrics in a spreadsheet for comparison with Week 1",
          "Step 11: Document lessons learned and improvements for Week 3 strategy refinement",
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
          "Step 1: Analyze Social Affair's last 30 posts - track which posts got highest engagement and identify successful patterns",
          "Step 2: Brainstorm 5 diverse content themes - event showcases, behind-the-scenes setup, client testimonials, venue features, seasonal promotions",
          "Step 3: Create content variety - 5 carousels (different layouts), 2 single images (high-quality photos), 1 video concept with storyboard",
          "Step 4: Research industry-specific hashtags - test combinations of popular and niche event planning hashtags",
          "Step 5: Write engaging captions that tell stories about events, highlight venue benefits, and create emotional connections",
          "Step 6: Include clear CTAs in every caption - 'Book your consultation', 'Tour our venue', 'See more photos'",
          "Step 7: Create a detailed 2-week content calendar with optimal posting times for event industry audience",
          "Step 8: Include content pillars breakdown - 40% event showcases, 30% behind-the-scenes, 20% testimonials, 10% promotional",
          "Step 9: Design templates that Social Affair can reuse for future content creation",
          "Step 10: Present everything in a professional client deck explaining strategy and expected outcomes",
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
        deliverables: ["10 PNG slides (1080×1350)", "Caption copy with hashtags", "Alt text descriptions"],
        steps: [
          "Step 1: Choose your topic from Intern Hub content (examples: social media tips, marketing basics, productivity hacks)",
          "Step 2: Create your content outline - Slide 1: Hook question or bold statement, Slides 2-6: Main tips/points, Slides 7-9: Supporting details or examples, Slide 10: Clear call-to-action",
          "Step 3: Open Canva → Search 'Instagram Carousel' → Choose 1080×1350 template",
          "Step 4: Use Gator Gleam brand colors (check style guide) - primary blue, white, accent colors",
          "Step 5: Keep text large and readable - minimum 24pt font, high contrast colors",
          "Step 6: Create consistent design across all 10 slides - same fonts, color scheme, layout style",
          "Step 7: Write engaging caption (150-200 words) explaining the carousel content",
          "Step 8: Add 15-20 relevant hashtags (#marketing #socialmedia #tips #gatorgleam)",
          "Step 9: Export all slides as PNG files, name them: 'carousel_slide_01.png' through 'carousel_slide_10.png'",
          "Step 10: Write alt text for each slide describing the visual content for accessibility",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Canva Style Guide", href: LINKS.canvaStyleGuide },
        ],
        trainingVideos: [
          { title: "How to Create Instagram Carousels in Canva", url: "https://www.youtube.com/watch?v=1WmNXEVia8I" },
          { title: "Instagram Carousel Post Ideas & Design Tips", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" }
        ],
      },
      {
        id: "week3-competitor-scan",
        title: "Competitor Scan (Instagram & YouTube)",
        week: 3,
        category: "Research",
        goal: "Identify 3 content ideas we should emulate/beat.",
        deliverables: ["Competitor analysis document", "3 new content ideas with hooks"],
        steps: [
          "Step 1: Research and select 3 marketing agencies similar to Gator Gleam (look for agencies with 5K-50K followers)",
          "Step 2: For each competitor, visit their Instagram and YouTube profiles",
          "Step 3: Identify their top 3 posts by engagement (likes + comments + shares) from the past 30 days",
          "Step 4: For each top post, record: Post type (carousel, reel, static image), Hook/opening line, Main topic/theme, Call-to-action used, Engagement numbers",
          "Step 5: Analyze posting patterns - How often do they post?, What day/time?, What content types perform best?",
          "Step 6: Note their content style - Tone of voice (professional, casual, funny), Visual brand consistency, Hashtag strategy",
          "Step 7: Create a summary document with your findings for all 3 competitors",
          "Step 8: Based on your research, brainstorm 3 new post ideas for Gator Gleam",
          "Step 9: Write compelling hook lines for each of your 3 ideas (first 5-7 words that grab attention)",
          "Step 10: Explain why each idea would work better than what competitors are doing",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
        trainingVideos: [
          { title: "How to Research Your Competitors on Social Media", url: "https://www.youtube.com/watch?v=TNhaISOUy6Q" },
          { title: "Social Media Competitor Analysis Tutorial", url: "https://www.youtube.com/watch?v=IkOVe40Sy0U" }
        ],
      },
      {
        id: "week3-keyword-research",
        title: "Keyword Research Basics (Ahrefs/Alt Tools OK)",
        week: 3,
        category: "SEO",
        goal: "Find 10 keywords for upcoming content.",
        deliverables: ["Keyword research spreadsheet", "Analysis notes for each keyword"],
        steps: [
          "Step 1: Create a Google Sheet with columns: 'Keyword', 'Search Volume', 'Difficulty', 'Intent', 'Supporting Keywords', 'Content Ideas'",
          "Step 2: Brainstorm seed keywords related to Gator Gleam services (examples: 'digital marketing', 'social media management', 'website design')",
          "Step 3: Use free tools - Google Keyword Planner, Ubersuggest free version, or Answer The Public",
          "Step 4: For each seed keyword, find related terms and long-tail variations (3-4 word phrases)",
          "Step 5: Research search volume - aim for keywords with 100-1000 monthly searches (realistic for a growing agency)",
          "Step 6: Check keyword difficulty - look for 'low' to 'medium' difficulty scores (we want achievable rankings)",
          "Step 7: Identify search intent for each keyword: Informational (learning), Commercial (comparing), Transactional (buying)",
          "Step 8: For each main keyword, find 2-3 supporting/related keywords to use in the same content piece",
          "Step 9: Add content ideas for each keyword (blog post title, social media post, landing page)",
          "Step 10: Prioritize your list - mark the top 5 keywords we should target first based on relevance and opportunity",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
        trainingVideos: [
          { title: "Keyword Research for SEO: From Start to Finish", url: "https://www.youtube.com/watch?v=VjjaqX-Y1N4" },
          { title: "Free Keyword Research Tools (No Ahrefs Needed)", url: "https://www.youtube.com/watch?v=1nVUfZg2dSA" }
        ],
      },
      {
        id: "week3-google-search-console",
        title: "Set Up/Review Google Search Console (GSC)",
        week: 3,
        category: "SEO",
        goal: "Ensure property is verified and know core reports.",
        deliverables: ["GSC setup confirmation", "Performance insights document", "Action plan"],
        steps: [
          "Step 1: Go to search.google.com/search-console and sign in with your Google account",
          "Step 2: Add Gator Gleam website as a property (ask supervisor for website URL if needed)",
          "Step 3: Verify website ownership using HTML tag method (supervisor will help with website access)",
          "Step 4: Wait for verification confirmation (can take a few hours to show data)",
          "Step 5: Explore the Performance report - see which keywords bring traffic, click-through rates, and page positions",
          "Step 6: Check the Pages report - see which pages are indexed and any indexing issues",
          "Step 7: Review the Sitemaps section - ensure XML sitemap is submitted and processed",
          "Step 8: Look at the Coverage report - identify any pages with errors or warnings",
          "Step 9: Take screenshots of key metrics and create a summary document",
          "Step 10: Write down 3 key insights you discovered and 2 actionable improvements we could make",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
        ],
        trainingVideos: [
          { title: "Google Search Console Tutorial 2024", url: "https://www.youtube.com/watch?v=3aCoZpWzP0Y" },
          { title: "Google Search Console Setup & Basics", url: "https://www.youtube.com/watch?v=1wXYg8EsG3A" }
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
        id: "week4-postbridge-scheduling",
        title: "Schedule 1 Week of Posts in Post-Bridge",
        week: 4,
        category: "Social",
        goal: "Queue 5 posts (mix: carousels, reels/shorts, single images).",
        deliverables: ["5 scheduled posts", "Content calendar screenshot", "Post performance tracking sheet"],
        steps: [
          "Step 1: Log into Post-Bridge dashboard using company credentials (password located on Trello Board)",
          "Step 2: Plan your content mix - 2 carousels, 1 reel/video, 2 single images (educational or behind-the-scenes)",
          "Step 3: Prepare all visual assets - ensure images are high-quality, properly sized, and on-brand",
          "Step 4: Write engaging captions for each post (100-150 words) with clear value and call-to-action",
          "Step 5: Research and add relevant hashtags - mix of popular (#marketing) and niche (#gatorgleamtips) hashtags",
          "Step 6: Schedule posts for optimal times - generally 9-11am and 7-9pm work well for business content",
          "Step 7: Add alt text descriptions for all images (important for accessibility)",
          "Step 8: Space posts evenly throughout the week - avoid posting multiple times on same day",
          "Step 9: Take screenshot of your weekly content calendar showing all scheduled posts",
          "Step 10: Create a tracking sheet to monitor each post's performance (likes, comments, shares, reach)",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "Create in Post-Bridge", href: LINKS.postBridge },
        ],
        trainingVideos: [
          { title: "Social Media Scheduling: Complete Guide", url: "https://www.youtube.com/watch?v=F5x5W1rQFow" },
          { title: "How to Schedule Social Media Posts Effectively", url: "https://www.youtube.com/watch?v=wiGGvvZdOuc" }
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
        trainingVideos: [
          { title: "CapCut Desktop Complete Tutorial", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c" },
          { title: "CapCut Video Editing for Beginners", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" }
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
        trainingVideos: [
          { title: "How to Write UGC Scripts That Convert", url: "https://www.youtube.com/watch?v=0gtCEyrFTxU" },
          { title: "UGC Video Marketing Strategy", url: "https://www.youtube.com/watch?v=VQMPTvnkEAQ" }
        ],
      },
      {
        id: "week5-split-app-ugc",
        title: "Create UGC Content for Split Bill Splitter App",
        week: 5,
        category: "Content",
        goal: "Create authentic user-generated content promoting Split app for social media campaigns.",
        deliverables: ["3 detailed video scripts (30-45 seconds each)", "Instagram captions with hashtags", "3-week content calendar"],
        steps: [
          "Step 1: Visit the Split app on App Store and read all features, benefits, and user reviews thoroughly",
          "Step 2: Identify the app's key selling points - receipt scanning, real-time balances, easy splitting, multiple currencies",
          "Step 3: Plan 3 different scenarios: Scenario A: Friend group at restaurant splitting dinner bill, Scenario B: Roommates dividing monthly expenses, Scenario C: Travel group managing vacation costs",
          "Step 4: Write authentic dialogue for each scenario - use natural conversation, show the 'before/after' problem/solution",
          "Step 5: Include specific app actions in scripts - show phone screen, demonstrate scanning receipt, highlight features",
          "Step 6: Create shot lists for each video - wide shots of group, close-ups of phone screen, reaction shots",
          "Step 7: Write Instagram captions (150-200 words) that feel personal and relatable, not overly promotional",
          "Step 8: Develop hashtag strategy - mix app-specific (#Split #BillSplitter), lifestyle (#FriendshipHacks #Roommates), and trending hashtags",
          "Step 9: Plan 3-week posting schedule with optimal timing for each platform (Instagram, TikTok, Stories)",
          "Step 10: Include engagement prompts like 'Tag a friend who always forgets their wallet' to encourage interaction",
        ],
        ctas: [
          { label: "Open Trello Board", href: LINKS.trelloBoard },
          { label: "View Split App", href: "https://apps.apple.com/us/app/split-bill-splitter/id6746829861" },
        ],
        trainingVideos: [
          { title: "UGC Content Creation for Apps", url: "https://www.youtube.com/watch?v=LvBd8Kjz0xY" },
          { title: "How to Make Viral App Promotion Videos", url: "https://www.youtube.com/watch?v=xnOe8aA9Pmw" }
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
        trainingVideos: [
          { title: "Google Analytics 4 Tutorial for Beginners", url: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
          { title: "GA4 Setup and Basic Reports", url: "https://www.youtube.com/watch?v=Ntpp8mzp1Jw" }
        ],
      },
      {
        id: "week6-utm-links",
        title: "Build UTM Links for 5 Posts",
        week: 6,
        category: "Analytics",
        goal: "Track campaign performance properly.",
        deliverables: ["UTM tracking spreadsheet", "5 custom UTM links", "Implementation guide"],
        steps: [
          "Step 1: Go to Google Campaign URL Builder (ga-dev-tools.google/campaign-url-builder/)",
          "Step 2: Create a tracking spreadsheet with columns: Campaign Name, Source, Medium, Content, Original URL, UTM URL, Purpose",
          "Step 3: For each of 5 posts, define UTM parameters - Source (instagram/facebook), Medium (social), Campaign (week6-content)",
          "Step 4: Add specific content parameters to differentiate posts - carousel1, reel1, story1, etc.",
          "Step 5: Generate UTM links using the builder tool - ensure all fields are filled correctly",
          "Step 6: Test each UTM link by clicking it and verifying it goes to correct destination",
          "Step 7: Shorten UTM links using bit.ly or similar to make them social-media friendly",
          "Step 8: Add UTM links to your scheduled social media posts replacing original website links",
          "Step 9: Create a reference guide showing team how to create UTM links for future campaigns",
          "Step 10: Document naming conventions to ensure consistency across all future tracking",
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
        deliverables: ["8-page PDF lead magnet", "Eye-catching cover design", "Landing page copy"],
        steps: [
          "Step 1: Choose your lead magnet topic - '10-Point Social Media Audit Checklist' or 'Website Conversion Optimization Guide'",
          "Step 2: Create detailed outline with 6-8 pages: Cover, Introduction, Problem explanation, 5-7 actionable steps/tips, Conclusion with CTA",
          "Step 3: Open Canva and search for 'Lead Magnet' or 'Checklist' templates - choose professional, clean design",
          "Step 4: Design cover page with compelling headline, subtitle, and Gator Gleam branding",
          "Step 5: Create consistent layout for interior pages - use same fonts, colors, and spacing throughout",
          "Step 6: Write clear, actionable content for each page - use bullet points, numbered lists, and whitespace effectively",
          "Step 7: Include practical examples and specific recommendations users can implement immediately",
          "Step 8: Add Gator Gleam contact information and subtle branding on each page",
          "Step 9: Create a strong call-to-action on final page - 'Ready for professional help? Schedule a free consultation'",
          "Step 10: Export as high-quality PDF and create separate cover image for social media promotion",
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
        deliverables: ["Interactive Looker Studio dashboard", "Shareable link", "PDF report export", "Dashboard usage guide"],
        steps: [
          "Step 1: Go to lookerstudio.google.com and sign in with your Google account",
          "Step 2: Click 'Create' and select 'Data Source' - choose Google Analytics 4",
          "Step 3: Connect to Gator Gleam's GA4 property (ask supervisor for account access if needed)",
          "Step 4: Create a new report and add data source to blank canvas",
          "Step 5: Add key metrics charts - Sessions, Users, Page Views, Bounce Rate using scorecards",
          "Step 6: Create a traffic source chart showing organic search, social media, direct, and referral traffic",
          "Step 7: Add a time series chart showing website traffic trends over the past 3 months",
          "Step 8: Include a table showing top performing pages with sessions and conversion data",
          "Step 9: Design dashboard with clear section headers, consistent colors, and logical layout",
          "Step 10: Test all filters and date ranges to ensure data displays correctly",
          "Step 11: Share dashboard with view access and export as PDF for stakeholder review",
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
        deliverables: ["Professional 1-page case study PDF", "Supporting data screenshots", "Portfolio-ready presentation"],
        steps: [
          "Step 1: Review all your internship projects and select your highest-impact success story with measurable results",
          "Step 2: Gather all relevant data - before/after metrics, engagement rates, conversion numbers, client feedback",
          "Step 3: Structure case study with 4 clear sections: Problem/Challenge, Strategy/Actions Taken, Results/Outcomes, Next Steps/Recommendations",
          "Step 4: Write compelling problem statement explaining the initial challenge or opportunity you addressed",
          "Step 5: Detail your strategic approach - what tools you used, timeline, creative decisions, and implementation process",
          "Step 6: Present results with specific numbers and percentages - 'Increased engagement by 150%' vs 'engagement improved'",
          "Step 7: Include visual elements - before/after screenshots, charts showing improvement, design samples",
          "Step 8: Design case study in Canva using professional template with consistent branding and easy-to-read layout",
          "Step 9: Add client testimonial or supervisor feedback if available to add credibility",
          "Step 10: Create executive summary highlighting key achievements for quick scanning by potential employers",
          "Step 11: Export as high-quality PDF and prepare 2-minute verbal presentation of key points",
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
