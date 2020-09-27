import React from "react";
import Characters from "./pages/characters";
import Planets from "./pages/planets";
import Citizens from "./pages/citizens";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/personagens">
          <Characters />
        </Route>

        <Route exact path="/planetas">
          <Planets />
        </Route>
        <Route path="/planetas/:namePlanet">
          <Citizens />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
