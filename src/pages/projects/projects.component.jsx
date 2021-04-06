import React from 'react';
import BlkGoldImage from '../../assets/blkGoldResize.png';
import OptumImage from '../../assets/optum.png';
import BoomboxImage from '../../assets/boomboxCartel.png';
import MadConsultingGroup from '../../assets/madConsulting.jpg';

import './projects.styles.scss';

import { Container, Col, Row, Button } from 'react-bootstrap';


class ProjectsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            projectName: '',
            siteLink: '',
            techStack: ''
        }
    }

    render() {
        return (
            <div className='projectsContainer'>
                <h1>Projects</h1>
                <Container fluid className='projects'>
                    <Row>
                        <Col lg={8} md={12}>
                            <img src={BlkGoldImage} className='ba b--black-10 shadow-5 img-fluid' alt='BlkGold Logo' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h2>BlkGold</h2>
                            <br />
                            <p>Music Website</p>
                            <br />
                            <Button className='viewSiteBtn'>
                                <a href="http://blkgoldmusic.com" rel="noopener noreferrer" target="_blank">View Website</a>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='projects'>
                    <Row>
                        <Col lg={8} md={12}>
                            <img src={OptumImage} className='ba b--black-10 shadow-5 img-fluid' alt='Optum Logo' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h2>Drug Cost Estimator</h2>
                            <br />
                            <p>Micro Front End Application</p>
                            <br />
                            <Button className='viewSiteBtn'>
                                <a href="https://www.aarpmedicareplans.com/health-plans/estimate-drug-costs.html#/drug-cost-estimator" rel="noopener noreferrer" target="_blank">View Website</a>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='projects'>
                    <Row>
                        <Col lg={8} md={12}>
                            <img src={BoomboxImage} className='ba b--black-10 shadow-5 img-fluid' alt='Boombox Cartel Logo' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h2>Boombox Cartel</h2>
                            <br />
                            <p>Music Website</p>
                            <br />
                            <Button className='viewSiteBtn'>
                                <a href="http://boomboxcartel.com" rel="noopener noreferrer" target="_blank">View Website</a>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='projects bottomProject'>
                    <Row>
                        <Col lg={8} md={12}>
                            <img src={MadConsultingGroup} className='ba b--black-10 shadow-5 img-fluid' alt='MAD Logo' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h2>MAD Consulting Group</h2>
                            <br />
                            <p>Consulting Website</p>
                            <br />
                            <Button className='viewSiteBtn'>
                                <a href="http://madcsg.com/" rel="noopener noreferrer" target="_blank">View Website</a>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProjectsPage;