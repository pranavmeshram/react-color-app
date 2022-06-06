import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

import { Link } from "react-router-dom";


export class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy) {
        // return all shaded of given color 
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1); // to remove the 50 color shade
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { format } = this.state
        const { palleteName, emoji, id } = this.props.palette
        const colorBoxes = this._shades.map(color => (
            <ColorBox
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))
        return (
            <div className="SingleColorPalette Palette">

                <Navbar changeFormat={this.changeFormat} showingAllColor={false} />

                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="Palette-go-back ColorBox">
                        <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
                    </div>
                </div>
                <Footer name={palleteName} emoji={emoji} />
            </div>
        )
    }
}

export default SingleColorPalette;
