import React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai'

export default function Ratings() {
    return (
        <Container className='mx-auto text-center'>
            <IconContext.Provider
                value={{ color: '#b9611d', size: '3rem' }}
            >

                <Row>
                    <Stack gap={3}>

                        <Col>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </Col>
                        <Col>
                            I love using this app
                        </Col>
                        <Col xs={{ span: 1, offset: 7 }}>
                            -Page
                        </Col>
                    </Stack>
                </Row>
            </IconContext.Provider>
        </Container>
    );
}
