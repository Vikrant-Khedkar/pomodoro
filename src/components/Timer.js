import React from 'react';
import './TimerCSS.css'

class Timer extends React.Component {
  render() {
    const { minutes, seconds, isBreak } = this.props;
    const timerLabel = isBreak ? 'Break' : 'Go For It🚀✨';
    const totalTime = isBreak ? 300 : 1500; // 5 minutes for break, 25 minutes for work session
    const remainingTime = minutes * 60 + seconds;
    const progressPercentage = ((totalTime - remainingTime) / totalTime) * 100;

    return (
      <div>
        <h2>{timerLabel}</h2>
        <div className='Timer'>
          <span>{minutes < 10 ? '0' + minutes : minutes}</span>:
          <span>{seconds < 10 ? '0' + seconds : seconds}</span>
        </div>
        
        {isBreak ? (
          <div>Break progress bar placeholder</div>
        ) : (
          <div>
            <div
              style={{
                width: '100%',
                backgroundColor: '#ddd',
                height: '10px',
              }}
            >
              <div
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: '#0d6efd',
                  height: '100%',
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
