import CounterConfig from "./CounterConfig";

export default function Break(props) {
  return (
    <CounterConfig
      label="Break Length"
      prefix="break"
      value={props.value}
      updateCounter={props.updateValue}
    />
  );
}
