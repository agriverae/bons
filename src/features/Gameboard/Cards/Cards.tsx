import React from "react";
import Card from "./Card/Card";

const Cards = ({ cards, onCardSelected, cardSelectedId }) => {
  return (
    <div className="cardList mt mb">
      {cards.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          id={cardInfo.id}
          effect={cardInfo.effect}
          value={cardInfo.value}
          onCardSelected={onCardSelected}
          selected={cardSelectedId === cardInfo.id}
        />
      ))}
    </div>
  );
};

export default Cards;
