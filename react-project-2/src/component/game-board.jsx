import React, { useState } from "react";
import GameActive from "./GameActive";
import Score from "./score";

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  const [finished, setFinished] = useState(false);
  //   const [scores, setScores] = useState([]);

  const endPlaying = (player) => {
    let usersArray = props.usersArr.filter((item) => item.name !== player);
    props.setUsersArr(usersArray);
    props.turn === props.usersArr.length && props.setTurn(props.turn - 1);
  };

  const addScore = (player) => {
    let users = JSON.parse(localStorage.getItem("usersArr"));
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === player) {
        // console.log(steps);
        users[i].score.push(steps);
      }
      localStorage.setItem("usersArr", JSON.stringify(users));
    }
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
              endPlaying(props.user.name, props.id, steps);
              addScore(props.user.name);
            }}
          >
            finish
          </button>
          <button
            onClick={() => {
              setNumber(Math.floor(Math.random() * 100));
              setFinished(false);
              setSteps(0);
              addScore(props.user.name);
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
