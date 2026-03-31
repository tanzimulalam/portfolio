import React, { useState } from "react";
import "./Highlights.css";
import { Fade } from "react-reveal";

export default function Highlights(props) {
  const { theme } = props;
  const [isFeedExpanded, setIsFeedExpanded] = useState(false);

  const cards = [
    {
      label: "Security Operations",
      title: "SOC, Threat Intel & Incident Response",
      body:
        "Hands-on with SIEM, EDR and security tooling to detect, investigate and respond to threats in real environments.",
      accent: "#0E6BA8",
    },
    {
      label: "Latest Updates",
      title: "Live Feed",
      body: "Recent milestones and activities from my cybersecurity journey.",
      accent: "#00A896",
      updates: [
        {
          date: "Mar 2026",
          text:
            "Reported a Joomla Core security issue that was publicly disclosed and fixed as CVE-2026-21631 (XSS vector in com_associations comparison view).",
        },
        {
          date: "Mar 2026",
          text:
            "Became Technical Review Committee (TRC) at the 2026 IEEE 18th International Conference on Computational Intelligence and Communication Networks (CICN).",
        },
        {
          date: "Feb 2026",
          text: "Participated in HackUNCP 2026.",
        },
        {
          date: "Feb 2026",
          text: "Started working for Vanguard as a Cybersecurity Analyst.",
        },
        {
          date: "Dec 2025",
          text: "Graduated from UNC Pembroke with a BS in Cybersecurity.",
        },
        {
          date: "Nov 2025",
          text: "Participated in HackPrinceton 2025.",
        },
        {
          date: "Sep 2025",
          text: "Elected Vice President of Artificial Intelligence @ UNCP.",
        },
      ],
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
  const liveFeedCard = cards.find((card) => card.label === "Latest Updates");
  const regularCards = cards.filter((card) => card.label !== "Latest Updates");
  const updatesToShow =
    liveFeedCard && liveFeedCard.updates
      ? isFeedExpanded
        ? liveFeedCard.updates
        : liveFeedCard.updates.slice(0, 3)
      : [];

  return (
    <section className="highlights-section" id="highlights">
      {liveFeedCard ? (
        <Fade bottom duration={1600} distance="20px">
          <article className="highlight-card highlight-card-live highlight-feed-featured">
            <div
              className="highlight-pill"
              style={{
                background: `${liveFeedCard.accent}15`,
                color: liveFeedCard.accent,
              }}
            >
              {liveFeedCard.label}
              <span className="highlight-live-dot" />
            </div>
            <h3 className="highlight-heading" style={{ color: theme.text }}>
              {liveFeedCard.title}
            </h3>
            <p className="highlight-feed-subtitle">
              Fresh milestones, roles, and events
            </p>
            <p
              className="highlight-body"
              style={{ color: theme.secondaryText }}
            >
              {liveFeedCard.body}
            </p>
            <ul
              className={`highlight-feed ${
                isFeedExpanded
                  ? "highlight-feed-expanded"
                  : "highlight-feed-collapsed"
              }`}
            >
              {updatesToShow.map((update, updateIndex) => (
                <li
                  className="highlight-feed-item"
                  key={`${update.date}-${updateIndex}`}
                >
                  <span className="highlight-feed-date">{update.date}</span>
                  <p
                    className="highlight-feed-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {update.text}
                  </p>
                </li>
              ))}
            </ul>
            {liveFeedCard.updates.length > 3 ? (
              <button
                type="button"
                className="highlight-feed-toggle"
                onClick={() => setIsFeedExpanded((prev) => !prev)}
              >
                {isFeedExpanded ? "Show less" : "Expand updates"}
              </button>
            ) : null}
          </article>
        </Fade>
      ) : null}

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
        {regularCards.map((card, index) => (
          <Fade
            bottom
            duration={1400}
            distance="24px"
            delay={index * 120}
            key={card.label}
          >
            <article
              className={`highlight-card ${
                card.updates ? "highlight-card-live" : ""
              }`}
            >
              <div
                className="highlight-pill"
                style={{
                  background: `${card.accent}15`,
                  color: card.accent,
                }}
              >
                {card.label}
                {card.updates ? <span className="highlight-live-dot" /> : null}
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
              {card.updates ? (
                <ul className="highlight-feed">
                  {card.updates.map((update, updateIndex) => (
                    <li
                      className="highlight-feed-item"
                      key={`${update.date}-${updateIndex}`}
                    >
                      <span className="highlight-feed-date">{update.date}</span>
                      <p
                        className="highlight-feed-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {update.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
