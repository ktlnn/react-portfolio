import React, { Fragment } from 'react';
import './home.css';


function Home() {

    return (
        <Fragment>
            <section id="home" className="homepage">           
            <img src="assets/images/ktlnn-profile.png" alt="Katelynn" className="img-fluid" />
            <div className="typewriter">
            <h1 className="header">Hi, I'm Katelynn Nguyen</h1>
            </div>
            <p className="description">I am an aspiring full stack web developer that is self-motivated and hard-working. 
            </p>
            </section>
       </Fragment>
    )
}

export default Home;