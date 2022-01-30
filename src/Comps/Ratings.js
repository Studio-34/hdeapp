import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { IconContext } from 'react-icons';

export default function Ratings(props) {

    return (
        <Container className='mx-auto text-center'>
            <IconContext.Provider
                value={{ color: '#b9611d', size: '3rem' }}
            >

                <Row>
                    <Stack gap={3}>

                        <Col>
                            {props.stars}
                            <starReview />
                        </Col>
                        <Col>
                            {props.review}
                        </Col>
                        <Col xs={{ span: 3, offset: 6 }}>
                            - {props.name}
                        </Col>
                    </Stack>
                </Row>
            </IconContext.Provider>
        </Container>
    );
}
