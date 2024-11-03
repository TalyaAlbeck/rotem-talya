import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddPlayer from "./component/add-player";
import DisplayPlayers from "./component/display-player";

function App() {
  // const [showAddPlayer, setShowAddPlayer] = useState("");

  return (
    <>
      <AddPlayer />
      {/* <DisplayPlayers /> */}
    </>
  );
}

export default App;
