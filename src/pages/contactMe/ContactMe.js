import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ContactMe.css";

function ContactMe(props) {
  const { theme } = props;
  const avatar = require("../../assets/images/animated_profile.png");

  const handleEmailClick = () => {
    window.location.href = "mailto:fahim.communicate@gmail.com";
  };

  return (
    <div className="contactme-main">
      <Header theme={theme} />
      <div className="contactme-body">
        <Fade bottom duration={1600} distance="32px">
          <section className="contactme-hero">
            <div className="contactme-hero-left">
              <p
                className="contactme-label"
                style={{ color: theme.secondaryText }}
              >
                Contact Me
              </p>
              <h1 className="contactme-title" style={{ color: theme.text }}>
                Tanzimul Alam Fahim
              </h1>
              <h2 className="contactme-handle" style={{ color: theme.text }}>
                ( tanzimulalam )
              </h2>
              <p
                className="contactme-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Cybersecurity professional and researcher specializing in
                security operations, threat intelligence, machine learning, and
                data science. Reach out for collaborations, opportunities, or
                just to say hi.
              </p>

              <div className="contactme-actions">
                <button
                  className="contactme-email-button"
                  onClick={handleEmailClick}
                >
                  <span>Send an email</span>
                </button>
                <p
                  className="contactme-email-hint"
                  style={{ color: theme.secondaryText }}
                >
                  fahim.communicate@gmail.com
                </p>
              </div>
            </div>

            <div className="contactme-hero-right">
              <div className="contactme-card">
                <div className="contactme-card-top">
                  <div className="contactme-avatar-wrap" aria-hidden="true">
                    <img
                      src={avatar}
                      alt="Tanzimul Alam Fahim"
                      className="contactme-avatar"
                    />
                  </div>
                  <div className="contactme-card-glow" aria-hidden="true" />
                </div>
                <div className="contactme-card-bottom">
                  <div
                    className="contactme-tagline"
                    style={{ color: theme.text }}
                  >
                    Cybersecurity Researcher
                  </div>
                  <div
                    className="contactme-tagline-sub"
                    style={{ color: theme.secondaryText }}
                  >
                    Cyber Threat Intelligence
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ContactMe;
