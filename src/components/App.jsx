import React from "react";

function App() {
  
  setInterval(update, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, updateTime] = React.useState(now);

  function update() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get time</button>
    </div>
  )
}

export default App;
