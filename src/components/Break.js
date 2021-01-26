import CounterConfig from './CounterConfig';

export default function Break(props) {
    return (
        <CounterConfig
            label="Break Length"
            labelId="break-label"
            valueId="break-length"
            decrementId="break-decrement"
            incrementId="break-increment"
            onIncrement={props.increment}
            onDecrement={props.decrement}
            value={props.value}
        />
    );
}
