import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiAuctionFill } from 'react-icons/ri'
import { IconContext } from 'react-icons';

export default function Auction() {
    return <Container id="auction">
        <Row>
            <Col className="text-center">
                <h2>
                    <IconContext.Provider
                        value={{size: '5rem' }}
                    >
                        <RiAuctionFill /> Auction Videos
                    </IconContext.Provider>
                </h2>
                <p>
                    This section of the app is designed to provide the ultimate streamlined process for submitting marketing videos for auctions. The app administrator gathers information from the auction company such as desired video clips, clip order and duration, and custom graphics. The administrator will also retrieve identifying data relating to the auction items that will be overlaid onto the graphics. From the user’s standpoint, all they need to do is gather the clips following the directions within the app, and they’re done. This amazing app splices the clips together, adds the custom auction graphics and desired item information onto the footer, uploads the video to Vimeo (hosting website), and emails the video link directly to the auction company. The end result being a uniform, professional quality video that was fast and easy for the user to create, and delivered to the auction company in a format easily shared or embedded on their website or social media. If you’re an auction company representative please complete a contact form so we can connect and assist you in placing your next auction on the HDE app.
                </p>

            </Col>
        </Row>
    </Container>;
}
