import React from 'react';
import Footer from './Footer';
import Intro from './Intro';
import About from './About';
import Why from './Why';
import Statement from './Statement';
import Statement2 from './Statement2';
import Fade from 'react-reveal';

export default function Home(){
    return(
        <>
            <Fade top distance = '10%' duration = {1000}>
                <Intro />
                <Statement/>
                <About />
                <Statement2 />
                <Why/>
                {/* <Statement/>
                <Club />
                <Statement2 />
                <Blog />
                <Chat />
                <Task />
                <Contact /> */}
                <Footer />
            </Fade>
        </>
    );
}