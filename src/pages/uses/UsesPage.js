import React from "react";
import CalmLayout from "../../components/calmLayout/CalmLayout";
import { toolkitCategories } from "../../portfolio.js";
import "./UsesPage.css";

export default function UsesPage({ theme }) {
  return (
    <CalmLayout theme={theme}>
      <div className="calm-page calm-page-uses">
        <header className="calm-page-header calm-inner">
          <h1 className="calm-page-title">Uses</h1>
          <p className="calm-page-lead">
            Tools and platforms I reach for regularly. No affiliate links—just
            an honest snapshot for collaborators.
          </p>
        </header>

        <div className="calm-inner calm-inner--wide calm-uses-grid">
          {toolkitCategories.map((cat) => (
            <section key={cat.name} className="calm-uses-block">
              <h2 className="calm-uses-cat">{cat.name}</h2>
              <ul className="calm-uses-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </CalmLayout>
  );
}
