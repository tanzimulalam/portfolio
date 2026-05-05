import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import "./Error.css";
import { Link } from "react-router-dom";
import { settings } from "../../../portfolio.js";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    const homeTo = settings.isSplash ? "/home" : "/";
    return (
      <div className="error-main academic-site-main">
        <Header theme={this.props.theme} />
        <main className="academic-page-main">
          <div className="error-class">
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to={homeTo}
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </div>
        </main>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
