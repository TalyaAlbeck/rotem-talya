import React, { useState } from "react";
import App from "../App";
import DisplayPlayers from "./display-player";

function AddPlayer() {
    const [inputValue, setInputValue] = useState("")
    const [usersArr, setUsersArr]= useState([])

    function hendleInputChange(e) {
        let userName = e.target.value;
        console.log(userName);
        
        setInputValue(userName);        
      }

  function addNewPlayer() {
    // JSON.parse(localStorage.getItem())
    // for(i=0)
    setUsersArr([...usersArr, inputValue]);
    localStorage.setItem("usersArr", JSON.stringify(usersArr));
    console.log("usersArr: ", usersArr);
  }

  return (
    <>
      <button onClick={addNewPlayer}>add player</button>
      <input type="text" id="new-player" onChange={hendleInputChange}></input>
      <DisplayPlayers inputValue={inputValue} usersArr={usersArr} />
    </>
  );
}

export default AddPlayer;
