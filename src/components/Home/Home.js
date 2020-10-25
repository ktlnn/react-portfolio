import React, { Fragment } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Home.css';

function Portfolio() {

    const location = useLocation();

    return (
        <Fragment>
            <section className="homepage">
            <nav className="navbar navbar-expand-lg ">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
​
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link
                        to="/about"
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}                       
                        >
                        Home
                        </Link>
                        </li>
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

            <img src="assets/images/ktlnn-profile.png" alt="Katelynn" class="img-fluid" />
            <div className="typewriter">
            <h1 className="header">Hi, I'm Katelynn Nguyen</h1>
            </div>
            <p className="description">I am an aspiring full stack web developer that is self-motivated and hard-working. 
            I am an energetic and fast learner who is committed to excellent customer service and teamwork. </p>
            </section>
        </Fragment>
    )
}

export default Portfolio;