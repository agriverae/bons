import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { GameDataType, updateGameType } from "../../shared/types/types";
import Login from "../features/Login/Login";
import Gameboard from "../features/Gameboard/Gameboard";

type RouteTypes = {
  isLoggedIn: boolean;
  gameData: GameDataType;
  updateGameData: updateGameType;
};

const PrivateRoute = ({ children, isLoggedIn, ...rest }: any): any => {
  return (
    <Route
      {...rest}
      render={({ location }): any =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes: React.FC<RouteTypes> = ({
  gameData,
  isLoggedIn,
  updateGameData,
}: RouteTypes) => (
  <Switch>
    <Route exact path="/">
      <Login updateGameData={updateGameData} />
    </Route>
    <PrivateRoute isLoggedIn={isLoggedIn} path="/gameboard">
      <Gameboard gameData={gameData} />
    </PrivateRoute>
    <Route path="*">
      <Login updateGameData={updateGameData} />
    </Route>
  </Switch>
);

export default Routes;
