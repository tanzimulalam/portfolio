import React, { useEffect, useState } from "react";

const KEY = "sg-theme";

/**
 * Reads whatever the pre-paint script in public/index.html already decided.
 * That script runs before first paint so the page never flashes the wrong
 * ground; this component only has to stay in step with it.
 */
function current() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(current);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");

    try {
      window.localStorage.setItem(KEY, theme);
    } catch (e) {
      /* Private mode or blocked storage: the choice just will not persist. */
    }

    // Keep the browser chrome in step with the page ground.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute("content", theme === "light" ? "#f6f7f3" : "#0d1014");
  }, [theme]);

  // Follow the OS while the visitor has not expressed a preference.
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return undefined;
    let stored = null;
    try {
      stored = window.localStorage.getItem(KEY);
    } catch (e) {
      /* ignore */
    }
    if (stored) return undefined;

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e) => setTheme(e.matches ? "light" : "dark");
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      className="sg-theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <svg
        className="sg-icon-sun"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.6v2.2M12 19.2v2.2M4.2 12H2M22 12h-2.2M5.9 5.9 4.4 4.4M19.6 19.6l-1.5-1.5M18.1 5.9l1.5-1.5M4.4 19.6l1.5-1.5" />
      </svg>
      <svg
        className="sg-icon-moon"
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8z" />
      </svg>
    </button>
  );
}
