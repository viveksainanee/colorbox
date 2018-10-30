import React, { Component } from 'react';
import Box from './Box.js';
import './App.css';

class App extends Component {
  static defaultProps = {
    availableColors: ['blue', 'red', 'green', 'brown', 'yellow', 'purple'],
    numBoxes: 100
  };

  constructor(props) {
    super(props);
    this.state = {
      numBoxes: props.numBoxes,
      color: Array.from({ length: props.numBoxes })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    this.setState(st => ({
      color: st.color.map(
        col => this.props.availableColors[Math.floor(Math.random() * 6)]
      )
    }));
  }

  handleClick(evt) {
    this.pickColor();
  }

  render() {
    return (
      <div className="App">
        {this.state.color.map(col => (
          <Box color={col} />
        ))}
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default App;
