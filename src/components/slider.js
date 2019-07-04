import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

const arrow = require('../assets/img/arrow.svg');

class Slider extends Component{
    render() {
        return(
            <div className="slider">
                <Grid style={{paddingTop: '60px'}}>
                    <Cell col={12} offsetDesktop={1} phone={2} align={"bottom"}>
                        <h1>Дом под ключ!</h1>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3} offsetDesktop={1}>
                        <p>Осуществляем проектирование, строительство и подготовку исполнительной документации.</p>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3} offsetDesktop={1}>
                        <button>Заказать <img src={arrow} alt=""/></button>
                    </Cell>
                </Grid>
                <Grid style={{marginRight: '97px', background: '#fff', position: 'absolute', bottom: '0', marginLeft: '0'}}>
                    <Cell col={2} phone={2} offsetDesktop={1} align={"bottom"} >
                        <h2>01.<br /><br />Строительство</h2>
                        <p>Осуществляем проектирование, строительство и подготовку.<br /> От 25 000 рублей.</p>
                    </Cell>
                    <Cell col={2} phone={2} offsetDesktop={1}>
                        <h2>02.<br /><br />Проектированеие</h2>
                        <p>От 10 000 руб. Осуществляем проектирование, строительство и подготовку.</p>
                    </Cell>
                    <Cell col={2} phone={2} offsetDesktop={1}>
                        <h2>03.<br /><br />Ремонт</h2>
                        <p>Ремонт от 15 000 руб. Быстро и качественно.</p>
                    </Cell>
                    <Cell col={2} phone={2} offsetDesktop={1}>
                        <h2>04.<br /><br />Документация</h2>
                        <p>От 5 000 руб подготовка исполнительной документации для вас.</p>
                    </Cell>
                </Grid>
                <Cell className="slider-arrow" col={1} hidePhone={true}>
                    <img src={arrow} alt=""/>
                </Cell>
            </div>
        );
    }
}

export default Slider;