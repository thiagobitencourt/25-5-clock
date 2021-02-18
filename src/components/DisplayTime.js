import { useState, useEffect } from "react";

export default function DisplayTime({ timeInSeconds, label }) {
  const [min, setMin] = useState(parseInt(timeInSeconds / 60));
  const [sec, setSec] = useState(timeInSeconds % 60);

  useEffect(() => {
    setMin(parseInt(timeInSeconds / 60));
    setSec(timeInSeconds % 60);
  }, [timeInSeconds]);

  const style = {
    padding: "20px",
    fontSize: "50px",
    border: "1px solid white",
    borderRadius: "5px",
    margin: "10px 0",
    display: "grid",
  };

  return (
    <div style={style}>
      <span id="timer-label" style={{ fontSize: "12px" }}>
        {label}
      </span>
      <span id="time-left">
        {(min < 10 ? "0" : "") + min}:{(sec < 10 ? "0" : "") + sec}
      </span>
    </div>
  );
}
