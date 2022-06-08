import React, { Component } from 'react';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm';

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
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />

        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm />
          )}
        />

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

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePallete(
                this.findPalette(routeProps.match.params.paletteId)
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
