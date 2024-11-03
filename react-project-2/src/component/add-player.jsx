import React, { useState } from "react";
import App from "../App";
import DisplayPlayers from "./display-player";

function AddPlayer(props) {
  const [inputValue, setInputValue] = useState("");

  function hendleInputChange(e) {
    let userName = e.target.value;
    console.log(userName);

    setInputValue(userName);
  }

  function addNewPlayer() {
    // JSON.parse(localStorage.getItem())
    // for(i=0)
    let newUser = { name: inputValue, score: 0 };
    props.setUsersArr([...props.usersArr, newUser]);
    localStorage.setItem("usersArr", JSON.stringify(props.usersArr));
    console.log("usersArr: ", props.usersArr);
  }

  return (
    <>
      <button onClick={addNewPlayer}>add player</button>
      <input type="text" id="new-player" onChange={hendleInputChange}></input>
    </>
  );
}

export default AddPlayer;
