import React, { useState } from "react";
import GameActive from "./GameActive";

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  if (number === 100) {
    alert(`${props.user.name} finished!`);
  }

  return (
    <div className="player">
      <h3>name: {props.user.name}</h3>
      <h3>number: {number}</h3>
      <h3>steps: {steps}</h3>
      <button disabled={props.turn === props.id ? false : true} onClick={() => {
          setNumber(number + 1);
          setSteps(steps + 1);
          props.changeTurn(props.id);
        }}
      >
        +1
      </button>
      <button disabled={props.turn === props.id ? false : true} onClick={() => {
          setNumber(number - 1);
          setSteps(steps + 1);
          props.changeTurn(props.id);
        }}
      >
        -1
      </button>
      <button disabled={props.turn === props.id ? false : true} onClick={() => {
          setNumber(number * 2);
          setSteps(steps + 1);
          props.changeTurn(props.id);
        }}
      >
        x2
      </button>
      <button disabled={props.turn === props.id ? false : true} onClick={() => {
          setNumber(Math.floor(number / 2));
          setSteps(steps + 1);
          props.changeTurn(props.id);
        }}
      >
        \2
      </button>
    </div>
  );
}

export default GameBoard;
