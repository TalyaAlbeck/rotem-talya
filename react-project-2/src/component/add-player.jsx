import React, { useState } from "react";
import App from "../App";
import GameActive from "./GameActive";

function AddPlayer(props) {
  const [inputValue, setInputValue] = useState("");

  function hendleInputChange(e) {
    let userName = e.target.value;

    setInputValue(userName);
  }

  function addNewPlayer() {
    // JSON.parse(localStorage.getItem())
    // for(i=0)
    let newUser = { name: inputValue, score: 0 };
    props.setUsersArr([...props.usersArr, newUser]);
    localStorage.setItem("usersArr", JSON.stringify(props.usersArr));
  }

  return (
    <>
      <button onClick={addNewPlayer}>add player</button>
      <input type="text" id="new-player" onChange={hendleInputChange}></input>
    </>
  );
}

export default AddPlayer;
