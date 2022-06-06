import React, { Component } from 'react';
import './styles/ColorBox.css';
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from "chroma-js";
import { withStyles } from '@material-ui/styles';


const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: 1
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.19 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.6 ? "rgba(0, 0, 0, 0.7)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        fontWeight: "500",
        letterSpacing: "1px"
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.6)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0
    }
};

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }

    render() {
        const { name, background, paletteId, id, moreUrl, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.19;
        const isLightkColor = chroma(background).luminance() >= 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>

                <div style={{ background: background }} className={classes.ColorBox}>

                    <div style={{ background: background }} className={`copy-overlay ${copied && "show"}`} />

                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        {/* <p className={isLightkColor ? "dark-text-color" : ""}> */}
                        <p className={classes.copyText}>
                            {background}
                        </p>
                    </div>

                    <div className="copy-container">

                        <div className="box-content">
                            {/* <span className={`color-box-text-color ${isDarkColor && "light-text-color"}`}> */}
                            <span className={`color-box-color-name ${classes.colorName}`}>
                                {name}
                            </span>
                        </div>

                        {/* <button className={`copy-button ${isLightkColor && "dark-text-color"}`}> */}
                        <button className={classes.copyButton}>
                            Copy
                        </button>
                    </div>
                    {showingFullPalette && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            {/* <span className={`see-more ${isLightkColor && "dark-text-color"}`}>MORE</span> */}
                            <span className={classes.seeMore}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard >
        )
    };
}


export default withStyles(styles)(ColorBox);