import React, { Component } from 'react';
import Palette from './components/Palette';
import seedColors from './seedColors';

import { generatePallete } from "./colorHelpers";

class App extends Component {
  render() {
    // console.log('generatePallete-', generatePallete(seedColors[4]))
    return (
      <div>
        <Palette palette={generatePallete(seedColors[4])} />
      </div>
    )
  }
}

export default App;
