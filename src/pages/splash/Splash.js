import React, { useEffect, useRef, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

const WELCOME_LINE = "Welcome to Fahim's Portfolio";
const PROMPT_LINE = "> Press ENTER to continue";

function BinaryRain() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    const fontSize = 15;
    let columns = 0;
    const drops = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.ceil(width / fontSize);
      drops.length = 0;
      for (let i = 0; i < columns; i += 1) {
        drops[i] = Math.random() * -100;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Consolas", "Courier New", monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < columns; i += 1) {
        const x = i * fontSize + fontSize / 2;
        const trail = 10;
        for (let j = 0; j < trail; j += 1) {
          const row = drops[i] - j;
          const y = row * fontSize;
          if (y < -fontSize || y > height + fontSize) continue;
          const bit =
            (i * 17 + j * 3 + Math.floor(drops[i] * 11)) % 2 === 0 ? "1" : "0";
          const head = j === 0;
          const fade = 1 - j / trail;
          const alpha = head ? 0.95 : 0.12 + fade * 0.5;
          if (head) {
            ctx.fillStyle = `rgba(220, 255, 230, ${alpha})`;
          } else {
            ctx.fillStyle = `rgba(0, 255, 80, ${alpha})`;
          }
          ctx.fillText(bit, x, y);
        }

        const yHead = drops[i] * fontSize;
        if (yHead > height && Math.random() > 0.985) {
          drops[i] = Math.random() * -20;
        }
        drops[i] += 0.42 + Math.random() * 0.38;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="splash-binary-canvas"
      aria-hidden="true"
    />
  );
}

export default function Splash() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState("welcome");
  const [promptTyped, setPromptTyped] = useState("");
  const [enterFlash, setEnterFlash] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = window.setInterval(() => {
      i += 1;
      setTyped(WELCOME_LINE.slice(0, i));
      if (i >= WELCOME_LINE.length) {
        window.clearInterval(t);
        window.setTimeout(() => setPhase("prompt"), 400);
      }
    }, 52);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    if (phase !== "prompt") return undefined;
    let j = 0;
    const t2 = window.setInterval(() => {
      j += 1;
      setPromptTyped(PROMPT_LINE.slice(0, j));
      if (j >= PROMPT_LINE.length) {
        window.clearInterval(t2);
        window.setTimeout(() => {
          setEnterFlash(true);
          window.setTimeout(() => {
            setEnterFlash(false);
            setPhase("rain");
            window.setTimeout(() => setRedirect(true), 3200);
          }, 420);
        }, 900);
      }
    }, 38);
    return () => window.clearInterval(t2);
  }, [phase]);

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="splash-root">
      {phase === "rain" ? <BinaryRain /> : null}

      <div
        className={`splash-terminal-wrap ${
          phase === "rain" ? "splash-terminal-fade" : ""
        }`}
      >
        <div className="splash-terminal">
          <p className="splash-line splash-prompt">root@fahim:~$ </p>
          <p className="splash-line splash-main">
            {typed}
            {phase === "welcome" && typed.length < WELCOME_LINE.length ? (
              <span className="splash-caret" />
            ) : null}
          </p>
          {phase !== "welcome" ? (
            <p className="splash-line splash-second">
              {promptTyped}
              {phase === "prompt" && promptTyped.length < PROMPT_LINE.length ? (
                <span className="splash-caret" />
              ) : null}
              {enterFlash ? (
                <span className="splash-enter-effect"> ↵</span>
              ) : null}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
