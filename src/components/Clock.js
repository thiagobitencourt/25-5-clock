import React from "react";
import Session from "./Session";
import Break from "./Break";
import DisplayTime from "./DisplayTime";
import Actions from "./Actions";

const SESSION = "Session";
const BREAK = "Break";
const initialSessionValue = 25;
const initialBreakValue = 5;

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = { ...this.initialValues() };
  }

  play() {
    this.setState({ isRunning: true, isStarted: true });
    this.startCounter();
  }

  pause() {
    this.setState({ isRunning: false });
    this.stopCounter();
  }

  reset() {
    this.stopCounter();
    this.setState({ ...this.initialValues() });
  }

  roundFinished() {
    this.stopCounter();
    this.beepSound();
    this.startNextTimeRound();
  }

  startCounter() {
    const counter = setInterval(() => {
      this.setState((state) => ({ time: state.time - 1 }));
      console.log("Time elapsing: ", this.state.time);
      if (this.state.time < 0) {
        this.setState({ time: 0 });
        this.roundFinished();
      }
    }, 1000);

    this.setState({ counter });
  }

  stopCounter() {
    clearInterval(this.state.counter);
  }

  updateSession(value) {
    this.setState({ sessionValue: value });
    if (!this.state.isStarted && this.state.current === SESSION) {
      this.setState((state) => ({ time: state.sessionValue * 60 }));
    }
  }

  updateBreak(value) {
    this.setState({ breakValue: value });
    if (!this.state.isStarted && this.state.current === BREAK) {
      this.setState((state) => ({ time: state.breakValue * 60 }));
    }
  }

  startNextTimeRound() {
    if (this.state.current === SESSION) {
      this.setState((state) => ({
        time: state.breakValue * 60,
        current: BREAK,
      }));
    } else {
      this.setState((state) => ({
        time: state.sessionValue * 60,
        current: SESSION,
      }));
    }

    this.play();
  }

  beepSound() {
    console.log("beep, beep, beep...");
  }

  initialValues() {
    return {
      isStarted: false,
      isRunning: false,
      sessionValue: initialSessionValue,
      breakValue: initialBreakValue,
      current: SESSION,
      time: initialSessionValue * 60,
      counter: null,
    };
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <Session
            value={this.state.sessionValue}
            updateValue={(value) => this.updateSession(value)}
          />
          <Break
            value={this.state.breakValue}
            updateValue={(value) => this.updateBreak(value)}
          />
        </div>
        <div style={{ display: "grid", gap: "10px" }}>
          <DisplayTime
            label={this.state.current}
            timeInSeconds={this.state.time}
          />
          <Actions
            playPause={() =>
              this.state.isRunning ? this.pause() : this.play()
            }
            reset={() => this.reset()}
            running={this.state.isRunning}
          />
        </div>
      </div>
    );
  }
}
