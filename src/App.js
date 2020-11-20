import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";


import BaseLayout from "./BaseLayout";

function App() {

  return (
   <>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BaseLayout>
      </Router>
      </>
  );
}

export default App;
