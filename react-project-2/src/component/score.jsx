import { useState } from "react";
import GameBoard from "./game-board";
function Scores(props) {
  let usersArray = JSON.parse(localStorage.getItem("usersArr"));

  if (usersArray === null) {
    return <h3>scores here</h3>;
  }
  return usersArray.map((item) => {
    return (
      <>
        <li>
          {item.name}: {item.score.map((item, index) => `${item}, `)}
        </li>
      </>
    );
  });
}

export default Scores;
