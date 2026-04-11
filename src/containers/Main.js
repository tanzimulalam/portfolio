import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={() => (
              <Redirect to={{ pathname: "/home", hash: "#experience" }} />
            )}
          />
          <Route
            path="/achievements"
            exact
            render={() => (
              <Redirect to={{ pathname: "/home", hash: "#achievements" }} />
            )}
          />
          <Route
            path="/projects"
            exact
            render={() => (
              <Redirect to={{ pathname: "/home", hash: "#projects" }} />
            )}
          />
          <Route
            path="/contact-me"
            exact
            render={() => (
              <Redirect to={{ pathname: "/home", hash: "#contact" }} />
            )}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
