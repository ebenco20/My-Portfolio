import React, { Component } from 'react';
import Footer from './footer';


class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>ABOUT ME</h1>

                <h3>Hello world!</h3>

                <h4>I'm a front-end creative developer, I build front-end applications with HTML5, CSS3,Bootstrap,Javascript and React.
                      I love coding,reading,football and also learning new things.
                </h4>
                <hr style={{ borderTop: '3px solid #833fb2', width: '100%', }} />

                <h2>AFRIDASH COMPANY</h2>
                <h4>Afridash company  is an education technology  which focuses on enhancement of students in programming.
                    I was opportune to do my 6 months internship,where i acquired the skills on Html,CSS3,javascript,and React.
                    Also involved in  Learning Management System (LMS).
                    <h3>Thank you Afridash</h3>
                </h4>
                <Footer />

            </div>
        )
    }
}

export default About;