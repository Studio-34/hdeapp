import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../img/FooterLogo.svg'

export default function Footer() {
    return (
        <Container fluid className="footer mt-3">
            <Row className="align-items-end text-end justify-content-center">
                <Col xs={3} md={2}>
                    <img className='img-fluid footerLogo' src={Logo} alt="High Def Events Footer Logo" />
                </Col>
                <Col xs={8} md={6} className="align-bottom">
                    <span className="align-bottom">&copy; 2022 - HDE App, LLC</span>
                </Col>
            </Row>

        </Container>
    );
}
