import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

const WorkPage = lazy(() => import("../pages/work/WorkPage"));
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const UsesPage = lazy(() => import("../pages/uses/UsesPage"));
const CalmContactPage = lazy(() => import("../pages/contact/CalmContactPage"));

function PageLoading() {
  return (
    <div
      className="calm-page"
      style={{
        padding: "3rem 1.5rem",
        textAlign: "center",
        color: "var(--color-text-muted)",
        fontFamily: "var(--font-body)",
      }}
    >
      Loading…
    </div>
  );
}

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Suspense fallback={<PageLoading />}>
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

            {settings.isSplash ? (
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
            ) : (
              <Route path="/home" exact render={() => <Redirect to="/" />} />
            )}

            <Route
              path="/work"
              exact
              render={(props) => (
                <WorkPage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/about"
              exact
              render={(props) => (
                <AboutPage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/uses"
              exact
              render={(props) => (
                <UsesPage {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              exact
              render={(props) => (
                <CalmContactPage {...props} theme={this.props.theme} />
              )}
            />

            {/* Legacy paths */}
            <Route
              path="/projects"
              exact
              render={() => <Redirect to="/work" />}
            />
            <Route
              path="/experience"
              exact
              render={() => (
                <Redirect to={{ pathname: "/about", hash: "#experience" }} />
              )}
            />
            <Route
              path="/achievements"
              exact
              render={() => (
                <Redirect to={{ pathname: "/about", hash: "#achievements" }} />
              )}
            />
            <Route
              path="/contact-me"
              exact
              render={() => <Redirect to="/contact" />}
            />

            {settings.isSplash && (
              <Route
                path="/splash"
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
            )}

            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
