import { reactive } from 'vue'

export const portfolioData = reactive({
  // Personal Information
  name: "Sachin",
  lastName: "Shrestha",
  title: "Backend Engineer | Software Developer",
  avatarLabel: "Software Developer",
  bio: "A passionate backend engineer and software developer with a keen interest in design and technology. With a strong foundation in building robust backend systems, I enjoy creating new things and exploring emerging technologies.",

  // About Section
  about: {
    paragraphs: [
      "I am Sachin Shrestha, a passionate backend engineer and software developer with a keen interest in design and technology. With a strong foundation in building robust backend systems, I like creating something new and trying out new things.",
      "My expertise spans PHP/Laravel, Vue.js, TypeScript, and Java development. I enjoy building full-stack applications and exploring DevOps practices with Docker."
    ],
    stats: [
      { number: "4+", label: "Years Experience" },
      { number: "35+", label: "Projects Built" },
      { number: "7+", label: "Technologies" }
    ]
  },

  // Skills Section
  skills: [
    {
      category: "Backend",
      icon: "game-icons:server-rack",
      items: [
        { name: "PHP / Laravel", level: 90 },
        { name: "Java / Kotlin", level: 75 },
        { name: "Python / Django", level: 70 },
        { name: "Node.js / Hono", level: 65 }
      ]
    },
    {
      category: "Frontend",
      icon: "game-icons:templar-shield",
      items: [
        { name: "Vue.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "game-icons:gear-hammer",
      items: [
        { name: "Docker", level: 75 },
        { name: "Git / GitHub", level: 85 },
        { name: "Puppeteer / Scraping", level: 70 },
        { name: "Vite / Build Tools", level: 75 }
      ]
    },
    {
      category: "Databases",
      icon: "game-icons:database",
      items: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "SQLite", level: 80 },
        { name: "Redis", level: 60 }
      ]
    }
  ],

  // Experience Section
  experience: [],

  // Projects Section
  projects: [
    {
      title: "Scholarship Finder",
      status: "Active",
      description: "Web scraping tool built with TypeScript and Puppeteer to find scholarship opportunities automatically.",
      tech: ["TypeScript", "Puppeteer", "Node.js"],
      github: "https://github.com/JObV9n/schoolorship_finder",
      live: null
    },
    {
      title: "Eshop",
      status: "Completed",
      description: "E-commerce platform for clothing, built with Vue and TypeScript frontend.",
      tech: ["Vue.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/JObV9n/eshop",
      live: null
    },
    {
      title: "ChatBox",
      status: "Completed",
      description: "Real-time chat messenger application built with Laravel and PHP.",
      tech: ["PHP", "Laravel", "Blade", "Tailwind"],
      github: "https://github.com/JObV9n/ChatBox",
      live: "https://chat-box-psi.vercel.app"
    },
    {
      title: "TinyCRM",
      status: "Completed",
      description: "Lightweight CRM system built with Laravel and Vue, containerized with Docker.",
      tech: ["PHP", "Laravel", "Vue", "Docker"],
      github: "https://github.com/JObV9n/TinyCRM",
      live: null
    },
    {
      title: "HonoCrud",
      status: "Completed",
      description: "CRUD API built with Hono framework and Bun runtime.",
      tech: ["JavaScript", "TypeScript", "Hono", "Bun"],
      github: "https://github.com/JObV9n/HonoCrud",
      live: null
    },
    {
      title: "Calculator App",
      status: "Completed",
      description: "First Android application - a basic calculator built with Java.",
      tech: ["Java", "Android"],
      github: "https://github.com/JObV9n/CalculatorApp",
      live: null
    }
  ],

  // Certifications Section
  certifications: [],

  // Contact & Social Links
  contact: {
    email: "ricardoshrestha@gmail.com",
    github: "https://github.com/JObV9n/",
    linkedin: "https://www.linkedin.com/in/sachinshrestha830/"
  },

  // Navigation items
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
})
