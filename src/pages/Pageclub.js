import React from 'react';
import Footer from './Footer';
import Fade from 'react-reveal';


export default function Pageclub(){
    return(
        <>
            <Fade top distance = '1%' duration = {3000}>
                <div className='aboutbox'>
                    <h1>Services</h1>
                    <p>Enter Earthly, a spot for businesses that need to be a part of the green movement. We do an amazing job to give you the information and alternative sustainable products for your cafes and food business. Earthly has a fair trade policy for all business deals. You have the right to place orders for sustainable products that go with your budget and business. We’re endeavoring to set new principles, increase present expectations, and review what is useful for your business and our planet. Each move you make as a business is a chance to be better. When you shop at Earthly, you add to a superior future for every one of us. So now you know a superior method to shop sustainable products, and join the development beneath! We offer a variety of biodegradable options like biodegradable cups, biodegradable containers, organic toothbrushes and many more to choose from.</p>
                </div>
                <Footer />
            </Fade>
        </>
    );
}