import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPlayer from "./component/add-player";
import GameActive from "./component/GameActive";
import GameBoard from "./component/game-board";
import Score from "./component/score";
import ShowScoresAverage from "./component/theResults"

function App() {
  const [usersArr, setUsersArr] = useState([]);
  const [scores, setScores] = useState([]);

  return (
    <>
      <h1>GET TO 100!!!</h1>
      <ShowScoresAverage />
      <AddPlayer usersArr={usersArr} setUsersArr={setUsersArr} />
      <GameActive
        usersArr={usersArr}
        setUsersArr={setUsersArr}
        scores={scores}
        setScores={setScores}
      />
      {/* <Score numGames={5} averageScore={7} steps={6} /> */}

      <Score scores={scores} setScores={setScores} />
    </>
  );
}

export default App;
