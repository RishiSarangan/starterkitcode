import React from 'react';

export default function Intro(){
    return(
        <>
            <div className='intro'>
                {/* <h1 className='introtext' id = "half">Join The Revolu<br></br>tion</h1> */}
                <h1 className='introtext' id = "human">Sustainability<br></br> Starter Kit</h1>
                <h1 className='introtext' id = "price">From €10.99</h1>
                <h1 className='introtext' id = "tagline">This starter kit is all you need to start the revolution</h1>
            </div>
            <button type="button" class="btn btn-success buybutton">Buy</button>
            <button type="button" class="btn btn-outline-success buybutton">Wishlist</button>
        </>
        
    );
}



