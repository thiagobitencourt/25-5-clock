import CounterConfig from "./CounterConfig";

export default function Session(props) {
  return (
    <CounterConfig
      label="Session Length"
      prefix="session"
      value={props.value}
      updateCounter={props.updateValue}
    />
  );
}
