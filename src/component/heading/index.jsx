import React, {Component} from "react";
import Typography from '@mui/material/Typography';
import {styleSheet} from "./style"
import {withStyles} from "@mui/styles";

class Heading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Typography variant="h3" gutterBottom component="div">
                    Login
                </Typography>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Heading);