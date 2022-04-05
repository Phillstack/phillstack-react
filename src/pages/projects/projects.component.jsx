import React from 'react';
import { Modal } from 'react-bootstrap';
import KiterImage from '../../assets/kiter.png'
import BlkGoldImage from '../../assets/blkGoldResize.png';
import BoomboxImage from '../../assets/boomboxCartel.png';
import ShopJW from '../../assets/shopJW.png';

import './projects.styles.scss';

import { Container, Col, Row, Button } from 'react-bootstrap';

class ProjectsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            projectName: '',
            siteLink: '',
            techStack: '',
            modalShow: false
        }
    }

    render() {
        return (
            <div className='projectsContainer'>
                <h1>Projects</h1>
                <Container fluid className='projects'>
                <Row>
                    <Col lg={8} md={12}>
                        <img src={KiterImage} className='ba b--black-10 shadow-5 img-fluid' alt='Kiter Logo' />
                    </Col>
                    <Col lg={4} md={12}>
                        <h2>Kiter</h2>
                        <br />
                        <p>Job Application Tracker</p>
                        <br />
                        <Button className='viewSiteBtn'>
                            <a href="https://kiter.app" rel="noopener noreferrer" target="_blank">View Website</a>
                        </Button>
                        <br/><br/>
                        <Button className='caseStudyBtn' onClick={() => this.setState({ modalShow: true })}>
                            <a href="" rel="noopener noreferrer" className="disabled">Case Study</a>
                        </Button>
                    </Col>
                    </Row>
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
                            <img src={ShopJW} className='ba b--black-10 shadow-5 img-fluid' alt='MAD Logo' />
                        </Col>
                        <Col lg={4} md={12}>
                            <h2>Shop J&W</h2>
                            <br />
                            <p>E-Commerce Website</p>
                            <br />
                            <Button className='viewSiteBtn'>
                                <a href="https://shopjandw.com" rel="noopener noreferrer" target="_blank">View Website</a>
                            </Button>
                        </Col>
                    </Row>
                    <CaseStudyModal
                        show={this.state.modalShow}
                        onHide={() => this.setState({ modalShow: false })}
                    />
                </Container>
            </div>
        )
    }
}

const CaseStudyModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title dialogClassName="modal-header" id="contained-modal-title-vcenter">
            Kiter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We were hired by Kiter to migrate their backend services and data store from the bubble.io no code platform to AWS.  
            They were facing scalability problems on the platform and wanted more control over their data.
            </p><p>
            Using AWS Amplify we were able to rapidly create several GraphQL APIs backed by both DynamoDB and Opensearch, as well as Cognito to handle authentication and authorization.
            We came up with a migration plan that securely and reliabily transfered over all user data.  
            Amplify generated all of the new GraphQL schema that the frontend would need for us so moving from their REST APIs to the GraphQL APIs was a breeze.
            <br/><br/>From here they were able to implement new features and continue to grow their offerrings with ease.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="caseStudyBtn" onClick={props.onHide}><a href="" rel="noopener noreferrer" className="disabled">Close</a></Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ProjectsPage;