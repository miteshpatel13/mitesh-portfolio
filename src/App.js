import { useEffect, useRef, useState } from "react";
import "./App.css";

const aboutParagraphs = [
  "I'm a Team Lead and Full Stack Developer based in Ahmedabad, India, with over 5 years architecting, building, and deploying enterprise web and mobile applications. Most of that work sits on the backend: designing the data model, wiring up the API layer, and making sure the system holds up once real users and real transactions hit it.",
  "I currently lead a small team at Biizline, taking projects from client requirements and feasibility through architecture, build, and deployment. Before that I worked across e-commerce, healthcare billing, and industrial-ops platforms — different domains, same pattern: clean data modeling, dependable APIs, and code the next person can actually maintain.",
];

function useTypewriter(paragraphs, { charDelay = 14, startDelay = 300 } = {}) {
  const containerRef = useRef(null);
  const [output, setOutput] = useState(() => paragraphs.map(() => ""));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || started) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setOutput(paragraphs);
      setStarted(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started, paragraphs]);

  useEffect(() => {
    if (!started) return undefined;

    let paragraphIndex = 0;
    let charIndex = 0;
    let timeoutId;

    const tick = () => {
      if (paragraphIndex >= paragraphs.length) return;
      charIndex += 1;
      const pIndex = paragraphIndex;
      const cIndex = charIndex;
      setOutput((prev) => {
        const next = [...prev];
        next[pIndex] = paragraphs[pIndex].slice(0, cIndex);
        return next;
      });
      if (charIndex >= paragraphs[paragraphIndex].length) {
        paragraphIndex += 1;
        charIndex = 0;
        if (paragraphIndex >= paragraphs.length) return;
      }
      timeoutId = setTimeout(tick, charDelay);
    };

    timeoutId = setTimeout(tick, startDelay);
    return () => clearTimeout(timeoutId);
  }, [started, paragraphs, charDelay, startDelay]);

  return { containerRef, output, started };
}

const skillGroups = [
  {
    label: "runtime & frameworks",
    items: ["Node.js", "Express.js", "NestJS", "Next.js", "React"],
  },
  {
    label: "data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "TypeORM"],
  },
  {
    label: "apis",
    items: ["REST", "GraphQL", "Apollo", "Shopify API", "WHO API"],
  },
  {
    label: "infra & tools",
    items: ["AWS", "Docker", "Nginx", "Git", "GitHub", "GitLab"],
  },
  {
    label: "ai tools",
    items: ["Claude / Claude Code", "GitHub Copilot", "Gemini", "Google Antigravity"],
  },
  {
    label: "also",
    items: ["TypeScript", "JavaScript", "Angular", "Material UI"],
  },
];

const experience = [
  {
    role: "Team Lead & Full Stack Developer",
    company: "Biizline",
    location: "Ahmedabad, India",
    dates: "Apr 2024 — Present",
    points: [
      "Architected and deployed a B2B platform connecting companies, vendors, and customers in one ecosystem.",
      "Built automated workflows for product tracking, order management, payment processing, and subscriptions.",
      "Added real-time notifications and operational analytics across the platform.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Lanatus Systems",
    location: "Ahmedabad, India",
    dates: "Nov 2023 — Jan 2024",
    points: [
      "Built reusable, modular components for enterprise web applications.",
      "Worked directly with stakeholders to turn requirements into technical design.",
    ],
  },
  {
    role: "Software Engineer",
    company: "7Seasol",
    location: "Surat, India",
    dates: "May 2021 — Sep 2023",
    points: [
      "Built client-facing web applications, focused on performance and maintainability.",
      "Ran feasibility studies and risk assessments ahead of production deployments.",
    ],
  },
];

const projects = [
  {
    name: "Biizline",
    tagline: "B2B order management platform",
    description:
      "A digital B2B platform connecting companies, vendors, and customers in one ecosystem — product catalog, order management, payments, and subscriptions with real-time notifications and operational analytics.",
    stack: ["React", "Node.js", "NestJS", "Express.js", "REST", "SQL"],
    role: "Led architecture and delivery as Team Lead.",
  },
  {
    name: "Group Shop",
    tagline: "European e-commerce platform",
    description:
      "An e-commerce platform for the European market with time-boxed \"Daily Drops\" / \"Weekly Drops\" product releases. Backend integrates with the Shopify API to source and serve catalog data.",
    stack: ["Next.js", "Node.js", "NestJS", "GraphQL", "MongoDB", "Shopify API"],
    role: "Built the GraphQL API layer and Shopify integration.",
  },
  {
    name: "TruBlu",
    tagline: "Dental membership & billing platform",
    description:
      "Membership and billing platform for dental practices — plan management, secure health records, and payment-gateway integration for subscription benefits, across two related products (Plan for Health, Direct Benefits).",
    stack: ["React", "Node.js", "Prisma ORM", "Apollo GraphQL", "PostgreSQL"],
    role: "Built reporting dashboards and the Prisma/PostgreSQL data layer.",
  },
];

const otherWork = [
  { name: "MedInsight Pro", note: "WHO-API-driven pandemic survey/analytics tool", stack: "Angular, AG Charts, REST" },
  { name: "Coyna", note: "financial dashboards for cash flow & liabilities", stack: "Angular, ApexCharts" },
  { name: "Focus FS", note: "offline-first site-ops tool for civil engineering", stack: "Angular, IndexedDB, MySQL" },
];

function SectionLabel({ index, name }) {
  return (
    <div className="section-label">
      <span className="section-label-index">{index}</span>
      <span className="section-label-name">{name}</span>
    </div>
  );
}

function App() {
  const { containerRef: aboutRef, output: aboutOutput } =
    useTypewriter(aboutParagraphs);
  const lastVisibleIndex = aboutOutput.reduce(
    (acc, text, i) => (text.length > 0 ? i : acc),
    -1
  );

  return (
    <div className="page">
      <header className="site-header">
        <a href="#top" className="brand">
          mitesh<span className="brand-dim">.</span>patel
        </a>
        <nav className="site-nav">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <p className="hero-kicker">$ whoami</p>
          <h1 className="hero-name">Mitesh Patel</h1>
          <p className="hero-role">Team Lead &amp; Full Stack Developer</p>
          <p className="hero-desc">
            Node.js on the backend, React/Angular on the front, 5+ years
            building and leading delivery on enterprise platforms — B2B
            marketplaces, GraphQL/REST APIs, and the SQL and NoSQL stores
            behind them.
          </p>
          <div className="hero-links">
            <a className="btn btn-primary" href="#projects">
              see the work
            </a>
            <a className="btn btn-ghost" href="/MiteshPatelCV.pdf" download="Mitesh_Patel_CV.pdf">
              download resume
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <SectionLabel index="01" name="about" />
          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-title">about.md</span>
            </div>
            <div className="terminal-body" ref={aboutRef}>
              <p className="terminal-prompt">
                $ cat about.md
                {lastVisibleIndex === -1 && <span className="terminal-cursor" />}
              </p>
              <div aria-hidden="true">
                {aboutOutput.map(
                  (text, i) =>
                    text.length > 0 && (
                      <p className="terminal-text" key={i}>
                        {text}
                        {i === lastVisibleIndex && (
                          <span className="terminal-cursor" />
                        )}
                      </p>
                    )
                )}
              </div>
              <div className="sr-only">
                {aboutParagraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionLabel index="02" name="experience" />
          <ol className="timeline">
            {experience.map((job) => (
              <li className="timeline-item" key={job.company}>
                <div className="timeline-heading">
                  <h3>
                    {job.role} <span className="timeline-at">@ {job.company}</span>
                  </h3>
                  <span className="timeline-dates">{job.dates}</span>
                </div>
                <p className="timeline-location">{job.location}</p>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section">
          <SectionLabel index="03" name="projects" />
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-heading">
                  <h3>{project.name}</h3>
                  <span className="project-tagline">{project.tagline}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <p className="project-role">{project.role}</p>
                <ul className="project-stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="other-work">
            <p className="other-work-label">also shipped</p>
            <ul className="other-work-list">
              {otherWork.map((item) => (
                <li key={item.name}>
                  <span className="other-work-name">{item.name}</span>
                  <span className="other-work-note"> — {item.note}</span>
                  <span className="other-work-stack">{item.stack}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionLabel index="04" name="skills" />
          <div className="skills">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h4>{group.label}</h4>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <SectionLabel index="05" name="contact" />
          <p className="about-text">
            Open to hearing about backend-heavy or full-stack roles and
            projects. Fastest way to reach me is email.
          </p>
          <ul className="contact-list">
            <li>
              <a href="mailto:mitesh13500@gmail.com">mitesh13500@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919773090251">+91 97730 90251</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mitesh-patel-74a111199"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mitesh-patel
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <span>Ahmedabad, Gujarat, India</span>
        <span>&copy; {new Date().getFullYear()} Mitesh Patel</span>
      </footer>
    </div>
  );
}

export default App;
