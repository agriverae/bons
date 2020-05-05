import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import "./styles.css";

// llevar a otra carpeta
const CREATE_GAME = gql`
  mutation CREATE_GAME($user: GameCreateInput!) {
    createGame(input: $user) {
      id
      currentTurn
      maxTurns
      turnsLeft
      player {
        id
        name
        hp
        maxHp
        shield
        cards {
          id
          value
          effect
        }
      }
      monster {
        id
        name
        hp
        maxHp
        shield
        image
      }
    }
  }
`;

const Login = ({ updateGameData }) => {
  const [name, setName] = useState();
  const history = useHistory();
  const [createGame] = useMutation(CREATE_GAME);
  console.log(updateGameData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createGame({
      variables: {
        user: {
          name,
        },
      },
    });
    // Falta tirar un error si algo pasa
    updateGameData(response.data.createGame);
    history.push("/gameboard");
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Welcome to Bons Game</h1>
        <label htmlFor="name" className="form__name mt--small">
          What's your name?
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="NAME"
          name="name"
          type="text"
          className="form__text mt--big"
        />
        <button type="submit" className="button mt--small button--cyan">
          Let's Play
        </button>
      </form>
    </div>
  );
};

export default Login;
