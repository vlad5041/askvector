import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return (
            <footer>
                <Grid className="footer-nav">
                    <Cell col={1} offsetDesktop={1} align={"middle"}>
                        {/*<Link to="/about"><span>О компании</span></Link>*/}
                        <a href="#advantage">О компании</a>
                    </Cell>
                    <Cell col={1} align={"middle"}>
                        {/*<Link to="/services"><span>Услуги</span></Link>*/}
                        <a href="#advantage">Услуги</a>
                    </Cell>
                    <Cell col={1} align={"middle"}>
                        {/*<Link to="/portfolio"><span></span></Link>*/}
                        <a href="#portfolio">Наши работы</a>
                    </Cell>
                    <Cell col={1} align={"middle"}>
                        {/*<Link to="/contacts"><span>Контакты</span></Link>*/}
                        <a href="#contacts">Контакты</a>
                    </Cell>
                    <Cell col={2} phone={1} offsetDesktop={5} align={"middle"} style={{textAlign: 'left'}}>
                        <a href="#top">ООО "АСК" Вектор г. Сочи</a>
                    </Cell>
                </Grid>
                <Grid style={{fontSize: '12px', textAlign: 'left'}}>
                    <Cell col={2} offsetDesktop={10}>Разработка: <a href="http://vladgusev.me/" target="_blank" rel="noopener noreferrer">Владислав Гусев</a></Cell>
                    <Cell col={2} offsetDesktop={10}>Дизайн: <a href="https://vk.com/id61115155" target="_blank" rel="noopener noreferrer">Дымчук Анастасия</a></Cell>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
