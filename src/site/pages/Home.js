import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import GraphField from "../components/GraphField";
import { Feed, Metrics, Quote, Reveal, SectionHead } from "../components/Bits";
import {
  academicProfile,
  caseStudies,
  homepage,
  liveFeedUpdates,
  researchAreas,
  services,
  stats,
  testimonials,
} from "../../portfolio.js";

const featured = caseStudies.slice(0, 2);

export default function Home() {
  return (
    <Layout>
      {/* ---------------------------------------------- hero */}
      <section className="sg-hero" aria-labelledby="hero-title">
        <GraphField className="sg-hero-canvas" />

        <div className="sg-hero-inner sg-wrap">
          <div className="sg-hero-col">
            <p className="sg-eyebrow">{homepage.eyebrow}</p>

            {/* Left to wrap naturally. `text-wrap: balance` keeps the lines
                even across breakpoints better than a hard-coded break would. */}
            <h1 className="sg-h1 sg-hero-title" id="hero-title">
              Agents that fly, decide, <em>and can be trusted.</em>
            </h1>

            <p className="sg-lead sg-hero-sub">{homepage.subhead}</p>

            <div className="sg-hero-actions">
              <Link
                className="sg-btn sg-btn--primary"
                to={homepage.primaryCta.to}
              >
                {homepage.primaryCta.label}
              </Link>
              <a
                className="sg-btn sg-btn--ghost"
                href={academicProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum vitae ↗
              </a>
            </div>

            <div className="sg-hero-id">
              <img
                className="sg-hero-photo"
                src={academicProfile.headshotUrl}
                alt=""
                width={58}
                height={58}
                loading="eager"
                decoding="async"
              />
              <span className="sg-hero-id-text">
                <span className="sg-hero-id-role">{academicProfile.role}</span>
                <span className="sg-hero-id-affil">
                  <a
                    href={academicProfile.labUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {academicProfile.lab}
                  </a>
                  {" · "}
                  <a
                    href={academicProfile.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {academicProfile.institution}
                  </a>
                  {" · "}
                  advised by {academicProfile.advisor}
                </span>
              </span>
            </div>
          </div>
        </div>

        <span className="sg-hero-cue" aria-hidden="true">
          Scroll
        </span>
      </section>

      {/* ---------------------------------------------- metrics */}
      <section className="sg-section sg-section--tight">
        <div className="sg-wrap">
          <Metrics items={stats} />
        </div>
      </section>

      {/* ---------------------------------------------- research */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="home-research"
      >
        <div className="sg-wrap">
          <SectionHead
            index="01 / Research"
            id="home-research"
            title="Four questions I'm working on"
            lead="Autonomous flight on one side, security on the other. These are the threads I am pulling on."
          />

          <ul className="sg-thrusts">
            {researchAreas.map((area, i) => (
              <Reveal
                as="li"
                className="sg-thrust"
                key={area.id}
                delay={i * 70}
              >
                <div className="sg-thrust-top">
                  <span className="sg-thrust-num">{area.index}</span>
                  <span className="sg-thrust-status">{area.status}</span>
                </div>
                <h3 className="sg-h3">{area.title}</h3>
                <p className="sg-thrust-q">{area.question}</p>
                <ul className="sg-chips">
                  {area.keywords.map((k) => (
                    <li className="sg-chip" key={k}>
                      {k}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>

          <Reveal className="sg-center sg-mt-lg">
            <Link className="sg-arrow" to="/research">
              <span>Read the full research agenda</span>
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- selected work */}
      <section className="sg-section" aria-labelledby="home-work">
        <div className="sg-wrap">
          <SectionHead
            index="02 / Work"
            id="home-work"
            title="Selected work"
            lead="Two representative projects. Full write-ups, with problem, approach, stack and outcome, live on the Work page."
          />

          <ul className="sg-feature-grid">
            {featured.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 90}>
                <article className="sg-card">
                  <div className="sg-card-top">
                    <p className="sg-card-role">{c.track}</p>
                    <p className="sg-card-role">{c.year}</p>
                  </div>
                  <h3 className="sg-card-title">{c.title}</h3>
                  <p className="sg-card-role">{c.role}</p>
                  <p className="sg-card-text">{c.problem}</p>
                  <p className="sg-card-out">{c.result}</p>
                  <ul className="sg-chips">
                    {c.stack.slice(0, 4).map((t) => (
                      <li className="sg-chip" key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {c.href ? (
                    <a
                      className="sg-arrow sg-card-link"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View project</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link className="sg-arrow sg-card-link" to="/work">
                      <span>Read the write-up</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal className="sg-center sg-mt-lg">
            <Link className="sg-arrow" to="/work">
              <span>All case studies</span>
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- updates */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="home-updates"
      >
        <div className="sg-wrap sg-wrap--narrow">
          <SectionHead
            index="03 / Log"
            id="home-updates"
            title="Recent"
            lead="What's changed lately."
          />
          <Reveal>
            <Feed items={liveFeedUpdates} initial={4} />
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- where to next */}
      <section className="sg-section" aria-labelledby="home-next">
        <div className="sg-wrap">
          <SectionHead
            index="04 / Index"
            id="home-next"
            title="Where to next"
          />
          <Reveal as="ul" className="sg-nav-cards">
            {services.map((s) => (
              <li key={s.title}>
                <Link className="sg-nav-card" to={s.to}>
                  <span className="sg-nav-card-title">
                    <span>{s.title}</span>
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="sg-nav-card-desc">{s.description}</span>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- recommendations */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="home-reco"
      >
        <div className="sg-wrap">
          <SectionHead
            index="05 / References"
            id="home-reco"
            title="What collaborators say"
            lead="Selected recommendations from colleagues, advisors, and teammates."
          />
          <Reveal as="ul" className="sg-quotes">
            {testimonials.map((t) => (
              <Quote key={t.name} name={t.name} role={t.role} text={t.text} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- cta */}
      <section className="sg-section sg-cta" aria-labelledby="home-cta">
        <div className="sg-wrap sg-wrap--narrow">
          <Reveal>
            <h2 className="sg-h2" id="home-cta">
              Working on something adjacent?
            </h2>
            <p className="sg-lead">
              I like talking with people working on agentic AI, robotics,
              autonomous systems, or threat intelligence. Collaborations, paper
              discussions, review invitations, and internships all welcome.
            </p>
            <div className="sg-cta-actions">
              <Link className="sg-btn sg-btn--primary" to="/contact">
                Get in touch
              </Link>
              <Link className="sg-btn sg-btn--ghost" to="/about">
                Read the background
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
