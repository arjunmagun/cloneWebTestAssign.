import React from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import './Contact.css';

export default function Contact() {
    return (
        <div className='contactContainer'>
        <Container>
            <h1 className='contactHead'>CONTACT US</h1>
            <div className='detailContainer'>
                <span className='contactDetails'><i>info@mysite.com</i></span>
                <span className='contactDetails'><i>500 Terry Francois Street, San Francisco, CA 94158</i></span>
                <span className='contactDetails'><i>Tel: 123-456-789</i></span>
            </div>
            <div className="formContainer">
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="Email" placeholder="Email" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress2">
                    <Form.Control placeholder="Subject" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control as="textarea" rows={5} placeholder="Message" />
                    </Form.Group>
                </Form.Row>

                <Button id="contactBtn" type="submit">
                    Send
                </Button>
                </Form>
            </div>
        </Container>

        </div>
    )
}
