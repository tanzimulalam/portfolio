import React, { Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../site/pages/Home";

// Home ships in the main bundle; everything else is split.
const Research = lazy(() => import("../site/pages/Research"));
const Work = lazy(() => import("../site/pages/Work"));
const About = lazy(() => import("../site/pages/About"));
const Contact = lazy(() => import("../site/pages/Contact"));
const NotFound = lazy(() => import("../site/pages/NotFound"));

function PageLoading() {
  return (
    <div
      className="sg-wrap"
      style={{
        padding: "6rem 0",
        textAlign: "center",
        color: "var(--text-3)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      Loading…
    </div>
  );
}

export default function Main() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/research" exact component={Research} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />

          {/* Legacy paths from earlier versions of the site. */}
          <Route path="/home" exact render={() => <Redirect to="/" />} />
          <Route path="/splash" exact render={() => <Redirect to="/" />} />
          <Route
            path="/projects"
            exact
            render={() => <Redirect to="/work" />}
          />
          <Route
            path="/opensource"
            exact
            render={() => <Redirect to="/work" />}
          />
          <Route
            path="/uses"
            exact
            render={() => (
              <Redirect to={{ pathname: "/work", hash: "#toolkit" }} />
            )}
          />
          <Route
            path="/experience"
            exact
            render={() => (
              <Redirect to={{ pathname: "/about", hash: "#experience" }} />
            )}
          />
          <Route
            path="/education"
            exact
            render={() => (
              <Redirect to={{ pathname: "/about", hash: "#education" }} />
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

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
