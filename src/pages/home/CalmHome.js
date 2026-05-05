import React from "react";
import { Link } from "react-router-dom";
import LiveUpdatesFeed from "../../components/liveUpdates/LiveUpdatesFeed";
import RecommendationCard from "../../components/recommendationCard/RecommendationCard";
import {
  academicProfile,
  caseStudies,
  greeting,
  homepage,
  liveFeedUpdates,
  services,
  testimonials,
} from "../../portfolio.js";
import "./CalmHome.css";

export default function CalmHome() {
  const featured = caseStudies.slice(0, 2);

  return (
    <div className="calm-home">
      <section
        className="calm-section calm-hero"
        aria-labelledby="hero-heading"
      >
        <div className="calm-inner">
          <p className="calm-hero-eyebrow">{greeting.title}</p>
          <h1 id="hero-heading" className="calm-hero-title">
            {homepage.headline}
          </h1>
          <p className="calm-hero-sub">{homepage.subhead}</p>
          <div className="calm-hero-actions">
            <Link
              className="calm-btn calm-btn--primary"
              to={homepage.primaryCta.to}
            >
              {homepage.primaryCta.label}
            </Link>
            <Link
              className="calm-btn calm-btn--secondary"
              to={homepage.secondaryCta.to}
            >
              {homepage.secondaryCta.label}
            </Link>
          </div>
          <div className="calm-hero-meta">
            <img
              className="calm-hero-photo"
              src={academicProfile.headshotUrl}
              alt=""
              width={120}
              height={120}
              loading="eager"
              decoding="async"
            />
            <p className="calm-hero-meta-text">
              <span className="calm-hero-role">{academicProfile.role}</span>
              <span className="calm-hero-inst">
                {academicProfile.institution} · {academicProfile.degreeLine}
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="calm-section" aria-labelledby="featured-heading">
        <div className="calm-inner calm-inner--wide">
          <h2 id="featured-heading" className="calm-h2">
            Featured work
          </h2>
          <p className="calm-lead">
            Two representative projects—full write-ups on the Work page.
          </p>
          <ul className="calm-feature-grid">
            {featured.map((c) => (
              <li key={c.id}>
                <article className="calm-card">
                  <h3 className="calm-card-title">{c.title}</h3>
                  <p className="calm-card-role">{c.role}</p>
                  <p className="calm-card-desc">{c.problem}</p>
                  <p className="calm-card-result">
                    <strong>Outcome:</strong> {c.result}
                  </p>
                  <div className="calm-card-tags" aria-hidden="true">
                    {c.stack.slice(0, 4).map((t) => (
                      <span key={t} className="calm-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {c.href ? (
                    <a
                      className="calm-link calm-card-link"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project →
                    </a>
                  ) : (
                    <Link className="calm-link calm-card-link" to="/work">
                      Read on Work →
                    </Link>
                  )}
                </article>
              </li>
            ))}
          </ul>
          <p className="calm-centered">
            <Link className="calm-link" to="/work">
              All case studies →
            </Link>
          </p>
        </div>
      </section>

      <section
        className="calm-section calm-section--muted"
        aria-labelledby="services-heading"
      >
        <div className="calm-inner">
          <h2 id="services-heading" className="calm-h2">
            How I can help
          </h2>
          <ul className="calm-services">
            {services.map((s) => (
              <li key={s.title}>
                <Link className="calm-service-link" to={s.to}>
                  <span className="calm-service-title">{s.title}</span>
                  <span className="calm-service-desc">{s.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="calm-section" aria-labelledby="updates-heading">
        <div className="calm-inner calm-inner--narrow">
          <h2 id="updates-heading" className="calm-h2">
            Latest updates
          </h2>
          <LiveUpdatesFeed
            initialCount={Math.min(4, liveFeedUpdates.length)}
            hideHeader
            hideLead
          />
        </div>
      </section>

      <section
        className="calm-section calm-section--muted calm-recommendations"
        aria-labelledby="reco-heading"
      >
        <div className="calm-inner calm-inner--wide">
          <h2 id="reco-heading" className="calm-h2">
            Recommendations
          </h2>
          <p className="calm-lead calm-reco-intro">
            What colleagues and collaborators have shared on LinkedIn.
          </p>
          <div className="calm-reco-list">
            {testimonials.map((t) => (
              <RecommendationCard
                key={t.name}
                name={t.name}
                role={t.role}
                context={t.context}
                text={t.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="calm-section calm-cta" aria-labelledby="cta-heading">
        <div className="calm-inner calm-inner--narrow calm-cta-inner">
          <h2 id="cta-heading" className="calm-h2">
            Let’s work together
          </h2>
          <p className="calm-lead">
            Open to full-time roles, consulting, and research collaborations in
            cybersecurity and resilient systems.
          </p>
          <Link className="calm-btn calm-btn--primary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
