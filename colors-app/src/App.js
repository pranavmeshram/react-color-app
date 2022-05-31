import React, { Component } from 'react';
import Palette from './components/Palette';
import seedColors from './seedColors';

import { generatePallete } from "./colorHelpers";

class App extends Component {
  render() {
    console.log('generatePallete-', generatePallete(seedColors[4]))
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    )
  }
}

export default App;
