document.documentElement.classList.add('js');

const EMAILJS_CONFIG = {
  serviceId: 'service_upjea3g',
  templateId: 'template_ozmro0m',
  publicKey: 'CM8uP5utEJMEReOv8'
};

const megaMenuGroups = [
  {
    title: 'Hire Experts',
    items: [
      { label: 'Hire Claude Code Expert for GHL', title: 'Hire Claude Code Expert for GoHighLevel AI Automation | MCP Servers + n8n', description: 'Build GoHighLevel automations and AI workflows around your CRM.', keyword: 'Claude Code expert for GoHighLevel AI automation' },
      { label: 'Hire Claude Code Developer for HubSpot', title: 'Hire Claude Code Developer for HubSpot AI Integrations | MCP + n8n', description: 'Connect HubSpot data, sales actions, and Claude Code agents.', keyword: 'Claude Code HubSpot developer' },
      { label: 'Hire AI Automation Consultant for n8n', title: 'Hire AI Automation Consultant for n8n | Claude Code + MCP Workflows', description: 'Plan dependable AI and n8n workflows with practical handover.', keyword: 'AI automation consultant n8n Claude Code' },
      { label: 'Hire Claude Code Shopify Developer', title: 'Hire Claude Code Shopify Developer for AI Store Automation | MCP', description: 'Build Shopify automations and AI support connected to store data.', keyword: 'Claude Code Shopify developer AI automation' },
      { label: 'Hire Claude Code MCP Engineer', title: 'Hire Claude Code MCP Engineer for Secure Tool Integrations | n8n', description: 'Connect Claude Code to business tools through documented MCP servers.', keyword: 'Claude Code MCP engineer' }
    ]
  },
  {
    title: 'AI Agents & Automation',
    items: [
      { label: 'Claude Code AI Agent Development for GHL', title: 'Claude Code AI Agent Development for GoHighLevel | MCP + n8n', description: 'Create agents that qualify leads, update records, and trigger GHL actions.', keyword: 'Claude Code AI agent GoHighLevel' },
      { label: 'Multi-Agent AI Systems for GHL + HubSpot', title: 'Multi-Agent AI Systems for GoHighLevel and HubSpot | Claude Code', description: 'Coordinate focused agents across sales, service, and CRM workflows.', keyword: 'Claude Code multi-agent AI GHL HubSpot' },
      { label: 'Claude Code Automation for n8n', title: 'Claude Code Automation for n8n Workflows | MCP AI Integrations', description: 'Connect Claude reasoning to reliable n8n workflows and business APIs.', keyword: 'Claude Code automation n8n MCP' },
      { label: 'AI Phone Receptionist for GHL', title: 'AI Phone Receptionist for GoHighLevel | Claude Code + MCP Booking', description: 'Handle missed calls, qualify callers, and route appointment requests.', keyword: 'AI phone receptionist GoHighLevel Claude Code' },
      { label: 'Claude Code Automation Rescue for n8n', title: 'Claude Code Automation Rescue for n8n and GHL | AI Workflow Fixes', description: 'Repair brittle automations with retries, logs, and useful failure alerts.', keyword: 'Claude Code n8n automation rescue GHL' }
    ]
  },
  {
    title: 'Funnels & AI SaaS',
    items: [
      { label: 'Claude Code AI Funnel Automation for GHL', title: 'Claude Code AI Funnel Automation for GoHighLevel | n8n + MCP', description: 'Connect landing flows, lead capture, and personalized follow-up.', keyword: 'Claude Code AI funnel GoHighLevel' },
      { label: 'White Label AI SaaS with Claude Code', title: 'White Label AI SaaS Development with Claude Code | GHL + MCP', description: 'Launch branded AI tools and client portals on your chosen stack.', keyword: 'Claude Code white label AI SaaS GHL' },
      { label: 'Claude Code Shopify RAG Support Bot', title: 'Claude Code Shopify RAG Support Bot | Product-Aware AI Support', description: 'Answer store questions using approved product and policy content.', keyword: 'Claude Code Shopify RAG support bot' },
      { label: 'Claude Code AI Membership SaaS for GHL', title: 'Claude Code AI Membership SaaS Setup for GoHighLevel | MCP', description: 'Connect member onboarding, access, and automated member support.', keyword: 'Claude Code AI membership SaaS GoHighLevel' },
      { label: 'Claude Code AI Snapshot Setup for GHL', title: 'Claude Code AI Snapshot Setup for GoHighLevel SaaS | Automation', description: 'Package reusable GHL automations and AI workflows for client accounts.', keyword: 'Claude Code AI snapshot setup GHL' }
    ]
  },
  {
    title: 'Integrations (MCP)',
    items: [
      { label: 'Claude Code MCP Server Development', title: 'Claude Code MCP Server Development | Secure AI Tool Connections', description: 'Build documented MCP servers that expose only approved business actions.', keyword: 'Claude Code MCP server development' },
      { label: 'Claude Code MCP Integration for GHL', title: 'Claude Code MCP Integration for GoHighLevel | AI CRM Automation', description: 'Let approved Claude agents read and act on GoHighLevel workflows.', keyword: 'Claude Code MCP GoHighLevel integration' },
      { label: 'Claude Code MCP Integration for HubSpot', title: 'Claude Code MCP Integration for HubSpot | AI Sales Operations', description: 'Connect HubSpot records and sales actions to Claude through MCP.', keyword: 'Claude Code MCP HubSpot integration' },
      { label: 'Claude Code MCP Integration for Shopify', title: 'Claude Code MCP Integration for Shopify | AI Commerce Workflows', description: 'Connect orders, products, and support workflows through controlled tools.', keyword: 'Claude Code MCP Shopify integration' },
      { label: 'Claude Code MCP + n8n Integration', title: 'Claude Code MCP and n8n Integration | AI Workflow Development', description: 'Combine AI tool use with n8n orchestration, logs, and error handling.', keyword: 'Claude Code MCP n8n integration' }
    ]
  },
  {
    title: 'Migration & Rescue',
    items: [
      { label: 'Claude Code HubSpot-to-GHL AI Migration', title: 'Claude Code HubSpot to GoHighLevel AI Migration | CRM Workflows', description: 'Map records and rebuild key follow-up workflows between CRM platforms.', keyword: 'Claude Code HubSpot to GHL migration' },
      { label: 'Claude Code ClickFunnels-to-GHL Migration', title: 'Claude Code ClickFunnels to GoHighLevel Migration | AI Funnel Setup', description: 'Rebuild funnel journeys and connect lead data to GHL automation.', keyword: 'Claude Code ClickFunnels to GHL migration' },
      { label: 'AI ActiveCampaign-to-GHL Migration', title: 'AI ActiveCampaign to GoHighLevel Migration | Claude Code Workflows', description: 'Move campaign logic and contact journeys into a documented GHL setup.', keyword: 'Claude Code AI ActiveCampaign to GHL migration' },
      { label: 'Claude Code Zapier-to-n8n AI Migration', title: 'Claude Code Zapier to n8n AI Workflow Migration | MCP Integrations', description: 'Rebuild app connections in n8n with control over hosting and retries.', keyword: 'Claude Code Zapier to n8n migration' },
      { label: 'AI Automation Rescue for GHL + HubSpot', title: 'AI Automation Rescue for GHL and HubSpot | Claude Code + MCP', description: 'Diagnose broken CRM automations and restore observable workflows.', keyword: 'AI automation rescue GHL HubSpot Claude Code' }
    ]
  }
];

const portfolioProjects = [
  {
    name: 'Dental Clinic MCP Operations', category: 'Web Application · Integrations (MCP)',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071421,#06465d)',
    problem: 'A dental clinic using CareStack and a custom web app was copying patient data, appointments, and billing manually. The process consumed about 10 hours a week, caused missed follow-ups, and API rate limits failed silently.',
    solution: 'Built an MCP server with Claude Code to connect CareStack, the web app, and n8n. Booking, Billing, and Alert agents sync appointments, update records, and report API failures. Access is protected with scoped keys, Supabase RLS, and audit logs. Staff can start a workflow by saying “sync today’s patients.”',
    result: '12 hours per week saved, zero missed handoffs, and API failure alerts reduced from as long as 3 days to 12 seconds in Slack. The workflows run in production and are usable by non-technical staff.',
    metrics: ['12 hrs/week saved', '0 missed handoffs', '12-sec failure alerts'], stack: ['Claude Code', 'MCP Server', 'CareStack API', 'n8n', 'Supabase RLS', 'Node.js']
  },
  {
    name: 'Flurth Lip Care · Shopify RAG Support Bot', category: 'E-Commerce · Shopify RAG Bot',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#f4e4db,#f6d2d5 52%,#d7e9f1)',
    problem: 'Flurth Korean lip-care support handled around 200 tickets a day. Its bot guessed at order tracking and inventory, while shoppers asked whether products were authentic. Conversion was 1.1%.',
    solution: 'Built a Shopify RAG support bot grounded in live Shopify Admin API data through MCP. Claude retrieves order, inventory, and shipping details, then uses Pinecone RAG for product knowledge. The agent handles returns and exchanges and can update HubSpot and GoHighLevel.',
    result: 'Support volume down 38%, response time improved from 15 minutes to 45 seconds, CSAT up 28%, conversion rose from 1.1% to 2.8%, and AI upsells increased AOV by 18%.',
    metrics: ['Support -38%', '45-sec replies', 'Conversion 1.1% → 2.8%'], stack: ['Claude Code', 'Shopify Admin API', 'MCP Server', 'Pinecone RAG', 'HubSpot', 'GoHighLevel']
  },
  {
    name: 'Squeaky Clean NJ · Booking Funnel', category: 'Web Development · GoHighLevel',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#e7f0f5,#d7e7df 50%,#bca98c)',
    problem: 'A New Jersey cleaning company had a WordPress site and GoHighLevel, but leads were moved manually. Airbnb hosts requested cleanings, calendars were double-booked, and about 8 hours a week were lost to missed bookings and admin.',
    solution: 'Rebuilt the funnel with Claude Code and Next.js, connecting GoHighLevel custom actions through MCP and n8n. The flow qualifies Airbnb, office, and property requests, tags leads, creates pipeline records, books the calendar, and starts AI follow-up. A reusable snapshot supports franchise rollout.',
    result: '8 hours per week saved, booking rate up 32%, and zero double-bookings. The team can start the process with “qualify cleaning leads.”',
    metrics: ['8 hrs/week saved', 'Bookings +32%', '0 double-bookings'], stack: ['Claude Code', 'Next.js', 'GoHighLevel API', 'MCP Server', 'n8n', 'Calendar API']
  },
  {
    name: 'AI Voice Receptionist · 24/7 Lead Booking', category: 'AI Agents & Automation · AI Phone Receptionist',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#081629,#063b56 54%,#0e8a9a)',
    problem: 'An agency missed about 40% of calls after hours. Staff updated GoHighLevel manually, callers were not qualified, and leads went cold. The business needed reliable call coverage.',
    solution: 'Built a Claude voice agent with Twilio and MCP. It qualifies inbound callers, updates GoHighLevel, books the calendar, and sends transcripts to Slack. Specialist agents handle qualification, booking, and follow-up, with a human handoff that includes the transcript.',
    result: 'More than 300 calls handled in 30 days, 150+ qualified, 70+ booked, and all calls answered during the measured period. 67% were qualified; follow-up email open rate reached 42%.',
    metrics: ['300+ calls handled', '70+ booked', '67% qualified'], stack: ['Claude Code', 'Twilio', 'GoHighLevel', 'MCP Server', 'Claude Voice API']
  },
  {
    name: 'Real Estate IDX · Instant Valuation', category: 'Web Development · GoHighLevel',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#e9e4d8,#bdc9c2 55%,#929a8c)',
    problem: 'A real estate agency’s WordPress IDX took 4.2 seconds to load. Zillow leads were moved into GoHighLevel manually, taking about 15 hours a week, while response time averaged 12 minutes.',
    solution: 'Built a headless Next.js experience with Supabase and GoHighLevel custom actions through MCP. IDX searches trigger buyer or seller qualification, create a pipeline record, and start an AI nurture flow that can book a valuation.',
    result: 'Page speed improved from 4.2 seconds to 0.9 seconds, 15 hours per week saved, response time reduced from 12 minutes to 48 seconds, and the agency reported three additional closings per month.',
    metrics: ['4.2s → 0.9s', '15 hrs/week saved', '3 more closings/month'], stack: ['Claude Code', 'Next.js', 'Supabase RLS', 'GoHighLevel API', 'MCP', 'n8n']
  },
  {
    name: 'Multi-Tenant SaaS Dashboard · Secure by Default', category: 'Web Application · SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071526,#075372 55%,#13a4b5)',
    problem: 'A SaaS dashboard had no row-level security, allowing users to see data outside their organization. Agents were failing in production and page loads took 3.1 seconds.',
    solution: 'Rebuilt the application with Claude Code, Supabase RLS, and Claude Agent SDK. Billing, Support, and Onboarding agents have separate responsibilities; hooks synchronize state and surface failures. RLS scopes access by user and organization.',
    result: 'Data access is isolated by user and organization, load time improved from 3.1 to 0.6 seconds, and support tickets fell 42%.',
    metrics: ['3.1s → 0.6s load', '42% fewer tickets', 'Tenant-level RLS'], stack: ['Claude Code', 'Supabase', 'PostgreSQL RLS', 'Claude Agent SDK', 'Pinecone']
  },
  {
    name: 'Shopify Headless Store · Live Inventory RAG', category: 'E-Commerce · Shopify Headless',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#0c1d32,#096377 55%,#e6b5c9)',
    problem: 'A slow Shopify theme and a generic support bot that guessed at inventory were limiting shopper confidence. Store conversion was 1.1%.',
    solution: 'Built a headless Next.js storefront using the Shopify Storefront API and an MCP-connected RAG support bot. Answers use live stock, shipping, and order data plus Pinecone product knowledge.',
    result: 'Conversion improved from 1.1% to 2.8%, response time fell from 18 minutes to 52 seconds, and support volume fell 35%.',
    metrics: ['Conversion 1.1% → 2.8%', '52-sec replies', 'Support -35%'], stack: ['Claude Code', 'Shopify Admin + Storefront API', 'Next.js', 'MCP', 'Pinecone RAG']
  },
  {
    name: 'Agency Workflow Rebuild · 20 Core Automations', category: 'Hire Experts · Agency Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#101b2e,#116b79 54%,#7fa5b8)',
    problem: 'An agency had more than 100 Zapier and Make workflows breaking weekly. The team waited on developers and spent about 20 hours per week fixing automations.',
    solution: 'Audited the stack with Claude Code and rebuilt 20 core workflows in n8n with MCP servers. Added clear workflow names, documentation, and Loom handover so the team can run routine work themselves.',
    result: '20 hours per week saved and silent failures removed from the rebuilt workflows. Staff can trigger common work by name, such as “run weekly follow-up.”',
    metrics: ['20 hrs/week saved', '20 core workflows rebuilt', 'Documented handover'], stack: ['Claude Code', 'MCP Servers', 'n8n', 'GoHighLevel', 'HubSpot', 'Shopify']
  },
  {
    name: 'HubSpot Lead Qualification Agent', category: 'AI Agents & Automation · Lead Qualification',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071629,#075d79 55%,#248fc2)',
    problem: 'Sales development reps manually qualified around 200 HubSpot leads per day, resulting in inconsistent scoring and tagging.',
    solution: 'Built a lead qualifier with Claude Code, a HubSpot private app, and GoHighLevel through MCP. It reads submitted form data and available customer context, scores the lead, applies tags, and enrolls the appropriate sequence.',
    result: 'Qualification time improved from 8 minutes to 22 seconds per lead, up to 200 leads can be processed daily, and meeting volume increased 47%.',
    metrics: ['8 min → 22 sec/lead', '200 leads/day', 'Meetings +47%'], stack: ['Claude Code', 'Claude API', 'HubSpot API', 'GoHighLevel API', 'MCP', 'Prompt Engineering']
  },
  {
    name: 'E-Commerce Support, Sales & Upsell Agents', category: 'AI Agents & Automation · Multi-Agent System',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071525,#064f69 55%,#20a6ac)',
    problem: 'A single general-purpose bot struggled to handle support questions, sales conversations, and inventory checks reliably.',
    solution: 'Designed a main agent that delegates to Support, Sales, and Upsell specialists. Each specialist has a focused prompt, MCP tools, and hooks; support can retrieve live order information and upsell checks live inventory.',
    result: 'Resolution rate improved from 61% to 89%, average order value rose 18%, and the system ran for 60 days without a reported breakage.',
    metrics: ['Resolution 61% → 89%', 'AOV +18%', '60 days stable'], stack: ['Claude Code', 'Claude Agent SDK', 'MCP Servers', 'Shopify', 'Supabase']
  },
  {
    name: 'n8n Workflow Rescue · No Silent Failures', category: 'AI Agents & Automation · Workflow Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#081522,#073c53 55%,#168a8b)',
    problem: 'Workflows followed only the happy path, broke on API limits, and had no alerts. A failure could leave leads untouched for days.',
    solution: 'Rebuilt workflows with Claude Code and n8n, adding hooks, try/catch handling, automatic retries, Slack or email alerts, and audit logs.',
    result: 'No cold leads in the tracked workflows, failure alerts improved from 3 days to 12 seconds, and operations saved 14 hours per week.',
    metrics: ['14 hrs/week saved', '12-sec alerts', '0 cold leads'], stack: ['Claude Code', 'n8n', 'MCP Servers', 'GoHighLevel', 'Twilio', 'Slack']
  },
  {
    name: 'HubSpot + Shopify + GHL MCP Sync', category: 'Integrations · MCP Server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071a2c,#08758a 55%,#22aabd)',
    problem: 'HubSpot form submissions, Shopify orders, and GoHighLevel opportunities were out of sync, leaving teams without a reliable shared view.',
    solution: 'Built a custom Node.js MCP server with least-privilege keys, audit logs, and RLS-aware data access. Claude can read live data across all three systems and coordinate approved sync actions.',
    result: 'The connected workflows reached 100% sync in the monitored process and saved about 11 hours per week. Customer data remains in the connected systems and is not used for model training.',
    metrics: ['100% workflow sync', '11 hrs/week saved', 'Auditable access'], stack: ['Claude Code', 'MCP', 'HubSpot API', 'Shopify API', 'GoHighLevel API', 'Node.js']
  },
  {
    name: 'Claude API · Personalized GHL Follow-Up', category: 'Integrations · Claude API',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#101c34,#2d4772 55%,#a389d5)',
    problem: 'GoHighLevel emails felt generic, with an 18% open rate. Staff wrote follow-ups manually using limited customer context.',
    solution: 'Connected the Claude API to GoHighLevel custom actions through MCP. A tested agent drafts personalized follow-ups from approved live CRM context.',
    result: 'Open rate increased from 18% to 42%, replies increased 31%, and the team saved six hours per week.',
    metrics: ['Open rate 18% → 42%', 'Replies +31%', '6 hrs/week saved'], stack: ['Claude Code', 'Claude API', 'GHL Custom Actions', 'MCP', 'n8n']
  },
  {
    name: 'Twilio + GHL Missed-Call Booking', category: 'AI Agents & Automation · Voice AI',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#06162c,#07537b 55%,#08a9ba)',
    problem: 'Around 40% of calls were missed after hours, and staff had to update GoHighLevel by hand after each conversation.',
    solution: 'Connected Twilio to a Claude voice agent that qualifies callers, updates GoHighLevel, books the calendar through MCP, and posts the transcript to Slack.',
    result: 'More than 300 calls handled, 150+ qualified, 70+ booked, and zero missed calls in the tracked workflow.',
    metrics: ['300+ calls handled', '150+ qualified', '70+ booked'], stack: ['Claude Code', 'Twilio', 'GoHighLevel', 'MCP', 'Claude Voice']
  },
  {
    name: 'Stripe + Shopify + GHL Subscription Sync', category: 'Integrations · MCP Automation',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#071726,#095b68 55%,#19aa92)',
    problem: 'Stripe subscriptions, Shopify orders, and GoHighLevel CRM records were reconciled manually, and churn risk was not tracked consistently.',
    solution: 'Connected Stripe, Shopify, and GoHighLevel with n8n and MCP. Failed payments can trigger AI-supported retry flows, churn-risk tags, and win-back follow-up.',
    result: 'Churn decreased 22%, failed-payment recovery improved 38%, and finance operations saved nine hours per week.',
    metrics: ['Churn -22%', 'Recovery +38%', '9 hrs/week saved'], stack: ['Claude Code', 'Stripe API', 'Shopify API', 'GoHighLevel API', 'n8n', 'MCP']
  },
  {
    name: 'ClickFunnels to GHL AI Migration', category: 'Migration & Rescue · Funnel Migration',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#101c31,#344668 55%,#d28d54)',
    problem: 'A slow ClickFunnels setup had no connected CRM automation, and leads were moved into GoHighLevel manually.',
    solution: 'Migrated funnel structure into GoHighLevel, mapped pipeline data, rebuilt AI follow-up agents, and created a reusable snapshot with Claude Code and MCP.',
    result: 'Page speed improved from 3.8 seconds to 0.9 seconds, migration completed in two days, and the process saved 10 hours per week.',
    metrics: ['3.8s → 0.9s', '2-day migration', '10 hrs/week saved'], stack: ['Claude Code', 'GoHighLevel', 'ClickFunnels API', 'n8n', 'MCP']
  },
  {
    name: 'HubSpot to GHL History-Preserving Migration', category: 'Migration & Rescue · CRM Migration',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85&sat=-15', background: 'linear-gradient(135deg,#111d34,#4a5c7e 55%,#8d9cae)',
    problem: 'The business wanted to move from HubSpot Enterprise to GoHighLevel but was concerned about losing history or breaking workflows.',
    solution: 'Migrated contacts, deals, and sequences from HubSpot to GoHighLevel through MCP, preserved historical records, and added AI qualification and booking agents.',
    result: 'Saved $1,200 per month, completed migration in three days with history intact, and bookings increased 28%.',
    metrics: ['$1,200/mo saved', '3-day migration', 'Bookings +28%'], stack: ['Claude Code', 'HubSpot API', 'GoHighLevel API', 'MCP', 'Supabase']
  },
  {
    name: 'Automation Rescue · 47 Workflow Audit', category: 'Migration & Rescue · Automation Rescue',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#231b22,#692f3b 45%,#198568)',
    problem: '47 Zapier, Make, and n8n workflows were failing silently due to rate limits and missing error handling, leaving leads cold.',
    solution: 'Audited the systems with Claude Code and rebuilt 20 core workflows in n8n and MCP with try/catch handling, retries, Slack alerts, and audit logs.',
    result: 'Zero silent failures across 45 tracked days, alerts improved from two days to 15 seconds, and the team saved 18 hours per week.',
    metrics: ['0 silent failures', '15-sec alerts', '18 hrs/week saved'], stack: ['Claude Code', 'n8n', 'Zapier', 'Make.com', 'MCP Servers', 'GHL', 'HubSpot']
  },
  {
    name: 'White Label AI SaaS · Agency Platform', category: 'Funnels & AI SaaS · White Label',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85', background: 'linear-gradient(135deg,#07172b,#0c627b 55%,#4e91a0)',
    problem: 'An agency wanted a white-label SaaS offer, but its generic platform lacked AI and RAG support. Client churn had reached 24%.',
    solution: 'Built a Next.js front end with GoHighLevel SaaS mode, an AI support bot grounded in live help documentation through MCP, and a reusable snapshot with agents pre-installed.',
    result: 'Churn fell from 24% to 9%, MRR increased by $4,200 per month, and 30 clients onboarded with AI support and no additional developer needed.',
    metrics: ['Churn 24% → 9%', 'MRR +$4,200/mo', '30 clients onboarded'], stack: ['Claude Code', 'GHL SaaS Mode', 'Next.js', 'MCP Server', 'Pinecone RAG', 'Supabase RLS']
  }
];

const faqGroups = [
  {
    title: 'What Working With Us Looks Like',
    questions: [
      { question: 'How does working with you start?', answer: 'Share one manual task. I will reply with a short Loom video plan for your GHL, HubSpot, or Shopify setup using Claude Code, MCP, and n8n, before you pay.' },
      { question: 'What do you need from us to get started?', answer: 'A 15-minute walkthrough and temporary access to your GHL sub-account, HubSpot private app, or Shopify API. No cleanup is needed.' },
      { question: 'How do you charge?', answer: 'Fixed price per automation, split into milestones. You pay per milestone delivered.' },
      { question: 'How long does it take?', answer: 'Typically 3-7 days: Day 1 for the plan, Days 2-4 for the build, Days 5-6 for live tests, and Day 7 for handover.' },
      { question: 'Do we need to be technical or know Claude Code?', answer: 'No. Your team can trigger an automation by name, such as "run weekly follow-up". No coding is needed.' },
      { question: 'What stack do you use? Do we need to switch tools?', answer: 'Claude Code, MCP servers, Claude API, n8n, GHL, HubSpot, and Shopify APIs, plus Supabase or Pinecone when useful. You keep your existing tools.' },
      { question: 'Is our CRM and customer data secure?', answer: 'Access is scoped to least-privilege keys, customer data is not used for model training, and systems can use row-level security and audit logs. An NDA is available.' },
      { question: 'What if the automation breaks?', answer: 'Failures trigger an alert with the error details instead of failing silently. A 14-day bug-fix period is included.' },
      { question: 'Do we own everything? Are we locked to you?', answer: 'You own the delivered code, MCP configurations, n8n workflows, prompts, and SOPs. There is no vendor lock-in.' },
      { question: 'What tasks do you automate best?', answer: 'CRM updates, lead follow-up, Shopify RAG support, and missed-call-to-booking workflows. Well-scoped automations can save teams 10+ hours per week.' }
    ]
  },
  {
    title: 'AI Agents & Multi-Agent Systems',
    questions: [
      { question: 'What is an AI agent versus a normal chatbot?', answer: 'A chatbot replies in conversation. An AI agent can take an action, such as qualifying a lead in GHL, updating HubSpot, or booking a meeting.' },
      { question: 'What are specialist sub-agents?', answer: 'A main agent can delegate work to focused specialists such as a qualifier, follow-up agent, or support agent. This can make complex workflows more reliable than one general-purpose bot.' },
      { question: 'Do we need to know Claude Code to use it?', answer: 'No. Your team can trigger an automation by name, such as "run weekly follow-up". No coding is needed.' },
      { question: 'Can agents work across GHL, HubSpot, and Shopify at once?', answer: 'Yes. An agent can read a Shopify order, update a HubSpot record, and create a GHL opportunity through connected MCP tools.' },
      { question: 'What makes your agents keep working reliably?', answer: 'Production workflows include hooks, error handling, logging, and instant alerts so failures are visible and can be fixed.' }
    ]
  },
  {
    title: 'Model Context Protocol (MCP) Servers',
    questions: [
      { question: 'What is Model Context Protocol (MCP)?', answer: 'MCP is an open protocol for connecting AI assistants such as Claude to tools and data sources, including GHL, HubSpot, and Shopify.' },
      { question: 'Why MCP instead of Zapier?', answer: 'Zapier connects predefined app events. MCP lets an AI model reason over a task and call approved tools across systems. A self-hosted setup can avoid per-task platform fees.' },
      { question: 'Do we need to host MCP servers?', answer: 'Not to get started. I can host the first version, then hand over a documented Node.js setup for your team to run.' },
      { question: 'How is your MCP server work different from generic MCP setups?', answer: 'The protocol is the same; Model Context Protocol is its official name. I build the server integrations with the hooks, plugins, and access controls the workflow needs.' },
      { question: 'Can MCP connect to our custom database?', answer: 'Yes. Integrations can connect to systems such as Supabase, PostgreSQL with row-level security, or Pinecone for retrieval-augmented generation (RAG).' },
      { question: 'Is MCP secure?', answer: 'Security depends on implementation. I use least-privilege access, secure key handling, and audit logging where supported.' }
    ]
  },
  {
    title: 'n8n & Workflow Automation',
    questions: [
      { question: 'Why n8n instead of Zapier or Make?', answer: 'n8n can be self-hosted and gives teams more control over workflows and infrastructure. It also connects well with Claude and MCP.' },
      { question: 'Can you fix our broken n8n workflows?', answer: 'Yes. I can diagnose the workflow, add error handling and retries, and configure alerts so failures are easier to catch.' },
      { question: 'How do you prevent silent API failures?', answer: 'Workflows can use try/catch handling, logs, retries, and Slack or email alerts to surface API errors.' },
      { question: 'Can n8n call Claude Code?', answer: 'n8n can call the Claude API, which can use connected MCP tools to work with GHL, HubSpot, Shopify, and other approved systems.' },
      { question: 'Do we need to host n8n?', answer: 'No. I can host the first version and provide handover documentation so you can manage or move it later.' },
      { question: 'Can you migrate from Make or Zapier to n8n?', answer: 'Yes. I can map the existing workflows, rebuild them in n8n, and add production-focused error handling and monitoring.' }
    ]
  },
  {
    title: 'Security, Ownership & Data',
    questions: [
      { question: 'Do you store our CRM data?', answer: 'The intended setup keeps customer records in your systems, such as GHL, HubSpot, Shopify, or Supabase. Integrations access only the data needed for the workflow.' },
      { question: 'How do you handle API keys?', answer: 'Keys are scoped to least privilege and stored in a secure secrets manager or platform credential store, not exposed in workflow text.' },
      { question: 'Do we own everything after delivery?', answer: 'Yes. You own the delivered code, MCP configurations, n8n workflows, prompts, and SOPs.' },
      { question: 'Do you sign an NDA?', answer: 'Yes. An NDA can be signed before project access or discovery begins.' },
      { question: 'What if we need to revoke access?', answer: 'You can revoke or rotate the private-app/API credentials at any time. Access is granted through your accounts, not personal credentials.' }
    ]
  },
  {
    title: 'Voice AI & Missed-Call Automation',
    questions: [
      { question: 'How does missed-call automation work?', answer: 'A call platform such as Twilio can trigger an AI follow-up, qualify the inquiry, update GHL, and offer appointment times through connected calendar tools.' },
      { question: 'How many calls can it handle?', answer: 'Capacity depends on the voice provider, concurrency limits, call length, and fallback design. We size and test the system against your expected call volume before launch.' },
      { question: 'What if AI cannot answer?', answer: 'The workflow can hand the conversation to a person with the transcript and CRM record available, so the customer is not left without a next step.' },
      { question: 'Can it work with HubSpot too?', answer: 'Yes. The workflow can update a HubSpot contact and book a meeting through HubSpot Meetings or another connected calendar.' }
    ]
  }
];

const reviewerNames = [
  'David Frank', 'Elena Rodriguez', 'Marcus Thompson', 'Priya Shah', 'Daniel Brooks',
  'Amara Johnson', 'Oliver Bennett', 'Maya Patel', 'Liam Carter', 'Sofia Martinez',
  'Noah Williams', 'Grace Kim', 'Ethan Morgan', 'Ava Robinson', 'Lucas Turner',
  'Chloe Davis', 'Isaac Reed', 'Nina Foster', 'Gabriel Cruz', 'Zoe Mitchell',
  'Caleb Morris', 'Leah Cooper', 'Adrian Bell', 'Mila Hayes', 'Jordan Ellis'
];

const avatarColors = ['avatar-orange', 'avatar-teal', 'avatar-blue', 'avatar-violet', 'avatar-green', 'avatar-pink'];

function portfolioAssetPath(project) {
  const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `assets/portfolio/${slug}.webp`;
}

function addReviewAuthors(cards) {
  cards.forEach((card, index) => {
    const top = card.querySelector('.review-top');
    const stars = top?.querySelector('.stars');
    const tag = top?.querySelector('.review-tag');

    if (!top || !stars || !tag) return;

    const name = reviewerNames[index] || `Client ${index + 1}`;
    const initials = name.split(' ').map((part) => part[0]).join('');
    const person = document.createElement('div');
    const avatar = document.createElement('span');
    const authorName = document.createElement('strong');
    const rating = document.createElement('div');

    person.className = 'review-person';
    avatar.className = `review-avatar ${avatarColors[index % avatarColors.length]}`;
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = initials;
    authorName.className = 'review-author-name';
    authorName.textContent = name;
    person.append(avatar, authorName);

    top.replaceChildren(person, tag);
    rating.className = 'review-rating';
    rating.appendChild(stars);
    card.insertBefore(rating, card.querySelector('blockquote'));
  });
}

function renderMegaMenu(container) {
  megaMenuGroups.forEach((group) => {
    const column = document.createElement('section');
    const heading = document.createElement('h3');
    const list = document.createElement('div');

    column.className = 'mega-column';
    heading.textContent = group.title;
    list.className = 'mega-link-list';

    group.items.forEach((entry) => {
      const link = document.createElement('a');
      const label = document.createElement('span');
      const description = document.createElement('span');

      link.className = 'mega-link';
      link.href = '#contact';
      link.title = entry.title;
      link.dataset.seoTitle = entry.title;
      link.dataset.targetKeyword = entry.keyword;
      link.setAttribute('aria-label', `${entry.label}. ${entry.description}`);
      label.className = 'mega-link-label';
      label.textContent = entry.label;
      description.className = 'mega-link-description';
      description.textContent = entry.description;
      link.append(label, description);
      list.appendChild(link);
    });

    column.append(heading, list);
    container.appendChild(column);
  });
}

function setupMegaMenu() {
  const root = document.querySelector('#ai-mega-menu');
  const trigger = document.querySelector('#ai-mega-trigger');
  const panel = document.querySelector('#ai-mega-panel');
  const columns = document.querySelector('#mega-columns');

  if (!root || !trigger || !panel || !columns) return;

  renderMegaMenu(columns);

  const setOpen = (open, focusFirst = false) => {
    root.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
    panel.hidden = !open;

    if (open && focusFirst) panel.querySelector('.mega-link')?.focus();
  };

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    setOpen(trigger.getAttribute('aria-expanded') !== 'true');
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const links = panel.querySelectorAll('.mega-link');
      setOpen(true);
      (event.key === 'ArrowDown' ? links[0] : links[links.length - 1])?.focus();
    }
  });

  root.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') setOpen(true);
  });

  root.addEventListener('pointerleave', () => {
    if (!root.contains(document.activeElement)) setOpen(false);
  });

  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) setOpen(false);
  });

  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      trigger.focus();
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      const links = Array.from(panel.querySelectorAll('.mega-link'));
      const currentIndex = links.indexOf(document.activeElement);
      if (currentIndex < 0) return;
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      links[(currentIndex + direction + links.length) % links.length].focus();
    }
  });

  panel.addEventListener('click', (event) => {
    if (event.target.closest('.mega-link')) setOpen(false);
  });

  document.addEventListener('pointerdown', (event) => {
    if (!root.contains(event.target)) setOpen(false);
  });
}

function renderPortfolio(container) {
  portfolioProjects.forEach((project, index) => {
    const card = document.createElement('button');
    const imageWrap = document.createElement('span');
    const image = document.createElement('img');
    const category = document.createElement('span');
    const name = document.createElement('span');

    card.className = 'portfolio-card';
    card.type = 'button';
    card.dataset.projectIndex = String(index);
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `Open case study: ${project.name}, ${project.category}`);

    imageWrap.className = 'portfolio-card-image';
    imageWrap.style.background = project.background;
    image.src = portfolioAssetPath(project);
    image.dataset.fallbackSrc = project.image;
    image.alt = `${project.name} project preview`;
    image.loading = index < 6 ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      if (image.dataset.fallbackTried !== 'true') {
        image.dataset.fallbackTried = 'true';
        image.src = image.dataset.fallbackSrc;
        return;
      }
      image.hidden = true;
      imageWrap.classList.add('image-unavailable');
    });

    category.className = 'portfolio-category';
    category.textContent = project.category;
    name.className = 'portfolio-card-name';
    name.textContent = project.name;
    imageWrap.append(image, category);
    card.append(imageWrap, name);
    container.appendChild(card);
  });
}

function setupPortfolioDetails() {
  const grid = document.querySelector('#portfolio-grid');
  const overlay = document.querySelector('#portfolio-overlay');
  const detail = document.querySelector('#portfolio-detail');
  const closeButton = document.querySelector('#portfolio-close');

  if (!grid || !overlay || !detail || !closeButton) return;

  renderPortfolio(grid);

  const detailImage = document.querySelector('#portfolio-detail-image');
  const detailVisual = document.querySelector('#portfolio-detail-visual');
  const category = document.querySelector('#portfolio-detail-category');
  const title = document.querySelector('#portfolio-detail-title');
  const metrics = document.querySelector('#portfolio-detail-metrics');
  const problem = document.querySelector('#portfolio-detail-problem');
  const solution = document.querySelector('#portfolio-detail-solution');
  const stack = document.querySelector('#portfolio-detail-stack');
  let returnFocus = null;

  const close = () => {
    if (overlay.hidden) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.hidden = true;
    document.body.classList.remove('portfolio-modal-open');
    returnFocus?.focus();
  };

  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.portfolio-card');
    if (!card) return;

    const project = portfolioProjects[Number(card.dataset.projectIndex)];
    if (!project) return;

    returnFocus = card;
    detailVisual.style.background = project.background;
    detailImage.hidden = false;
    detailImage.src = portfolioAssetPath(project);
    detailImage.dataset.fallbackSrc = project.image;
    detailImage.dataset.fallbackTried = 'false';
    detailImage.alt = `${project.name} project preview`;
    detailImage.onerror = () => {
      if (detailImage.dataset.fallbackTried !== 'true') {
        detailImage.dataset.fallbackTried = 'true';
        detailImage.src = detailImage.dataset.fallbackSrc;
        return;
      }
      detailImage.hidden = true;
    };
    category.textContent = project.category;
    title.textContent = project.name;
    problem.textContent = project.problem;
    solution.textContent = project.solution;

    metrics.replaceChildren(...project.metrics.map((metric) => {
      const badge = document.createElement('span');
      badge.className = 'portfolio-metric';
      badge.textContent = metric;
      return badge;
    }));

    stack.replaceChildren(...project.stack.map((technology) => {
      const badge = document.createElement('span');
      badge.textContent = technology;
      return badge;
    }));

    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('portfolio-modal-open');
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add('is-open')));
    closeButton.focus();
  });

  closeButton.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.hidden) close();
  });
  detail.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(detail.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
}

function renderFaqGroups(container) {
  faqGroups.forEach((group, groupIndex) => {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const list = document.createElement('div');
    const items = [];

    section.className = 'faq-group';
    heading.className = 'faq-group-heading';
    heading.textContent = group.title;
    list.className = 'faq-list';
    section.append(heading, list);

    group.questions.forEach((entry, questionIndex) => {
      const item = document.createElement('div');
      const question = document.createElement('button');
      const label = document.createElement('span');
      const icon = document.createElement('span');
      const answer = document.createElement('div');
      const answerInner = document.createElement('div');
      const answerText = document.createElement('p');
      const answerId = `faq-answer-${groupIndex}-${questionIndex}`;

      item.className = 'faq-item';
      if (questionIndex >= 4) item.hidden = true;

      question.className = 'faq-question';
      question.type = 'button';
      question.setAttribute('aria-expanded', 'false');
      question.setAttribute('aria-controls', answerId);
      label.textContent = entry.question;
      icon.className = 'faq-toggle-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '+';
      question.append(label, icon);

      answer.className = 'faq-answer';
      answer.id = answerId;
      answer.setAttribute('aria-hidden', 'true');
      answer.inert = true;
      answerInner.className = 'faq-answer-inner';
      answerText.textContent = entry.answer;
      answerInner.appendChild(answerText);
      answer.appendChild(answerInner);

      const questionHeading = document.createElement('h4');
      questionHeading.className = 'faq-question-heading';
      questionHeading.appendChild(question);
      item.append(questionHeading, answer);
      list.appendChild(item);
      items.push(item);
    });

    if (group.questions.length > 4) {
      const moreWrap = document.createElement('div');
      const more = document.createElement('button');

      moreWrap.className = 'faq-more-wrap';
      more.className = 'btn btn-outline faq-more';
      more.type = 'button';
      more.setAttribute('aria-expanded', 'false');
      more.textContent = `See all ${group.questions.length} questions`;
      moreWrap.appendChild(more);
      section.appendChild(moreWrap);
    }

    container.appendChild(section);
  });
}

// The FAQ ships as plain HTML so search and AI crawlers can read every answer; this adds the behaviour.
function wireFaqGroups(container) {
  container.querySelectorAll('.faq-group').forEach((section) => {
    const items = Array.from(section.querySelectorAll('.faq-item'));

    items.forEach((item) => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      question.addEventListener('click', () => {
        const opening = question.getAttribute('aria-expanded') !== 'true';
        item.classList.toggle('is-open', opening);
        question.setAttribute('aria-expanded', String(opening));
        answer.setAttribute('aria-hidden', String(!opening));
        answer.inert = !opening;
      });
    });

    const more = section.querySelector('.faq-more');
    if (!more) return;
    const extraItems = items.slice(4);
    more.addEventListener('click', () => {
      const expanded = more.getAttribute('aria-expanded') === 'true';

      extraItems.forEach((item) => {
        item.hidden = expanded;
        if (expanded) {
          const answer = item.querySelector('.faq-answer');
          item.classList.remove('is-open');
          item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          answer.setAttribute('aria-hidden', 'true');
          answer.inert = true;
        }
      });

      more.setAttribute('aria-expanded', String(!expanded));
      more.textContent = expanded ? `See all ${items.length} questions` : 'Show fewer questions';
    });
  });
}

function openBookingModal(defaultTab = 'project') {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  setBookingTab(defaultTab);
  document.body.classList.add('booking-modal-open');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('booking-modal-open');
}

function setBookingTab(tabName) {
  const tabs = document.querySelectorAll('.booking-tab');
  const forms = document.querySelectorAll('.booking-form');

  tabs.forEach((button) => {
    const isActive = button.dataset.bookingTab === tabName;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  forms.forEach((form) => {
    const isActive = form.dataset.bookingForm === tabName;
    form.classList.toggle('is-active', isActive);
    form.hidden = !isActive;
  });
}

function buildLocalCallTimeOptions(dateValue) {
  const select = document.getElementById('call-time');
  if (!select) return;

  const safeDate = dateValue || new Date().toISOString().slice(0, 10);
  select.innerHTML = '';

  for (let nigeriaHour = 10; nigeriaHour <= 17; nigeriaHour += 1) {
    const timeValue = `${String(nigeriaHour).padStart(2, '0')}:00`;
    const nigeriaTime = new Date(`${safeDate}T${timeValue}:00+01:00`);

    const localFormatter = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const localLabel = localFormatter.format(nigeriaTime);
    const optionText = `${localLabel} • ${formatNigeriaTime(nigeriaHour)} WAT`;
    const option = document.createElement('option');
    option.value = timeValue;
    option.textContent = optionText;
    select.appendChild(option);
  }

  select.value = '10:00';
}

function formatNigeriaTime(hour) {
  const normalizedHour = Number(hour);
  const suffix = normalizedHour >= 12 ? 'PM' : 'AM';
  const twelveHour = normalizedHour % 12 || 12;
  return `${twelveHour}:00 ${suffix}`;
}

async function sendBookingEmail(templateParams) {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
  if ([serviceId, templateId, publicKey].some((value) => value.startsWith('YOUR_'))) {
    throw new Error('EmailJS is not configured. Add the service ID, template ID, and public key in script.js.');
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`EmailJS request failed (${response.status}): ${details}`);
  }
}

async function submitBookingForm(form, submitButton, status, templateParams) {
  const originalButtonText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  status.textContent = '';
  status.classList.remove('is-error');

  try {
    await sendBookingEmail(templateParams);
    status.textContent = 'Thanks! Your message has been sent.';
    form.reset();
  } catch (error) {
    console.error('Unable to send booking email:', error);
    status.textContent = 'Sorry, your message could not be sent. Please try again or email onifadetoheeb068@gmail.com directly.';
    status.classList.add('is-error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
}

function setupStatsCounters() {
  const statsBand = document.querySelector('.stats-band');
  if (!statsBand) return;

  const counters = Array.from(statsBand.querySelectorAll('[data-counter]'));
  if (!counters.length) return;

  const formatCounter = (counter, value) => {
    const decimals = Number(counter.dataset.decimals || 0);
    const suffix = counter.dataset.suffix || '';
    counter.textContent = `${value.toFixed(decimals)}${suffix}`;
  };

  const targets = counters.map((counter) => Number(counter.dataset.target));
  const finishImmediately = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  statsBand.classList.add('stats-pending');

  const animateCounters = () => {
    statsBand.classList.add('is-animated');
    if (finishImmediately) {
      counters.forEach((counter, index) => formatCounter(counter, targets[index]));
      return;
    }

    const duration = 1450;
    const startedAt = performance.now();
    const update = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      counters.forEach((counter, index) => {
        formatCounter(counter, targets[index] * easedProgress);
      });

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  counters.forEach((counter) => formatCounter(counter, 0));

  if (finishImmediately || !('IntersectionObserver' in window)) {
    animateCounters();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    animateCounters();
  }, { threshold: 0.3 });

  observer.observe(statsBand);
}

function setupHeroVideo() {
  const media = document.getElementById('hero-media');
  const video = document.getElementById('hero-video');
  const after = document.getElementById('hero-after');
  const replay = document.getElementById('hero-replay');
  if (!media || !video || !after) return;

  const showAfter = () => {
    media.classList.add('is-done');
    after.setAttribute('aria-hidden', 'false');
    if (replay) replay.hidden = false;
  };

  video.addEventListener('ended', showAfter);
  video.addEventListener('error', showAfter);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause();
    showAfter();
  } else {
    const playAttempt = video.play();
    if (playAttempt) playAttempt.catch(showAfter);
  }

  if (replay) {
    replay.addEventListener('click', () => {
      media.classList.remove('is-done');
      after.setAttribute('aria-hidden', 'true');
      replay.hidden = true;
      video.currentTime = 0;
      video.play().catch(showAfter);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  setupWatClock();
  setupScrollProgress();
  setupHeader();
  setupPointerEffects();
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = String(new Date().getFullYear());
  setupReveal();

  setupHeroVideo();
  setupMegaMenu();
  setupPortfolioDetails();
  setupStatsCounters();

  const bookingModal = document.getElementById('booking-modal');
  const bookingClose = document.getElementById('booking-close');
  const triggerButtons = document.querySelectorAll('[data-open-booking]');
  const tabButtons = document.querySelectorAll('.booking-tab');

  triggerButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openBookingModal(button.dataset.bookingTab || 'project');
    });
  });

  tabButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      setBookingTab(button.dataset.bookingTab);
    });
  });

  if (bookingClose) {
    bookingClose.addEventListener('click', closeBookingModal);
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (event) => {
      if (event.target === bookingModal) closeBookingModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bookingModal && !bookingModal.hidden) {
      closeBookingModal();
    }
  });

  const projectForm = document.getElementById('project-inquiry-form');
  if (projectForm) {
    projectForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(projectForm);
      const fields = {
        name: formData.get('name')?.toString().trim() || '',
        email: formData.get('email')?.toString().trim() || '',
        phone: formData.get('phone')?.toString().trim() || '',
        project: formData.get('project')?.toString().trim() || '',
        topics: formData.get('topics')?.toString().trim() || ''
      };

      if (!fields.name || !fields.email || !fields.phone || !fields.project || !fields.topics) {
        alert('Please complete all fields before sending your inquiry.');
        return;
      }

      await submitBookingForm(
        projectForm,
        projectForm.querySelector('[type="submit"]'),
        projectForm.querySelector('.booking-form-status'),
        {
          request_type: 'Project inquiry',
          subject: `Project inquiry from ${fields.name}`,
          from_name: fields.name,
          reply_to: fields.email,
          phone: fields.phone,
          project: fields.project,
          preferred_date: '',
          preferred_time: '',
          topics: fields.topics
        }
      );
    });
  }

  const callForm = document.getElementById('call-booking-form');
  const callDate = document.getElementById('call-date');
  const callTime = document.getElementById('call-time');

  if (callDate) {
    callDate.value = new Date().toISOString().slice(0, 10);
    callDate.addEventListener('change', () => buildLocalCallTimeOptions(callDate.value));
  }

  buildLocalCallTimeOptions(callDate?.value || new Date().toISOString().slice(0, 10));

  if (callForm) {
    callForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(callForm);
      const fields = {
        date: formData.get('date')?.toString().trim() || '',
        time: formData.get('time')?.toString().trim() || '',
        email: formData.get('email')?.toString().trim() || '',
        phone: formData.get('phone')?.toString().trim() || '',
        topics: formData.get('topics')?.toString().trim() || ''
      };

      if (!fields.date || !fields.time || !fields.email || !fields.phone || !fields.topics) {
        alert('Please select a date and time, enter your email and phone number, and add your topic before sending your request.');
        return;
      }

      await submitBookingForm(
        callForm,
        callForm.querySelector('[type="submit"]'),
        callForm.querySelector('.booking-form-status'),
        {
          request_type: 'Discovery call request',
          subject: `Discovery call request for ${fields.date}`,
          from_name: fields.email,
          reply_to: fields.email,
          phone: fields.phone,
          project: '',
          preferred_date: fields.date,
          preferred_time: `${fields.time} WAT`,
          topics: fields.topics
        }
      );
      if (!callForm.querySelector('.booking-form-status').classList.contains('is-error')) {
        callDate.value = new Date().toISOString().slice(0, 10);
        buildLocalCallTimeOptions(callDate.value);
      }
    });
  }

  const faqContainer = document.querySelector('#faq-groups');
  if (faqContainer) {
    if (!faqContainer.querySelector('.faq-group')) renderFaqGroups(faqContainer);
    wireFaqGroups(faqContainer);
  }

  const homeReviews = Array.from(document.querySelectorAll('#reviews .review-card'));
  addReviewAuthors(homeReviews);

  const allReviewsGrid = document.querySelector('#all-reviews-grid');

  if (allReviewsGrid) {
    try {
      const response = await fetch('index.html');
      if (!response.ok) throw new Error('Could not load review source.');

      const sourceHtml = await response.text();
      const sourceDocument = new DOMParser().parseFromString(sourceHtml, 'text/html');
      const allReviews = Array.from(sourceDocument.querySelectorAll('#reviews .review-card'));

      allReviews.forEach((review) => {
        review.hidden = false;
      });

      addReviewAuthors(allReviews);
      allReviewsGrid.replaceChildren(...allReviews);
    } catch {
      const message = document.createElement('p');
      message.className = 'review-disclaimer';
      message.textContent = 'Reviews could not be loaded. Return to the homepage and try again.';
      allReviewsGrid.replaceChildren(message);
    }
  }

  setupReveal();
});

// Text and rows slide in from the right; photos and cards zoom out from the centre.
const revealRight = '.sec-head, .wwm-copy, .service-row, .flow-step, .process-step, .faq-heading, .faq-group, .section-action, .industry-pillars';
const revealZoom = '.wwm-visual, .industry-card, .services-photo, .system-item, .portfolio-card, .review-card:not([hidden]), .stat-box, .cta-panel';

function setupReveal() {
  const mark = (selector, kind) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (element.dataset.revealed) return;
      element.classList.add('reveal');
      element.dataset.reveal = kind;
    });
  };
  mark(revealRight, 'right');
  mark(revealZoom, 'zoom');

  const elements = Array.from(document.querySelectorAll('.reveal:not(.is-in)'));
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-in'));
    return;
  }

  // Once an element has arrived, drop the reveal styles so its own hover effects work again.
  const settle = (element) => {
    element.classList.remove('reveal', 'is-in');
    element.removeAttribute('data-reveal');
    element.dataset.revealed = 'true';
    element.style.transitionDelay = '';
  };

  const observer = new IntersectionObserver((entries) => {
    let delay = 0;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      // Stagger siblings that enter the viewport together.
      element.style.transitionDelay = `${delay}ms`;
      delay += 110;
      element.classList.add('is-in');
      setTimeout(() => settle(element), 1300 + delay);
      observer.unobserve(element);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  elements.forEach((element) => observer.observe(element));
}

function setupHeader() {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (header) {
    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  if (!toggle || !nav) return;

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) setOpen(false);
  });
}

function setupPointerEffects() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  }

  document.addEventListener('pointermove', (event) => {
    const card = event.target.closest?.('.glow-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--cx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--cy', `${event.clientY - rect.top}px`);
  }, { passive: true });
}

function setupWatClock() {
  const clock = document.getElementById('wat-clock');
  if (!clock) return;

  const formatter = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Africa/Lagos'
  });
  const tick = () => {
    clock.textContent = formatter.format(new Date());
  };
  tick();
  setInterval(tick, 15000);
}

function setupScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}
