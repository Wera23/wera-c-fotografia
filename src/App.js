import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Mountains from "./components/MainGallery/MountainsGallery";
import Travels from "./components/MainGallery/TravelGallery";
import Cats from "./components/MainGallery/CatsGallery";
import Activities from "./components/MainGallery/ActivitiesGallery";
import Polska from "./components/MainGallery/PolskaGallery";
import Projects from "./components/Projects/Projects";

import BaseLayout from "./BaseLayout";

function App() {
  return (
    <>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/mountains" component={Mountains} />
            <Route exact path="/travels" component={Travels} />
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/Polska" component={Polska} />
          </Switch>
        </BaseLayout>
      </Router>
    </>
  );
}

export default App;
