import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import YandexMaps from "./yandexmaps";

class Contacts extends Component{
    render() {
        return(
            <div className="h2">
                <Grid>
                    <Cell col={11} offsetDesktop={1}>
                        <h2>Как с нами связаться?</h2>
                    </Cell>
                </Grid>
                <div className="contact-outer">
                    <YandexMaps />
                    <Grid className="contact-inner-wrap">
                        <Cell col={4} offsetDesktop={1} align={"middle"} className="contact-inner">
                            <Grid>
                                <Cell col={2} align={"middle"} offsetDesktop={1}>
                                    <p>Адрес:</p>
                                </Cell>
                                <Cell col={6} offsetDesktop={1}>
                                    <p>Краснодарский кр, г. Сочи, ул. Транспортная 40/3</p>
                                </Cell>
                            </Grid>
                            <Grid>
                                <Cell col={2} align={"middle"} offsetDesktop={1}>
                                    <p>Телефон:</p>
                                </Cell>
                                <Cell col={6} offsetDesktop={1}>
                                    <a href="tel:+78622266356">226 - 63 - 56</a>
                                </Cell>
                            </Grid>
                            <Grid>
                                <Cell col={2} align={"middle"} offsetDesktop={1}>
                                    <p>Почта:</p>
                                </Cell>
                                <Cell col={6} offsetDesktop={1}>
                                    <a href="mailto:askvector@mail.ru">askvector@mail.ru</a>
                                </Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Contacts;
