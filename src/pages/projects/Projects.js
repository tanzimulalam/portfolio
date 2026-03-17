import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { publications, projectsHeader } from "../../portfolio.js";
import "./Projects.css";

const DEVPOST_PROFILE_URL = "https://devpost.com/fahim5898";

function DevpostCard({ project }) {
  const year = new Date(project.createdAt).getFullYear();
  const sourceLabel = project.source || "Devpost";

  return (
    <a
      className="projects-devpost-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="projects-devpost-card-top">
        <div className="projects-devpost-meta">
          <div className="projects-devpost-pill">{sourceLabel}</div>
          <div className="projects-devpost-date">{year}</div>
        </div>
        <div className="projects-devpost-title">{project.name}</div>
        <div className="projects-devpost-desc">{project.description}</div>
      </div>
      <div className="projects-devpost-card-bottom">
        <span className="projects-devpost-cta">Read story →</span>
      </div>
    </a>
  );
}

function TimelineItem({ title, period, bullets }) {
  return (
    <div className="projects-timeline-item">
      <div className="projects-timeline-dot" aria-hidden="true" />
      <div className="projects-timeline-content">
        <div className="projects-timeline-header">
          <div className="projects-timeline-title">{title}</div>
          <div className="projects-timeline-period">{period}</div>
        </div>
        <ul className="projects-timeline-bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects(props) {
  const theme = props.theme;

  const devpostFeatured = publications.data.filter((p) =>
    (p.url || "").includes("devpost.com/software/")
  );

  const bravesRide = {
    id: "bravesride",
    name: "BravesRide",
    createdAt: "2025-01-01T00:00:00Z",
    description:
      "Student‑centric ride‑sharing PWA for the UNCP community. BravesRide matches BraveMail‑verified student drivers with riders to close the transportation gap around Pembroke with secure, campus‑only mobility.",
    url: "https://www.youtube.com/watch?v=2c-1qmQqZgY",
    source: "Watch Demo",
  };

  const timeline = [
    {
      title: "SAKURA — Knowledge Graph Generation & Analysis",
      period: "Aug 2023 – 2026",
      bullets: [
        "Generated synthetic STIX 2.1-compliant CTI knowledge graphs for analysts.",
        "Used LangChain + GPT-4o Turbo to create realistic threat relationships.",
        "Built an SPA for graph generation and visualization (Angular + Tailwind).",
      ],
    },
    {
      title: "Link Prediction in Knowledge Graphs (KG)",
      period: "Sep 2023 – 2026",
      bullets: [
        "Evaluating link prediction models on the SAKURA dataset.",
        "Benchmarking accuracy and computational efficiency across approaches.",
        "Comparing existing models vs. SAKURA’s methodology.",
      ],
    },
    {
      title: "Autonomous Rescue Drone (UAV)",
      period: "2022",
      bullets: [
        "Designed for fire-rescue missions and emergency supply delivery.",
        "Focused on autonomy, mission planning, and field constraints.",
      ],
    },
    {
      title: "Autonomous Rescue Robot (UGV)",
      period: "2022",
      bullets: [
        "Developed for difficult terrain navigation and search & rescue scenarios.",
        "Useful for automated logistics and as a research platform for autonomy.",
      ],
    },
    {
      title: "Mongol Tori Rover (UGV)",
      period: "2022",
      bullets: [
        "Built for extreme terrain traversal and autonomous navigation.",
        "Included scientific soil analysis + equipment servicing missions.",
      ],
    },
  ];

  return (
    <div className="projects-page">
      <Header theme={theme} />

      <div className="projects-wrap">
        <Fade bottom duration={1200} distance="24px">
          <section className="projects-hero">
            <div className="projects-hero-left">
              <div
                className="projects-kicker"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.title}
              </div>
              <h1 className="projects-title" style={{ color: theme.text }}>
                Build. Research. Ship.
              </h1>
              <p
                className="projects-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>

              <div className="projects-hero-actions">
                <a
                  className="main-button"
                  href={DEVPOST_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  View Devpost
                </a>
                <a
                  className="ghost-main-button"
                  href="/contact-me"
                  style={{ textDecoration: "none" }}
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="projects-hero-right" aria-hidden="true">
              <div className="projects-hero-glow projects-hero-glow-1" />
              <div className="projects-hero-glow projects-hero-glow-2" />
              <div className="projects-hero-card">
                <div className="projects-hero-card-title">Highlights</div>
                <div className="projects-hero-card-grid">
                  <div className="projects-hero-stat">
                    <div className="projects-hero-stat-num">AI</div>
                    <div className="projects-hero-stat-label">
                      Computer Vision
                    </div>
                  </div>
                  <div className="projects-hero-stat">
                    <div className="projects-hero-stat-num">CTI</div>
                    <div className="projects-hero-stat-label">
                      STIX Knowledge Graphs
                    </div>
                  </div>
                  <div className="projects-hero-stat">
                    <div className="projects-hero-stat-num">3D</div>
                    <div className="projects-hero-stat-label">
                      Three.js Visuals
                    </div>
                  </div>
                  <div className="projects-hero-stat">
                    <div className="projects-hero-stat-num">Full‑Stack</div>
                    <div className="projects-hero-stat-label">Apps & Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>

        <Fade bottom duration={1200} distance="24px">
          <section className="projects-section">
            <div className="projects-section-head">
              <h2
                className="projects-section-title"
                style={{ color: theme.text }}
              >
                Featured Devpost Projects
              </h2>
              <p
                className="projects-section-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Hackathon builds with polished writeups, screenshots, and story.
              </p>
            </div>

            <div className="projects-devpost-grid">
              {devpostFeatured.map((p) => (
                <DevpostCard key={p.id} project={p} />
              ))}
              <DevpostCard project={bravesRide} key={bravesRide.id} />
            </div>
          </section>
        </Fade>

        <Fade bottom duration={1200} distance="24px">
          <section className="projects-section">
            <div className="projects-section-head">
              <h2
                className="projects-section-title"
                style={{ color: theme.text }}
              >
                Research & Engineering
              </h2>
              <p
                className="projects-section-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Longer-term work across cybersecurity, ML/AI, robotics, and
                systems.
              </p>
            </div>

            <div className="projects-timeline">
              {timeline.map((t) => (
                <TimelineItem
                  key={t.title}
                  title={t.title}
                  period={t.period}
                  bullets={t.bullets}
                />
              ))}
            </div>
          </section>
        </Fade>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}
