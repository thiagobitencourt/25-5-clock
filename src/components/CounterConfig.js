import "./CounterConfig.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function CounterConfig(props) {
  const maxValue = 60;
  const minValue = 1;
  const step = 1;
  const idg = (sufix) => `${props.prefix}-${sufix}`;

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  function increment() {
    const newValue = correctValue(value + step);
    setValue(newValue);
    props.updateCounter(newValue);
  }

  function decrement() {
    const newValue = correctValue(value - step);
    setValue(newValue);
    props.updateCounter(newValue);
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
    <div className="counter-config">
      <span className="counter-label" id={idg("label")}>
        {props.label}
      </span>
      <div className="counter-actions">
        <span
          className="increment-decrement"
          id={idg("decrement")}
          onClick={() => decrement()}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </span>
        <span className="counter-value" id={idg("length")}>
          {value}
        </span>
        <span
          className="increment-decrement"
          id={idg("increment")}
          onClick={() => increment()}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </span>
      </div>
    </div>
  );
}
