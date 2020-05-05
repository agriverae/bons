import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../features/Login/Login";
import Gameboard from "../features/Gameboard/Gameboard";

const Routes = ({ gameData, updateGameData }) => (
  <Switch>
    <Route exact path="/">
      <Login updateGameData={updateGameData} />
    </Route>
    <Route path="/gameboard">
      <Gameboard gameData={gameData} />
    </Route>
    <Route path="*">
      <Login updateGameData={updateGameData} />
    </Route>
  </Switch>
);

export default Routes;
