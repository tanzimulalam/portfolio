import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  academicProfile,
  greeting,
  settings,
  socialMediaLinks,
} from "../../portfolio.js";

export default function Footer() {
  const aboutSnippet =
    academicProfile.bio.length > 200
      ? `${academicProfile.bio.slice(0, 197)}…`
      : academicProfile.bio;

  const homeTo = settings.isSplash ? "/home" : "/";

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <h3 className="site-footer-heading">About</h3>
          <p className="site-footer-text">{aboutSnippet}</p>
        </div>
        <div className="site-footer-col">
          <h3 className="site-footer-heading">Explore</h3>
          <ul className="site-footer-links">
            <li>
              <Link to={homeTo}>Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/uses">Uses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="site-footer-col">
          <h3 className="site-footer-heading">Connect</h3>
          <ul className="site-footer-social">
            {socialMediaLinks.map((s) => (
              <li key={s.name}>
                <a href={s.link} target="_blank" rel="noopener noreferrer">
                  <span
                    className={`fa-brands ${s.fontAwesomeIcon}`}
                    aria-hidden="true"
                  />
                  <span>{s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <p>
          © {new Date().getFullYear()} {greeting.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
