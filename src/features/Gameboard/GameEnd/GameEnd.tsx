import React from "react";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

type Props = {
  won: boolean;
  lost: boolean;
};

const GameEnd: React.FC<Props> = ({ won, lost }: Props) => {
  let message = null;

  if (won) {
    message = (
      <Modal>
        <p>Congratulations</p>
        <p>You Win! (:</p>
        <Link to="/" className="button button--cyan">
          Play Again?
        </Link>
      </Modal>
    );
  }
  if (lost) {
    message = (
      <Modal>
        <p>Ups... you lose!</p>
        <Link to="/" className="button button--cyan">
          Play Again?
        </Link>
      </Modal>
    );
  }

  return message;
};

export default GameEnd;
