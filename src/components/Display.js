import Actions from "./Actions";

export default function Display(props) {
  return (
    <div>
      <span id="timer-label">{props.label}</span>
      <span id="time-left">
        {props.minutes}:{props.seconds}
      </span>
      <Actions />
    </div>
  );
}
