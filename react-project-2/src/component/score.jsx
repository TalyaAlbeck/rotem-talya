import { useState } from "react";
import GameBoard from "./game-board";
function Scores() {
  let usersArray = JSON.parse(localStorage.getItem("usersArr"));
  const showScores = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      return <span>{arr[i]}, </span>;
    }
  };
  if (usersArray === null) {
    return <h3>scores here</h3>;
  }
  return usersArray.map((item) => {
    return (
      <>
        <li>
          {item.name}: {showScores(item.score)}
        </li>
      </>
    );
  });
}

export default Scores;
