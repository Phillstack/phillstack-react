import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./footer.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faHome, faProjectDiagram, faToolbox } from "@fortawesome/free-solid-svg-icons";


import './footer.styles.scss';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [expand, updateExpanded] = useState(false);

    return (
        <Navbar
            expanded={expand}
            fixed="bottom"
            expand="md"
            className={"navbar"}
        >
            <Container>
                <Nav className="m-auto flex-row" defaultActiveKey="#home">
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/services"
                        >
                            <FontAwesomeIcon icon={faToolbox} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                        >
                            <FontAwesomeIcon icon={faProjectDiagram} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">
                            <FontAwesomeIcon icon={faHome} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Nav.Link>
                    </Nav.Item>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => {
                            updateExpanded(expand ? false : "expanded");
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;