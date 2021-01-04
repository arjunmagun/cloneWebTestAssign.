import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './todo.css';

export default function Todo() {
    return (
        <div className="todoContainer">
            <h1 className='todoHead'>THINGS TO DO</h1>
            <Row>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Wineries Tour</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Cultural Sites</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Market Tour</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
            </Row> 
            <Row>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Leisure Activities</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Birds Safari</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='todos'>
                    <h1>Horse Riding</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
            </Row>
        </div>
    )
}
