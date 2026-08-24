import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { PageHead, Reveal } from "../components/Bits";
import { caseStudies, toolkitCategories } from "../../portfolio.js";

export default function Work() {
  return (
    <Layout
      title="Work"
      description="Case write-ups: synthetic CTI knowledge graphs at LAS/NSA, campus-scale SOC operations, mobile driver's license architecture research, coordinated disclosure, and environmental data pipelines."
    >
      <PageHead
        eyebrow="Case studies"
        title="Work"
        lead="Problem, approach, stack, outcome. These are the projects the research grew out of: some research, some operational, one disclosure."
      />

      <section className="sg-section">
        <div className="sg-wrap">
          <ol className="sg-cases">
            {caseStudies.map((c, i) => (
              <Reveal as="li" className="sg-case" key={c.id} id={c.id}>
                <div className="sg-case-head">
                  <span className="sg-case-year">
                    {String(i + 1).padStart(2, "0")} · {c.year}
                  </span>
                  <div>
                    <h2 className="sg-case-title">{c.title}</h2>
                    <p className="sg-case-role">{c.role}</p>
                  </div>
                  <span className="sg-case-track">{c.track}</span>
                </div>

                <div className="sg-case-grid">
                  <span aria-hidden="true" />
                  <div className="sg-case-body">
                    <div className="sg-case-field">
                      <h3 className="sg-case-label">Problem</h3>
                      <p className="sg-case-text">{c.problem}</p>
                    </div>
                    <div className="sg-case-field">
                      <h3 className="sg-case-label">Approach</h3>
                      <p className="sg-case-text">{c.approach}</p>
                    </div>
                    <div className="sg-case-field">
                      <h3 className="sg-case-label">Outcome</h3>
                      <p className="sg-case-text sg-case-text--out">
                        {c.result}
                      </p>
                    </div>
                    <div className="sg-case-field">
                      <h3 className="sg-case-label">Stack</h3>
                      <ul className="sg-chips">
                        {c.stack.map((s) => (
                          <li className="sg-chip" key={s}>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sg-case-actions">
                      {c.href ? (
                        <a
                          className="sg-arrow"
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>View project</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                      <Link className="sg-arrow" to="/contact">
                        <span>Discuss this work</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------ toolkit */}
      <section
        className="sg-section sg-section--sunk"
        aria-labelledby="toolkit"
        id="toolkit"
      >
        <div className="sg-wrap">
          <Reveal className="sg-sec-head">
            <span className="sg-sec-num" aria-hidden="true">
              Tools
            </span>
            <div className="sg-sec-head-text">
              <h2 className="sg-h2" id="toolkit-h">
                What I actually use
              </h2>
              <p className="sg-lead">
                The working set, not an exhaustive skills matrix.
              </p>
            </div>
          </Reveal>

          <div className="sg-timeline">
            {toolkitCategories.map((cat) => (
              <Reveal as="div" className="sg-tl-item" key={cat.name}>
                <span className="sg-tl-when">{cat.name}</span>
                <ul className="sg-chips">
                  {cat.items.map((item) => (
                    <li className="sg-chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sg-section sg-cta" aria-labelledby="work-cta">
        <div className="sg-wrap sg-wrap--narrow">
          <Reveal>
            <h2 className="sg-h2" id="work-cta">
              More detail on request
            </h2>
            <p className="sg-lead">
              Happy to walk through architecture, evaluation setup, or what I'd
              do differently now.
            </p>
            <div className="sg-cta-actions">
              <Link className="sg-btn sg-btn--primary" to="/contact">
                Get in touch
              </Link>
              <Link className="sg-btn sg-btn--ghost" to="/research">
                Research agenda
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
