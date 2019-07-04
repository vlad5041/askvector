import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import {Link} from "react-router-dom";

const logo = require('../assets/img/logo.svg');
const burger = require('../assets/img/burger.svg');

class NavBar extends Component{
    render(){
        return (
            <header className="navbar">
                <Grid>
                    <Cell col={2} offsetDesktop={1} phone={2} style={{textAlign: 'left'}}>
                        <Link style={{textDecoration: 'none', color: 'white'}} to="/">
                            <img src={logo} alt="Логотип АСК Вектор" className="corner-logo"/>
                        </Link>
                    </Cell>
                    <Cell col={1} offsetDesktop={4} align={"middle"} hidePhone={true}>
                        <Link to="/about"><span>О компании</span></Link>
                    </Cell>
                    <Cell col={1} align={"middle"} hidePhone={true}>
                        <Link to="/services"><span>Услуги</span></Link>
                    </Cell>
                    <Cell col={1} align={"middle"} hidePhone={true}>
                        <Link to="/portfolio"><span>Наши работы</span></Link>
                    </Cell>
                    <Cell col={1} align={"middle"} hidePhone={true}>
                        <Link to="/contacts"><span>Контакты</span></Link>
                    </Cell>
                    <Cell phone={1} align={"middle"} hideDesktop={true}>
                        <img src={burger} alt="" style={{width: '25px', height: 'auto', cursor: 'pointer'}}/>
                    </Cell>
                </Grid>
            </header>
        );
    }
}

export default NavBar;
