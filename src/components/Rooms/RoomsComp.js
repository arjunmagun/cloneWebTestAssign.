import { Button } from 'react-bootstrap';
import React from 'react';
import './Rooms.css';

export default function RoomsComp() {
    return (
        <div className="roomsContainer">
            <div className="innerRoom">
                <h1>OUR ROOMS</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <Button id="roomBtn" variant="outline-dark">Book A Room</Button>
            </div>
        </div>
    )
}
