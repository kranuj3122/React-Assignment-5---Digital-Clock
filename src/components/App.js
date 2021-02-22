import "../styles/App.css";
import React, { useState } from "react";

const App = () => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  const updateTime=()=>{
      let currTime=new Date().toLocaleTimeString();
      setTime(currTime);
  };
  setInterval(updateTime,1000);
  return (
    <div className="Clock">
      <h3 id="time">{time}</h3>
    </div>
  );
};

export default App;
