import React from "react";
import Layout from "../components/Layout";
import { PageHead, Reveal } from "../components/Bits";
import {
  academicProfile,
  contactForm,
  contactPageData,
  socialMediaLinks,
} from "../../portfolio.js";

const email = (contactForm.bookChatMailto || "")
  .replace(/^mailto:/, "")
  .split("?")[0];

export default function Contact() {
  const { contactSection, addressSection } = contactPageData;

  return (
    <Layout
      title="Contact"
      description="Get in touch about research collaborations, agentic AI, autonomous systems, threat intelligence, review invitations, or internships."
    >
      <PageHead
        eyebrow="Say hello"
        title="Contact"
        lead={contactSection.description}
      />

      <section className="sg-section">
        <div className="sg-wrap">
          <div className="sg-contact-grid">
            <Reveal>
              <h2 className="sg-h3">Good reasons to write</h2>
              <ul
                className="sg-timeline"
                style={{ marginTop: "1.5rem", listStyle: "none", padding: 0 }}
              >
                {[
                  {
                    k: "Research",
                    v:
                      "Overlapping work on agentic AI, autonomous systems, adversarial ML, or structured threat intelligence.",
                  },
                  {
                    k: "Review & program",
                    v:
                      "Reviewing invitations and program committee work. I currently serve on the IEEE CICN 2026 Technical Review Committee.",
                  },
                  {
                    k: "Industry",
                    v:
                      "Research internships, red-teaming engagements for agentic systems, and applied security work.",
                  },
                  {
                    k: "Disclosure",
                    v:
                      "If you maintain something I've reported against, or want a second pair of eyes on a report.",
                  },
                ].map((row) => (
                  <li className="sg-tl-item" key={row.k}>
                    <span className="sg-tl-when">{row.k}</span>
                    <p className="sg-tl-desc" style={{ marginTop: 0 }}>
                      {row.v}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90}>
              <div className="sg-detail">
                <p className="sg-detail-k">Email</p>
                <p className="sg-detail-v">
                  {email ? (
                    <a href={contactForm.bookChatMailto}>{email}</a>
                  ) : (
                    "·"
                  )}
                </p>
              </div>

              <div className="sg-detail">
                <p className="sg-detail-k">{addressSection.title}</p>
                <p className="sg-detail-v">{addressSection.subtitle}</p>
              </div>

              <div className="sg-detail">
                <p className="sg-detail-k">Affiliation</p>
                <p className="sg-detail-v">
                  <a
                    href={academicProfile.labUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {academicProfile.lab}
                  </a>
                  , {academicProfile.institution}
                </p>
              </div>

              {socialMediaLinks.map((s) => (
                <div className="sg-detail" key={s.name}>
                  <p className="sg-detail-k">{s.name}</p>
                  <p className="sg-detail-v">
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      {s.link.replace(/^https?:\/\/(www\.)?/, "")} ↗
                    </a>
                  </p>
                </div>
              ))}

              <div className="sg-detail">
                <p className="sg-detail-k">Curriculum vitae</p>
                <p className="sg-detail-v">
                  <a
                    href={academicProfile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open CV ↗
                  </a>
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <a
                  className="sg-btn sg-btn--primary"
                  href={contactForm.bookChatMailto}
                >
                  Write to me
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
