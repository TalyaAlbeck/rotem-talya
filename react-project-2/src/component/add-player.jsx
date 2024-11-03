import React, {useState} from "react";
import App from "../App";

function AddPlayer() {
    const [inputValue, setInputValue] = useState("")
    const [usersArr, setUsersArr]= useState([])
    // let playerName = document.getElementById("new-player");
    // if (!localStorage.getItem()) {
        // let userName = e.target.value;
        // console.log(userName);
        
    // }
    function hendleInputChange(e) {
        let userName = e.target.value;
        console.log(userName);
        
        setInputValue(userName);        
      }

      function addNewPlayer(){
        //usersArr.push(inputValue);
        setUsersArr([...usersArr,inputValue]);
        console.log('usersArr: ', usersArr);
        
        // props.setInputValue();

      }
    
    return (
        <>
        <button onClick={addNewPlayer}>add player</button>
        <input type="text" id="new-player" onChange={hendleInputChange}></input>
        <h1>{usersArr}</h1>
        </>
    )
}

// export function addPlayerValue(){
//     setShowAddPlayer(true);
//   }

export default AddPlayer;