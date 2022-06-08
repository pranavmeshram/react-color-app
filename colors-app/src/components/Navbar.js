import React, { Component } from 'react';
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import styles from "./styles/NavbarStyles";





class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { format: "hex", openSnackbar: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, openSnackbar: true })
        this.props.changeFormat(e.target.value)
    }

    handleCloseSnackbar(e) {
        this.setState({ openSnackbar: false })
    }

    render() {
        const { level, changeLevel, showingAllColor, classes } = this.props;
        const { format, openSnackbar } = this.state;
        return (
            <header className={classes.Navbar}>

                <div className={classes.logo}>
                    <Link to="/">React Color Picker</Link>
                </div>
                {showingAllColor && (

                    <div className="slider-container">
                        <span>Level: {level}</span>

                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>

                    </div>
                )}

                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={this.handleCloseSnackbar}
                    message={
                        <span id="message-id">
                            Format Changed To {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[
                        <IconButton
                            onClick={this.handleCloseSnackbar}
                            color='inherit'
                            key='close'
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />

            </header>
        )
    }
}


export default withStyles(styles)(Navbar);