import React from "react";
import { Link } from "react-router-dom";
import CalmLayout from "../../components/calmLayout/CalmLayout";
import { caseStudies } from "../../portfolio.js";
import "./WorkPage.css";

export default function WorkPage({ theme }) {
  return (
    <CalmLayout theme={theme}>
      <div className="calm-page calm-page-work">
        <header className="calm-page-header calm-inner">
          <h1 className="calm-page-title">Work</h1>
          <p className="calm-page-lead">
            Case-style write-ups: problem, approach, stack, and outcome. For a
            full publication list, see{" "}
            <a
              className="calm-link"
              href="https://devpost.com/fahim5898"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devpost
            </a>
            .
          </p>
        </header>

        <div className="calm-inner calm-inner--wide">
          <ol className="calm-case-list">
            {caseStudies.map((c, i) => (
              <li key={c.id} className="calm-case">
                <span className="calm-case-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="calm-case-body">
                  <h2 className="calm-case-title">{c.title}</h2>
                  <p className="calm-case-role">{c.role}</p>
                  <div className="calm-case-block">
                    <h3 className="calm-case-label">Problem</h3>
                    <p>{c.problem}</p>
                  </div>
                  <div className="calm-case-block">
                    <h3 className="calm-case-label">Approach</h3>
                    <p>{c.approach}</p>
                  </div>
                  <div className="calm-case-block">
                    <h3 className="calm-case-label">Stack</h3>
                    <ul className="calm-case-stack">
                      {c.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="calm-case-block">
                    <h3 className="calm-case-label">Result</h3>
                    <p>{c.result}</p>
                  </div>
                  <div className="calm-case-actions">
                    {c.href ? (
                      <a
                        className="calm-btn calm-btn--secondary"
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        External link
                      </a>
                    ) : null}
                    <Link className="calm-link" to="/contact">
                      Discuss this work →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </CalmLayout>
  );
}
