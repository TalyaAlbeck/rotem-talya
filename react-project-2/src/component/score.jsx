import { useState } from "react";
import GameBoard from "./game-board";
function Scores() {
  let usersArray = JSON.parse(localStorage.getItem("usersArr"));
  const showScores = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      return <span>{arr[i]}, </span>;
    }
  };

  function showScoresAverage(arr) {
    let sum = 0;
    // let av = 0;
    for(let item in arr) {
        sum += arr[item];
        let av = sum/arr.length;
        return av;
    }
  }
  if (usersArray === null) {
    return <h3>the scores supposed to be here</h3>;
  }
  return usersArray.map((item) => {
    return (
      <>
        <li key={item.id}>
          {item.name}: {showScoresAverage(item.score)}
        </li>
      </>
    );
  });
}

export default Scores;
