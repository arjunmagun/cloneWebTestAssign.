import React from 'react';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="footer">
            <p>&#169; {year} by Arjun Magun. <a href="https://portfolio-web-bice.vercel.app/" rel="noopener noreferrer" target="_blank">Visit Portfolio</a></p>
        </div>
    )
}
