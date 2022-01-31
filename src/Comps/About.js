import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { GiFilmStrip } from 'react-icons/gi';
import { BsLayersHalf } from 'react-icons/bs';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function About() {
    let features = [
        {
            title: <GiFilmStrip />,
            subtitle: 'waiting',
            text: 'Splices multiple clips together, creating one seamless video',
            link1: 'waiting',
            link2: 'waiting',
        },
        {
            title: <BsLayersHalf />,
            subtitle: 'waiting',
            text: 'Overlays custom graphics and personalized text in the footer area of the video',
            link1: 'waiting',
            link2: 'waiting',
        },
        {
            title: <FaCloudUploadAlt />,
            subtitle: 'waiting',
            text: 'Uploads the video directly to a web hosting platform, and delivers the video link to the user. The user can easily share the link via text, email, or social media',
            link1: 'waiting',
            link2: 'waiting',
        },
    ];

    let featureCard = features.map((feature) =>
        <Col className="d-flex align-items-stretch my-3">
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">{feature.title}</Card.Title>
                    <Card.Subtitle className="pt-1 text-muted">{feature.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {feature.text}
                    </Card.Text>
                    <Card.Link href="#">{feature.link1}</Card.Link>
                    <Card.Link href="#">{feature.link2}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <Container className="my-5">
            <Row className='justify-content-center'>
                <Col>
                    <h2 className='text-center'>
                        About
                    </h2>
                    <p>
                        If you love sharing video content with your family, friends, or business partners, but are tired of having to share multiple files at a time, this app is for you!! If you would love to have multiple videos spliced into one, but don’t have the time, knowledge or desire to master complicated editing software, this app is the perfect solution!! The HDE app is jam-packed with features that are all designed for one purpose… to simplify the user experience.
                    </p>
                </Col>
                <Row className='justify-content-center features'>
                <h3 className='text-center py-3'>
                    Key Features
                </h3>
                    {/* <CardGroup className='mx-auto'> */}
                    {featureCard}

                {/* </CardGroup> */}
                
                </Row>
            </Row>
        </Container>
    );
}
