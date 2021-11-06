import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./footer.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEnvelope, faHome, faNewspaper, faProjectDiagram, faToolbox, faStore } from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const [expand] = useState(false);

    return (
        <Navbar
            expanded={expand}
            fixed="bottom"
            expand="md"
            className="navbar border-top border-success"
        >
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Item className='m-auto'>
                        <Nav.Link as={Link} to="/">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
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
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/blog"
                    >
                        <FontAwesomeIcon icon={faNewspaper} />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="https://www.bonfire.com/store/phillstack/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faStore} />
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Footer;