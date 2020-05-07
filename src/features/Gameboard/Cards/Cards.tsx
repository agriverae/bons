import React from "react";
import Card from "./Card/Card";
import { CardType } from "../../../../shared/types/types";

type CardProps = {
  cards: CardType[];
  onCardSelected: (id: string) => void;
  cardSelectedId: string;
};

const Cards: React.FC<CardProps> = ({
  cards,
  onCardSelected,
  cardSelectedId,
}: CardProps) => {
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
