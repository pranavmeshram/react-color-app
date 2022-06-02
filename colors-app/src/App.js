import React, { Component } from 'react';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './seedColors';

import { generatePallete } from "./colorHelpers";

import { Route, Switch } from "react-router-dom"


class App extends Component {

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePallete(
              this.findPalette(routeProps.match.params.id)
            )}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePallete(seedColors[4])} />
      // </div>
    )
  }
}

export default App;
