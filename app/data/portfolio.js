import {
  BriefcaseBusiness,
  Building2,
  Bot,
  Code2,
  Database,
  ChartNoAxesCombined,
  ClipboardCopy,
  FileJson2,
  Fuel,
  GraduationCap,
  Handshake,
  Layers3,
  Monitor,
  Paintbrush,
} from "lucide-react";

export const profile = {
  name: "Smit Joshi",
  role: "Software Developer",
  location: "Gandhinagar, Gujarat, India",
  email: "joshismit2812@gmail.com",
  linkedin: "https://linkedin.com/in/smit-joshi-ab1062224",
  twitter: "https://x.com/smitjoshi28",
  github: "https://github.com/smitzo",
  odooGithub: "https://github.com/smjo-odoo"
};

export const navItems = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

export const projects = [
  {
    title: "Fuel Up",
    icon: Fuel,
    eyebrow: "Fuel and route planner",
    status: "Completed",
    state: "completed",
    rating: 3,
    githubHref: "https://github.com/smitzo/FuelUp",
    liveHref: "",
    reserveLiveLink: true,
    summary: "Route and fuel-stop planning for U.S. truckers with cost-aware recommendations and map visualization.",
    description:
      "Full-stack route planner that compares route alternatives and recommends fuel stops using station prices, vehicle range, and trip constraints, with Redis-backed caching and interactive map visualization.",
    tags: ["Django", "Next.js", "TypeScript", "Redis", "Python", "Docker"]
  },
  {
    title: "Finance Agent",
    icon: Bot,
    eyebrow: "Multi-tenant finance platform",
    status: "Work in progress",
    state: "progress",
    href: "https://github.com/smitzo/Finance_Agent",
    action: "View GitHub",
    summary: "Multi-tenant finance app for freight bill validation, contract checks, and audit-ready billing workflows.",
    description:
      "Work-in-progress platform designed for multiple tenants to validate carrier freight bills against contracts, shipments, and bills of lading with deterministic financial checks and audit-friendly output.",
    tags: ["FastAPI", "Postgres", "REST APIs", "LangGraph", "Neo4j", "Python"]
  },
  {
    title: "Navijob",
    icon: BriefcaseBusiness,
    eyebrow: "Job platform",
    status: "Work in progress",
    state: "progress",
    summary: "Job platform planned for role discovery, saved opportunities, and application tracking.",
    description:
      "Work-in-progress job platform planned with a Next.js frontend and Django backend for candidate-focused search and application workflows.",
    tags: ["Django", "Next.js", "Postgres", "Python"]
  },
  {
    title: "Clipboard",
    icon: ClipboardCopy,
    eyebrow: "Online clipboard",
    status: "Deployed",
    state: "completed",
    href: "https://clipboard-theta-eight.vercel.app",
    githubHref: "https://github.com/smitzo/clipboard",
    action: "Live link",
    summary: "A secure online clipboard for moving text between devices.",
    description:
      "A user pastes text, creates a temporary room, and shares the generated room ID or QR code with another device. The receiving device joins the room, reads the text, copies it, updates it, or deletes the room when finished.",
    tags: ["Node.js", "React", "WebSockets"]
  },
  {
    title: "Employee Data Analytics App",
    icon: ChartNoAxesCombined,
    eyebrow: "Delivered",
    status: "Deployed",
    state: "completed",
    href: "https://employee-data-analytics-app.vercel.app/",
    githubHref: "https://github.com/smitzo/Employee-Data-Analytics-App",
    action: "View GitHub",
    summary: "Employee Performance analytics with filters, drilldowns, and reporting views.",
    description:
      "Analytics app for reviewing employee performance data with filtering, drill-down analysis, and clear reporting flows for structured spreadsheets.",
    tags: ["Django", "Next.js", "Postgres", "SQLite", "Python"]
  },
  {
    title: "Claim Processing Pipeline",
    icon: FileJson2,
    eyebrow: "Document automation",
    status: "Delivered",
    state: "completed",
    href: "https://github.com/smitzo/Document-Processor",
    action: "View GitHub",
    summary: "Medical claim PDFs are classified, routed through extraction steps, and merged into one JSON response.",
    description:
      "Service for medical claim PDF processing. It classifies each page into document types, sends only relevant pages through dedicated extraction steps, and aggregates the result into a single API response.",
    tags: ["FastAPI", "LangGraph", "Python"]
  },
  {
    title: "Paint Cost Analytics Tool",
    icon: Paintbrush,
    eyebrow: "Manufacturing analytics",
    status: "Delivered",
    state: "completed",
    href: "https://github.com/smitzo/Paint-Cost-Analysis-Tool",
    action: "View GitHub",
    summary: "Manufacturing profitability analysis from Excel sheets for paint cost and margin visibility.",
    description:
      "Built for a manufacturing firm to understand paint profitability from Excel sheets, compare costs, and make margin visibility easier for operators.",
    tags: ["Python", "Pandas", "openpyxl", "Tkinter"]
  }
];

const contributionBullets = [
  "Build Python backend services, REST APIs, and ORM-driven business logic for Accounting and Invoicing products",
  "Work on E-invoice, tax report computation, compliance workflows, validation rules, and third-party integrations",
  "Implemented E-invoicing flow for Greek B2G E-invoices",
  "Participated in debugging, documentation, and Unit testing with cross-functional teams"
];

export const timeline = [
  {
    years: "Jul 2025 - Present",
    startDate: "2025-07-01",
    endDate: null,
    journeyLabel: "Professional / Full-time Experience",
    title: "Software Developer, R&D Accounting & Invoicing",
    org: "Odoo",
    meta: "Odoo",
    status: "Current role",
    state: "progress",
    summary: "Backend accounting and invoicing product work across Python services, APIs, taxes, and compliance.",
    description:
      "Current R&D engineering role focused on correctness-heavy accounting and invoicing backend systems, including API integrations, business logic, validation, and compliance workflows.",
    icon: BriefcaseBusiness,
    tone: "purple",
    visual: "api",
    points: contributionBullets,
    href: profile.odooGithub,
    // openSourceProfile: "smjo-odoo",
    action: "Open-source contributions"
  },
  {
    years: "Jan 2025 - Jul 2025",
    startDate: "2025-01-01",
    endDate: "2025-07-01",
    journeyLabel: "Internship Experience",
    title: "Software Development Intern, R&D Accounting & Invoicing",
    org: "Odoo",
    meta: "Odoo",
    status: "Completed role",
    state: "completed",
    summary: "Internship work across Helpdesk, Sales, Invoicing, GST flows, tests, and product fixes.",
    description:
      "R&D internship building and testing Odoo accounting and invoicing customizations while contributing to integrated product workflows.",
    icon: Building2,
    tone: "violet",
    visual: "workflow",
    points: [
      "Integrated Helpdesk, Sales, and Invoicing workflows for invoicing solved helpdesk tickets",
      "Built Odoo customizations for accounting and invoicing use cases",
      "Implemented GST localization flows for Indian users",
      "Contributed to testing, issue triage, and product fixes"
    ]
  },
  {
    years: "Oct 2024 - Jan 2025",
    startDate: "2024-10-01",
    endDate: "2025-01-01",
    journeyLabel: "Freelance Experience",
    title: "Freelance Backend & Analytics Developer",
    org: "Freelance work",
    meta: "Freelance work",
    status: "Completed work",
    state: "completed",
    summary: "Freelance backend and analytics systems for spreadsheet-heavy operational teams.",
    description:
      "Freelance work turning spreadsheet-heavy workflows into backend-supported analytics and reporting tools.",
    icon: Handshake,
    tone: "cyan",
    visual: "bars",
    points: [
      "Built employee analytics app for a manufacturing firm",
      "Built paint cost analytics app for manufacturing profitability",
    ]
  },
  {
    years: "2021 - 2025",
    startDate: "2021-08-01",
    endDate: "2025-05-01",
    journeyLabel: "College Education",
    title: "B.E. Computer Engineering",
    org: "G H Patel College of Engineering & Technology",
    meta: "G H Patel College of Engineering & Technology",
    status: "Education",
    state: "education",
    summary: "Computer Engineering degree with hackathon, robotics, and grant-backed prototype experience.",
    description:
      "Computer Engineering foundation with project-heavy work across hackathons, robotics, and grant-supported prototyping.",
    icon: GraduationCap,
    iconSize: 34,
    tone: "blue",
    visual: "orbit",
    points: [
      "Computer Engineering with CGPA 8.19/10",
      "Smart India Hackathon 2023 finalist",
      "Robofest 3.0 finalist",
      "GUJCOST grant recipient for a self-balancing robot prototype",
      "Mentored under ICREATE Idea Accelerator - an incubator for pre-seed startups",
      "Represented CVM university at Inter-university Volleyball tournament"
    ],
    coursework: ["Operating Systems", "Data Structures & Algorithms", "Computer Networks", "Databases", "Natural Language Processing", "Big Data Analytics", "ML Fundamentals", "IoT"]
  }
];

export const skills = [
  {
    title: "Backend",
    icon: Code2,
    items: ["Python", "Node.js", "FastAPI", "REST APIs", "Flask", "Django", "Pydantic", "SQLAlchemy"]
  },
  {
    title: "Data Layer",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL", "Cypher"]
  },
  {
    title: "Infrastructure & Tooling",
    icon: Layers3,
    items: ["Linux", "Git", "Docker", "GCP", "GitHub Actions", "AWS S3", "AWS EC2"]
  },
  {
    title: "AI",
    icon: Bot,
    items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering"]
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["JavaScript", "TypeScript", "React", "Next.js"]
  },
];
