import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md'

let qAList = [
    {
        question: "Is the app free?",
        answer: "Yes, the app is free to download. And currently free to create both custom and auction videos."
    },
    {
        question: "Is the app available for Android devices?",
        answer: "No. Currently the app is only available on iOS devices, but an Android version will be available soon."
    },
    {
        question: "Do I need a Vimeo account to use the app?",
        answer: "No. The app itself uses a master Vimeo account to house and store all the videos. The videos are private and can't be accessed by the public. Your videos can only be viewed by sharing the link provided to you, or copying and pasting the video link/url."
    },
    {
        question: "My video upload failed. What is the problem?",
        answer: "The app needs stable cell service or wifi to process videos.If the app is minimized or closed during the uploading process, the upload can fail and must be re - started.We recommend saving your projects as a draft until stable service or wifi is established, then publishing. Keep the app open during processing. Once your video reaches 100 % you will see a message “syncing to cloud”. It is then safe to minimize the app.Once your “syncing to cloud” message disappears(usually 5 - 10 minutes with stable service), your video is available to access in your published videos section."
    },
]

let faqMap = qAList.map((el, index) =>
    <Accordion>
        <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
        >
            <Typography className="question">
                {el.question}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography className="indent answer text-start">
                {el.answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
);

export default function Faq() {
    return (
        <Container className="text-start my-5" id="faq">
            <Row>
                <Col>
                    <h2 className="text-center pb-2">
                        Frequently Asked Questions
                    </h2>
                    {faqMap}
                    <p className="pt-3 text-center">
                        If you have any other questions or issues, please contact us at <a href="mailto:info@hdeapp.com">info@hdeapp.com</a> for support. 
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
