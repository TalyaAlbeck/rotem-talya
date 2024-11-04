import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPlayer from "./component/add-player";
import GameActive from "./component/GameActive";
import GameBoard from "./component/game-board";
import Score from "./component/score";

function App() {
  // const [showAddPlayer, setShowAddPlayer] = useState("");
  const [usersArr, setUsersArr] = useState([]);

  return (
    <>
      <h1>GET TO 100!</h1>
      <AddPlayer usersArr={usersArr} setUsersArr={setUsersArr} />
      <GameActive usersArr={usersArr} setUsersArr={setUsersArr} />
      <Score numGames={5} averageScore={7} steps={6} />
    </>
  );
}

export default App;
