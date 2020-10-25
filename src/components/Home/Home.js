import React, { Fragment } from 'react';
// import { Link, useLocation } from "react-router-dom";
import './Home.css';
// import NavBar from '../Navbar/NavBar';

function Home() {

    // const location = useLocation();

    return (
        <Fragment>
            <section id="home" className="homepage">
            
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

export default Home;