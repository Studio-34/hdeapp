import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

export default function Video(props) {

    return (
        <Container id={props.sectionID} className="py-5">
            <Row>
                <h2 className="text-center">
                    {props.videoSection}
                </h2>
                <p className='mx-3'>
                {props.videoText}
                </p>
            </Row>
            <Row className="justify-content-center">
                <div className="videoDiv py-5 text-center" id={props.videoID}>
                    <div className="text-center vidCont mb-5 container">
                        <iframe title={props.videoSection} className="responsive-iframe" src={props.videoLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Button>
                        Click here for more tutorials
                    </Button>
                </div>

            </Row>

        </Container>
    )
}
