import Session from "./Session";
import Break from "./Break";
import { useState } from "react";
import Display from "./Display";

export default function Clock() {
  const maxValue = 60;
  const minValue = 1;
  const step = 1;

  const [sessionValue, setSession] = useState(25);
  const [breakValue, setBreak] = useState(5);
  const [displayMinutes, setDisplayMinutes] = useState("60");
  const [displaySeconds, setDisplaySeconds] = useState("00");

  function increment(value) {
    return correctValue(value + step);
  }

  function decrement(value) {
    return correctValue(value - step);
  }

  function correctValue(newValue) {
    if (newValue > maxValue) {
      return maxValue;
    } else if (newValue <= minValue) {
      return minValue;
    }
    return newValue;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Session
          value={sessionValue}
          increment={() => setSession(increment(sessionValue))}
          decrement={() => setSession(decrement(sessionValue))}
        />
        <Break
          value={breakValue}
          increment={() => setBreak(increment(breakValue))}
          decrement={() => setBreak(decrement(breakValue))}
        />
      </div>
      <div>
        <Display minutes={displayMinutes} seconds={displaySeconds} />
      </div>
    </div>
  );
}
