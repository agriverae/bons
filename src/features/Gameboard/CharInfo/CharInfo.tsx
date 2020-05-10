import React from "react";
import defaultImage from "../../../../shared/images/defaultImage.jpg";

type CharType = {
  name: string;
  hp: number;
  maxHp: number;
  shield: number;
  image?: string;
};

const CharInfo: React.FC<CharType> = ({
  name,
  hp,
  maxHp,
  shield,
  image,
}: CharType) => {
  return (
    <div className="info">
      <div className="element mb--extra-small">
        <div className="element__image-container">
          <img
            src={image ? image : defaultImage}
            alt={name}
            className="element__image"
          />
        </div>
        <div className="sideContent">
          <h3 className="sideContent__title">{name}</h3>
          <p className="sideContent__description mt">
            HP:{" "}
            <span className="text--strong">
              {hp}/{maxHp}
            </span>
          </p>
        </div>
      </div>
      <div className="shieldData">
        <h3>
          Shield: <span className="text--strong">{shield}</span>
        </h3>
      </div>
    </div>
  );
};

export default CharInfo;
