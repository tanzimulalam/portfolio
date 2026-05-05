import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { academicProfile, greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  closeMenu = () => {
    const el = document.getElementById("menu-btn");
    if (el) el.checked = false;
  };

  render() {
    return (
      <div className="header-outer">
        <SeoHeader />
        <header className="header header-academic header-calm">
          <NavLink
            to={settings.isSplash ? "/home" : "/"}
            className="header-logo"
            isActive={(m, loc) =>
              settings.isSplash
                ? loc.pathname === "/home"
                : loc.pathname === "/"
            }
            onClick={this.closeMenu}
          >
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
                to={settings.isSplash ? "/home" : "/"}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(m, loc) =>
                  settings.isSplash
                    ? loc.pathname === "/home"
                    : loc.pathname === "/"
                }
                onClick={this.closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className="header-link"
                activeClassName="header-link-active"
                onClick={this.closeMenu}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="header-link"
                activeClassName="header-link-active"
                onClick={this.closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uses"
                className="header-link"
                activeClassName="header-link-active"
                onClick={this.closeMenu}
              >
                Uses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="header-link"
                activeClassName="header-link-active"
                onClick={this.closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                className="header-link header-link-cv"
                href={academicProfile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.closeMenu}
              >
                Résumé
              </a>
            </li>
            {settings.isSplash ? (
              <li>
                <NavLink
                  to="/"
                  className="header-link header-link-quiet"
                  activeClassName="header-link-active"
                  exact
                  onClick={this.closeMenu}
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
