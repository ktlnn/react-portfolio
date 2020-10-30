import React from 'react';
import './pages.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


function Footer() {

    return(
        <div className="container-fluid"> 
        <div className="fixed-bottom">
        <div className="icons">       
                <a href="https://github.com/ktlnn"
                className="github social"
                >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
        
                <a href="https://github.com/ktlnn"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>           
        </div>
        <p className="footer">Handcrafted by me <span>&#169;</span> Katelynn 2020</p>
        </div>
        </div>
    )
}

export default Footer;