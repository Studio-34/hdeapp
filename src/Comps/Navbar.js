import React from 'react';
import AppLogo from '../img/appIcon.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function navbar() {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">
                        <img src={AppLogo} alt="HDE Logo" width="35" height="35" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tutorials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#video">Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={AppLogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#video">Video</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        </div >);
}
