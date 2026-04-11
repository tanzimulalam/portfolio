import React, { useMemo } from "react";
import "./AcademicHome.css";
import "./OnePager.css";
import "../projects/Projects.css";
import LiveUpdatesFeed from "../../components/liveUpdates/LiveUpdatesFeed";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {
  academicProfile,
  achievements,
  experience,
  greeting,
  publications,
  projectsHeader,
  socialMediaLinks,
} from "../../portfolio.js";

const DEVPOST_PROFILE_URL = "https://devpost.com/fahim5898";

function formatLongDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

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

const bravesRide = {
  id: "bravesride",
  name: "BravesRide",
  createdAt: "2025-01-01T00:00:00Z",
  description:
    "Student‑centric ride‑sharing PWA for the UNCP community. BravesRide matches BraveMail‑verified student drivers with riders to close the transportation gap around Pembroke with secure, campus‑only mobility.",
  url: "https://www.youtube.com/watch?v=2c-1qmQqZgY",
  source: "Watch Demo",
};

const engineeringTimeline = [
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

export default function OnePager({ theme }) {
  const sortedProjects = useMemo(
    () =>
      [...publications.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ),
    []
  );

  const devpostFeatured = sortedProjects.filter((p) =>
    (p.url || "").includes("devpost.com/software/")
  );

  const handleEmail = () => {
    window.location.href = "mailto:fahim.communicate@gmail.com";
  };

  return (
    <div className="academic-home onepager">
      <section id="top" className="academic-hero onepager-section">
        <div className="academic-hero-grid">
          <div className="academic-hero-photo-wrap">
            <img
              src={academicProfile.headshotUrl}
              alt={greeting.title}
              className="academic-hero-photo"
              width={320}
              height={400}
            />
          </div>
          <div className="academic-hero-copy">
            <h1 className="academic-hero-name">{greeting.title}</h1>
            <p className="academic-hero-role">{academicProfile.role}</p>
            <p className="academic-hero-inst">{academicProfile.institution}</p>
            <p className="academic-hero-degree">{academicProfile.degreeLine}</p>
            <p className="academic-hero-bio">{academicProfile.bio}</p>
            <div className="academic-hero-actions">
              <a className="academic-btn academic-btn-primary" href="#contact">
                Contact me
              </a>
              <a
                className="academic-btn academic-btn-secondary"
                href={academicProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="interests" className="academic-section onepager-section">
        <h2 className="academic-section-title">Research interests</h2>
        <div className="academic-pills">
          {academicProfile.researchInterests.map((label) => (
            <span key={label} className="academic-pill">
              {label}
            </span>
          ))}
        </div>
      </section>

      <section id="updates" className="academic-section onepager-section">
        <LiveUpdatesFeed />
      </section>

      <section id="experience" className="academic-section onepager-section">
        <h2 className="academic-section-title">{experience.title}</h2>
        <p className="academic-section-lead">{experience.description}</p>
        {experience.sections.map((section) => {
          const isWorkSection = section.title === "Work" || section.work;
          return (
            <div key={section.title} className="onepager-exp-block">
              <h3
                className={`onepager-subsection-title ${
                  isWorkSection ? "onepager-subsection-work" : ""
                }`}
              >
                {section.title}
              </h3>
              <div className="onepager-exp-cards">
                {section.experiences.map((exp, index) => (
                  <ExperienceCard
                    key={`${section.title}-${index}`}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={exp}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section id="projects" className="academic-section onepager-section">
        <div className="projects-wrap onepager-projects-inner">
          <div className="projects-section-head">
            <h2
              className="projects-section-title"
              style={{ color: theme.text }}
            >
              {projectsHeader.title}
            </h2>
            <p
              className="projects-section-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader.description}
            </p>
            <div className="projects-hero-actions onepager-devpost-actions">
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
                href="#contact"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </div>
          </div>

          <h3 className="onepager-subheading">Featured builds</h3>
          <div className="projects-devpost-grid">
            {devpostFeatured.map((p) => (
              <DevpostCard key={p.id} project={p} />
            ))}
            <DevpostCard project={bravesRide} key={bravesRide.id} />
          </div>

          <h3 className="onepager-subheading">Research &amp; engineering</h3>
          <div className="projects-timeline">
            {engineeringTimeline.map((t) => (
              <TimelineItem
                key={t.title}
                title={t.title}
                period={t.period}
                bullets={t.bullets}
              />
            ))}
          </div>

          <h3 className="onepager-subheading">All project entries</h3>
          <ul className="academic-project-list">
            {sortedProjects.map((project) => (
              <li key={project.id} className="academic-project-card">
                <div className="academic-project-meta">
                  <span className="academic-project-date">
                    {formatLongDate(project.createdAt)}
                  </span>
                </div>
                <h3 className="academic-project-title">{project.name}</h3>
                <p className="academic-project-desc">{project.description}</p>
                <a
                  className="academic-project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="achievements" className="academic-section onepager-section">
        <h2 className="academic-section-title">{achievements.title}</h2>
        <p className="academic-section-lead">{achievements.description}</p>
        {achievements.sections.map((section) => (
          <div key={section.title} className="onepager-exp-block">
            <h3 className="onepager-subsection-title">{section.title}</h3>
            <div className="onepager-achievement-cards">
              {section.achievements.map((ach, index) => (
                <AchievementCard
                  key={`${section.title}-${index}`}
                  index={index}
                  totalCards={section.achievements.length}
                  achievement={ach}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="contact" className="academic-section onepager-section">
        <h2 className="academic-section-title">Contact</h2>
        <p className="academic-section-lead">
          Open to collaborations, roles in cybersecurity and research, and
          interesting technical conversations.
        </p>
        <div className="onepager-contact">
          <button
            type="button"
            className="academic-btn academic-btn-primary"
            onClick={handleEmail}
          >
            Email me
          </button>
          <p className="onepager-contact-email">fahim.communicate@gmail.com</p>
          <ul className="onepager-contact-social">
            {socialMediaLinks.map((s) => (
              <li key={s.name}>
                <a href={s.link} target="_blank" rel="noopener noreferrer">
                  <span
                    className={`fa-brands ${s.fontAwesomeIcon}`}
                    aria-hidden="true"
                  />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
