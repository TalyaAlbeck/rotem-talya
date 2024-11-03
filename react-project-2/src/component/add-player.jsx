import React, {useState} from "react";
import App from "../App";

function AddPlayer() {
    const [inputValue, setInputValue] = useState("")
    const [usersArr, setUsersArr]= useState([])

    function hendleInputChange(e) {
        let userName = e.target.value;
        console.log(userName);
        
        setInputValue(userName);        
      }

      function addNewPlayer(){
        // setUsersArr([...usersArr,inputValue]);
        usersArr.push(inputValue)
        console.log('usersArr: ', usersArr);

      }
    
    return (
        <>
        <button onClick={addNewPlayer}>add player</button>
        <input type="text" id="new-player" onChange={hendleInputChange}></input>
        
        <h1>{usersArr}</h1>
        </>
    )
}

export default AddPlayer;