import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ContactMe.css";

function ContactMe(props) {
  const { theme } = props;

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

              <button
                className="contactme-email-button"
                onClick={handleEmailClick}
              >
                <span>Send an email</span>
              </button>
            </div>

            <div className="contactme-hero-right">
              <div className="contactme-orbit">
                <div className="contactme-orbit-ring contactme-orbit-ring-1" />
                <div className="contactme-orbit-ring contactme-orbit-ring-2" />
                <div className="contactme-orbit-ring contactme-orbit-ring-3" />
                <div className="contactme-orbit-core">
                  <img
                    src="/icons/desc.png"
                    alt="Tanzimul Alam Fahim illustration"
                    className="contactme-avatar"
                  />
                </div>
              </div>
              <div className="contactme-mail-float">
                <img
                  src={require("../../assets/images/contactMail.png")}
                  alt="Contact mail"
                />
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
