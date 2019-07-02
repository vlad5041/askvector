import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from './landingpage';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import Contacts from './contacts';
import NavBar from './navbar';

function AppRouter() {
    return (
        <Router>
            <NavBar />

            <Route path="/" exact component={LandingPage} />
            <Route path="/about/" component={About} />
            <Route path="/services/" component={Services} />
            <Route path="/portfolio/" component={Portfolio} />
            <Route path="/contacts/" component={Contacts} />
        </Router>
    );
}

export default AppRouter;
