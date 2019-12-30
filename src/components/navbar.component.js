import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><h3>EST Essaouira</h3></a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/students" className="nav-link"><h5>Students</h5></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/professors" className="nav-link"><h5>Professors</h5></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/majors" className="nav-link"><h5>Majors</h5></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}