import React, { Fragment } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Home.css';

function Portfolio() {

    const location = useLocation();

    return (
        <Fragment>

            

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="./Home.js">Katelynn Nguyen</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link
                        to="/about"
                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                        About
                        </Link>
                        </li>
                        <li className="nav-item active">
                        <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Portfolio
                        </Link>
                        </li>
                        <li className="nav-item active">
                        <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                        Contact
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <img src="assets/images/katelynn-profile.jpg" alt="Katelynn" class="img-fluid" />
        </Fragment>
    )
}

export default Portfolio;