import React, { useRef } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import emailjs, { init } from '@emailjs/browser';

export default function Contact() {
    
    const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;
    
    init({YOUR_USER_ID});
    
    console.log(process.env.REACT_APP_YOUR_USER_ID === YOUR_USER_ID)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('in the sendEmail Func ', {YOUR_USER_ID})

        emailjs.sendForm({YOUR_SERVICE_ID}, {YOUR_TEMPLATE_ID}, form.current, {YOUR_USER_ID})
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

                    {/* <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="user_name" />
                            <Form.Text className="text-muted">
                                Please Provide Your Name
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="email@email.com" name="user_email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type your message" name="message" />
                            <Form.Text className="text-muted">
                                Enter your message.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
