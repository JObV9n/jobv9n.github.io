/* ============================================================
   WARHAMMER 40K IMPERIAL PORTFOLIO - VUE 3 APPLICATION
   "The Emperor Protects... Your Code"
   ============================================================ */

const { createApp, ref, reactive, computed, onMounted, onUnmounted } = Vue;

// ============================================================
// PORTFOLIO DATA (PLACEHOLDER - CUSTOMIZE THIS)
// ============================================================
const portfolioData = reactive({
  // Personal Information
  name: "COMMANDER",
  lastName: "VANGUARD",
  title: "Software Engineer | Tech Inquisitor",
  avatarLabel: "Adeptus Mechanicus",
  bio: "A devoted servant of the Omnissiah, wielding the sacred machine spirits of code and technology. Specialized in forging digital fortifications and commanding legions of automated systems across the Imperium's networks.",

  // About Section
  about: {
    paragraphs: [
      "For over a decade, I have served the Imperium through the sacred art of software engineering. My crusade began in the forges of academia, where I first learned to commune with the machine spirits. Since then, I have led countless campaigns across the digital realm, from building scalable architectures to deploying resilient microservices that withstand the forces of chaos.",
      "My expertise spans the full spectrum of modern technology stacks. I believe in writing code that is not only functional but also maintainable, documented, and tested—for sloppy code is heresy. When not at my cogitator terminal, I study ancient texts of system design and mentor aspiring tech-priests."
    ],
    stats: [
      { number: "10+", label: "Years of Service" },
      { number: "50+", label: "Crusades Completed" },
      { number: "99.9%", label: "Uptime Achieved" },
      { number: "∞", label: "Lines Blessed" }
    ]
  },

  // Skills Section
  skills: [
    {
      category: "Frontend Arsenal",
      icon: "⚔️",
      items: [
        { name: "Vue.js / Nuxt", level: 95 },
        { name: "React / Next.js", level: 88 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind / CSS", level: 90 }
      ]
    },
    {
      category: "Backend Fortifications",
      icon: "🛡️",
      items: [
        { name: "Node.js / Express", level: 93 },
        { name: "Python / Django", level: 85 },
        { name: "Go / Gin", level: 78 },
        { name: "GraphQL / REST APIs", level: 91 }
      ]
    },
    {
      category: "Infrastructure & DevOps",
      icon: "⚙️",
      items: [
        { name: "Docker / Kubernetes", level: 87 },
        { name: "AWS / GCP / Azure", level: 84 },
        { name: "CI/CD Pipelines", level: 90 },
        { name: "Terraform / IaC", level: 80 }
      ]
    },
    {
      category: "Data & Storage",
      icon: "📜",
      items: [
        { name: "PostgreSQL / MySQL", level: 89 },
        { name: "MongoDB / Redis", level: 86 },
        { name: "Elasticsearch", level: 75 },
        { name: "Data Modeling", level: 88 }
      ]
    }
  ],

  // Experience Section
  experience: [
    {
      role: "Senior Tech-Priest",
      company: "Forge World Industries",
      period: "2022 - Present",
      description: "Lead architect of mission-critical systems serving millions of Imperial citizens. Designed and implemented microservices architecture reducing latency by 60%. Mentor a squad of junior tech-adepts in the ways of clean code.",
      tags: ["Vue.js", "Node.js", "Kubernetes", "AWS"]
    },
    {
      role: "Software Engineer II",
      company: "Administratum Digital",
      period: "2019 - 2022",
      description: "Developed and maintained core platform services handling 10M+ daily transactions. Led migration from monolithic architecture to containerized microservices. Implemented comprehensive testing strategies achieving 95% code coverage.",
      tags: ["React", "Python", "Docker", "PostgreSQL"]
    },
    {
      role: "Junior Enginseer",
      company: "Mechanicus Startup Labs",
      period: "2016 - 2019",
      description: "Built full-stack web applications from the ground up. Collaborated with product teams to deliver features on tight deadlines. Learned the sacred rites of agile development and continuous integration.",
      tags: ["JavaScript", "PHP", "MySQL", "Git"]
    },
    {
      role: "Apprentice Coder",
      company: "Scholam Progenium Tech",
      period: "2014 - 2016",
      description: "Began my journey into the machine cult. Developed internal tools and automation scripts. Learned fundamental patterns and best practices that would guide my future crusades.",
      tags: ["HTML/CSS", "JavaScript", "Python"]
    }
  ],

  // Projects Section
  projects: [
    {
      title: "Administratum Dashboard",
      status: "Active Deployment",
      description: "A comprehensive administrative control panel for managing planetary-scale operations. Features real-time analytics, user management, and automated reporting systems.",
      tech: ["Vue 3", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/yourusername/admin-dashboard",
      live: "https://admin.example.com"
    },
    {
      title: "Vox-Net Communicator",
      status: "Production Ready",
      description: "Secure real-time messaging platform with end-to-end encryption. Supports text, voice, and data-burst transmissions across the network.",
      tech: ["React", "WebSocket", "Redis", "Docker"],
      github: "https://github.com/yourusername/vox-net",
      live: null
    },
    {
      title: "Logis Engine",
      status: "Active Development",
      description: "Intelligent logistics and supply chain management system. Utilizes machine learning for demand forecasting and route optimization.",
      tech: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
      github: "https://github.com/yourusername/logis-engine",
      live: null
    },
    {
      title: "Servo-Skull Monitor",
      status: "Maintenance Mode",
      description: "Infrastructure monitoring and alerting system. Provides real-time visibility into system health with customizable dashboards and automated incident response.",
      tech: ["Go", "Prometheus", "Grafana", "Kubernetes"],
      github: "https://github.com/yourusername/servo-monitor",
      live: "https://monitor.example.com"
    },
    {
      title: "Codex CLI",
      status: "Open Source",
      description: "Command-line interface tool for rapid project scaffolding and code generation. Supports multiple frameworks and customizable templates.",
      tech: ["Node.js", "TypeScript", "Commander.js"],
      github: "https://github.com/yourusername/codex-cli",
      live: null
    },
    {
      title: "Sanctum Auth",
      status: "Production Ready",
      description: "Authentication and authorization microservice with OAuth2, JWT, and multi-factor authentication support. Battle-tested and scalable.",
      tech: ["Node.js", "JWT", "Redis", "PostgreSQL"],
      github: "https://github.com/yourusername/sanctum-auth",
      live: null
    }
  ],

  // Certifications Section
  certifications: [
    {
      name: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      icon: "⚙️"
    },
    {
      name: "Google Cloud Professional Engineer",
      issuer: "Google Cloud",
      year: "2022",
      icon: "🔧"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2021",
      icon: "📊"
    },
    {
      name: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      year: "2022",
      icon: "🏗️"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2020",
      icon: "📋"
    }
  ],

  // Contact & Social Links
  contact: {
    email: "commander@yourdomain.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  },

  // Navigation items
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ]
});

// ============================================================
// NAVBAR COMPONENT
// ============================================================
const Navbar = {
  name: 'Navbar',
  setup() {
    const isOpen = ref(false);
    const scrolled = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
      document.body.style.overflow = isOpen.value ? 'hidden' : '';
    };

    const closeMenu = () => {
      isOpen.value = false;
      document.body.style.overflow = '';
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { isOpen, scrolled, toggleMenu, closeMenu, navLinks: portfolioData.navLinks };
  },
  template: `
    <nav class="navbar" :class="{ scrolled }">
      <a href="#" class="navbar-logo">
        <span class="aquila">⚔️</span>
        <span>Imperial Portfolio</span>
      </a>
      <div class="navbar-links">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>
      <button class="navbar-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <div class="mobile-nav" :class="{ open: isOpen }">
      <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
    </div>
  `
};

// ============================================================
// HERO COMPONENT
// ============================================================
const Hero = {
  name: 'Hero',
  setup() {
    return { data: portfolioData };
  },
  template: `
    <section class="hero" id="hero">
      <div class="hero-content">
        <div class="hero-avatar">
          <div class="hero-avatar-frame">
            <span class="corner tl"></span>
            <span class="corner tr"></span>
            <span class="corner bl"></span>
            <span class="corner br"></span>
            <img src="./assets/meta-Cu3_drnv.jpeg" :alt="data.name + ' ' + data.lastName" />
          </div>
          <div class="hero-avatar-label">{{ data.avatarLabel }}</div>
        </div>
        <div class="hero-text">
          <div class="hero-eyebrow">Designation</div>
          <h1 class="hero-name">{{ data.name }} <span>{{ data.lastName }}</span></h1>
          <p class="hero-title">{{ data.title }}</p>
          <div class="hero-divider"></div>
          <p class="hero-bio">{{ data.bio }}</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              <i class="fas fa-eye"></i> View Campaigns
            </a>
            <a href="#contact" class="btn btn-outline">
              <i class="fas fa-scroll"></i> Transmit Vox
            </a>
          </div>
          <div class="hero-socials">
            <a :href="data.contact.github" target="_blank" rel="noopener">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a :href="data.contact.linkedin" target="_blank" rel="noopener">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a :href="data.contact.twitter" target="_blank" rel="noopener">
              <i class="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// ABOUT COMPONENT
// ============================================================
const About = {
  name: 'About',
  setup() {
    return { data: portfolioData.about };
  },
  template: `
    <section class="section about" id="about">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-divider">☩ ☩ ☩</div>
          <h2>About Me</h2>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p v-for="(para, index) in data.paragraphs" :key="index">{{ para }}</p>
          </div>
          <div class="about-stats">
            <div class="stat-card" v-for="stat in data.stats" :key="stat.label">
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// SKILLS COMPONENT
// ============================================================
const Skills = {
  name: 'Skills',
  setup() {
    const animatedBars = ref(false);

    const animateSkillBars = () => {
      const section = document.getElementById('skills');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && !animatedBars.value) {
        animatedBars.value = true;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', animateSkillBars);
      animateSkillBars(); // Check on mount
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', animateSkillBars);
    });

    return { skills: portfolioData.skills, animatedBars };
  },
  template: `
    <section class="section skills" id="skills">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-divider">⚙ ⚙ ⚙</div>
          <h2>Arsenal & Capabilities</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-category" v-for="category in skills" :key="category.category">
            <span class="skill-category-icon">{{ category.icon }}</span>
            <h3 class="skill-category-title">{{ category.category }}</h3>
            <div class="skill-item" v-for="skill in category.items" :key="skill.name">
              <div class="skill-label-row">
                <span class="skill-label">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar-track">
                <div 
                  class="skill-bar-fill" 
                  :class="{ animated: animatedBars }"
                  :style="{ '--fill': skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// EXPERIENCE COMPONENT
// ============================================================
const Experience = {
  name: 'Experience',
  setup() {
    return { experience: portfolioData.experience };
  },
  template: `
    <section class="section experience" id="experience">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-divider">☠ ☠ ☠</div>
          <h2>Service Record</h2>
        </div>
        <div class="timeline">
          <div class="timeline-item" v-for="(exp, index) in experience" :key="index">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <h3 class="timeline-role">{{ exp.role }}</h3>
                <span class="timeline-period">{{ exp.period }}</span>
              </div>
              <div class="timeline-company">{{ exp.company }}</div>
              <p class="timeline-desc">{{ exp.description }}</p>
              <div class="timeline-tags">
                <span class="tag" v-for="tag in exp.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// PROJECTS COMPONENT
// ============================================================
const Projects = {
  name: 'Projects',
  setup() {
    return { projects: portfolioData.projects };
  },
  template: `
    <section class="section projects" id="projects">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-divider">⚔ ⚔ ⚔</div>
          <h2>Campaign Archives</h2>
        </div>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.title">
            <div class="project-card-accent"></div>
            <div class="project-card-body">
              <div class="project-status">{{ project.status }}</div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tech">
                <span class="tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">
                  <i class="fab fa-github"></i> Repository
                </a>
                <a v-if="project.live" :href="project.live" target="_blank" rel="noopener">
                  <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// CERTIFICATIONS COMPONENT
// ============================================================
const Certifications = {
  name: 'Certifications',
  setup() {
    return { certifications: portfolioData.certifications };
  },
  template: `
    <section class="section certifications" id="certifications">
      <div class="section-inner">
        <div class="section-header">
          <div class="section-divider">✧ ✧ ✧</div>
          <h2>Purity Seals & Honors</h2>
        </div>
        <div class="certs-grid">
          <div class="cert-card" v-for="cert in certifications" :key="cert.name">
            <span class="cert-icon">{{ cert.icon }}</span>
            <h3 class="cert-name">{{ cert.name }}</h3>
            <div class="cert-issuer">{{ cert.issuer }}</div>
            <div class="cert-year">Earned {{ cert.year }}</div>
          </div>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// CONTACT COMPONENT
// ============================================================
const Contact = {
  name: 'Contact',
  setup() {
    return { contact: portfolioData.contact };
  },
  template: `
    <section class="section contact" id="contact">
      <div class="section-inner contact-inner">
        <div class="contact-decree">++ Incoming Transmission ++</div>
        <h2 class="contact-heading">Establish <span>Vox Link</span></h2>
        <p class="contact-sub">
          Ready to embark on a new crusade? Send a transmission through the astropathic network, 
          and I shall respond with haste. Let us forge something worthy of the Emperor.
        </p>
        <div class="contact-links">
          <a :href="'mailto:' + contact.email" class="contact-link">
            <i class="fas fa-envelope"></i>
            <span>Astropathic Mail</span>
          </a>
          <a :href="contact.github" target="_blank" rel="noopener" class="contact-link">
            <i class="fab fa-github"></i>
            <span>GitHub Archives</span>
          </a>
          <a :href="contact.linkedin" target="_blank" rel="noopener" class="contact-link">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn Cogitator</span>
          </a>
          <a :href="contact.twitter" target="_blank" rel="noopener" class="contact-link">
            <i class="fab fa-twitter"></i>
            <span>Twitter Vox</span>
          </a>
        </div>
        <div class="imperial-seal">
          <span>☩</span>
        </div>
      </div>
    </section>
  `
};

// ============================================================
// FOOTER COMPONENT
// ============================================================
const Footer = {
  name: 'Footer',
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear, name: portfolioData.name + ' ' + portfolioData.lastName };
  },
  template: `
    <footer class="footer">
      <p class="footer-motto">"In Code We Trust, In Tests We Believe"</p>
      <p class="footer-copy">
        &copy; {{ currentYear }} <span>{{ name }}</span>. All rights reserved under Imperial Law.
      </p>
    </footer>
  `
};

// ============================================================
// APP ROOT COMPONENT
// ============================================================
const App = {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Certifications,
    Contact,
    Footer
  },
  template: `
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  `
};

// ============================================================
// MOUNT APPLICATION
// ============================================================
createApp(App).mount('#app');

// ============================================================
// SMOOTH SCROLL POLYFILL FOR ANCHOR LINKS
// ============================================================
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      const navbarHeight = 60;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
});
