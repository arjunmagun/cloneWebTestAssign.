import React from 'react';
import './Gallery.css';

export default function Gallery() {
    return (
        <div className='galleryContainer'>
            <h1>GALLERY</h1>
            <div className='imgContainer'>
                <img className="images" src={require('../../Assests/img1.webp')} alt='hotelsImages' />
                <img className="images" src={require('../../Assests/img1.webp')} alt='hotelsImages' />
                <img className="images" src={require('../../Assests/img1.webp')} alt='hotelsImages' />
            </div>
        </div>
    )
}
