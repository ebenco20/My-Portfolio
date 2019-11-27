import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Footer from './footer';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src=""
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '0em' }}>Azubuike Ebenizer</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Whether it is seen in personal terms or trans-personal terms, whether it is Heaven or Nirvana or Happy Hunting Ground or the Garden of Paradise, the weight and authority of tradition maintains that death is just an alteration in our state of consciousness, and that the quality of our continued existence in the afterlife depends on the quality of our living here and now.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h4>Address</h4>
                        <p>Amarata yenagoa Bayelsa state,Nigeria</p>
                        <h4>Phone</h4>
                        <h5>(+234) 810-829-0616</h5>
                        <h4>Email</h4>
                        <h5>azubuikeebenco@gmail.com</h5>
                        <h5>Web</h5>
                        <h5>ebenco.com</h5>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName='My University'
                            schoolDescription='The Federal University, Otuoke is a federal government-owned University located in Otuoke, a town in Ogbia local government area of Bayelsa State, Southern Nigeria. The University was established in 2011 and started with 282 pioneer students. It offers degree courses at undergraduate levels.'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>

                        <Skills
                            skill='Html / Css'
                            progress={100}
                        />

                        <Skills
                            skill='Javascript'
                            progress={80}
                        />
                        <Skills
                            skill='Node.JS'
                            progress={50}
                        />
                        <Skills
                            skill='React'
                            progress={25}
                        />

                    </Cell>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Resume;