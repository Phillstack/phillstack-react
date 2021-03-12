import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import './header.styles.scss';

const Header = () => (
    <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
        <Nav.Item>
            <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
    </Nav.Link>
        </Nav.Item>
    </Nav>
)

export default Header;