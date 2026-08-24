import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout title="Not found" description="That page does not exist.">
      <div className="sg-wrap sg-404">
        <p className="sg-eyebrow">Error 404</p>
        <p className="sg-404-code">404</p>
        <h1 className="sg-h2">No route to that resource.</h1>
        <p className="sg-lead" style={{ marginInline: "auto" }}>
          The page you asked for isn't here. It may have moved when the site was
          rebuilt.
        </p>
        <div className="sg-cta-actions">
          <Link className="sg-btn sg-btn--primary" to="/">
            Back home
          </Link>
          <Link className="sg-btn sg-btn--ghost" to="/research">
            Research
          </Link>
        </div>
      </div>
    </Layout>
  );
}
