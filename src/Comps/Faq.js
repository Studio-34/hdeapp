import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md'

let qAList = [
    {
        question: 'Is the app free?',
        answer: 'Yes, the app is free to download. And currently free to create both custom and auction videos.'
    },
    {
        question: 'Is the app available for Android devices?',
        answer: 'No. Currently the app is only available on iOS devices, but an Android version will be available soon.'
    },
    {
        question: 'Do I need a Vimeo account to use the app?',
        answer: 'No. The app itself uses a master Vimeo account to house and store all the videos. The videos are private and can’t be accessed by the public. Your videos can only be viewed by sharing the link provided to you, or copying and pasting the video link/url.'
    },
    {
        question: 'Can I use video clips from my device’s library ?',
        answer: 'No.At this time you can only use video clips that are captured while using the app.But an update is in the works to allow you to use video clips from your device.'
    },
    {
        question: 'How do I get custom graphics for my company or team ?',
        answer: 'Fill out a contact form to start the process, and an HDE team member will reach out to get you sign up info. '

    },
    {
        question: 'While recording video, the brightness increased and caused a white out on my screen.How do I fix this ?',
        answer: 'This is a known issue that we are working on a permanent solution in our current update.The focus / brightness adjustment is very sensitive within the app.If you’re finger holds / drags on the screen outside of the zoom or record areas, the brightness can be accidentally over adjusted causing the white screen.Simply tap your finger in the middle of the screen to reset the focus / brightness.'
    },
    {
        question: 'My video upload failed.What is the problem?',
        answer: 'The app needs stable cell service or wifi to process videos.If the app is minimized or closed during the uploading process, the upload can fail and must be re - started.We recommend saving your projects as a draft until stable service or wifi is established, then publishing.Keep the app open during processing.Once your video reaches 100 % you will see a message “syncing to cloud”. It is then safe to minimize the app.Once your “syncing to cloud” message disappears(usually 5 - 10 minutes with stable service), your video is available to access in your published videos section.'
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
            <Typography className="indent text-start">
                {el.answer}
            </Typography>
        </AccordionDetails>
    </Accordion>
);

export default function Faq() {
    return (
        <Container className="text-center my-5" id="faq">
            <Row>
                <Col>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    {faqMap}
                    <p className="pt-2">
                        If you have any other questions or issues, please contact us for support. 
                    </p>

                </Col>
            </Row>
        </Container>
    );
}
