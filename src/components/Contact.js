import React, { Fragment } from 'react';
// import axios from 'axios';

import './pages.css';

function Contact() {
    //functionality for contact form, sends email from user to me on submit 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const message = document.getElementById('message').value;
    //     axios({
    //         method: "POST", 
    //         url:"http://localhost:3002/send", 
    //         data: {
    //             name: name,   
    //             email: email,  
    //             messsage: message
    //         }
    //     }).then((response)=>{
    //         if (response.data.msg === 'success'){
    //             alert("Message Sent."); 
    //             this.resetForm()
    //         }else if(response.data.msg === 'fail'){
    //             alert("Message failed to send.")
    //         }
    //     })
    // }

    
    // resetForm(){
    // document.getElementById('contact-form').reset();
    // }

    return (
        <Fragment>
            <h1 style={{ color: "black", fontSize: "2px", padding: "30px" }} id="contact">Contact</h1>
            <div className="card container contact page">
                <h1>Contact Me</h1>
                <div className="card-body">
                <form id="contact-form" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    {/* <button type="submit" className="btn">Submit</button> */}
                    {/* once functionality is finished, will use button above instead of 'a' tag */}
                    <a role="button" href="mailto:ktlnn.nguyen@gmail.com" type="submit" className="btn about-btn">Submit</a>
                </form>
                </div>
            </div>
        </Fragment>
    )

}

export default Contact;