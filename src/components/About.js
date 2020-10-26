import React, { Fragment } from 'react';
import './pages.css';

function About() {

    return (
        <Fragment>
            <h1 style={{ color: "black", fontSize: "2px", padding: "30px" }} id="about">About Me</h1>
            <div className="jumbotron container">
                <div className="row">
                    <div className="col-md-4">
                        <img id="profile-pic" src="/assets/images/ktlnn.jpg" alt="katelynn" />

                    </div>
                    <div className="col-md-8">
                        <h1 style={{textAlign:"left"}} className="display-4">About Me</h1>
                        <p className="lead about-text">I began my coding career this year and it has been one of the most vigorous, eye-opening and 
                        thought provoking journeys in my life. I have had the privilege of working alongside many strong coders in the Rutgers Coding Bootcamp, and cannot wait to continue this coding journey.</p>
                        <p className="about-text">I am an energetic and fast learner who is committed to excellent customer service and teamwork. 
                        </p>
                    </div>
                </div>


                <a className="btn" href="/assets/katelynn-resume-2020.pdf" role="button">Resume</a>
            </div>
        </Fragment>
    )
}

export default About;