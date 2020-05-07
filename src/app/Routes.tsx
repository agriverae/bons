import React from "react";
import { Route, Switch } from "react-router-dom";
import { GameDataType, updateGameType } from "../../shared/types/types";
import Login from "../features/Login/Login";
import Gameboard from "../features/Gameboard/Gameboard";

type RouteTypes = {
  gameData: GameDataType;
  updateGameData: updateGameType;
};

const Routes: React.FC<RouteTypes> = ({
  gameData,
  updateGameData,
}: RouteTypes) => (
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
