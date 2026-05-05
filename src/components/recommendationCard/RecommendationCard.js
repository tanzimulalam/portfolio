import React, { useMemo, useState } from "react";
import "./RecommendationCard.css";

function paragraphsFromText(text) {
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

export default function RecommendationCard({ name, role, text }) {
  const [expanded, setExpanded] = useState(false);
  const paras = useMemo(() => paragraphsFromText(text), [text]);
  const isLong = text.length > 420 || paras.length > 2;

  const previewParas = useMemo(() => {
    if (!isLong) return paras;
    if (paras.length > 2) return paras.slice(0, 2);
    if (paras.length === 1) {
      if (paras[0].length <= 380) return paras;
      return [`${paras[0].slice(0, 340).trim()}…`];
    }
    const [a, b] = paras;
    const combined = a.length + b.length;
    if (combined <= 480) {
      return [a, b.length > 220 ? `${b.slice(0, 200).trim()}…` : b];
    }
    return [a, `${b.slice(0, 160).trim()}…`];
  }, [paras, isLong]);

  const showToggle = isLong;
  const displayParas = expanded ? paras : previewParas;

  return (
    <article
      className={`calm-reco ${
        showToggle && !expanded ? "calm-reco--preview" : ""
      }`}
    >
      <header className="calm-reco-head">
        <h3 className="calm-reco-name">{name}</h3>
        <p className="calm-reco-role">{role}</p>
      </header>
      <div className="calm-reco-body">
        {displayParas.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {showToggle ? (
        <button
          type="button"
          className="calm-reco-toggle"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}
