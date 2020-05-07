import React, { useState } from "react";
import ReactDOM from "react-dom";
import { GameDataType } from "../../shared/types/types";
import ApolloWrapper from "../../model/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import dummyGame from "./dummyData.json";
import "./styles/normalize.css";
import "./styles/styles.css";

const App: React.FC = () => {
  const [gameData, setGameData] = useState<GameDataType>(dummyGame);

  const updateGameData = (gameInfo: GameDataType): void => {
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
      <BrowserRouter>
        <Routes updateGameData={updateGameData} gameData={gameData} />
      </BrowserRouter>
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
