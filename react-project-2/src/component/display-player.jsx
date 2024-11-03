function DisplayPlayers(props) {
  return (
    <>
      {props.usersArr.map((item, i) => {
        <div>{item}</div>;
      })}
      {/* <button onClick={() => (startGame = true)}>start new Game</button> */}
    </>
  );
}
export default DisplayPlayers;
