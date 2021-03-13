import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./header.styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../Assets/logo.png";
import { faEnvelope, faHome, faProjectDiagram, faToolbox } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/">
                    <Link className="img-fluid logo" alt="brand">PhillStack</Link>
                </Navbar.Brand>
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
                                <FontAwesomeIcon icon={faHome} /> Home
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/services"
                                onClick={() => updateExpanded(false)}
                            >
                                <FontAwesomeIcon icon={faToolbox} /> Services
              </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
              </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={() => updateExpanded(false)}
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