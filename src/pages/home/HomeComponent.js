import React, { Component } from "react";
import Header from "../../components/header/Header";
import AcademicHome from "./AcademicHome";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div className="home-academic-shell academic-site-main">
        <Header theme={this.props.theme} />
        <main className="home-academic-main">
          <AcademicHome />
        </main>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
