import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { PageHead, Reveal, SectionHead } from "../components/Bits";
import {
  academicProfile,
  achievements,
  certifications,
  degrees,
  experience,
} from "../../portfolio.js";

/** An entry is "current" if its duration has no end year. */
function isCurrent(duration) {
  return /present/i.test(duration || "");
}

export default function About() {
  const bioParagraphs = academicProfile.bio.split("\n\n").filter(Boolean);

  return (
    <Layout
      title="About"
      description="Background, education, appointments, and honours. From robotics and security operations to Ph.D. research on agentic AI in the ASQI Lab at MTSU."
    >
      <PageHead
        eyebrow="Background"
        title="About"
        lead="Robotics, then security operations, now research on systems that decide for themselves."
      />

      {/* ------------------------------------------------ bio */}
      <section className="sg-section" aria-labelledby="story">
        <div className="sg-wrap">
          <SectionHead index="01" id="story" title="Story" />

          <div className="sg-bio-grid">
            <Reveal className="sg-portrait">
              <img
                src={academicProfile.headshotUrl}
                alt="Tanzimul Alam Fahim"
                width={260}
                height={325}
                loading="lazy"
                decoding="async"
              />
              <div className="sg-portrait-meta">
                <div>
                  <b>Role</b> · {academicProfile.role}
                </div>
                <div>
                  <b>Lab</b> · {academicProfile.lab}
                </div>
                <div>
                  <b>Advisor</b> · {academicProfile.advisor}
                </div>
                <div>
                  <b>Based</b> · {academicProfile.location}
                </div>
              </div>
            </Reveal>

            <Reveal className="sg-prose" delay={90}>
              <p className="sg-prose-open">{academicProfile.intro}</p>
              {bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                <a
                  className="sg-arrow"
                  href={academicProfile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Full curriculum vitae</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ education */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="education"
        id="education"
      >
        <div className="sg-wrap">
          <SectionHead index="02" id="education-h" title="Education" />

          <ul className="sg-timeline">
            {degrees.degrees.map((d) => (
              <Reveal
                as="li"
                className={`sg-tl-item${
                  isCurrent(d.duration) ? " sg-tl-item--now" : ""
                }`}
                key={d.title}
              >
                <span className="sg-tl-when">
                  {isCurrent(d.duration) ? <b>{d.duration}</b> : d.duration}
                </span>
                <div>
                  <h3 className="sg-tl-title">{d.subtitle}</h3>
                  <p className="sg-tl-org">
                    <a
                      href={d.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d.title}
                    </a>
                  </p>
                  <ul className="sg-timeline" style={{ marginTop: "0.7rem" }}>
                    {d.descriptions.map((line) => (
                      <li
                        className="sg-tl-desc"
                        key={line}
                        style={{ marginTop: "0.35rem", listStyle: "none" }}
                      >
                        {line.replace(/^⚡\s*/, "· ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ experience */}
      <section
        className="sg-section"
        aria-labelledby="experience"
        id="experience"
      >
        <div className="sg-wrap">
          <SectionHead
            index="03"
            id="experience-h"
            title="Appointments & experience"
            lead={experience.description}
          />

          {experience.sections.map((section) => (
            <div key={section.title}>
              <h3 className="sg-group-h">{section.title}</h3>
              <ul className="sg-timeline">
                {section.experiences.map((exp, i) => (
                  <Reveal
                    as="li"
                    className={`sg-tl-item${
                      isCurrent(exp.duration) ? " sg-tl-item--now" : ""
                    }`}
                    key={`${section.title}-${i}`}
                  >
                    <span className="sg-tl-when">
                      {isCurrent(exp.duration) ? (
                        <b>{exp.duration}</b>
                      ) : (
                        exp.duration || "·"
                      )}
                      {exp.location ? <span>{exp.location}</span> : null}
                    </span>
                    <div>
                      <h4 className="sg-tl-title">{exp.title}</h4>
                      <p className="sg-tl-org">
                        {exp.company_url ? (
                          <a
                            href={exp.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </p>
                      <p className="sg-tl-desc">{exp.description}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ certifications */}
      <section
        className="sg-section sg-section--sunk sg-section--tight"
        aria-labelledby="certs"
        id="certifications"
      >
        <div className="sg-wrap">
          <SectionHead index="04" id="certs-h" title="Certifications" />
          <Reveal as="ul" className="sg-interests">
            {certifications.certifications.map((c) => (
              <li className="sg-interest" key={c.title}>
                {c.title} <span style={{ opacity: 0.55 }}>{c.subtitle}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ achievements */}
      <section
        className="sg-section"
        aria-labelledby="achievements"
        id="achievements"
      >
        <div className="sg-wrap">
          <SectionHead
            index="05"
            id="achievements-h"
            title="Honours & activities"
            lead={achievements.description}
          />

          {achievements.sections.map((section) => (
            <div key={section.title}>
              <h3 className="sg-group-h">{section.title}</h3>
              <ul className="sg-timeline">
                {section.achievements.map((a, i) => (
                  <Reveal
                    as="li"
                    className="sg-tl-item"
                    key={`${a.title}-${i}`}
                  >
                    <span className="sg-tl-when">
                      {a.duration || "·"}
                      {a.location ? <span>{a.location}</span> : null}
                    </span>
                    <div>
                      <h4 className="sg-tl-title">{a.title}</h4>
                      <p className="sg-tl-org">
                        {a.organization_url ? (
                          <a
                            href={a.organization_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {a.organization}
                          </a>
                        ) : (
                          a.organization
                        )}
                      </p>
                      <p className="sg-tl-desc">{a.description}</p>
                      {a.links && a.links.length ? (
                        <ul
                          className="sg-chips"
                          style={{ marginTop: "0.85rem" }}
                        >
                          {a.links.map((l) => (
                            <li key={l.url}>
                              <a
                                className="sg-chip sg-chip--on"
                                href={l.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                {l.label} ↗
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="sg-section sg-cta" aria-labelledby="about-cta">
        <div className="sg-wrap sg-wrap--narrow">
          <Reveal>
            <h2 className="sg-h2" id="about-cta">
              That's the background
            </h2>
            <p className="sg-lead">
              The research is where it's all pointing now.
            </p>
            <div className="sg-cta-actions">
              <Link className="sg-btn sg-btn--primary" to="/research">
                Research agenda
              </Link>
              <a
                className="sg-btn sg-btn--ghost"
                href={academicProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
