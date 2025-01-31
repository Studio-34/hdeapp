import React, { useRef } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import emailjs, { init } from '@emailjs/browser';

export default function Contact() {
    
    const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;
    
    init(`${YOUR_USER_ID}`);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('in the sendEmail Func ', {YOUR_USER_ID})

        emailjs.sendForm(`${YOUR_SERVICE_ID}`, `${YOUR_TEMPLATE_ID}`, form.current, `${YOUR_USER_ID}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container className="py-3" id="contact">
            <Row>
                <Col xs={8} className="mx-auto">
                <h2 className="text-center">Contact Us</h2>

                    <p> info@hdeapp.com</p>
                </Col>
            </Row>
        </Container>
    );
}
