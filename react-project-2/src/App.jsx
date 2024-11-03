import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPlayer from "./component/add-player";
import DisplayPlayers from "./component/display-player";
import GameBoard from "./component/game-board";

function App() {
  // const [showAddPlayer, setShowAddPlayer] = useState("");
  const [usersArr, setUsersArr] = useState([]);

  return (
    <>
      <AddPlayer usersArr={usersArr} setUsersArr={setUsersArr} />
      <DisplayPlayers usersArr={usersArr} setUsersArr={setUsersArr} />
      {usersArr.map((item, i) => {
        return (
          <GameBoard
            usersArr={usersArr}
            setUsersArr={setUsersArr}
            user={item}
            key={i}
          />
        );
      })}
    </>
  );
}

export default App;
