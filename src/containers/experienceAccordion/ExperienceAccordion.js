import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            const isWorkSection =
              section["title"] === "Work" || section["work"];
            return (
              <Panel
                className={`accord-panel ${
                  isWorkSection ? "work-section" : ""
                }`}
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: isWorkSection
                        ? `linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)`
                        : `${theme.body}`,
                      border: `2px solid`,
                      borderRadius: `8px`,
                      borderColor: isWorkSection
                        ? `rgba(102, 126, 234, 0.3)`
                        : `${theme.headerColor}`,
                      marginBottom: `8px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      fontSize: isWorkSection ? "20px" : "18px",
                      fontWeight: isWorkSection ? "600" : "400",
                      padding: "15px 20px",
                      transition: "all 0.3s ease",
                      ":hover": {
                        color: isWorkSection
                          ? `#667eea`
                          : `${theme.secondaryText}`,
                        borderColor: isWorkSection
                          ? `rgba(102, 126, 234, 0.5)`
                          : `${theme.headerColor}`,
                        transform: "translateX(5px)",
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      padding: isWorkSection ? "20px" : "15px",
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
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

export default ExperienceAccordion;
