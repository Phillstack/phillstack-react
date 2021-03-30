import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./footer.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../Assets/logo.png";
import { faEnvelope, faHome, faProjectDiagram, faToolbox } from "@fortawesome/free-solid-svg-icons";


import './footer.styles.scss';

function Footer() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNav] = useState(false);

    return (
        <Navbar
            fixed="bottom"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
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
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <FontAwesomeIcon icon={faHome} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/services"
                                onClick={() => updateExpanded(false)}
                            >
                                <FontAwesomeIcon icon={faToolbox} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;