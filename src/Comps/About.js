import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={8}>
                    <h2 className='text-center'>
                        About
                    </h2>
                    <p>
                        If you love sharing video content with your family, friends, or business partners, but are tired of having to share multiple files at a time, this app is for you!! If you would love to have multiple videos spliced into one, but don’t have the time, knowledge or desire to master complicated editing software, this app is the perfect solution!! The HDE app is jampacked with features that are all designed for one purpose… to simplify the user experience.
                    </p>
                    <p>
                        <em>

                            Key Features:
                        </em>
                        <ul>
                            <li>
                                Splices multiple clips together, creating one seamless video

                            </li>
                            <li>
                                Overlays custom graphics and personalized text in the footer area of the video

                            </li>
                            <li>

                                Uploads the video directly to a web hosting platform, and delivers the video link to the user. The user can easily share the link via text, email, or social media
                            </li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
