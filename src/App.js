import React, { Component } from 'react';

import UI from './components/ui';
import Canvas from './components/canvas';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <UI/>
        <Canvas/>
      </div>
    );
  }
}

export default App;
