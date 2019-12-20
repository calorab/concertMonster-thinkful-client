import React from 'react';
import Button from '../UI/Button/Button';

// add inline styling for Songkick button
const searchItem = props => (
    <div>
        <h3>{props.children}</h3>
        <Button btnType='Success' clicked={props.btnClicked}>Save to My Artists!</Button>
        <Button btnType='Success' clicked={props.link}>Check them out on Songkick!</Button>
    </div>
);

export default searchItem;