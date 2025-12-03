import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import AchievementCard from "../../components/achievementCard/AchievementCard.js";
import "./Achievements.css";
import { achievements } from "../../portfolio.js";
import { Fade } from "react-reveal";
import AchievementImg from "./AchievementImg";

class Achievements extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="achievements-main">
        <Header theme={theme} />
        <div className="basic-achievements">
          <Fade bottom duration={2000} distance="40px">
            <div className="achievements-heading-div">
              <div className="achievements-heading-img-div">
                <AchievementImg theme={theme} />
              </div>
              <div className="achievements-heading-text-div">
                <h1
                  className="achievements-heading-text"
                  style={{ color: theme.text }}
                >
                  {achievements.title}
                </h1>
                <h3
                  className="achievements-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {achievements["subtitle"]}
                </h3>
                <p
                  className="achievements-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {achievements["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="achievements-sections-container">
          {achievements["sections"].map((section, sectionIndex) => {
            const isGuinnessSection =
              section["title"] === "Guinness World Records";
            return (
              <div
                key={section["title"]}
                className={`achievement-section ${
                  isGuinnessSection ? "guinness-section-highlight" : ""
                }`}
              >
                <Fade bottom duration={1500} distance="30px">
                  <div className="achievement-section-header">
                    <h2
                      className="achievement-section-title"
                      style={{
                        color: theme.text,
                        borderLeft: isGuinnessSection
                          ? `4px solid #F57C00`
                          : `4px solid ${theme.headerColor}`,
                      }}
                    >
                      {isGuinnessSection && (
                        <span className="section-icon">🏆</span>
                      )}
                      {section["title"]}
                    </h2>
                  </div>
                </Fade>
                <div className="achievement-cards-container">
                  {section["achievements"].map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      index={index}
                      totalCards={section["achievements"].length}
                      achievement={achievement}
                      theme={theme}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Achievements;
