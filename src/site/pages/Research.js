import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { PageHead, Reveal, SectionHead } from "../components/Bits";
import {
  academicProfile,
  publications,
  researchAreas,
} from "../../portfolio.js";

function formatYear(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : String(d.getUTCFullYear());
}

export default function Research() {
  return (
    <Layout
      title="Research"
      description="Research agenda: agentic AI for autonomous UAVs, security of agentic systems, knowledge graphs for threat intelligence, and evaluation methods for autonomous systems."
    >
      <PageHead
        eyebrow={`${academicProfile.lab} · ${academicProfile.institutionShort}`}
        title="Research"
        lead={academicProfile.intro}
      />

      {/* ------------------------------------------------ thrusts */}
      <section className="sg-section" aria-labelledby="agenda">
        <div className="sg-wrap">
          <SectionHead
            index="01"
            id="agenda"
            title="Agenda"
            lead="Four threads, each stated as the question it is trying to answer."
          />

          <ul className="sg-thrusts">
            {researchAreas.map((area, i) => (
              <Reveal
                as="li"
                className="sg-thrust"
                key={area.id}
                id={area.id}
                delay={i * 70}
              >
                <div className="sg-thrust-top">
                  <span className="sg-thrust-num">{area.index}</span>
                  <span className="sg-thrust-status">{area.status}</span>
                </div>
                <h3 className="sg-h3">{area.title}</h3>
                <p className="sg-thrust-q">{area.question}</p>
                <p className="sg-thrust-body">{area.body}</p>
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
        </div>
      </section>

      {/* ------------------------------------------------ lab context */}
      <section className="sg-section sg-section--sunk" aria-labelledby="lab">
        <div className="sg-wrap">
          <SectionHead index="02" id="lab" title="Where this work happens" />

          <Reveal className="sg-prose">
            <p className="sg-prose-open">
              I work in the <strong>{academicProfile.lab}</strong> at{" "}
              {academicProfile.institution}, advised by{" "}
              <a
                className="sg-link"
                href={academicProfile.advisorUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {academicProfile.advisor}
              </a>{" "}
              in the Department of Engineering Technology.
            </p>
            <p>
              The lab works on agentic LLM systems, distributed and
              privacy-aware machine learning, edge intelligence and IoT,
              generative AI for network management, AI-native 6G networks, and
              quantum-assisted machine learning. My project sits in the agentic
              corner of that portfolio: an autonomous UAV that plans and revises
              its own mission rather than flying a fixed route.
            </p>
            <p>
              I bring an operational security background to it. A prompt
              injection is a delivery mechanism before it is a model failure,
              and tool misuse looks a lot like privilege escalation with better
              manners. Treating an agent as an attack surface, with adversaries
              and detection engineering, surfaces failure paths that a purely
              benchmark-driven view tends to miss. On a drone, those failure
              paths have physical consequences.
            </p>
            <p>
              <a
                className="sg-arrow"
                href={academicProfile.labUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit the ASQI Lab</span>
                <span aria-hidden="true">↗</span>
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ interests */}
      <section className="sg-section sg-section--tight" aria-labelledby="areas">
        <div className="sg-wrap">
          <SectionHead index="03" id="areas" title="Areas of interest" />
          <Reveal as="ul" className="sg-interests">
            {academicProfile.researchInterests.map((x) => (
              <li className="sg-interest" key={x}>
                {x}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ projects */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="artifacts"
      >
        <div className="sg-wrap">
          <SectionHead
            index="04"
            id="artifacts"
            title="Projects & artifacts"
            lead="Research prototypes and applied builds. Peer-reviewed publications will be listed here as they appear."
          />

          <ul className="sg-cases">
            {publications.data.map((p) => (
              <Reveal as="li" className="sg-case" key={p.id}>
                <div className="sg-case-head">
                  <span className="sg-case-year">
                    {formatYear(p.createdAt)}
                  </span>
                  <div>
                    <h3 className="sg-case-title">{p.name}</h3>
                    <p className="sg-case-role">{p.description}</p>
                  </div>
                  {p.url ? (
                    <a
                      className="sg-arrow"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Open</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ cta */}
      <section className="sg-section sg-cta" aria-labelledby="research-cta">
        <div className="sg-wrap sg-wrap--narrow">
          <Reveal>
            <h2 className="sg-h2" id="research-cta">
              Collaborations welcome
            </h2>
            <p className="sg-lead">
              If any of these threads overlap with yours, I'd like to hear about
              it, especially from people building or breaking agentic systems in
              production.
            </p>
            <div className="sg-cta-actions">
              <Link className="sg-btn sg-btn--primary" to="/contact">
                Start a conversation
              </Link>
              <Link className="sg-btn sg-btn--ghost" to="/work">
                See applied work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
