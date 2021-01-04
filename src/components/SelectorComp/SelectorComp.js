import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Selector.css';

export default function SelectorComp() {
    return (
        <div className="detailContainer">
            <Form>
            <Row>
                <Col lg={3}>
                <Form.Control id="dateInputs" type="datepicker" min="0" placeholder="DD MM YYYY" />
                </Col>
                <Col lg={3}>
                <Form.Control id="dateInputs" type="datepicker" min="0" placeholder="DD MM YYYY" />
                </Col>
                <Col lg={1.5}>
                <Form.Control id="numberInputs" type="number" min="0" placeholder="Adults" />
                </Col>
                <Col lg={1.5}>
                <Form.Control id="numberInputs" type="number" min="0" placeholder="Kids" />
                </Col>
                <Col lg={3}>
                    <Button id="searchBtn">Search</Button>
                </Col>
            </Row>
            </Form>
        </div>
    )
}
