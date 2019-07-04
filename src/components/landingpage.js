import React, { Component } from 'react';
import Slider from './slider'
import Advantage from './advantage'
import NavBar from './navbar'
import Contacts from './contacts'
import Footer from './footer'

class LandingPage extends Component {
    render() {
        return(
            <div id="content">
                <div className="navbar">
                    <NavBar />
                </div>
                <div className="slider-wrapper">
                    <Slider />
                </div>
                <div className="advantage" >
                    <Advantage />
                </div>
                <div className="contacts" >
                    <Contacts />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default LandingPage;
