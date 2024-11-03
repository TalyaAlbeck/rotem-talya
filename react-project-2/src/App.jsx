import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPlayer from "./component/add-player";
import GameActive from "./component/GameActive";
import GameBoard from "./component/game-board";

function App() {
  // const [showAddPlayer, setShowAddPlayer] = useState("");
  const [usersArr, setUsersArr] = useState([]);

  return (
    <>
      <AddPlayer usersArr={usersArr} setUsersArr={setUsersArr} />
      <GameActive usersArr={usersArr} setUsersArr={setUsersArr} />
      
    </>
  );
}

export default App;
