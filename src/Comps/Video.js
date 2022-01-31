import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiFillStar } from 'react-icons/ai'

export default function Video() {

    return (
        <Container>
        <Row>

        </Row>
        <Row>

        </Row>
            <div className="videoDiv" id="video">

                <div className="text-center vidCont mb-5 container">
                    <iframe className="responsive-iframe" src="https://player.vimeo.com/video/637515772?h=07821083e8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="HDE App v2"></iframe>
                </div>
            </div>
        </Container>
    )
}
