import React, { Component } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const resumeHref = `${process.env.PUBLIC_URL || ""}/Resume.pdf`;

    return (
      <div className="header-outer">
        <SeoHeader />
        <header className="header header-academic">
          <NavLink to="/home" tag={Link} className="header-logo">
            {greeting.title}
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            aria-label="Open menu"
          >
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li>
              <NavLink
                to="/home"
                tag={Link}
                className="header-link"
                activeClassName="header-link-active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                className="header-link"
                activeClassName="header-link-active"
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                className="header-link"
                activeClassName="header-link-active"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                tag={Link}
                className="header-link"
                activeClassName="header-link-active"
              >
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-me"
                tag={Link}
                className="header-link"
                activeClassName="header-link-active"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                className="header-link header-link-cv"
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
            {settings.isSplash ? (
              <li>
                <NavLink
                  to="/"
                  tag={Link}
                  className="header-link header-link-quiet"
                  activeClassName="header-link-active"
                  exact
                >
                  Intro
                </NavLink>
              </li>
            ) : null}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
