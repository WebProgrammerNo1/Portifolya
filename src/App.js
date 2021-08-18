import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Statistics = React.lazy(() => import("./components/Statistics"));
const Boost = React.lazy(() => import("./components/Boost"));
const Footer = React.lazy(() => import("./components/Footer"));
const NewNav = React.lazy(() => import("./components/NewNav"));
const Hero = React.lazy(() => import("./components/Hero"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex m-auto">
          <LoadingSpinner />
        </div>
      }
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <>
              <NewNav />
              <Hero />
              <Statistics />
              <Boost />
              <Footer />
            </>
          </Route>
          <Route path="*">
            <h1>Oooops... Requested page was not found</h1>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
