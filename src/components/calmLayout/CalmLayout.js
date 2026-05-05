import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TopButton from "../topButton/TopButton";
import "./CalmLayout.css";

export default function CalmLayout({ theme, children }) {
  return (
    <div className="home-academic-shell academic-site-main calm-site">
      <Header theme={theme} />
      <main className="home-academic-main calm-main">{children}</main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
