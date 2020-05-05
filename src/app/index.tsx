import React, { useState } from "react";
import ReactDOM from "react-dom";
import ApolloWrapper from "../../model/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./styles/normalize.css";
import "./styles/styles.css";

const App = () => {
  const [gameData, setGameData] = useState({});

  const updateGameData = (gameInfo) => {
    setGameData({
      ...gameInfo,
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
