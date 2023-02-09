import React from 'react';
import features from './Features';

export default function Why(){
    return(
        <>
            {features.map((f,i) => (
            <div className='commonbox about' key = {i}>
                <h1 className='boxheadings'>{f.name}</h1>
            </div>
            ))}
        </>
    )
}