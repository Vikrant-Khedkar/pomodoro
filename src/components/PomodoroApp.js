import React from 'react';
import Timer from './Timer';
import Controls from './Controls';
import './PomoDoro.css'
import TodoList from './TodoList';


class PomodoroApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isRunning: false,
      isBreak: false,
    };
    this.timerInterval = null;
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(() => {
        const { minutes, seconds, isBreak } = this.state;
        if (minutes === 0 && seconds === 0) {
          if (isBreak) {
            this.resetTimer();
          } else {
            this.setState({ minutes: 5, seconds: 0, isBreak: true });
          }
        } else {
          if (seconds === 0) {
            this.setState((prevState) => ({
              minutes: prevState.minutes - 1,
              seconds: 59,
            }));
          } else {
            this.setState((prevState) => ({
              seconds: prevState.seconds - 1,
            }));
          }
        }
      }, 1000);
    }
  };

  pauseTimer = () => {
    if (this.state.isRunning) {
      this.setState({ isRunning: false });
      clearInterval(this.timerInterval);
    }
  };

  resetTimer = () => {
    this.setState({ minutes: 25, seconds: 0, isRunning: false, isBreak: false });
    clearInterval(this.timerInterval);
  };

  startBreak = () => {
    this.setState({ minutes: 5, seconds: 0, isBreak: true });
  };

  render() {
    const { minutes, seconds, isBreak } = this.state;
    return (
      <div className='container'>
        <h1></h1>
        <div className='Timer'>
        <Timer minutes={minutes} seconds={seconds} isBreak={isBreak} />
        </div>

        {!isBreak ? (
          <Controls
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
            resetTimer={this.resetTimer}
          />
        ) : (
          <button onClick={this.startTimer}>Start Break</button>
        )}
                <TodoList />

        </div>
    );
  }
}

export default PomodoroApp;
