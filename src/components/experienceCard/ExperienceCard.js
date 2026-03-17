import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import { getImageSrc } from "../../utils/imageLoader";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="experience-list-item">
        <div className="experience-card-wrapper">
          <Fade left duration={2000} distance="40px">
            <div className="experience-card-logo-div">
              {(() => {
                const imageSrc = getImageSrc(experience["logo_path"]);
                if (imageSrc) {
                  return (
                    <img
                      className="experience-card-logo"
                      src={imageSrc}
                      alt=""
                      onError={(e) => {
                        e.target.style.display = "none";
                        const placeholder = e.target.parentElement.querySelector(
                          ".experience-card-logo-placeholder"
                        );
                        if (placeholder) {
                          placeholder.style.display = "flex";
                        }
                      }}
                    />
                  );
                }
                return null;
              })()}
              <div
                className="experience-card-logo-placeholder"
                style={{
                  backgroundColor: experience["color"] || theme.imageHighlight,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  display: getImageSrc(experience["logo_path"])
                    ? "none"
                    : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {experience["company"]?.charAt(0) || "E"}
              </div>
            </div>
          </Fade>
          <Fade right duration={2000} distance="40px">
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
              >
                <div className="repo-description" />
                {experience["description"]}
              </div>
              {Array.isArray(experience.links) && experience.links.length > 0 && (
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  {experience.links.map((l, idx) => (
                    <a
                      key={`${l.url}-${idx}`}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "8px 12px",
                        borderRadius: 999,
                        textDecoration: "none",
                        fontSize: 13,
                        fontFamily: "Google Sans Medium",
                        background: theme.highlight,
                        color: theme.text,
                      }}
                    >
                      {l.label || "Link"}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
