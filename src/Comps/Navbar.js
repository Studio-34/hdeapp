import React from 'react';
import AppLogo from '../img/appIcon.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Switch, Route, Routes, Link } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import ScrollSpy from 'react-scrollspy-navigation';

export default function navbar() {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={NavHashLink} smooth activeClassName="selected"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: '#fff' }} to="/#home" href="/#home">
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
                                <ScrollSpy>
                                    <Nav.Link as={NavHashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })} activeStyle={{ color: '#fff' }} to="/#home" href="/#home">Home</Nav.Link>
                                    <Nav.Link as={HashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: '#fff' }} to="/#about" href="/#about">About</Nav.Link>
                                    <Nav.Link as={HashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: '#fff' }} to="/#custom" href="/#custom">Custom</Nav.Link>
                                    <Nav.Link as={HashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: '#fff' }} to="/#auction" href="/#auction">Auction</Nav.Link>
                                    <Nav.Link as={HashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: '#fff' }} to="/#faq" href="/#faq">FAQs</Nav.Link>
                                    <Nav.Link as={HashLink} smooth activeClassName="active"
                                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} activeStyle={{ color: '#fff' }} to="/#contact">Contact</Nav.Link>
                                </ScrollSpy>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>);
}
