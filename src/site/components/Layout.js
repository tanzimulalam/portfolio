import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Seo from "./Seo";

/** Clearance for the sticky nav (68px) plus a little breathing room. */
const HEADER_OFFSET = 88;

/**
 * Layout: nav, main, footer, plus the two bits of routing housekeeping
 * react-router v5 leaves to the app: scroll restoration and hash targeting.
 */
export default function Layout({ children, title, description }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      // `behavior: "instant"` is required: the stylesheet sets
      // `html { scroll-behavior: smooth }`, which otherwise turns every
      // programmatic scroll into an animation that route changes cut short.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }

    const id = location.hash.replace(/^#/, "");
    const timers = [];

    /**
     * Jump to the hash target.
     *
     * Instant, not smooth, for two reasons: a smooth scroll launched at mount
     * gets recomputed as lazily-rendered content settles and lands short, and
     * the stylesheet's `scroll-behavior: smooth` would otherwise animate this
     * and be cancelled by the next re-issue. We retry over the first ~600ms
     * and stop once the target offset stops moving.
     */
    let lastTop = null;
    const jump = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      if (lastTop !== null && Math.abs(top - lastTop) < 1) return;
      lastTop = top;
      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "instant" });
    };

    window.requestAnimationFrame(jump);
    [120, 300, 600].forEach((delay) => {
      timers.push(window.setTimeout(jump, delay));
    });

    return () => timers.forEach(window.clearTimeout);
  }, [location.pathname, location.hash]);

  return (
    <div className="sg-shell">
      <Seo title={title} description={description} />
      <a className="sg-skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main className="sg-main" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
