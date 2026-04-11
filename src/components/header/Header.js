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
    const homeActive = (location) =>
      location.pathname === "/home" &&
      (!location.hash ||
        location.hash === "" ||
        location.hash === "#" ||
        location.hash === "#top");

    return (
      <div className="header-outer">
        <SeoHeader />
        <header className="header header-academic">
          <NavLink to="/home" className="header-logo" onClick={this.closeMenu}>
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
                to={{ pathname: "/home", hash: "#top" }}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(_, loc) => homeActive(loc)}
                onClick={this.closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/home", hash: "#experience" }}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(_, loc) =>
                  loc.pathname === "/home" && loc.hash === "#experience"
                }
                onClick={this.closeMenu}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/home", hash: "#projects" }}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(_, loc) =>
                  loc.pathname === "/home" && loc.hash === "#projects"
                }
                onClick={this.closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/home", hash: "#achievements" }}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(_, loc) =>
                  loc.pathname === "/home" && loc.hash === "#achievements"
                }
                onClick={this.closeMenu}
              >
                Achievements
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/home", hash: "#contact" }}
                className="header-link"
                activeClassName="header-link-active"
                isActive={(_, loc) =>
                  loc.pathname === "/home" && loc.hash === "#contact"
                }
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
                CV
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
