import React from "react";

type TurnsType = {
  currentTurn: number;
  turnsLeft: number;
  endTurn: () => Promise<any>;
  endTurnActive: boolean;
};

const Turns: React.FC<TurnsType> = ({
  currentTurn,
  turnsLeft,
  endTurn,
  endTurnActive,
}: TurnsType) => {
  return (
    <div className="turns">
      <h2 className="turns__title">Turns</h2>
      <div className="turns__content">
        <div className="contentDisplay">
          <h3 className="contentDisplay__title">currrent</h3>
          <p className="contentDisplay__description">{currentTurn}</p>
        </div>
        <div className="contentDisplay">
          <h3 className="contentDisplay__title">Past</h3>
          <p className="contentDisplay__description">
            {!currentTurn ? currentTurn : currentTurn - 1}
          </p>
        </div>
        <div className="contentDisplay">
          <h3 className="contentDisplay__title">Left</h3>
          <p className="contentDispla9, y__description">{turnsLeft}</p>
        </div>
      </div>
      <button
        disabled={endTurnActive}
        onClick={endTurn}
        className="button button--cyan"
      >
        End Turn
      </button>
    </div>
  );
};

export default Turns;
