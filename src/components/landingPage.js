import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from './my pics.png';
import Footer from './footer';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="Landing-grid">
                    <Cell>
                        <img
                            src={image}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="font">
                            <h1>Front End Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | Javascript | React </p>

                            <div className="social-medias">

                                {/* Linkedin */}
                                <a href="http://google.com" ref="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" ref="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Twitter */}
                                <a href="http://google.com" ref="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="http://google.com" ref="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                    <Cell>
                    </Cell>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Landing;