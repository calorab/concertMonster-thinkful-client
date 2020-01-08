import React from 'react';
import Button from '../UI/Button/Button';

const myArtistItem = (props) => {


    return (
        <div>
            <h3>{props.children}</h3>
            <Button btnType='Success' clicked={props.btnClicked}>Find Concerts</Button>
            <a href={props.link} target='_blank' rel='noopener noreferrer' >More Songkick</a>
        </div>
    )
};

export default myArtistItem;