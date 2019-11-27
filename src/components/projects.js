import React, { Component } from 'react';
import Footer from './footer';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (

                <div className="project-ht">
                    {/* project 1 */}
                    <Card shadow={0} style={{ width: '320', height: 320, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu36H3Kf0N6BHxD_UYg0Noh9R4qp__DqbYmOHukZUTd-Iq-JVL) center / cover' }}>React project 1</CardTitle>
                        <CardText>
                            Simple Html project.
              </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Twitter</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* project 2 */}
                    <Card shadow={0} style={{ width: '320', height: 320, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHzSuPdxtmo8olKRFKfWe8aXN8m5VM-rh_4e1ygX3sTsFoLd-S) center / cover' }}>React project 1</CardTitle>
                        <CardText>
                            Simple Html project.
              </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Twitter</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* project 3 */}
                    <Card shadow={0} style={{ width: '320', height: 320, margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW4-JCdNjT6KqJsENJ8ex8IUfTcc5Bimsm1kC_5WIAhLGSa1US) center / cover' }}>React project 1</CardTitle>
                        <CardText>
                            Simple Html project.
                </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            {/* <Button colored>Twitter</Button> */}
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Angular</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Html</Tab>
                    <Tab>Node.js</Tab>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
                <section>
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
                <Footer />
            </div>
        );
    }
}

export default projects;