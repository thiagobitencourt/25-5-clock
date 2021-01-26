export default function Actions(props) {
    return (
        <div>
            <span id="start_stop" onClick={props.startStop}>{props.running ? 'Stop' : 'Start'}</span>
            <span id="reset" onClick={props.reset}>Reset</span>
        </div>
    );
}