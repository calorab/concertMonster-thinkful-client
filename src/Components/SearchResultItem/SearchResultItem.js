import React from 'react';
import Button from '../UI/Button/Button';
import {NavLink} from 'react-router-dom';

// add inline styling for Songkick button
const searchItem = props => (
    <div>
        <h3>{props.children}</h3>
        <Button btnType='Success' clicked={props.btnClicked}>Follow</Button>
        <a href={props.link} target='_blank' >More Songkick!</a>
        
    </div>
);

export default searchItem;