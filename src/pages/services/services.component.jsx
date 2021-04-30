import React from 'react';

import FEIcon from '../../assets/feIcon.png';
import BEIcon from '../../assets/beIcon.png';
import uiuxIcon from '../../assets/uiuxIcon.png';
import consultingIcon from '../../assets/consultingIcon.png';

import './services.styles.scss';

import { Container, Col, Row, Button } from 'react-bootstrap';

class ServicesPage extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 991;
        
        if (isMobile) {
            return (
                <div className='servicesContainer'>
                    <h1>Services</h1>
                    <Container fluid className='frontEndService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={FEIcon} className='ba b--black-10 shadow-5 img-fluid' alt='BlkGold Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>Front End</h2>
                                <br />
                                <h4>SEO, Analytics, Responsive Web Applications &amp; Optimized Performance</h4>
                                <br />
                                <p>Our goal is to deliver a state of the art website utilizing current industry standards,
                                ensuring your site is fast, reliable, responsive &amp; reachable by your target audience
                                to leverage your business needs.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='backEndService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={BEIcon} className='ba b--black-10 shadow-5 img-fluid' alt='Optum Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>Back End</h2>
                                <br />
                                <h4>Database Configuration, Cloud Services, Testing &amp; Infrastucture, Operations Monitoring, Alerting &amp; Usage</h4>
                                <br />
                                <p>As your site scales, so do your needs to securely store &amp; handle your clients data.
                                We ensure your products &amp; services are highly performant and can theoretically handle an
                                infinite number of customer requests simultaneously.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='uiuxService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={uiuxIcon} className='ba b--black-10 shadow-5 img-fluid' alt='BlkGold Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>UI &amp; Design</h2>
                                <br />
                                <h4>Branding, UI Design &amp; Implementation, Modern Web & Mobile Design</h4>
                                <br />
                                <p>Our team utilizes modern design patterns and clean branding practices to give your site
                                a performance optmized UI for your users. From branding, color patterns and layout, we create
                                applications that encourage users to stay on your site and draw them to your products.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='consultingService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={consultingIcon} className='ba b--black-10 shadow-5 img-fluid' alt='Optum Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>Consulting &amp; Architecture</h2>
                                <br />
                                <h4>Drafting, Migration Services, Guidance &amp; Site Audits</h4>
                                <br />
                                <p>We work closely with you to understand what it is you want to build. We design
                                a fully comprehensive architecture diagram to provide your team with a high level overview
                                of the components the solution will be comprised of.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container className='servicesBtn'>
                        <a href='/contact'>
                            <Button
                                className='contactBtn btn'>Contact
                            </Button>
                        </a>
                    </Container>
                </div>
            )
        } else {
            return (
                <div className='servicesContainer'>
                    <h1>Services</h1>
                    <Container fluid className='frontEndService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={FEIcon} className='ba b--black-10 shadow-5 img-fluid' alt='BlkGold Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>Front End</h2>
                                <br />
                                <h4>SEO, Analytics, Responsive Web Applications &amp; Optimized Performance</h4>
                                <br />
                                <p>Our goal is to deliver a state of the art website utilizing current industry standards,
                                ensuring your site is fast, reliable, responsive &amp; reachable by your target audience
                                to leverage your business needs.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='backEndService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <h2>Back End</h2>
                                <br />
                                <h4>Database Configuration, Cloud Services, Testing &amp; Infrastucture, Operations Monitoring, Alerting &amp; Usage</h4>
                                <br />
                                <p>As your site scales, so do your needs to securely store &amp; handle your clients data.
                                We ensure your products &amp; services are highly performant and can theoretically handle an
                                infinite number of customer requests simultaneously.</p>
                                <br />
                            </Col>
                            <Col lg={6} md={12}>
                                <img src={BEIcon} className='ba b--black-10 shadow-5 img-fluid' alt='Optum Logo' />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='uiuxService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <img src={uiuxIcon} className='ba b--black-10 shadow-5 img-fluid' alt='BlkGold Logo' />
                            </Col>
                            <Col lg={6} md={12}>
                                <h2>UI &amp; Design</h2>
                                <br />
                                <h4>Branding, UI Design &amp; Implementation, Modern Web & Mobile Design</h4>
                                <br />
                                <p>Our team utilizes modern design patterns and clean branding practices to give your site
                                a performance optmized UI for your users. From branding, color patterns and layout, we create
                                applications that encourage users to stay on your site and draw them to your products.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container fluid className='consultingService'>
                        <Row>
                            <Col lg={6} md={12}>
                                <h2>Consulting &amp; Architecture</h2>
                                <br />
                                <h4>Drafting, Migration Services, Guidance &amp; Site Audits</h4>
                                <br />
                                <p>We work closely with you to understand what it is you want to build. We design
                                a fully comprehensive architecture diagram to provide your team with a high level overview
                                of the components the solution will be comprised of.</p>
                                <br />
                            </Col>
                            <Col lg={6} md={12}>
                                <img src={consultingIcon} className='ba b--black-10 shadow-5 img-fluid' alt='Optum Logo' />
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container className='servicesBtn'>
                        <a href='/contact'>
                            <Button
                                className='contactBtn btn'>Contact
                            </Button>
                        </a>
                    </Container>
                </div>
            )
        }
        
    }
}

export default ServicesPage;