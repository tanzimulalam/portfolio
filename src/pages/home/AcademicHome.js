import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./AcademicHome.css";
import LiveUpdatesFeed from "../../components/liveUpdates/LiveUpdatesFeed";
import { academicProfile, greeting, publications } from "../../portfolio.js";

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

export default function AcademicHome() {
  const sortedProjects = useMemo(
    () =>
      [...publications.data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ),
    []
  );

  const featured = sortedProjects.slice(0, 4);

  return (
    <div className="academic-home">
      <section className="academic-hero">
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
              <Link
                className="academic-btn academic-btn-primary"
                to="/contact-me"
              >
                Contact me
              </Link>
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

      <section className="academic-section">
        <h2 className="academic-section-title">Research interests</h2>
        <div className="academic-pills">
          {academicProfile.researchInterests.map((label) => (
            <span key={label} className="academic-pill">
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="academic-section">
        <LiveUpdatesFeed />
      </section>

      <section className="academic-section">
        <div className="academic-section-head">
          <h2 className="academic-section-title">Featured projects</h2>
          <Link className="academic-view-all" to="/projects">
            View all →
          </Link>
        </div>
        <p className="academic-section-lead">
          Selected builds and research-style work — hackathons, platforms, and
          tooling at the intersection of security and ML.
        </p>
        <ul className="academic-project-list">
          {featured.map((project) => (
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
      </section>
    </div>
  );
}
