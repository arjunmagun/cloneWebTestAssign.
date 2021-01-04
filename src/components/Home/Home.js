import React from 'react';
import { Container } from 'react-bootstrap';
import MainNav from '../Navbar/Navbar';
import './Home.css';
import "react-datepicker/dist/react-datepicker.css";
import SelectorComp from '../SelectorComp/SelectorComp';
import About from '../About/About';
import RoomsComp from '../Rooms/RoomsComp';
import Services from '../ServicesComp/ourServices';
import Gallery from '../Gallery/Gallery';
import Todo from '../Todo/Todo';
import Reviews from '../Reviews/Reviews';
import Contact from '../ContactUs/Contact';
import Footer from '../Footer/Footer';


export default function Home() {
    return (
        <>
            <MainNav />
            <Container>
                <div className="headlineContainer">
                    <h1 className='brandName'>
                        <i>F<span className='firstWord'>erofly</span></i>
                    </h1>
                    <p className='headline'>
                        <i>
                            Magnify your Journey
                        </i>
                    </p>
                </div>
                <div className='bgImg1' />
                <SelectorComp />
                <About />
                <RoomsComp />
                <Services />
                <Gallery />
                <Todo />
                <Reviews />
            </Container>
            <Contact />
            <div className="mapouter">
                <div className="gmap_canvas">
                <iframe title="Map" width="100%" height="650" id="gmap_canvas" src="https://maps.google.com/maps?q=newdelhi&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}
