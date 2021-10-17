import React from "react";
import "./fonts/index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Game from "./components/Game/Game";
import Home from "./components/Home/Home";
import Leaderboards from "./components/Leaderboards/Leaderboards";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/leaderboards" component={Leaderboards} />
      </Switch>
    </Router>
  );
};
export default Routes;
