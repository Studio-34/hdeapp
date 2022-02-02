import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai'

export default function Video(props) {

    return (
        <Container id={props.sectionID}>
        <Row className ="text-center">
        <h2>
            {props.videoSection}
        </h2>

        </Row>
        <Row>
            <div className="videoDiv" id={props.videoID}>
                <div className="text-center vidCont mb-5 container">
                        <iframe title={props.videoSection} className="responsive-iframe" src={props.videoLink} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </Row>

        </Container>
    )
}
