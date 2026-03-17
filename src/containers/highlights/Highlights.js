import React from "react";
import "./Highlights.css";
import { Fade } from "react-reveal";

export default function Highlights(props) {
  const { theme } = props;

  const cards = [
    {
      label: "Security Operations",
      title: "SOC, Threat Intel & Incident Response",
      body:
        "Hands-on with SIEM, EDR and security tooling to detect, investigate and respond to threats in real environments.",
      accent: "#0E6BA8",
    },
    {
      label: "AI & Data Science",
      title: "ML, Knowledge Graphs & Synthetic CTI",
      body:
        "Building ML pipelines, GANs and STIX 2.1–compliant knowledge graphs to power next‑gen cyber analytics.",
      accent: "#8E24AA",
    },
    {
      label: "Leadership & Impact",
      title: "Teaching, Research & Community",
      body:
        "Teaching assistant, researcher and organizer of hackathons and clubs focused on security and AI.",
      accent: "#FB8C00",
    },
  ];

  return (
    <section className="highlights-section" id="highlights">
      <Fade bottom duration={1800} distance="24px">
        <div className="highlights-header">
          <p
            className="highlights-kicker"
            style={{ color: theme.secondaryText }}
          >
            Beyond the basics
          </p>
          <h2 className="highlights-title" style={{ color: theme.text }}>
            What makes my work different
          </h2>
        </div>
      </Fade>
      <div className="highlights-grid">
        {cards.map((card, index) => (
          <Fade
            bottom
            duration={1400}
            distance="24px"
            delay={index * 120}
            key={card.label}
          >
            <article className="highlight-card">
              <div
                className="highlight-pill"
                style={{
                  background: `${card.accent}15`,
                  color: card.accent,
                }}
              >
                {card.label}
              </div>
              <h3 className="highlight-heading" style={{ color: theme.text }}>
                {card.title}
              </h3>
              <p
                className="highlight-body"
                style={{
                  color: theme.secondaryText,
                }}
              >
                {card.body}
              </p>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
