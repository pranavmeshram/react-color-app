import React, { Component } from 'react';
import Palette from './components/Palette';
import seedColors from './seedColors'

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={seedColors[4]} />
      </div>
    )
  }
}

export default App;
