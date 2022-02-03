import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className="footer">
        <Row className="px-5">
            <Col>
                Footer Test
            </Col>
            <Col>
                &copy; HDE App, LLC
            </Col>
        </Row>

        </Container>
    );
}
