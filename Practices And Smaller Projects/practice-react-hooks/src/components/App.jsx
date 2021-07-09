import React from "react";

let time = new Date().toLocaleTimeString();

function App() {
  let [currTime, setTime] = React.useState(time)

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime ,1000)
  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}




export default App;
