import React, { Component } from "react";
import "./AchievementCard.css";
import { Fade } from "react-reveal";
import { getImageSrc } from "../../utils/imageLoader";

class AchievementCard extends Component {
  render() {
    const achievement = this.props.achievement;
    const theme = this.props.theme;
    return (
      <div className="achievement-list-item">
        <div className="achievement-card-wrapper">
          <Fade left duration={2000} distance="40px">
            <div className="achievement-card-logo-div">
              {(() => {
                const imageSrc = getImageSrc(achievement["logo_path"]);
                if (imageSrc) {
                  return (
                    <img
                      className="achievement-card-logo"
                      src={imageSrc}
                      alt=""
                      onError={(e) => {
                        e.target.style.display = "none";
                        const placeholder = e.target.parentElement.querySelector(
                          ".achievement-card-logo-placeholder"
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
                className="achievement-card-logo-placeholder"
                style={{
                  backgroundColor: achievement["color"] || theme.imageHighlight,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  display: getImageSrc(achievement["logo_path"])
                    ? "none"
                    : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {achievement["organization"]?.charAt(0) || "A"}
              </div>
            </div>
          </Fade>
          <Fade right duration={2000} distance="40px">
            <div
              className="achievement-card"
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
                    className="achievement-card-title"
                    style={{ color: theme.text }}
                  >
                    {achievement["title"]}
                  </h3>
                  <p
                    className="achievement-card-organization"
                    style={{ color: theme.text }}
                  >
                    {achievement["organization_url"] ? (
                      <a
                        href={achievement["organization_url"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {achievement["organization"]}
                      </a>
                    ) : (
                      achievement["organization"]
                    )}
                  </p>
                </div>
                <div>
                  <div className="achievement-card-heading-right">
                    {achievement["duration"] && (
                      <p
                        className="achievement-card-duration"
                        style={{ color: theme.secondaryText }}
                      >
                        {achievement["duration"]}
                      </p>
                    )}
                    <p
                      className="achievement-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {achievement["location"]}
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
                {achievement["description"]}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default AchievementCard;
