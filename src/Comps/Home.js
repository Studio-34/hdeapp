import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iPhone from '../img/Iphone-Mockup.jpg';
import AppStore from '../img/appStore.svg'

export default function Home() {
    return (
        <Container className="text-center pt-5 pb-3 mx-auto" id="home">
            <Row xs={2} className='justify-content-center'>
                <Col xs={7} md={5}>
                    <h1>
                        <span className="d-inline-block">Welcome to </span>
                        <span className="d-inline-block">High Def Events</span>
                    </h1>
                    <p className="px-2">
                        This innovative app splices multiple clips into one seamless video, and delivers the video to you in the form of an easily shareable link.
                    </p>

                    <Col>
                        <Link to="https://apps.apple.com/us/app/highdefevents/id1570404215">
                            <img className="img-fluid" src={AppStore} />
                        </Link>
                    </Col>
                </Col>
                <Col xs={5} md={2}>
                    <img src={iPhone} className="img-fluid" />

                </Col>
            </Row>

        </Container>
    );
}
