import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChair, faCoffee, faHome, faSwimmingPool, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    return (
        <div className="servicesContainer">
            <h1 className='serviceHead'>OUR SERVICES</h1>
            <Row>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faCoffee} />
                    <h1>Breakfast</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faChair} />
                    <h1>Garden</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faSwimmingPool} />
                    <h1>Pool</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
            </Row> 
            <Row>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faWifi} />
                    <h1>Free Wifi</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faHome} />
                    <h1>Daily Housekeeping</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
                <Col lg={4}>
                <div className='services'>
                    <FontAwesomeIcon size="2x" icon={faUtensils} />
                    <h1>In-Room Dining Service</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                </Col>
            </Row>
        </div>
    )
}
