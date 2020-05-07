import React from "react";
import Modal from "../Modal/Modal";

const MonsterEffect = ({ modalOpen, closeModal, effect, value }) => {
  return (
    modalOpen && (
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
    )
  );
};

export default MonsterEffect;
