import React from "react";
import Modal from "../Modal/Modal";

type Props = {
  modalOpen: boolean;
  closeModal: (isTurnEnd: boolean) => void;
  effect: string;
  value: number;
};

const MonsterEffect: React.FC<Props> = ({
  modalOpen,
  closeModal,
  effect,
  value,
}: Props) => {
  const onClickFunc = () => {
    if (effect.toLowerCase() === "horror") {
      closeModal(true);
    } else {
      closeModal(false);
    }
  };

  if (modalOpen) {
    return (
      <Modal>
        <h1>Be Careful!!!!</h1>
        <p id="effect">
          <span className="text--light">Monster Effect:</span> {effect}
        </p>
        <p id="value">
          <span className="text--light">Value:</span> {value}
        </p>
        <button className="button button--cyan" onClick={onClickFunc}>
          Continue
        </button>
      </Modal>
    );
  }

  return null;
};

export default MonsterEffect;
