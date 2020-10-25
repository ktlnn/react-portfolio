import React, {Fragment} from 'react';
import './pages.css';
 

function Portfolio() {

    return (
        <Fragment>
        <h1>Portfolio</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="/assets/images/send-foodz-screenshot.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Send Foodz</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a role="button" href="https://ktlnn.github.io/send-foodz/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://ktlnn.github.io/send-foodz/" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="/assets/images/stellar-sonic-screenshot.png" className="card-img-top" alt="stellar-sonic-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Stellar Sonic</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://dry-shelf-60979.herokuapp.com/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://github.com/ktlnn/Stellar-Sonic" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="/assets/images/employee-directory-screenshot.png" className="card-img-top" alt="employee-directory-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Directory</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://ktlnn.github.io/employee-directory/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://github.com/ktlnn/employee-directory" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="/assets/images/work-day-scheduler-screenshot.png" className="card-img-top" alt="work-day-scheduler-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Daily Planner</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://ktlnn.github.io/daily-planner/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://github.com/ktlnn/daily-planner" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="/assets/images/budget-tracker-screenshot.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Budget Tracker</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://intense-reef-26907.herokuapp.com/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://github.com/ktlnn/budget-tracker" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="../images/Send-Foodz.png" className="card-img-top" alt="send-foodz-screenshot" />
                        <div className="card-body">
                            <h5 className="card-title">Send Foodz</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://ktlnn.github.io/send-foodz/" target="__blank" className="btn btn-outline-secondary">Webpage</a>
                            <a role="button" href="https://github.com/ktlnn/employee-directory" target="__blank" className="btn btn-outline-secondary">Repository</a>
                        </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Portfolio;