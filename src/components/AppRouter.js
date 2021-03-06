import React from 'react';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <div className="container">
                <Switch>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/" component={HomePage}/>
                    {/* the last route render a default component in the most cases should be a 404 page */}
                    <Route component={HomePage}/>
                </Switch>

                </div>
            </div>
        </Router>
    )
}
