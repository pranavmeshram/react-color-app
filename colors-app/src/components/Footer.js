import React, { Component } from 'react';
import './styles/Footer.css';


export default class Footer extends Component {
    render() {
        const { name, emoji } = this.props
        return (
            <footer className="Footer">
                {name}
                <span className="footer-emoji">
                    {emoji}
                </span>

            </footer>
        )
    }
}
