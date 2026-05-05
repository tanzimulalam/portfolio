import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CalmLayout from "../../components/calmLayout/CalmLayout";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { academicProfile, achievements, experience } from "../../portfolio.js";
import "./AboutPage.css";

export default function AboutPage({ theme }) {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace(/^#/, "");
    const run = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    requestAnimationFrame(run);
    const t = window.setTimeout(run, 120);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <CalmLayout theme={theme}>
      <div className="calm-page calm-page-about">
        <header className="calm-page-header calm-inner">
          <h1 className="calm-page-title">About</h1>
          <p className="calm-page-lead">
            Story, focus areas, and selected experiences—written for hiring
            managers and collaborators who care about clarity.
          </p>
        </header>

        <section className="calm-inner calm-about-section" id="story">
          <h2 className="calm-about-h2">Story</h2>
          <div className="calm-about-story-grid">
            <img
              className="calm-about-photo"
              src={academicProfile.headshotUrl}
              alt=""
              width={200}
              height={250}
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="calm-about-bio">{academicProfile.bio}</p>
              <h3 className="calm-about-h3">Focus areas</h3>
              <ul className="calm-about-pills">
                {academicProfile.researchInterests.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="calm-inner calm-about-section experience-section-wrap"
          id="experience"
        >
          <h2 className="calm-about-h2">{experience.title}</h2>
          <p className="calm-about-deck">{experience.description}</p>
          {experience.sections.map((section) => (
            <div key={section.title} className="calm-exp-section">
              <h3
                className={`calm-exp-heading ${
                  section.work ? "calm-exp-heading--work" : ""
                }`}
              >
                {section.title}
              </h3>
              <div className="calm-exp-cards">
                {section.experiences.map((exp, index) => (
                  <ExperienceCard
                    key={`${section.title}-${index}`}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={exp}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="calm-inner calm-about-section" id="achievements">
          <h2 className="calm-about-h2">{achievements.title}</h2>
          <p className="calm-about-deck">{achievements.description}</p>
          {achievements.sections.map((section) => (
            <div key={section.title} className="calm-ach-section">
              <h3 className="calm-ach-heading">{section.title}</h3>
              <div className="calm-ach-cards">
                {section.achievements.map((ach, index) => (
                  <AchievementCard
                    key={`${section.title}-${index}`}
                    index={index}
                    totalCards={section.achievements.length}
                    achievement={ach}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </CalmLayout>
  );
}
