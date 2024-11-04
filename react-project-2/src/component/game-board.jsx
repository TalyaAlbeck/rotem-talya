import React, { useState } from "react";
import GameActive from "./GameActive";

function GameBoard(props) {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  const [steps, setSteps] = useState(0);
  const [finished, setFinished] = useState(false);
  const [playing, setPlaying] = useState(true);

    function onClickHandler(num) {
        console.log(props.usersArr);
        
        if (num === 100 && !finished) {
            setFinished(true)
            alert(`${props.user.name} finished!`);
            // props.usersArr.filter((item, index) => {
            //     item.name !== props.user.name
            // })
            
            props.setUsersArr(props.usersArr);
        }
        setSteps(steps + 1);
        setNumber(num)
        props.changeTurn(props.id);
    }
    
if (playing) {
  return (
    <div className="player">
      <h3>name: {props.user.name}</h3>
      <h3>number: {number}</h3>
      <h3>steps: {steps}</h3>
      {finished ? (
        <>
        
    <button onClick={() => {
        props.changeTurn(props.id)
        setPlaying(false)
        props.setTurn(props.turn + 1)
        console.log(`${props.usersArr} is the users`);
        
        props.usersArr.filter((item, index) => {
            item.name !== props.user.name
        })
        props.setUsersArr(props.usersArr)
        console.log(`${props.usersArr} is the users`);
        
    }}>finish</button> <button onClick={() => {
        setNumber(Math.floor(Math.random() * 100))
        setFinished(false);
        setSteps(0)
    }}>continue</button> 
        </>
        ) : (
        <>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              onClickHandler(number + 1);
            }}
          >
            +1
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              onClickHandler(number - 1);
            }}
          >
            -1
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
              onClickHandler(number * 2);
            }}
          >
            x2
          </button>
          <button
            disabled={props.turn === props.id ? false : true}
            onClick={() => {
            //   setNumber(Math.floor(number / 2));
              onClickHandler(Math.floor(number / 2));
            }}
          >
            \2
          </button>
        </>
      )}
    </div>
  );}
}

export default GameBoard;
