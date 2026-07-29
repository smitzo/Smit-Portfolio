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
  Network,
  ShieldCheck,
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
    featured: true,
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
    accent: "#337d5d",
    githubHref: "https://github.com/smitzo/Finance_Agent",
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
  "databoom",
  "fuelUp",
  "financeAgent",
  "claimProcessor",
  "employeeAnalytics",
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
      "Implemented the Greek B2G e-invoicing flow",
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
      "Integrated Helpdesk, Sales, and Invoicing workflows",
      "Built accounting and invoicing customizations",
      "Implemented GST localization flows for Indian users",
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
      "Built employee-performance analytics for a manufacturing firm",
      "Built paint-cost and profitability reporting workflows",
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
      "Smart India Hackathon 2023 and Robofest 3.0 finalist",
      "GUJCOST grant recipient for a self-balancing robot prototype",
      "Mentored through the iCreate Idea Accelerator, an incubator for startups",
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
    interests: [
      "Volleyball",
      "Table tennis",
      "MMA Beginner",
      "Musical instruments",
    ],
  },
];
