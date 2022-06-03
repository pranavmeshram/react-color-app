import React, { Component } from 'react';
import './styles/ColorBox.css';
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from "chroma-js";

export default class ColorBox extends Component {
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
        const { name, background, paletteId, id, moreUrl, showLink } = this.props;
        const { copied } = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.19;
        const isLightkColor = chroma(background).luminance() >= 0.6;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>

                <div style={{ background: background }} className="ColorBox">

                    <div style={{ background: background }} className={`copy-overlay ${copied && "show"}`} />

                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p className={isLightkColor ? "dark-text-color" : ""}>
                            {this.props.background}
                        </p>
                    </div>

                    <div className="copy-container">

                        <div className="box-content">
                            <span className={`color-box-text-color ${isDarkColor && "light-text-color"}`}>
                                {name}
                            </span>
                        </div>

                        <button className={`copy-button ${isLightkColor && "dark-text-color"}`}>Copy</button>
                    </div>
                    {showLink && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLightkColor && "dark-text-color"}`}>MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard >
        )
    };
}
