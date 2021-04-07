import React from 'react';
import './card.styles.css'


export const Card = (props) => (
    <div className='card-container'>
        <img alt="dino" src={props.dinos.image} height='180px' width='200px'/>
        <h2>{props.dinos.name}</h2>
    </div>
)