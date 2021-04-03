import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./header.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../Assets/logo.png";
import { faEnvelope, faHome, faProjectDiagram, faToolbox } from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <Navbar
            fixed="top"
            expand="md"
            className={"navbar"}
        >
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand href="/">
                        <Link className="img-fluid logo" alt="brand">PhillStack</Link>
                    </Navbar.Brand>
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">
                                <FontAwesomeIcon icon={faHome} /> Home
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/services"
                            >
                                <FontAwesomeIcon icon={faToolbox} /> Services
              </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                            >
                                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
              </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;