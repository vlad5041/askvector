import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const arrow = require('../assets/img/arrow.svg');
const project = require('../assets/img/icons/project.svg');
const building = require('../assets/img/icons/building.svg');
const repair = require('../assets/img/icons/repair.svg');
const docs = require('../assets/img/icons/docs.svg');

class Slider extends Component{
    render() {
        return(
            <div className="slider" >
                <Grid style={{paddingTop: '145px'}}>
                    <Cell col={12} offsetDesktop={1} phone={2} align={"bottom"}>
                        <h1>Дом под ключ.</h1>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3} offsetDesktop={1}>
                        <p>Осуществляем проектирование, строительство и подготовку исполнительной документации.</p>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3} offsetDesktop={1}>
                        <a href="#contacts"><button>Заказать <img src={arrow} alt=""/></button></a>
                    </Cell>
                </Grid>
                <Grid className="services-on-slider">
                    <Cell col={2} phone={2} offsetDesktop={1} align={"middle"} >
                        <img src={project} alt="Проектированеие"/>
                        <h2>Проектированеие</h2>
                        <p>От 100 руб/м2</p>
                    </Cell>
                    <Cell col={2} phone={2} align={"middle"}>
                        <img src={building} alt="Строительство"/>
                        <h2>Строительство</h2>
                        <p>От 7 500 руб/м2</p>
                    </Cell>
                    <Cell col={2} phone={2} align={"middle"}>
                        <img src={repair} alt="Ремонт"/>
                        <h2>Ремонт</h2>
                        <p>От 7 000 руб/м2.</p>
                    </Cell>
                    <Cell col={3} phone={2} align={"middle"}>
                        <img src={docs} alt="Исполнительная документация"/>
                        <h2>Исполнительная документация</h2>
                        <p>По запросу</p>
                    </Cell>
                </Grid>
                <Cell className="slider-arrow" col={1} hidePhone={true}>
                    <a href="#contacts"><img src={arrow} alt=""/></a>
                </Cell>
            </div>
        );
    }
}

export default Slider;
