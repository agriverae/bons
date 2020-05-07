import React from "react";

type Props = {
  id: string;
  effect: string;
  value: string;
  selected: boolean;
  onCardSelected: (id: string) => void;
};

const Card: React.FC<Props> = ({
  effect,
  value,
  selected,
  onCardSelected,
  id,
}: Props) => {
  const onClickCall = (): void => onCardSelected(id);

  return (
    <div onClick={onClickCall} className={`card ${selected ? "selected" : ""}`}>
      <div className="card__image-container">
        <img
          src={`../../../shared/images/${effect.toLowerCase()}.jpg`}
          alt="Heal"
        />
      </div>
      <p className="card__description mt">
        {effect}: {value}
      </p>
    </div>
  );
};

export default Card;
