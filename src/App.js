import React, { useState, useEffect } from "react";
import "./App.css";

// SVG Icons
const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const SunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TerminalIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const ServerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

// Projects Data
const projectsData = [
  {
    id: "biizline-b2b",
    title: "Biizline - B2B Order Management Software",
    description:
      "A digital B2B platform designed to simplify and streamline business operations by connecting companies, vendors, and customers on a single ecosystem. Helps businesses manage products, orders, payments, subscriptions, and communication efficiently across web and mobile apps. Combines automation, real-time notifications, and data-driven insights to reduce manual work and scale operations.",
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      "Nest.js",
      "Express.js",
      "Rest APIs",
      "SQL DB",
    ],
    categories: ["react", "node", "fullstack"],
  },
  {
    id: "groupshop",
    title: "Group Shop - E-Commerce Platform",
    description:
      "An E-commerce site similar to Flipkart, exclusively available in European countries. Implemented innovative features like daily drops and weekly drops. Daily drops involve the daily update of products, while weekly drops feature products updated on a weekly basis. Integrates Shopify stores where the backend fetches products and serves them to the UI.",
    tech: [
      "Next.js",
      "Node.js",
      "Nest.js",
      "GraphQL API",
      "MongoDB",
      "Shopify",
    ],
    categories: ["react", "next", "node", "fullstack"],
  },
  {
    id: "trublu-plan",
    title: "TruBlu - Plan for Health (Dental Panel)",
    description:
      "A comprehensive platform designed to empower dentists to distinguish their practices, preserve private practice dentistry, and foster a philosophy of optimum dental care. Dentists can create membership plans tailored to patients. Integrates a payment gateway for patients to purchase plans and access benefits.",
    tech: [
      "React.js",
      "Node.js",
      "Prisma ORM",
      "Apollo Client",
      "GraphQL API",
      "PostgreSQL",
    ],
    categories: ["react", "node", "fullstack"],
  },
  {
    id: "trublu-direct",
    title: "TruBlu - Direct Benefits Platform",
    description:
      "An industry-leading platform offering benefits and partnerships with dentistry's leading providers. Manages business reports, dentistry records, and integrates a payment gateway for dentists to purchase membership plans and manage practices.",
    tech: [
      "React.js",
      "Node.js",
      "Prisma ORM",
      "Apollo Client",
      "GraphQL API",
      "PostgreSQL",
    ],
    categories: ["react", "node", "fullstack"],
  },
  {
    id: "medinsight",
    title: "MedInsight Pro",
    description:
      "A survey software for the medical industry utilizing WHO APIs to gather pandemic data. Employs dynamic chart visualizations and incorporates user-friendly filters. Real-time chart updates seamlessly reflect changes as filters are modified, assisting in medical trend analysis.",
    tech: ["Angular", "AG Charts", "Rest APIs", "JavaScript"],
    categories: ["angular"],
  },
  {
    id: "coyna",
    title: "Coyna - Money Management Software",
    description:
      "A comprehensive money management application that includes advanced features for fund management, working capital analysis, and tracking liabilities and profitability. Visually represents financial data through dynamic Apex charts, illustrating receivables, payables, and revenue streams.",
    tech: ["Angular", "Apex Charts", "Material UI", "TypeScript"],
    categories: ["angular"],
  },
  {
    id: "focusfs",
    title: "Focus FS",
    description:
      "An innovative project tailored for civil engineering firms to manage site operations and workforce. A cloud-based software that enhances safety and operational performance on industrial worksites, improving efficiency and compliance standards.",
    tech: ["Angular", "MySQL", "IndexedDB (Chrome's fetcher)", "JavaScript"],
    categories: ["angular"],
  },
];

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    return mq.matches ? "light" : "dark";
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setErrorMessage("");

    try {
      const apiUrl =
        process.env.REACT_APP_API_URL ||
        (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
          ? "http://localhost:5001"
          : "");
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(
          result.message || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(
        "Could not connect to the mail server. Please ensure the backend is running or try again later.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <div className="portfolio-app">
      {/* Dynamic Background Gradients */}
      <div className="background-decorations">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
        <div className="glow-sphere glow-sphere-3"></div>
      </div>

      {/* Navigation Header */}
      <header className="site-header">
        <div className="header-container">
          <a href="#hero" className="site-logo">
            <span className="logo-box">MP</span>
            <span className="logo-text">Mitesh Patel</span>
          </a>

          <nav className="main-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="section-container hero-grid">
            <div className="hero-info">
              <div className="badge-wrapper">
                <span className="status-badge">Available for Projects</span>
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight-text">Mitesh Patel</span>
              </h1>
              <p className="hero-subtitle">
                Team Lead &amp; Full Stack Developer
              </p>

              <div className="location-info">
                <MapPinIcon />
                <span>Ahmedabad, Gujarat, India</span>
              </div>

              <p className="hero-description">
                A dedicated and skilled Full Stack Developer with 5 years of
                hands-on experience crafting clean, maintainable, and highly
                performant web applications. Experienced in client engagement,
                requirement gathering, and leading development teams to deliver
                outstanding systems.
              </p>

              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch
                </a>
                <a
                  href="/MiteshPatelCV.pdf"
                  download="Mitesh_Patel_CV.pdf"
                  className="btn btn-secondary"
                >
                  <DownloadIcon />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="contact-quick-links">
                <a href="mailto:mitesh13500@gmail.com" title="Email Mitesh">
                  <MailIcon />
                  <span>mitesh13500@gmail.com</span>
                </a>
                <a href="tel:+919773090251" title="Call Mitesh">
                  <PhoneIcon />
                  <span>+91 9773090251</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mitesh-patel-74a111199"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="hero-illustration">
              <div className="illustration-wrapper">
                <div className="blob-bg"></div>
                <div className="tech-badge-float badge-react">React</div>
                <div className="tech-badge-float badge-angular">Angular</div>
                <div className="tech-badge-float badge-node">Node</div>
                <div className="avatar-card">
                  <div className="avatar-fallback">
                    <svg
                      viewBox="0 0 100 100"
                      width="120"
                      height="120"
                      className="avatar-svg"
                    >
                      <defs>
                        <linearGradient
                          id="avatarGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="100%" stopColor="var(--color-accent)" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="40" r="22" fill="url(#avatarGrad)" />
                      <path
                        d="M15 85 C15 65, 30 55, 50 55 C70 55, 85 65, 85 85"
                        fill="url(#avatarGrad)"
                      />
                    </svg>
                  </div>
                  <h3 className="avatar-name">Mitesh Patel</h3>
                  <p className="avatar-title">Full Stack Developer</p>
                  <div className="avatar-stats">
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Years Exp</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary Section */}
        <section id="about" className="summary-section">
          <div className="section-container">
            <h2 className="section-title">Professional Summary</h2>
            <div className="summary-grid">
              <div className="summary-card">
                <div className="card-icon-container">
                  <BriefcaseIcon />
                </div>
                <h3>5+ Years of Experience</h3>
                <p>
                  Extensive experience architecting and developing frontend
                  interfaces and backend logic in fast-paced tech environments.
                </p>
              </div>

              <div className="summary-card">
                <div className="card-icon-container">
                  <TerminalIcon />
                </div>
                <h3>Clean Architecture</h3>
                <p>
                  Adept at crafting clean, maintainable, and reusable codebase,
                  utilizing modern design patterns and best practices.
                </p>
              </div>

              <div className="summary-card">
                <div className="card-icon-container">
                  <CodeIcon />
                </div>
                <h3>Client &amp; Stakeholder Focused</h3>
                <p>
                  Exceptional at engaging with clients directly, gathering
                  engineering requirements, and conducting feasibility
                  assessments.
                </p>
              </div>

              <div className="summary-card">
                <div className="card-icon-container">
                  <ServerIcon />
                </div>
                <h3>Delivery &amp; Leadership</h3>
                <p>
                  Committed to achieving tangible project outcomes, skilled in
                  leading teams, and experienced in meeting tight deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="section-container">
            <h2 className="section-title">Technical Expertise</h2>

            <div className="skills-container-grid">
              <div className="skills-group">
                <h3>Frontend Engineering</h3>
                <div className="skills-chips">
                  <span className="skill-chip">JavaScript</span>
                  <span className="skill-chip">TypeScript</span>
                  <span className="skill-chip">React.js</span>
                  <span className="skill-chip">Next.js</span>
                  <span className="skill-chip">Angular</span>
                </div>
              </div>

              <div className="skills-group">
                <h3>Backend &amp; ORM</h3>
                <div className="skills-chips">
                  <span className="skill-chip">Node.js</span>
                  <span className="skill-chip">Express JS</span>
                  <span className="skill-chip">Nest.js</span>
                  <span className="skill-chip">Prisma ORM</span>
                  <span className="skill-chip">Type ORM</span>
                </div>
              </div>

              <div className="skills-group">
                <h3>Databases</h3>
                <div className="skills-chips">
                  <span className="skill-chip">SQL Databases</span>
                  <span className="skill-chip">NoSQL Databases</span>
                  <span className="skill-chip">PostgreSQL</span>
                  <span className="skill-chip">MySQL</span>
                  <span className="skill-chip">MongoDB</span>
                </div>
              </div>

              <div className="skills-group">
                <h3>Cloud &amp; DevOps</h3>
                <div className="skills-chips">
                  <span className="skill-chip">AWS</span>
                  <span className="skill-chip">Nginx</span>
                  <span className="skill-chip">Docker</span>
                </div>
              </div>

              <div className="skills-group">
                <h3>Development Tools</h3>
                <div className="skills-chips">
                  <span className="skill-chip">VS Code</span>
                  <span className="skill-chip">GitHub</span>
                  <span className="skill-chip">GitLab</span>
                  <span className="skill-chip">NPM</span>
                </div>
              </div>
              <div className="skills-group">
                <h3>AI Tools</h3>
                <div className="skills-chips">
                  <span className="skill-chip">Google Antigravity (AGY)</span>
                  <span className="skill-chip">Gemini</span>
                  <span className="skill-chip">Claude / Claude Code</span>
                  <span className="skill-chip">GitHub Copilot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="section-container">
            <h2 className="section-title">Work Experience</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">April 2024 - Present</div>
                <div className="timeline-content">
                  <h3 className="role-title">Full Stack Developer</h3>
                  <h4 className="company-name">
                    Biizline — Ahmedabad, Gujarat
                  </h4>
                  <p className="job-desc">
                    Lead a team of engineers in building complex,
                    high-transaction web applications. Responsible for the
                    architecture, security, and integration of backend
                    microservices with mobile/web clients. Supervise database
                    schema design, and establish CI/CD pathways while
                    maintaining robust coding standards.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">November 2023 - March 2024</div>
                <div className="timeline-content">
                  <h3 className="role-title">Full Stack Developer</h3>
                  <h4 className="company-name">
                    Lanatus Systems — Ahmedabad, Gujarat
                  </h4>
                  <p className="job-desc">
                    Collaborated on developing platform-level web APIs and UI
                    dashboards. Focused on building reusable components,
                    integrating GraphQL with databases via Prisma, and
                    optimizing server response performance for enterprise
                    operations.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">May 2021 - September 2023</div>
                <div className="timeline-content">
                  <h3 className="role-title">MERN Stack Developer</h3>
                  <h4 className="company-name">7Seasol — Surat, Gujarat</h4>
                  <p className="job-desc">
                    Built interactive customer dashboards, money management
                    panels, and engineering management systems. Collaborated in
                    close feedback loops with product managers to design
                    responsive UI elements using Angular, Apex Charts, and
                    Material UI, while integrating local and remote APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-container">
            <h2 className="section-title">Featured Projects</h2>

            <div className="filter-tabs">
              <button
                className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => handleFilterChange("all")}
              >
                All Projects
              </button>
              <button
                className={`filter-tab ${activeFilter === "react" || activeFilter === "next" ? "active" : ""}`}
                onClick={() => handleFilterChange("react")}
              >
                React &amp; Next.js
              </button>
              <button
                className={`filter-tab ${activeFilter === "angular" ? "active" : ""}`}
                onClick={() => handleFilterChange("angular")}
              >
                Angular
              </button>
              <button
                className={`filter-tab ${activeFilter === "node" ? "active" : ""}`}
                onClick={() => handleFilterChange("node")}
              >
                Node.js &amp; Nest.js
              </button>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-body">
                    <p className="project-desc">{project.description}</p>
                  </div>
                  <div className="project-footer">
                    <div className="project-tech-tags">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Personal Details Section */}
        <section className="education-details-section">
          <div className="section-container grid-two-cols">
            {/* Education */}
            <div className="education-block">
              <h2 className="section-title text-left-align">Education</h2>
              <div className="education-card">
                <div className="edu-icon">
                  <GraduationCapIcon />
                </div>
                <div className="edu-info">
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <h4>Saurashtra University</h4>
                  <p className="edu-location">Rajkot, Gujarat</p>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="personal-details-block">
              <h2 className="section-title text-left-align">
                Personal Details
              </h2>
              <div className="details-card">
                <ul className="details-list">
                  <li>
                    <span className="detail-label">Date of Birth</span>
                    <span className="detail-value">13th May 2000</span>
                  </li>
                  <li>
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">
                      Gujarati, Hindi, English
                    </span>
                  </li>
                  <li>
                    <span className="detail-label">Nationality</span>
                    <span className="detail-value">Indian</span>
                  </li>
                  <li>
                    <span className="detail-label">Marital Status</span>
                    <span className="detail-value">Married</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-subtitle">
              Have a project in mind or want to discuss opportunities? Send a
              message.
            </p>

            <div className="contact-grid">
              <div className="contact-direct-info">
                <h3>Contact Information</h3>
                <p>
                  Feel free to reach out via direct phone call or email. I
                  usually respond within a few hours.
                </p>

                <div className="direct-links-card">
                  <a
                    href="mailto:mitesh13500@gmail.com"
                    className="direct-link-item"
                  >
                    <div className="link-icon-box">
                      <MailIcon />
                    </div>
                    <div>
                      <h4>Email Me</h4>
                      <p>mitesh13500@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+919773090251" className="direct-link-item">
                    <div className="link-icon-box">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h4>Call Me</h4>
                      <p>+91 9773090251</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mitesh-patel-74a111199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-link-item"
                  >
                    <div className="link-icon-box">
                      <LinkedinIcon />
                    </div>
                    <div>
                      <h4>LinkedIn</h4>
                      <p>linkedin.com/in/mitesh-patel</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-form-container">
                {formSubmitted ? (
                  <div className="form-success-message">
                    <div className="success-checkmark-box">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="checkmark-svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you, Mitesh will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-field">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSending}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSending}
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSending}
                        rows="5"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div
                        className="form-error-message"
                        style={{
                          color: "#ef4444",
                          fontSize: "0.95rem",
                          marginTop: "5px",
                          textAlign: "center",
                          background: "rgba(239, 68, 68, 0.08)",
                          padding: "10px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                        }}
                      >
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <p>
            &copy; {new Date().getFullYear()} Mitesh Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
