import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './navbar.component';
import Students from './students.component';
import Professors from './professors.component';
import Majors from './marjors.component';

export default class Home extends Component{
    render(){
        return (
            <Router>
                <Navbar />
                <br/>
                <div className="container">
                    <Route path="/students" component={Students} />
                    <Route path="/professors" component={Professors} />
                    <Route path="/majors" component={Majors} />
                </div>
            </Router>
        );
    }
}