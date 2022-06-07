import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Footer from './Footer';
import Navbar from './Navbar';

import './styles/Palette.css';

import { withStyles } from '@material-ui/styles';


const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors: {
        height: "90%"
    }
};

class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { colors, palleteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const { classes } = this.props;

        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}

                // id={color.id}            // we could pass individual attributes and construct url in the link tag
                // paletteId={id}

                moreUrl={`/palette/${id}/${color.id}`}   // or we can simiply pass the constructed url in props
                showingFullPalette={true}
            />
        ));

        return (
            <div className={classes.Palette}>

                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}
                    showingAllColor={true}
                />

                <div className={classes.colors}>
                    {colorBoxes}
                </div>

                <Footer name={palleteName} emoji={emoji} />
            </div>
        )
    }
}


export default withStyles(styles)(Palette);