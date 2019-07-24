import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Link} from "react-router-dom";

const logo = require('../assets/img/logo.svg');
const burger = require('../assets/img/burger.svg');

class NavBar extends Component{

    state = {
        align: 'middle',
         width: '70%',
        padding: '8px',
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent, {passive: true})
    }

    listenScrollEvent = e => {
        if (window.scrollY >= 10) {
            this.setState({align: 'middle', width: '45%', padding: '0'});
        } else {
            this.setState({align: 'middle', width: '70%', padding: '8px'});
        }
    };

    render(){
        return (
            <header>
                <Grid style={{padding: this.state.padding}}>
                    <Cell col={2} offsetDesktop={1} phone={2} style={{textAlign: 'left'}}>
                        {/*<Link style={{textDecoration: 'none', color: 'white'}} to="/">*/}
                        {/*    <img src={logo} alt="Логотип АСК Вектор" className="corner-logo"/>*/}
                        {/*</Link>*/}
                        <a href="#top"><img src={logo} alt="Логотип АСК Вектор" className="corner-logo" style={{width: this.state.width}}/></a>
                    </Cell>
                    <Cell col={1} offsetDesktop={4} align={this.state.align} hidePhone={true}>
                        {/*<Link to="/about"><span>О компании</span></Link>*/}
                        <a href="#advantage">О компании</a>
                    </Cell>
                    <Cell col={1} align={this.state.align} hidePhone={true}>
                        {/*<Link to="/services"><span>Услуги</span></Link>*/}
                        <a href="#advantage">Услуги</a>
                    </Cell>
                    <Cell col={1} align={this.state.align} hidePhone={true}>
                        {/*<Link to="/portfolio"><span></span></Link>*/}
                        <a href="#portfolio">Наши работы</a>
                    </Cell>
                    <Cell col={1} align={this.state.align} hidePhone={true}>
                        {/*<Link to="/contacts"><span>Контакты</span></Link>*/}
                        <a href="#contacts">Контакты</a>
                    </Cell>
                    <Cell phone={1} align={this.state.align} hideDesktop={true}>
                        <img src={burger} alt="" style={{width: '25px', height: 'auto', cursor: 'pointer'}}/>
                    </Cell>
                </Grid>
            </header>
        );
    }
}

export default NavBar;
