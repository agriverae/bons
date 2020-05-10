import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GameDataType } from "../../shared/types/types";
import ApolloWrapper from "../../model/index";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import dummyGame from "./dummyData.json";
import "./styles/normalize.css";
import "./styles/styles.css";

const App: React.FC = () => {
  const [gameData, setGameData] = useState<GameDataType>(dummyGame);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const updateGameData = (gameInfo: GameDataType): void => {
    setIsLoggedIn(true);
    setGameData({
      ...gameInfo,
      monsterEffect: {
        effect: "",
        value: 0,
      },
    });
  };

  return (
    <main className="app">
      <HashRouter>
        <Routes
          isLoggedIn={isLoggedIn}
          updateGameData={updateGameData}
          gameData={gameData}
        />
      </HashRouter>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
