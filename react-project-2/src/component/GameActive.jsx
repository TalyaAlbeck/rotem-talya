import { useState } from "react";
import GameBoard from "./game-board";

function GameActive(props) {
  const [turn, setTurn] = useState(0);

  const changeTurn = () => {
    setTurn(turn + 1);
    if (turn === props.usersArr.length) {
      setTurn(1);
    }
  };

  return (
    <>
      <button id="start" onClick={changeTurn}>
        start game:
      </button>
      <div id="game">
        {props.usersArr.map((item, index) => {
          return (
            <GameBoard
              scores={props.scores}
              setScores={props.setScores}
              usersArr={props.usersArr}
              setUsersArr={props.setUsersArr}
              user={item}
              key={item.name}
              id={index + 1}
              changeTurn={changeTurn}
              turn={turn}
              setTurn={setTurn}
            />
          );
        })}
      </div>
    </>
  );
}

export default GameActive;
