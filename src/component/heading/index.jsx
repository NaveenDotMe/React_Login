import React, {Component} from "react";
import Typography from '@mui/material/Typography';

class Heading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Login
                </Typography>
            </div>
        )
    }
}

export default Heading;