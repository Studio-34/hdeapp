import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import iPhone from '../img/Iphone-Mockup.png';
import AppStore from '../img/appStore.svg';
import GooglePlay from '../img/googlePlay.svg';

export default function Home() {
    return (
        <Container className="text-center" id="home">
            <Row className='justify-content-center headerRow'>
                <Col xs={12} lg={9} className="headerText">
                    <h1>
                        <div className="d-block">
                            <span className="d-inline-block">&nbsp;</span>
                            <div className="d-inline-block">Welcome to</div>
                            <span className="d-inline-block">&nbsp;</span>
                            <div className="d-inline-block">High Def Events</div>
                        </div>
                    </h1>
                    <p className="px-2">
                        This innovative app splices multiple clips into one seamless video, and delivers the video to you in the form of an easily shareable link.
                    </p>

                    <Row>
                    <Col>
                        <Link to="https://apps.apple.com/us/app/highdefevents/id1570404215">
                            <img className="img-fluid" src={AppStore} />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="https://apps.apple.com/us/app/highdefevents/id1570404215">
                            <img className="img-fluid" src={GooglePlay} />
                        </Link>
                    </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={3}>
                    <img src={iPhone} className="img-fluid" />

                </Col>
            </Row>

        </Container>
    );
}
