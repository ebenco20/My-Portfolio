import React, { Component } from 'react';

import Landing from './landingPage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import App from '../App';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <App />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/aboutme" component={AboutMe} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/resume" component={Resume} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Main;  