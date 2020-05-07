import React from "react";
import Modal from "../Modal/Modal";

type Props = {
  modalOpen: boolean;
  closeModal: () => void;
  effect: string;
  value: number;
};

const MonsterEffect: React.FC<Props> = ({
  modalOpen,
  closeModal,
  effect,
  value,
}: Props) => {
  if (modalOpen) {
    return (
      <Modal>
        <h1>Be Careful!!!!</h1>
        <p>
          <span className="text--light">Monster Effect:</span> {effect}
        </p>
        <p>
          <span className="text--light">Value:</span> {value}
        </p>
        <button className="button button--cyan" onClick={closeModal}>
          Continue
        </button>
      </Modal>
    );
  }

  return null;
};

export default MonsterEffect;
