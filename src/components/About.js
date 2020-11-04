import React, { Fragment } from 'react';
import './pages.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faGithub,
//     faLinkedin
//   } from "@fortawesome/free-brands-svg-icons";

function About() {

    let styles = {
       
        p1: {
            color:"white", 
            fontFamily:"'Courier New', Courier, monospace", 
            textAlign:"center", 
            fontSize: "20px",
            padding:"10px"
        },
        p2: {
            color:"white", 
            fontFamily:"'News Cycle', sans-serif", 
            textAlign:"center", 
            fontSize: "15px",
        },
    }

    return (
        <Fragment>
            <h1 id="about">About Me</h1>
            <div className="jumbotron container page">
                <div className="row">
                    <div className="col-md-4">
                        <img id="profile-pic" src={process.env.PUBLIC_URL+"/assets/images/ktlnn.jpg"} alt="katelynn" />
                        <p style={styles.p1}>Katelynn Nguyen</p>
                        <ul>
                            <li style={styles.p2}>Front-End Developer</li>
                            <li style={styles.p2}>Back-End Developer</li>
                            <li style={styles.p2}>Digital Drawer</li>
                        </ul> 
                    </div>
                    <div className="col-md-8">
                        <h1 className="display-4 aboutHeader">About Me</h1>
                        <p className="lead about-text">I began my coding career this year and it has been one of the most vigorous and 
                        thought provoking journeys in my life. I have had the privilege of working alongside many strong programmers in the Rutgers Coding Bootcamp, 
                        and cannot wait to continue this coding journey.</p>
                        <p className="about-text">I am an energetic and fast learner who is committed to excellent customer service and teamwork. My open-minded mentality allows 
                        me to adjust to changes with ease and tackle challenges efficiently. 

                        </p>
                    </div>
                </div>


                <a className="btn about-btn" href="/assets/katelynn-resume-2020.pdf" target="__blank"  role="button">Resume</a>
            </div>
        </Fragment>
    )
}

export default About;