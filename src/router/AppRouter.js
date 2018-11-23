import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/index.jsx';
import Login from '../containers/Login/index.jsx';
import Register from '../containers/Register/index.jsx';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ Home }></Route>
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/register" component={ Register }></Route>
                </Switch>
            </Router>    
        );
    }
}
