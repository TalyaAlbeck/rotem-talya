import { useState } from "react";

function ShowScoresAverage() {
    const [sums, setSums] = useState([])
    
    let usersArray = JSON.parse(localStorage.getItem("usersArr"));
    for (let user in usersArray) {
        let sum = 0;
        for (let scores of usersArray[user].score) {
            sum += scores
        }
        let av = sum/usersArray[user].score.length  
        sums.push(av)
        usersArray[user].av = av;
    }
    localStorage.setItem("usersArr", JSON.stringify(usersArray));

    let best = Math.min.apply(null, sums)
    let bestPlayer;

    for (let user in usersArray) {
        if(usersArray[user].av === best) {
            bestPlayer = usersArray[user].name;
        }
    }



    return (
        <>
            <h2>the best player is {bestPlayer} with {best} steps!</h2>
        </>
    )
  }

  export default ShowScoresAverage;