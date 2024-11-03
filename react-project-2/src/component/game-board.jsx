import React, { useState } from "react";

function showGame() {
  m = false;
}

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  console.log("hi");
  if (number === 100) {
    alert(`${props.userName} finished!`);
  }

  return (
    <>
      <h3>name: {props.user.name}</h3>
      <h3>number: {number}</h3>
      <h3>steps: {steps}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
          setSteps(steps + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
          setSteps(steps + 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setNumber(number * 2);
          setSteps(steps + 1);
        }}
      >
        x2
      </button>
      <button
        onClick={() => {
          setNumber(Math.floor(number / 2));
          setSteps(steps + 1);
        }}
      >
        \2
      </button>
    </>
  );
}

export default GameBoard;
