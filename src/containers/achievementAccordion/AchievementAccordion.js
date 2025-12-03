import React, { Component } from "react";
import AchievementCard from "../../components/achievementCard/AchievementCard.js";
import "./AchievementAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class AchievementAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="achievement-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["achievements"].map((achievement, index) => {
                  return (
                    <AchievementCard
                      index={index}
                      totalCards={section["achievements"].length}
                      achievement={achievement}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default AchievementAccordion;
