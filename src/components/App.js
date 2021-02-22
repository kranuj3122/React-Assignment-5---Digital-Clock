import "../styles/App.css";
import React, { useState } from "react";

const App = () => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  const updateTime=()=>{
      let currTime=new Date().toLocaleTimeString();
      setTime(currTime);
  };
  setInterval(updateTime,1000);
  return <h1 id="time">{time}</h1>;
};

export default App;
