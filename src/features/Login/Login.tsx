import React, { useState, FormEvent, ChangeEvent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { updateGameType } from "../../../shared/types/types";
import CREATE_GAME from "./graphql/createGame.graphql";
import "./styles.css";

type LoginProps = {
  updateGameData: updateGameType;
};

const Login: React.FC<LoginProps> = ({ updateGameData }: LoginProps) => {
  const [name, setName] = useState("");
  const history = useHistory();
  const [createGame] = useMutation(CREATE_GAME);

  const handleSubmit = async (e: FormEvent): Promise<any> => {
    e.preventDefault();
    const response = await createGame({
      variables: {
        user: {
          name,
        },
      },
    });
    updateGameData(response.data.createGame);
    history.push("/gameboard");
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>): void =>
    setName(e.target.value);

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Welcome to Bons Game</h1>
        <label htmlFor="name" className="form__name mt--small">
          What&apos;s your name?
        </label>
        <input
          id="name"
          value={name}
          onChange={changeName}
          placeholder="NAME"
          name="name"
          type="text"
          data-testid="name"
          className="form__text mt--big"
        />
        <button
          disabled={name === ""}
          type="submit"
          className="button button--dark-shadow mt--small button--cyan"
        >
          Let&apos;s Play
        </button>
      </form>
    </div>
  );
};

export default Login;
