import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import OnePager from "./OnePager";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default function Home({ theme }) {
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
    const t = window.setTimeout(run, 100);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div className="home-academic-shell academic-site-main">
      <Header theme={theme} />
      <main className="home-academic-main">
        <OnePager theme={theme} />
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
