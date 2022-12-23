import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let newTime = new Date().toLocaleTimeString();
  const [curTime, setCurTime] = useState(newTime);

  const upTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCurTime(newCTime);
  };
  return (
    <>
      <h1>{curTime}</h1>
      <div className="container">
        <div className="center">
          <button onClick={upTime}>Get Time</button>
        </div>
      </div>
    </>
  );
}
