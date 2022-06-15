import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeSwitch from './ThemeSwitch';

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="fw-bolder">HOME</Nav.Link>
                        <Nav.Link href="/api" className="fw-bolder">API</Nav.Link>
                    </Nav>
                    <ThemeSwitch />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
