import React from 'react';
import AppLogo from '../img/appIcon.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, Link } from "react-router-dom";

export default function navbar() {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                alt=""
                                src={AppLogo}
                                width="40"
                                height="40"
                                className="d-inline-block align-top"
                            />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/#about">About</Nav.Link>
                            <Nav.Link as={Link} to="/#custom">Custom</Nav.Link>
                            <Nav.Link as={Link} to="/#auction">Auction</Nav.Link>
                            <Nav.Link as={Link} to="/#faq">FAQs</Nav.Link>
                            <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        </div>);
}
