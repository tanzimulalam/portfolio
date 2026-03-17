import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import HeroScene from "../../components/heroScene/HeroScene";
import anime from "animejs";

export default function Greeting(props) {
  const theme = props.theme;

  React.useEffect(() => {
    // Anime.js hero intro (lightweight, runs once)
    const t = setTimeout(() => {
      anime
        .timeline({ easing: "easeOutExpo" })
        .add({
          targets: ".greeting-text",
          translateY: [18, 0],
          opacity: [0, 1],
          duration: 700,
        })
        .add(
          {
            targets: ".greeting-nickname",
            translateY: [12, 0],
            opacity: [0, 1],
            duration: 550,
          },
          "-=420"
        )
        .add(
          {
            targets: ".greeting-text-p",
            translateY: [10, 0],
            opacity: [0, 1],
            duration: 550,
          },
          "-=420"
        )
        .add(
          {
            targets: ".social-media-div a",
            translateY: [8, 0],
            opacity: [0, 1],
            delay: anime.stagger(70),
            duration: 450,
          },
          "-=380"
        );
    }, 60);

    return () => clearTimeout(t);
  }, []);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <HeroScene />
          <div className="hero-blobs" aria-hidden="true">
            <span className="hero-blob hero-blob-1" />
            <span className="hero-blob hero-blob-2" />
            <span className="hero-blob hero-blob-3" />
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
