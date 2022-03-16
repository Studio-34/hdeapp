import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { IconContext } from 'react-icons';

export default function Ratings(props) {

    return (
        <Container className='ratings mx-auto h-100 d-flex align-items-center'>
            <IconContext.Provider
                value={{ color: '#b9611d', size: '2.3rem' }}
            >

                <Row>
                    <Stack gap={3}>

                        <Col className="text-center">
                            {props.stars}
                        </Col>
                        <Col>
                            {props.review}
                        </Col>
                        <Col xs={{ span: 5, offset: 8 }}>
                            - {props.name}
                        </Col>
                    </Stack>
                </Row>
            </IconContext.Provider>
        </Container>
    );
}
