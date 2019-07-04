import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const build = require('../assets/img/work_building.svg');
const key = require('../assets/img/hand_key.svg');
const binocular = require('../assets/img/binocular.svg');

class Advantage extends Component{
    render() {
        return(
            <div id="advantage" className="h2" style={{padding: '0', margin: '0'}}>
                <Grid>
                    <Cell col={11} offsetDesktop={1}>
                        <h2>Ваши преимущества</h2>
                    </Cell>
                </Grid>
                <Grid style={{paddingTop: '87px'}}>
                    <Cell col={5} offsetDesktop={1}>
                        <Grid className="mp">
                            <Cell col={1} align={"middle"} className="mp">
                                <p className="number">1</p>
                            </Cell>
                            <Cell col={2} offsetDesktop={1}>
                                <img src={build} alt=""/>
                            </Cell>
                            <Cell col={6} >
                                <h3>Квалифицировнная рабочая сила</h3>
                                <p>У нас работают только дипломированные и талантливые специалисты.</p>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={5} offsetDesktop={1}>
                        <Grid className="mp">
                            <Cell col={1} align={"middle"}  className="mp">
                                <p className="number">2</p>
                            </Cell>
                            <Cell col={2} offsetDesktop={1}>
                                <img src={key} alt=""/>
                            </Cell>
                            <Cell col={6} >
                                <h3>Дом под ключ</h3>
                                <p>Осуществляем проектирование, строительство и подготовку исполнительной документации. </p>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={5} offsetDesktop={1} style={{paddingTop: '130px'}}>
                        <Grid className="mp">
                            <Cell col={1} align={"middle"}  className="mp">
                                <p className="number">3</p>
                            </Cell>
                            <Cell col={2} offsetDesktop={1}>
                                <img src={binocular} alt=""/>
                            </Cell>
                            <Cell col={6} >
                                <h3>Наблюдайте за строительством</h3>
                                <p>Мы ставим камеры на участке и вы сможете в режиме реального времени следить за нашей работой из дома.</p>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Advantage;
