import React, { Component } from 'react';

import UI from './components/ui';
import Canvas from './components/canvas';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      color: 0xff0000,
    }
    this.handleColorUpdate = this.handleColorUpdate.bind(this);
  }

  handleColorUpdate(colorDiv) {
    const color = parseInt(colorDiv.target.value);
    this.setState({ color });
  }

  render() {
    return (
      <div>
        <UI
          handleColorUpdate={this.handleColorUpdate}
        />
        <Canvas
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
