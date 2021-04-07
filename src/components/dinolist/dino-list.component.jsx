import React from 'react';
import './dino-list.styles.css'
import { Card } from '../card/card.component'

export const DinoList = props => (

    <div className='dino-list'>
        { //Need to render javascript so use {}
            //Always use key when using map()
            props.dinos.map(dinos => (
                <Card key={dinos.id} dinos={dinos} />)
            )}
    </div>

);