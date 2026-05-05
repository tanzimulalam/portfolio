import React from "react";
import { Link } from "react-router-dom";
import "./Splash.css";

/** Minimal entry when `settings.isSplash` is true—no canvas, typing, or particles. */
export default function Splash() {
  return (
    <div className="splash-calm" role="main">
      <p className="splash-calm-eyebrow">Portfolio</p>
      <h1 className="splash-calm-title">Tanzimul Alam Fahim</h1>
      <p className="splash-calm-lead">
        Cybersecurity analyst & researcher — threat intelligence, SOC
        operations, and careful engineering.
      </p>
      <Link className="calm-btn calm-btn--primary splash-calm-cta" to="/home">
        Enter site
      </Link>
    </div>
  );
}
