import React from 'react';
import AppLogo from '../img/appIcon.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Routes, Link } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';

export default function navbar() {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavHashLink} smooth activeClassName="selected"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: 'red' }} to="/#home" onclick="scroll(0,0)">
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
                                <Nav.Link as={NavHashLink} smooth activeClassName="selected"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: 'red' }} to="/#home" onclick="scroll(0,0)">Home</Nav.Link>
                                <Nav.Link as={HashLink} smooth activeClassName="selected"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: 'red' }} to="/#about">About</Nav.Link>
                                <Nav.Link as={HashLink} smooth activeClassName="selected"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: 'red' }} to="/#custom">Custom</Nav.Link>
                                <Nav.Link as={HashLink} smooth activeClassName="selected"
                                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: 'red' }} to="/#auction">Auction</Nav.Link>
                                <Nav.Link as={NavLink} to="/faq">FAQs</Nav.Link>
                                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>);
}
