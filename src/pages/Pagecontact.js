import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import Fade from 'react-reveal';

export default function Pagecontact(){
    return(
        <>
            <Fade top distance = '10%' duration = {1000}>
                <div className='blank2'></div>
                <Contact />
                <Footer />
            </Fade>
        </>
    );
}