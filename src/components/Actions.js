import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

export default function Actions(props) {
  const actionsStyle = {
    padding: "0 10px",
    cursor: "pointer",
  };

  return (
    <div className="actions">
      <span style={actionsStyle} id="start_stop" onClick={props.playPause}>
        <FontAwesomeIcon icon={props.running ? faPause : faPlay} />
      </span>
      <span style={actionsStyle} id="reset" onClick={props.reset}>
        <FontAwesomeIcon icon={faStop} />
      </span>
    </div>
  );
}
