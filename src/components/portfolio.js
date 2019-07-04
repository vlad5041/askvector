import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Portflio extends Component {
    render() {
        return(
            <div>
                <Grid className="page-wrapper">
                    <div className="blackout"></div>
                    <Cell col={2}>
                        <div className="page-icon">
                            <img src="" alt=""/>
                        </div>
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Portflio;
