import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { academicProfile, greeting } from "../../portfolio.js";

const LINKS = [
  { to: "/", label: "Home", exact: true },
  { to: "/research", label: "Research" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile sheet whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="sg-nav" aria-label="Primary">
      <div className="sg-nav-inner">
        <NavLink to="/" className="sg-brand" exact>
          <span className="sg-brand-dot" aria-hidden="true" />
          <span>{greeting.title}</span>
          <span className="sg-brand-sub">
            {academicProfile.lab} · {academicProfile.institutionShort}
          </span>
        </NavLink>

        <button
          type="button"
          className="sg-nav-toggle"
          aria-expanded={open}
          aria-controls="sg-nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul
          id="sg-nav-links"
          className={`sg-nav-links${open ? " is-open" : ""}`}
        >
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                exact={l.exact}
                className="sg-nav-link"
                activeClassName="is-active"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              className="sg-nav-link sg-nav-cv"
              href={academicProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
