import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  FileJson2,
  Fuel,
  GraduationCap,
  Handshake,
  Layers3,
  Link2,
  Lightbulb,
  Network,
  ShieldCheck,
  Trophy,
  UsersRound,
  Volleyball,
} from "lucide-react";

export const profile = {
  name: "Smit Joshi",
  role: "Software Developer",
  location: "Gandhinagar, Gujarat, India",
  email: "joshismit2812@gmail.com",
  linkedin: "https://linkedin.com/in/smit-joshi-ab1062224",
  github: "https://github.com/smitzo",
  odooGithub: "https://github.com/smjo-odoo",
  image: "/images/smit-joshi.png",
};

export const navItems = [
  ["Experience", "#experience"],
  ["Achievements", "#achievements"],
  ["Projects", "#projects"],
  ["Stack", "#stack"],
  ["Hobbies", "#hobbies"],
  ["Contact", "#contact"],
];

/*
 * Project content and display order are intentionally separate. Reorder the
 * keys in projectOrder without moving or duplicating project details.
 */
export const projectCatalog = {
  databoom: {
    title: "DataBoom",
    icon: Network,
    eyebrow: "Synthetic data platform",
    status: "Active build",
    state: "progress",
    accent: "#6d5dfc",
    githubHref: "https://github.com/smitzo/DataBoom",
    description:
      "A synthetic data platform for relational, document, and graph datasets. It preserves keys and relationships, supports deterministic runs and validation, and keeps AI-assisted plans reviewable before generation.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "LLM workflows"],
  },
   urlShortener: {
    title: "URL Shortener",
    icon: Link2,
    eyebrow: "Production-minded link service",
    status: "Active build",
    state: "progress",
    accent: "#0c8ea0",
    githubHref: "https://github.com/smitzo/URL-Shortner",
    description:
      "A full-stack URL shortener with custom codes, safe-target checks, protected click analytics, CSV exports, audit history, rate limits, and a Dockerized PostgreSQL runtime.",
    tags: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
  },
  fuelUp: {
    title: "Fuel Up",
    icon: Fuel,
    eyebrow: "Fuel and route planner",
    status: "Shipped",
    state: "completed",
    accent: "#c16b2f",
    githubHref: "https://github.com/smitzo/FuelUp",
    liveHref: "https://fuel-up-sigma.vercel.app/",
    description:
      "A route planner for U.S. truckers that compares routes and recommends fuel stops using station prices, vehicle range, and trip constraints, with Redis caching and map visualization.",
    tags: ["Django", "Next.js", "TypeScript", "Redis", "Docker"],
  },
  financeAgent: {
    title: "Finance Agent",
    icon: Bot,
    eyebrow: "Freight-bill validation",
    status: "In progress",
    state: "progress",
    featured: true,
    accent: "#337d5d",
    githubHref: "https://github.com/smitzo/Finance_Agent",
    liveHref: "https://freightflow-ai-steel.vercel.app",
    description:
      "A multi-tenant finance platform for validating carrier bills against contracts, shipments, and bills of lading through deterministic checks and audit-friendly workflows.",
    tags: ["FastAPI", "PostgreSQL", "LangGraph", "Neo4j", "Python"],
  },
  clipboard: {
    title: "Clipboard",
    icon: ShieldCheck,
    eyebrow: "Cross-device text sharing",
    status: "Live",
    state: "completed",
    accent: "#3478c9",
    githubHref: "https://github.com/smitzo/clipboard",
    liveHref: "https://clipboard-theta-eight.vercel.app",
    description:
      "A temporary-room clipboard for moving text between devices. Room IDs and QR codes make joining quick, while participants can copy, update, or delete shared content.",
    tags: ["Node.js", "React", "WebSockets"],
  },
  employeeAnalytics: {
    title: "Workpulse",
    icon: BarChart3,
    eyebrow: "Operational reporting",
    status: "Live",
    state: "completed",
    accent: "#a14875",
    githubHref: "https://github.com/smitzo/Employee-Data-Analytics-App",
    liveHref: "https://employee-data-analytics-app.vercel.app/",
    description:
      "An analytics application for exploring employee performance data through filters, drill-down views, and reporting flows built around structured spreadsheets.",
    tags: ["Django", "Next.js", "PostgreSQL", "Python"],
  },
  claimProcessor: {
    title: "Mediclaim OS",
    icon: FileJson2,
    eyebrow: "Document automation",
    status: "Delivered",
    state: "completed",
    accent: "#7654b4",
    githubHref: "https://github.com/smitzo/Document-Processor",
    liveHref: "",
    description:
      "A medical-claim PDF service that classifies pages, routes relevant content through dedicated extraction steps, and returns one structured JSON response.",
    tags: ["FastAPI", "LangGraph", "Python"],
  },

  paintCostAnalytics: {
    title: "Paint Cost Analytics Tool",
    icon: BarChart3,
    eyebrow: "Manufacturing analytics",
    status: "Delivered",
    state: "completed",
    accent: "#9b663d",
    githubHref: "https://github.com/smitzo/Paint-Cost-Analysis-Tool",
    description:
      "A manufacturing profitability tool that turns Excel sheets into paint-cost comparisons and clearer margin reporting for operators.",
    tags: ["Python", "Pandas", "openpyxl", "Tkinter"],
  },
  navijob: {
    title: "Navijob",
    icon: BriefcaseBusiness,
    eyebrow: "Job platform",
    status: "In progress",
    state: "progress",
    accent: "#3b7195",
    description:
      "A candidate-focused job platform for role discovery, saved opportunities, and application workflows.",
    tags: ["Django", "Next.js", "PostgreSQL", "Python"],
  },
};

export const projectOrder = [
  "financeAgent",
  "claimProcessor",
  "databoom",
  "employeeAnalytics",
  "fuelUp",
  "clipboard",
  "urlShortener",
  // "paintCostAnalytics",
  // "navijob",
];

export const projects = projectOrder.map((key) => ({
  id: key,
  ...projectCatalog[key],
}));

export const timeline = [
  {
    years: "Jul 2025 - Present",
    startDate: "2025-07-01",
    endDate: null,
    title: "Software Developer",
    org: "Odoo - R&D Accounting & Invoicing",
    state: "progress",
    description:
      "Backend product engineering across accounting, invoicing, tax, and compliance systems.",
    icon: BriefcaseBusiness,
    points: [
      "Build Python services, REST APIs, and ORM-backed business logic",
      "Work on e-invoicing, tax reports, validation, and third-party integrations",
      "Implemented B2G e-invoicing flow for Greek users",
      "Contribute tests, debugging, and technical documentation",
    ],
    href: profile.odooGithub,
    action: "Open-source contributions",
  },
  {
    years: "Jan 2025 - Jul 2025",
    startDate: "2025-01-01",
    endDate: "2025-07-01",
    title: "Software Development Intern",
    org: "Odoo — R&D Accounting & Invoicing",
    state: "completed",
    description:
      "Product development and testing across integrated Odoo business workflows.",
    icon: Building2,
    points: [
      "Built accounting and invoicing customizations",
      "Contributed to testing, triage, and product fixes",
    ],
  },
  {
    years: "Oct 2024 - Jan 2025",
    startDate: "2024-10-01",
    endDate: "2025-01-01",
    title: "Backend & Analytics Developer",
    org: "Freelance",
    state: "completed",
    description:
      "Backend-supported analytics for spreadsheet-heavy operational teams.",
    icon: Handshake,
    points: [
      "Built an employee management and analytics for a manufacturing firm",
      "Built a paint-cost and profitability reporting tool for a manufacturing firm",
    ],
  },
  {
    years: "2021 - 2025",
    startDate: "2021-08-01",
    endDate: "2025-05-01",
    durationLabel: "4 years",
    title: "B.E. Computer Engineering",
    org: "G H Patel College of Engineering & Technology",
    state: "education",
    description:
      "A project-led computer engineering foundation across software, robotics, and applied research.",
    icon: GraduationCap,
    points: [
      "CGPA 8.19/10",
      "GUJCOST grant recipient for a self-balancing robot prototype",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Databases",
      "Machine Learning",
      "NLP",
      "Big Data Analytics",
    ],
  },
];

export const achievements = [
  {
    year: "2023",
    title: "Smart India Hackathon 2023 Finalist",
    organization: "Smart India Hackathon",
    category: "National hackathon",
    description:
      "Reached the finalist stage of Smart India Hackathon 2023 as part of a team solving a real-world problem through technology.",
    icon: Trophy,
    accent: "#6d5dfc",
    tags: ["National finalist", "Team innovation", "Problem solving"],
    href: "https://www.linkedin.com/posts/smit-joshi-ab1062224_smartindiahackathon2023-smartindiahackathon-ugcPost-7144565725276352512-_krg/",
    action: "View SIH journey",
  },
  {
    year: "2024",
    title: "iCreate Idea Accelerator",
    organization: "iCreate",
    category: "Startup accelerator",
    description:
      "Selected for the iCreate Idea Accelerator Program and received structured mentorship for developing an early-stage technology idea.",
    icon: Lightbulb,
    accent: "#0c8ea0",
    tags: ["Idea validation", "Startup mentorship", "Innovation"],
    href: "https://www.linkedin.com/posts/smit-joshi-ab1062224_i-received-the-opportunity-of-having-a-1-share-7155177224197787649-4qfV/",
    action: "View iCreate experience",
  },
  {
    year: "2023",
    title: "Robofest Gujarat 3.0 Finalist",
    organization: "Gujarat Council on Science and Technology",
    category: "National robotics competition",
    description:
      "Reached the Level 3 finalist stage of Robofest Gujarat 3.0 with a self-balancing robot prototype.",
    icon: Bot,
    accent: "#9b663d",
    tags: ["Level 3 finalist", "Self-balancing robot", "Prototype engineering"],
    href: "https://www.gcet.ac.in/achivement.php?year=MjAyMw%3D%3D",
    action: "View GCET recognition",
    platform: "Website",
    secondaryHref: "https://x.com/InfoGujcost/status/1678354294230364161/photo/4",
    secondaryAction: "Twitter post by GUJCOST",
    secondaryPlatform: "X",
  },
  {
    year: "2023",
    title: "CSI GCET Core Team Member",
    organization: "Computer Society of India — GCET Student Branch",
    category: "Student leadership",
    description:
      "Selected for the CSI GCET core team, helping manage technical and non-technical events and organize hackathons for the campus community.",
    icon: UsersRound,
    accent: "#a14875",
    tags: ["Event operations", "Hackathon organizing", "Team leadership"],
    href: "https://www.instagram.com/p/Cwt-Fz2LbwH/",
    action: "View CSI announcement",
    platform: "Instagram",
  },
];

export const achievementMoments = [
  {
    title: "Smart India Hackathon 2023",
    detail: "Grand Finale team",
    image: "/Smartindiahackathon.jpeg",
    imageAlt:
      "Smit Joshi and the Geeks of AI team at the Smart India Hackathon 2023 Grand Finale",
    accent: "#6d5dfc",
  },
  {
    title: "Robofest 3.0",
    detail: "Finalist team",
    image: "/robofest3.jpeg",
    imageAlt: "Smit Joshi with his Robofest 3.0 finalist team",
    accent: "#9b663d",
  },
];

export const skills = [
  {
    title: "Backend systems",
    icon: Code2,
    featured: true,
    items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs", "Odoo", "Pydantic", "SQLAlchemy"],
  },
  {
    title: "AI engineering",
    icon: Bot,
    featured: true,
    items: ["LangGraph", "LangChain", "RAG", "Prompt design", "Structured outputs"],
  },
  {
    title: "Data & storage",
    icon: Database,
    items: ["PostgreSQL", "Redis", "MongoDB", "Neo4j", "MySQL", "SQL", "Cypher"],
  },
  {
    title: "Delivery",
    icon: Layers3,
    items: ["Docker", "Linux", "Git", "GitHub Actions", "GCP", "AWS", "TypeScript", "Next.js"],
  },
];

export const hobbies = [
  {
    title: "Sports, music & exploration",
    icon: Volleyball,
    description:
      "I have captained a volleyball team and actively play table tennis and other sports to stay fresh, energetic, and lively.",
    interests: [
      "Volleyball",
      "Table tennis",
      "MMA Beginner",
      "Musical instruments",
    ],
  },
];
