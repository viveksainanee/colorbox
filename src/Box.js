import React, { Component } from 'react';

class Box extends Component {
  render() {
    const boxStyle = {
      width: '50px',
      height: '50px',
      display: 'inline-block',
      backgroundColor: this.props.color
    };
    return <div className="Box" style={boxStyle} />;
  }
}

export default Box;
