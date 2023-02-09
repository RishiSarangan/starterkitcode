import React from 'react';
import info from './Info';

export default function About(){
    return(
        <>
            {info.map((d,i) => (
                <ul class="cards" key ={i}>
                    <li>
                        <a  class="card">
                        <img src={require('./pics/' + d.imgsource)} class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                                <div class="card__header-text">
                                    <h3 class="card__title">{d.name}</h3>            
                                    <span class="card__status">Know more</span>
                                </div>
                            </div>
                            <p class="card__description">{d.desc}</p>
                        </div>
                        </a>      
                    </li>
                </ul>
            ))}
        </>
    );
}