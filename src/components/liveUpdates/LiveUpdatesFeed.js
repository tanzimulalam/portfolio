import React, { useMemo, useState } from "react";
import "./LiveUpdatesFeed.css";
import { liveFeedUpdates } from "../../portfolio.js";

const INITIAL = 3;

export default function LiveUpdatesFeed() {
  const [expanded, setExpanded] = useState(false);
  const items = useMemo(
    () => (expanded ? liveFeedUpdates : liveFeedUpdates.slice(0, INITIAL)),
    [expanded]
  );
  const canExpand = liveFeedUpdates.length > INITIAL;

  return (
    <div className="live-updates">
      <div className="live-updates-head">
        <h2 className="live-updates-title">Latest updates</h2>
        <span className="live-updates-badge" aria-hidden="true">
          Live
        </span>
      </div>
      <p className="live-updates-lead">
        Recent milestones, roles, and security contributions.
      </p>
      <ul
        className={`live-updates-list ${
          expanded
            ? "live-updates-list-expanded"
            : "live-updates-list-collapsed"
        }`}
      >
        {items.map((u, i) => (
          <li key={`${u.date}-${i}`} className="live-updates-item">
            <span className="live-updates-date">{u.date}</span>
            <p className="live-updates-text">{u.text}</p>
          </li>
        ))}
      </ul>
      {canExpand ? (
        <button
          type="button"
          className="live-updates-toggle"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Expand updates"}
        </button>
      ) : null}
    </div>
  );
}
