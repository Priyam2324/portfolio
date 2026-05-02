import React, { useEffect, useRef } from "react";
import "./App.css";
import profileImg from "./assets/Profile.jpeg";

/* ── Inline SVG Icons ─────────────────────────────────────── */
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const MailIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,12 2,6" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Tech Stack ───────────────────────────────────────────── */
const techStack = [
  {
    name: "React",
    bg: "#0d2137", border: "#1e4976",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#61dafb">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    bg: "#0a1f0a", border: "#1a4520",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#68a063">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.249 1.328-.603.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.24l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.087.05-.14.142-.14.241v10.15c0 .099.053.186.139.232l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.891c0-.143.116-.254.262-.254h1.116c.14 0 .258.111.258.254v10.15c0 1.744-.951 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.942-.922-1.595V6.921c0-.655.352-1.265.922-1.594l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.94.924 1.594v10.159c0 .655-.354 1.268-.924 1.594l-8.794 5.082c-.279.163-.6.247-.923.247z" />
      </svg>
    ),
  },
  {
    name: "Angular",
    bg: "#2a0a0a", border: "#6b1a1a",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#dd0031">
        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.243L23.32 3.982 11.999.0zm7.064 18.31h-2.717l-1.2-3.001H8.852l-1.2 3H4.935L12 2.294z" />
      </svg>
    ),
  },
  {
    name: "Python",
    bg: "#1a1500", border: "#4a3d00",
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30">
        <path fill="#4584b6" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v.95H6.545S2 8.8 2 16c0 7.2 4.013 6.95 4.013 6.95h2.393v-3.35s-.13-4.012 3.95-4.012h6.83s3.818.06 3.818-3.69V5.56S23.614 2.1 15.885 2.1z" />
        <path fill="#ffde57" d="M16.115 29.9c7.1 0 6.65-3.07 6.65-3.07v-3.19h-6.75v-.95h9.44S30 23.2 30 16c0-7.2-4.012-6.95-4.012-6.95h-2.393v3.35s.13 4.012-3.95 4.012h-6.83S9 16.35 9 20.1v6.34S8.386 29.9 16.115 29.9z" />
        <circle fill="#4584b6" cx="13" cy="6" r="1.5" />
        <circle fill="#ffde57" cx="19" cy="26" r="1.5" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bg: "#0a1628", border: "#1a3a6e",
    icon: (
      <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, color: "#3178c6", lineHeight: 1 }}>TS</span>
    ),
  },
  {
    name: "MongoDB",
    bg: "#0a1f0a", border: "#1a4a1a",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#4db33d">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "Flask",
    bg: "#181818", border: "#383838",
    icon: (
      <svg viewBox="0 0 128 128" width="30" height="30">
        <path fill="#e0e0e0" d="M46.2 93.2c-.6 1.6-1.8 2.4-3.3 2.4s-2.7-.8-3.3-2.4l-15-40.5c-.4-1.2.1-2.5 1.3-3 1.2-.4 2.5.1 3 1.3l14 37.8 14-37.8c.4-1.2 1.8-1.8 3-1.3 1.2.4 1.8 1.8 1.3 3l-15 40.5zm32.9-13.5c-1 2.4-2.8 4.3-5.2 5.5-2 1-4.2 1.5-6.5 1.5-6 0-10.2-3.3-10.2-8.4 0-2.5.9-4.5 2.7-5.9 1.8-1.4 4.3-2.1 7.4-2.1h7.8v-1.5c0-3.6-1.9-5.5-5.7-5.5-2.1 0-4.1.6-6 1.7-.9.5-2 .2-2.6-.7-.5-.9-.2-2 .7-2.6 2.4-1.5 5.1-2.3 7.9-2.3 5.9 0 9.4 3.3 9.4 8.9v9.7c0 .7.1 1.4.3 2.1.3 1.1-.3 2.3-1.4 2.6-1.1.3-2.3-.3-2.6-1.4-.1-.5-.2-1-.2-1.6h-.1c-.9 1.1-2 1.9-3.3 2.5l-.4.2zm-6.8-6.3c-4.5 0-6.8 1.4-6.8 4.2 0 2.8 2.1 4.5 5.4 4.5 2.1 0 3.9-.7 5.3-2.1 1.3-1.3 1.9-3 1.9-5v-1.6h-5.8zm15.8-19.1c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v1.5c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2v-1.5zm0 9.3c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v18.5c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V63.6z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    bg: "#1a1500", border: "#4a3d00",
    icon: (
      <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, color: "#f7df1e", lineHeight: 1 }}>JS</span>
    ),
  },
];

/* ── Projects ─────────────────────────────────────────────── */
const projects = [
  {
    title: "Anime Insight: Hybrid AI Summary Engine",
    description: (
      <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <li>Designed hybrid NLP system combining spaCy and Gemini LLM for high-quality summary generation.</li>
        <li>Developed a multi-stage pipeline to reduce irrelevant context before LLM processing.</li>
        <li>Engineered semantic extraction layer reducing input size and improving latency and consistency.</li>
        <li>Built modular workflow for retrieval, filtering, and controlled generation.</li>
        <li>Deployed using Flask backend and Hugging Face Spaces.</li>
      </ul>
    ),
    tags: ["Flask", "spaCy", "Gemini LLM", "NLP", "Hugging Face"],
    link: null,
    github: "https://github.com/Priyam2324/Anime_Insight",
    highlight: true,
  },
  {
    title: "MTSP Solver: Disaster Relief Logistics Optimizer",
    description: (
      <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <li>Solved NP-hard MTSP for disaster logistics using a novel Modified DSGO algorithm.</li>
        <li>Designed circular encoding and custom crossover ensuring feasible route generation.</li>
        <li>Achieved faster convergence and better route quality than GA, DPSO, ABC, TLBO.</li>
        <li>Built full-stack system with React (Leaflet) frontend and FastAPI backend.</li>
        <li>Visualized routes and convergence metrics in real time.</li>
      </ul>
    ),
    tags: ["Python", "Metaheuristics", "Optimization", "React", "FastAPI"],
    link: null,
    github: "https://github.com/Priyam2324/mtsp-solver-frontend",
    highlight: false,
  },
  {
    title: "Personal Portfolio Website",
    description: (
      <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <li>Built responsive portfolio using React with reusable components.</li>
        <li>Implemented routing, animations, and dynamic UI rendering.</li>
        <li>Deployed via GitHub Pages and Netlify.</li>
      </ul>
    ),
    tags: ["React", "JavaScript", "CSS", "GitHub Pages"],
    link: null,
    github: "https://github.com/Priyam2324/Priyam2324",
    highlight: false,
  },
  {
    title: "IEEE IES Bhubaneswar Chapter Website",
    description: (
      <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <li>Developed responsive website using HTML, CSS, and JavaScript.</li>
        <li>Implemented grid layouts and sticky navigation.</li>
      </ul>
    ),
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: null,
    github: "https://github.com/Priyam2324/IES-Bhubaneshwar",
    highlight: false,
  },
];

const traits = [
  { icon: "🎯", label: "Problem Solver" },
  { icon: "⚡", label: "Fast Learner" },
  { icon: "</>", label: "Clean Code Advocate" },
  { icon: "🤝", label: "Team Player" },
];

/* ── App ──────────────────────────────────────────────────── */
export default function App() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (dotRef.current) {
      dotRef.current.innerHTML = "";
      for (let i = 0; i < 60; i++) {
        const s = document.createElement("span");
        dotRef.current.appendChild(s);
      }
    }
  }, []);

  return (
    <div className="app">



      {/* ── HERO ── */}
      <section className="hero">
        <div className="dot-grid" ref={dotRef}></div>

        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-left">
            <div className="badge">👋 Welcome to my portfolio</div>
            <h1>
              Building solutions<br />
              with <span className="accent">code &amp; creativity.</span>
            </h1>
            <p className="hero-desc">
              I'm a Machine Learning Engineer and Full Stack Developer who loves
              to build intelligent, scalable and impactful applications.
            </p>
            <div className="traits">
              {traits.map((t) => (
                <div className="trait" key={t.label}>
                  <div className="trait-icon">{t.icon}</div>
                  {t.label}
                </div>
              ))}
            </div>
            <div className="socials">
              <a className="social-btn" href="https://github.com/Priyam2324" target="_blank" rel="noreferrer" title="GitHub">
                <GithubIcon />
              </a>
              <a className="social-btn" href="https://www.linkedin.com/in/priyam-pandey-02aa69298" target="_blank" rel="noreferrer" title="LinkedIn">
                <LinkedinIcon />
              </a>
              <a className="social-btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=ppandey23072004@gmail.com" target="_blank" rel="noreferrer" title="Email me">
                <MailIcon />
              </a>
            </div>

          </div>

          {/* CENTER — profile only, no buttons */}
          <div className="hero-center">
            <div className="img-orbit">
              <div className="orbit-ring">
                <div className="orbit-dot"></div>
                <div className="orbit-dot-2"></div>
              </div>
              <div className="orbit-ring-2"></div>
              <div className="profile-wrap">
                <div className="profile-inner">

                  <img
                    src={profileImg}
                    alt="Priyam Pandey"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <span className="profile-initials" style={{ display: "none" }}>PP</span>
                </div>
              </div>
            </div>
            <div className="name-block">
              <h2>Hi, I'm <span className="name-accent">Priyam Pandey</span></h2>
              <p>Machine Learning Engineer • NLP • Full Stack Developer</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="tech-section">
              <p className="tech-heading">Tech Stack</p>
              <div className="float-icons">
                {techStack.map((t) => (
                  <div
                    className="icon-bubble"
                    key={t.name}
                    style={{ background: t.bg, borderColor: t.border }}
                  >
                    <div className="icon-bubble__icon">{t.icon}</div>
                    <span className="icon-label">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="code-panel">
              <div className="panel-header">
                <div className="dot-r"></div>
                <div className="dot-y"></div>
                <div className="dot-g"></div>
              </div>
              <div className="code-body">
                <span className="kw">const</span>{" "}
                <span className="prop">developer</span> = {"{"}<br />
                &nbsp;&nbsp;<span className="prop">passion</span>: <span className="str">"Building impactful solutions"</span>,<br />
                &nbsp;&nbsp;<span className="prop">skills</span>: [<span className="str">"ML"</span>, <span className="str">"NLP"</span>, <span className="str">"Full Stack"</span>],<br />
                &nbsp;&nbsp;<span className="prop">learning</span>: <span className="val">true</span>,<br />
                &nbsp;&nbsp;<span className="prop">goal</span>: <span className="str">"Make a difference"</span><br />
                {"}"};
                <br /><br />
                <span className="cmt">{/*Let's build the future together 🚀*/}</span>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card"><div className="stat-val">4+</div><div className="stat-lbl">Projects</div></div>
              <div className="stat-card"><div className="stat-val">2+</div><div className="stat-lbl">Years</div></div>
              <div className="stat-card"><div className="stat-val">Active</div><div className="stat-lbl">GitHub</div></div>
            </div>
          </div>
        </div>

        <div className="wave-bg"></div>
        <div className="scroll-hint">
          <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
          <span>↓</span>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="projects-section" id="projects">
        <div className="section-header">
          <span className="section-tag">{/*my work*/}</span>
          <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
          <p className="section-sub">Things I've built — from intelligent ML apps to full-stack web experiences.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card${p.highlight ? " project-card--highlight" : ""}`} key={i}>
              <div className="project-card__top">
                <span className="project-number">0{i + 1}</span>
                {p.highlight && <span className="project-badge">Featured</span>}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-desc">{p.description}</div>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link project-link--primary">
                    <ExternalLinkIcon /> Live Demo
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link project-link--ghost">
                    <GithubIcon size={13} /> Source
                  </a>
                )}
                {!p.link && !p.github && (
                  <span className="project-link project-link--ghost project-link--disabled">Coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <span className="section-tag">{/*get in touch*/}</span>
          <h2 className="section-title">Let's <span className="accent">Connect</span></h2>
          <p className="contact-sub">
            Open to opportunities, collaborations, and interesting conversations. Feel free to reach out!
          </p>
          <a className="btn-primary btn-large" href="https://mail.google.com/mail/?view=cm&fs=1&to=ppandey23072004@gmail.com" target="_blank" rel="noreferrer">
            <MailIcon size={16} /> Send a Message
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Built by <span className="accent-text">Priyam Pandey</span> · 2026</span>
      </footer>
    </div>
  );
}
