function DisplayPlayers(props) {
  return (
    <>
      {props.usersArr.map((item, i) => (
        <div>{item}</div>
      ))}
    </>
  );
}
export default DisplayPlayers;
