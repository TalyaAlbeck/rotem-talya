import { useState } from "react";
import GameBoard from "./game-board";

function GameActive(props) {
  const [turn, setTurn] = useState(0)
  const changeTurn=()=>{
    setTurn(turn + 1);
    if(turn === props.usersArr.length){
    setTurn(1)
    }


  }
  return (
    <>
    <button onClick={changeTurn}>start game:</button>
    {props.usersArr.map((item, i) => {
      return (
        <GameBoard
          usersArr={props.usersArr}
          setUsersArr={props.setUsersArr}
          user={item}
          key={i}
          id={i+1}
          changeTurn={changeTurn}
          turn={turn}
          setTurn={setTurn}

        />
      );
    })}
    </>
  )
    
}
export default GameActive;
