import React, { useState } from "react";
import CalmLayout from "../../components/calmLayout/CalmLayout";
import { contactForm, socialMediaLinks } from "../../portfolio.js";
import "./CalmContactPage.css";

export default function CalmContactPage({ theme }) {
  const hasForm = Boolean(
    contactForm.formspreeAction && contactForm.formspreeAction.length > 5
  );
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    if (hasForm) return;
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const message = fd.get("message") || "";
    const subject = encodeURIComponent("Message from portfolio");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:fahim.communicate@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email client should open.");
  };

  return (
    <CalmLayout theme={theme}>
      <div className="calm-page calm-contact">
        <header className="calm-page-header calm-inner calm-inner--narrow">
          <h1 className="calm-page-title">Contact</h1>
          <p className="calm-page-lead">
            Prefer email or LinkedIn. For a short intro, use{" "}
            <a className="calm-link" href={contactForm.bookChatMailto}>
              book a 20-minute chat
            </a>{" "}
            (opens your mail app).
          </p>
        </header>

        <div className="calm-inner calm-inner--narrow calm-contact-grid">
          <form
            className="calm-form"
            method={hasForm ? "POST" : undefined}
            action={hasForm ? contactForm.formspreeAction : undefined}
            onSubmit={handleSubmit}
          >
            <label className="calm-field">
              <span className="calm-field-label">Name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label className="calm-field">
              <span className="calm-field-label">Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="calm-field">
              <span className="calm-field-label">Message</span>
              <textarea name="message" rows={6} required />
            </label>
            <button type="submit" className="calm-btn calm-btn--primary">
              {hasForm ? "Send message" : "Send via email app"}
            </button>
            {status ? <p className="calm-form-status">{status}</p> : null}
          </form>

          <aside className="calm-contact-aside">
            <p className="calm-contact-email">
              <a
                className="calm-link"
                href="mailto:fahim.communicate@gmail.com"
              >
                fahim.communicate@gmail.com
              </a>
            </p>
            <ul className="calm-contact-social">
              {socialMediaLinks.map((s) => (
                <li key={s.name}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </CalmLayout>
  );
}
