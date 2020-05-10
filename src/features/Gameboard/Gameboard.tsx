import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import GameEnd from "./GameEnd/GameEnd";
import NEXT_TURN from "./graphql/nextTurn.graphql";
import MonsterEffect from "./MonsterEffect/MonsterEffect";
import Cards from "./Cards/Cards";
import CharInfo from "./CharInfo/CharInfo";
import Turns from "./Turns/Turns";
import { GameDataType } from "../../../shared/types/types";
import "./styles.css";

type PropType = {
  gameData: GameDataType;
};

const Gameboard: React.FC<PropType> = ({ gameData }: PropType) => {
  const [gameInfo, setGameInfo] = useState<GameDataType>(gameData);
  const [nextTurn] = useMutation(NEXT_TURN);
  const [card, setCard] = useState({
    selected: false,
    id: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const { player, monster, monsterEffect } = gameInfo;

  const openModal = (): void => setModalOpen(true);

  const endTurn = async (): Promise<any> => {
    setCard({
      selected: false,
      id: "",
    });

    const response = await nextTurn({
      variables: {
        gameInfo: {
          gameId: gameInfo.id,
          cardId: card.id,
        },
      },
    });

    setGameInfo({
      ...response.data.nextTurn.game,
      monsterEffect: {
        ...response.data.nextTurn.monsterEffect,
      },
    });

    openModal();
  };

  const closeModal = (isTurnEnd: boolean): void => {
    setModalOpen(false);
    if (isTurnEnd) {
      endTurn();
    }
  };

  const onCardSelected = (id: string): void => {
    setCard({
      id,
      selected: true,
    });
  };

  const won = !monster.hp;
  const lost = (!gameInfo.turnsLeft && !won) || !player.hp;

  return (
    <div className="gameboard">
      <GameEnd won={won} lost={lost} />
      <MonsterEffect
        modalOpen={modalOpen}
        closeModal={closeModal}
        effect={monsterEffect.effect}
        value={monsterEffect.value}
      />
      <Turns
        currentTurn={gameInfo.currentTurn}
        turnsLeft={gameInfo.turnsLeft}
        endTurn={endTurn}
        endTurnActive={!card.selected}
      />
      <div className="info-group">
        <CharInfo
          name={monster.name}
          hp={monster.hp}
          maxHp={monster.maxHp}
          shield={monster.shield}
          image={monster.image}
        />
        <CharInfo
          name={player.name}
          hp={player.hp}
          maxHp={player.maxHp}
          shield={player.shield}
        />
      </div>
      <Cards
        cards={player.cards}
        onCardSelected={onCardSelected}
        cardSelectedId={card.id}
      />
    </div>
  );
};

export default Gameboard;
