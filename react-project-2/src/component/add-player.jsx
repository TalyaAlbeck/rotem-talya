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
    let newUser = { name: inputValue, score: 0 };
    let usersArray = JSON.parse(localStorage.getItem("usersArr"));
    if (usersArray === null) {
      localStorage.setItem("usersArr", JSON.stringify([newUser]));
      props.setUsersArr([newUser]);
    } else {
      let flag = false;
      for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].name === newUser.name) {
          alert("This user exists");
          flag = true;
          break;
        }
      }
      if (!flag) {
        props.setUsersArr([...props.usersArr, newUser]);
        localStorage.setItem("usersArr", JSON.stringify(props.usersArr));
      }
    }
  }

  return (
    <>
      <button onClick={addNewPlayer}>add player</button>
      <input type="text" id="new-player" onChange={hendleInputChange}></input>
    </>
  );
}

export default AddPlayer;
