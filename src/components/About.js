import React, { Fragment } from 'react';
import './pages.css';

function About(){

    return(
        <Fragment>
            <h1 id="about">About Me</h1>
            <div className="jumbotron container">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </Fragment>
    )
}

export default About;