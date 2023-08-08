import React from 'react';
import './ControlsCSS.css'
class Controls extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.props.startTimer}>Start</button>
        <button onClick={this.props.pauseTimer}>Pause</button>
        <button onClick={this.props.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Controls;
