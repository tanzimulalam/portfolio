import React, { useEffect, useMemo, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import { greeting } from "../../portfolio";
import CyberIntroScene from "./CyberIntroScene";
import profileImage from "../../assets/images/animated_profile.png";

const NAME_TEXT = "T A N Z I M U L   A L A M   F A H I M";
const LOAD_TEXT = "Portfolio loading...";

function AnimatedSplash() {
  const [nameIndex, setNameIndex] = useState(0);
  const [loadIndex, setLoadIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showGlobe, setShowGlobe] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const typedName = useMemo(() => NAME_TEXT.slice(0, nameIndex), [nameIndex]);
  const typedLoad = useMemo(() => LOAD_TEXT.slice(0, loadIndex), [loadIndex]);

  useEffect(() => {
    let nameTimer = null;
    let loadTimer = null;
    let progressTimer = null;
    let phaseTimeout = null;
    let exitTimeout = null;
    let redirectTimeout = null;

    nameTimer = window.setInterval(() => {
      setNameIndex((prev) => {
        if (prev >= NAME_TEXT.length) {
          window.clearInterval(nameTimer);
          phaseTimeout = window.setTimeout(() => {
            loadTimer = window.setInterval(() => {
              setLoadIndex((loadPrev) => {
                if (loadPrev >= LOAD_TEXT.length) {
                  window.clearInterval(loadTimer);
                  phaseTimeout = window.setTimeout(() => {
                    progressTimer = window.setInterval(() => {
                      setProgress((progressPrev) => {
                        if (progressPrev >= 100) {
                          window.clearInterval(progressTimer);
                          setShowGlobe(true);
                          exitTimeout = window.setTimeout(
                            () => setIsExiting(true),
                            1300
                          );
                          redirectTimeout = window.setTimeout(
                            () => setRedirect(true),
                            2300
                          );
                          return 100;
                        }
                        return progressPrev + 2;
                      });
                    }, 36);
                  }, 260);
                  return LOAD_TEXT.length;
                }
                return loadPrev + 1;
              });
            }, 40);
          }, 260);
          return NAME_TEXT.length;
        }
        return prev + 1;
      });
    }, 80);

    return () => {
      window.clearInterval(nameTimer);
      window.clearInterval(loadTimer);
      window.clearInterval(progressTimer);
      window.clearTimeout(phaseTimeout);
      window.clearTimeout(exitTimeout);
      window.clearTimeout(redirectTimeout);
    };
  }, []);

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="intro-wrapper">
      <div
        className={`intro-screen ${showGlobe ? "intro-screen-globe" : ""} ${
          isExiting ? "intro-screen-exit" : ""
        }`}
        style={{ backgroundColor: "#030303" }}
      >
        {showGlobe ? <CyberIntroScene /> : null}
        <div className="intro-grid">
          <div className="intro-terminal">
            <p className="intro-terminal-line">
              Initializing secure session...
            </p>
            <p className="intro-terminal-line intro-terminal-line-main">
              {typedName}
              <span className="intro-caret" />
            </p>
            <p className="intro-terminal-line">
              {typedLoad}
              {nameIndex >= NAME_TEXT.length ? (
                <span className="intro-caret" />
              ) : null}
            </p>
            <div className="intro-progress">
              <div
                className="intro-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="intro-terminal-line intro-terminal-meta">
              [{String(progress).padStart(3, "0")}%] threat-map boot sequence
            </p>
          </div>
          <div className={`intro-visual ${showGlobe ? "intro-visual-on" : ""}`}>
            <div className="intro-avatar-wrap">
              <img
                className="intro-avatar"
                src={profileImage}
                alt={greeting.title}
              />
            </div>
            <h1 className="intro-name">{greeting.title}</h1>
            <p className="intro-tagline">
              Cybersecurity | Threat Intelligence | AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Splash() {
  return <AnimatedSplash />;
}
