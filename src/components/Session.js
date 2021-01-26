import CounterConfig from './CounterConfig';

export default function Session(props) {
    return (
        <CounterConfig
            label="Session Length"
            labelId="session-label"
            valueId="session-length"
            decrementId="session-decrement"
            incrementId="session-increment"
            onIncrement={props.increment}
            onDecrement={props.decrement}
            value={props.value}
        />
    );
}
