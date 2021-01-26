import "./CounterConfig.css";

export default function CounterConfig(props) {
  return (
    <div className="counter-config">
      <span className="counter-label" id={props.labelId}>
        {props.label}
      </span>
      <div className="counter-actions">
        <span
          className="increment-decrement"
          id={props.decrementId}
          onClick={props.onDecrement}
        >
          <i>-</i>
        </span>
        <span className="counter-value" id={props.valueId}>
          {props.value}
        </span>
        <span
          className="increment-decrement"
          id={props.incrementId}
          onClick={props.onIncrement}
        >
          <i>+</i>
        </span>
      </div>
    </div>
  );
}
