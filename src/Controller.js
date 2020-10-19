import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect } from 'react-router'
import Login from './screens/login/Login';
import Home from './screens/home/Home';

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = "v1/users/self/";
    }
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/home' render={(props) => (sessionStorage.getItem("access-token") !== null ?
                        <Home {...props} baseUrl={this.baseUrl} loggedIn="true" showSearchTab="true" /> : <Redirect to="/" />)} />
                </div>
            </Router>
        )
    }
}

export default Controller;