import React, { useState } from "react";
import GameActive from "./GameActive";

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  const [finished, setFinished] = useState(false);

  const endPlaying = (player) => {
    let usersArray = props.usersArr.filter((item) => item.name !== player);
    props.setUsersArr(usersArray);
  };

  function onClickHandler(num) {
    if (num === 100 && !finished) {
      setFinished(true);
    }
    props.changeTurn();

    setSteps(steps + 1);
  }

  return (
    <div className="player">
      <h3>name: {props.user.name}</h3>
      <h3>number: {number}</h3>
      <h3>steps: {steps}</h3>
      {finished ? (
        <>
          <button
            onClick={() => {
              endPlaying(props.user.name);
            }}
          >
            finish
          </button>
          <button
            onClick={() => {
              setNumber(Math.floor(Math.random() * 100));
              setFinished(false);
              setSteps(0);
            }}
          >
            continue
          </button>
        </>
      ) : (
        <>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              setNumber(number + 1);
              onClickHandler(number + 1);
            }}
          >
            +1
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              setNumber(number - 1);
              onClickHandler(number - 1);
            }}
          >
            -1
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              setNumber(number * 2);
              onClickHandler(number * 2);
            }}
          >
            x2
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              setNumber(Math.floor(number / 2));
              onClickHandler(Math.floor(number / 2));
            }}
          >
            \2
          </button>
        </>
      )}
    </div>
  );
}

export default GameBoard;
