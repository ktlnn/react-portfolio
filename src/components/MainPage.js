import React, {Fragment, useEffect} from 'react';
import Home from "./Home/Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from './Contact';

function MainPage() {

    useEffect( () => {
        console.log("Something")
    }, []);

    return(
        <Fragment>
            <Home />
            <About />
            <Portfolio />
            <Contact />
        </Fragment>
    )
}

export default MainPage;