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
    let newUser = { name: inputValue, score: [] };
    let usersArray = JSON.parse(localStorage.getItem("usersArr"));
    if (usersArray === null) {
      localStorage.setItem("usersArr", JSON.stringify([newUser]));
      props.setUsersArr([newUser]);
    } else {
      let flag = false;
      for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].name === newUser.name) {
          props.setUsersArr([...props.usersArr, usersArray[i]]);
          flag = true;
        }
      }
      if (!flag) {
        console.log("[...props.usersArr, newUser]: ", [
          ...props.usersArr,
          newUser,
        ]);
        props.setUsersArr([...props.usersArr, newUser]);

        localStorage.setItem(
          "usersArr",
          JSON.stringify([...usersArray, newUser])
        );
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
