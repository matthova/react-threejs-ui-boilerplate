import React, { Component } from 'react';

export default class UI extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <h3>UI!</h3>
        <button value="0xff0000" onClick={this.props.handleColorUpdate}>Red</button>
        <button value="0x00ff00" onClick={this.props.handleColorUpdate}>Green</button>
        <button value="0x0000ff" onClick={this.props.handleColorUpdate}>Blue</button>
      </div>
    );
  }
}
