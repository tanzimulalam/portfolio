import React from "react";
import { Link } from "react-router-dom";
import {
  academicProfile,
  contactForm,
  greeting,
  socialMediaLinks,
} from "../../portfolio.js";

const mailto = contactForm.bookChatMailto || "";
const email = mailto.replace(/^mailto:/, "").split("?")[0];

export default function Footer() {
  return (
    <footer className="sg-footer">
      <div className="sg-wrap">
        <div className="sg-footer-grid">
          <div>
            <p className="sg-footer-name">{greeting.title}</p>
            <p className="sg-footer-affil">
              {academicProfile.role} ·{" "}
              <a
                className="sg-link"
                href={academicProfile.labUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {academicProfile.lab}
              </a>
              , {academicProfile.institution}.
            </p>
          </div>

          <div>
            <p className="sg-footer-h">Site</p>
            <ul className="sg-footer-list">
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About &amp; CV</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="sg-footer-h">Elsewhere</p>
            <ul className="sg-footer-list">
              {socialMediaLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    {s.name} ↗
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={academicProfile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curriculum vitae ↗
                </a>
              </li>
              {email ? (
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="sg-footer-base">
          <span>
            © {new Date().getFullYear()} {greeting.title}
          </span>
          <span>{academicProfile.location}</span>
        </div>
      </div>
    </footer>
  );
}
