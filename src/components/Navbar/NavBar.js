import React, { Fragment } from 'react';
import { Link, useLocation } from "react-router-dom";
import './navBar.css';
import ScrollIntoView from 'react-scroll-into-view';

function NavBar(){

    const location = useLocation();

    return(
        <Fragment>
        <nav className="navbar navbar-expand-lg sticky-top"> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
​
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <ScrollIntoView selector="#home">
                        <Link
                        to="/"
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}                   
                        >
                        Home
                        </Link>
                        </ScrollIntoView>
                        </li>
                        <li className="nav-item active">
                        <ScrollIntoView selector="#about">
                        <Link
                        to="/about"
                        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}                       
                        >
                        About
                        </Link>
                        </ScrollIntoView>
                        </li>
                        <li className="nav-item active">
                        <ScrollIntoView selector="#portfolio">
                        <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                        Portfolio
                        </Link>
                        </ScrollIntoView>
                        </li>
                        <li className="nav-item active">
                        <ScrollIntoView selector="#contact">
                        <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                        Contact
                        </Link>
                        </ScrollIntoView>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;