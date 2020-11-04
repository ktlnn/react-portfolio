import React, {Fragment} from 'react';
import './pages.css';
 

function Portfolio() {

    return (
        <Fragment>
        <section className="portfolio-bg">
        <h1 id="portfolio">Portfolio</h1>
        <h2 style={{fontSize:"50px"}}>My Projects</h2>
        <div className="row">
            <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/send-foodz-screenshot.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Send Foodz</h5>
                            <p className="card-text">An application that generates random restaurants based on the inputted city. Also shows the weather of the city on search.</p>
                            <a role="button" href="https://ktlnn.github.io/send-foodz/" target="__blank" className="btn">Repository</a>
                            <a role="button" href="https://ktlnn.github.io/send-foodz/" target="__blank" className="btn">Webpage</a>
                        </div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/stellar-sonic-screenshot.png" className="card-img-top" alt="stellar-sonic-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Stellar Sonic</h5>
                            <p className="card-text">A space to share your sound - an application where you can search for songs and add to your personal interactive playlist.</p>
                            <a role="button" href="https://github.com/ktlnn/Stellar-Sonic" target="__blank" className="btn  ">Repository</a>
                            <a href="https://dry-shelf-60979.herokuapp.com/" target="__blank" className="btn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/employee-directory-screenshot.png" className="card-img-top" alt="employee-directory-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p className="card-text">Organizes employees' data in a table and includes a search bar to filter employees. Also includes a sort function that sorts data.</p>
                            <a role="button" href="https://github.com/ktlnn/employee-directory" target="__blank" className="btn  ">Repository</a>
                            <a href="https://ktlnn.github.io/employee-directory/" target="__blank" className="btn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
        </div>

        <div className="row">
        <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/work-day-scheduler-screenshot.png" className="card-img-top" alt="work-day-scheduler-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Daily Planner</h5>
                            <p className="card-text">An easy to use planner for a day's work. Add, edit, and remove tasks and color codes based on current time.</p>
                            <a role="button" href="https://github.com/ktlnn/daily-planner" target="__blank" className="btn  ">Repository</a>
                            <a href="https://ktlnn.github.io/daily-planner/" target="__blank" className="btn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/budget-tracker-screenshot.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Budget Tracker</h5>
                            <p className="card-text">Keeps track of incoming money and expenses. Also a Progressive Web App (PWA) that can be downloaded.</p>
                            <a role="button" href="https://github.com/ktlnn/budget-tracker" target="__blank" className="btn  ">Repository</a>
                            <a href="https://intense-reef-26907.herokuapp.com/" target="__blank" className="btn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
            <div className="col col-md-4">
                <div className="card">
                    <img src="/assets/images/weather-app-screenshot.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Search for a city and find out the current weather along with the next 5 days' forecast.</p>
                            <a role="button" href="https://github.com/ktlnn/password-generator" target="__blank" className="btn  ">Repository</a>
                            <a href="https://ktlnn.github.io/password-generator/" target="__blank" className="btn  ">Webpage</a>
                            
                        </div>
                </div>
            </div>
        </div>
        </section>
        </Fragment>
    )
}

export default Portfolio;