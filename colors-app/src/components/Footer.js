import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/FooterStyles";


class Footer extends Component {
    render() {
        const { name, emoji, classes } = this.props;

        return (
            <footer className={classes.PaletteFooter}>

                {name}
                <span className={classes.emoji}>
                    {emoji}
                </span>

            </footer>
        )
    }
}

export default withStyles(styles)(Footer);
