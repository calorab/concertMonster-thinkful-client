import React from 'react';
import Button from '../UI/Button/Button';

// add inline styling for Songkick button
const searchItem = props => (
    <div>
        <h3>{props.children}</h3>
        <Button btnType='Success' clicked={props.btnClicked}>Follow</Button>
        <a href={props.link} target='_blank' rel='noopener noreferrer' >More Songkick!</a>
        
    </div>
);

export default searchItem;