import React from "react";
import Modal from "../Modal/Modal";

type Props = {
  modalOpen: boolean;
  closeModal: (close: boolean) => void;
  effect: string;
  value: number;
};

const MonsterEffect: React.FC<Props> = ({
  modalOpen,
  closeModal,
  effect,
  value,
}: Props) => {
  let render = (
    <>
      <h1>Be Careful!!!!</h1>
      <p id="effect">
        <span className="text--light">Monster Effect:</span> {effect}
      </p>
      <p id="value">
        <span className="text--light">Value:</span> {value}
      </p>
    </>
  );

  if (effect.toLowerCase() === "horror") {
    render = (
      <>
        <h1 className="text--red">You lost your turn</h1>
        <p>you run away in fear!!</p>
      </>
    );
  }

  const onClickFunc = (): void => {
    closeModal(effect.toLowerCase() !== "horror");
  };

  if (modalOpen) {
    return (
      <Modal>
        {render}
        <button className="button button--cyan" onClick={onClickFunc}>
          Continue
        </button>
      </Modal>
    );
  }

  return null;
};

export default MonsterEffect;
