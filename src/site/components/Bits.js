import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Reveal: one shared IntersectionObserver drives every entrance.
   Falls back to "already visible" wherever IO is unavailable, and the
   stylesheet neutralises the transform under prefers-reduced-motion.
   ------------------------------------------------------------------ */

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(
    typeof window === "undefined" ||
      typeof window.IntersectionObserver !== "function"
  );

  useEffect(() => {
    if (shown) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const io = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        });
      },
      // threshold 0: sections taller than the viewport can never reach a
      // meaningful ratio, so trigger on first contact instead.
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`sg-reveal${shown ? " is-in" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   SectionHead: mono index, title, optional lead.
   ------------------------------------------------------------------ */

export function SectionHead({ index, title, lead, id }) {
  return (
    <Reveal className="sg-sec-head">
      {index ? (
        <span className="sg-sec-num" aria-hidden="true">
          {index}
        </span>
      ) : null}
      <div className="sg-sec-head-text">
        <h2 className="sg-h2" id={id}>
          {title}
        </h2>
        {lead ? <p className="sg-lead">{lead}</p> : null}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------
   Metrics: the four headline numbers.
   ------------------------------------------------------------------ */

export function Metrics({ items }) {
  return (
    <Reveal as="ul" className="sg-metrics">
      {items.map((m) => (
        <li className="sg-metric" key={m.label}>
          <span className="sg-metric-value">{m.value}</span>
          <span className="sg-metric-label">{m.label}</span>
        </li>
      ))}
    </Reveal>
  );
}

/* ------------------------------------------------------------------
   Feed: dated updates, collapsed to `initial` with a reveal control.
   ------------------------------------------------------------------ */

export function Feed({ items, initial = 4 }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, initial);
  const hidden = items.length - shown.length;

  return (
    <div>
      <ul className="sg-feed">
        {shown.map((u, i) => (
          <li
            className={`sg-feed-item${u.highlight ? " sg-feed-item--hot" : ""}`}
            key={`${u.date}-${i}`}
          >
            <span className="sg-feed-date">{u.date}</span>
            <p className="sg-feed-text">{u.text}</p>
          </li>
        ))}
      </ul>
      {items.length > initial ? (
        <button
          type="button"
          className="sg-feed-more"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : `Show ${hidden} more`}
        </button>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------
   Quote: a recommendation, clamped to its first paragraph.
   ------------------------------------------------------------------ */

export function Quote({ name, role, text }) {
  const [open, setOpen] = useState(false);
  const paragraphs = String(text).split("\n\n").filter(Boolean);
  const isLong = paragraphs.length > 1 || paragraphs[0].length > 340;
  const first = paragraphs[0] || "";
  const preview = first.length > 340 ? `${first.slice(0, 340).trim()}…` : first;

  return (
    <li className="sg-quote">
      {open ? (
        paragraphs.map((p, i) => (
          <p className="sg-quote-text" key={i}>
            {p}
          </p>
        ))
      ) : (
        <p className="sg-quote-text">{preview}</p>
      )}

      {isLong ? (
        <button
          type="button"
          className="sg-quote-toggle"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Read full"}
        </button>
      ) : null}

      <div className="sg-quote-by">
        <span className="sg-quote-name">{name}</span>
        <span className="sg-quote-role">{role}</span>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------
   PageHead: shared header for interior pages.
   ------------------------------------------------------------------ */

export function PageHead({ eyebrow, title, lead, children }) {
  return (
    <header className="sg-page-head">
      <div className="sg-wrap">
        <Reveal>
          {eyebrow ? <p className="sg-eyebrow">{eyebrow}</p> : null}
          <h1 className="sg-page-title">{title}</h1>
          {lead ? <p className="sg-lead sg-page-lead">{lead}</p> : null}
          {children}
        </Reveal>
      </div>
    </header>
  );
}
