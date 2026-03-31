import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import { greeting } from "../../portfolio";

function AnimatedSplash(props) {
  return (
    <div className="intro-wrapper">
      <div className="intro-screen" style={{ backgroundColor: "#030303" }}>
        <div className="intro-content">
          <div className="intro-lock" aria-hidden="true">
            <span className="intro-lock-shackle" />
            <span className="intro-lock-body" />
          </div>
          <h1 className="intro-name">{greeting.title}</h1>
        </div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 4200);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
