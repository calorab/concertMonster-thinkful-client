import React from 'react';
import Button from '../UI/Button/Button';
import classes from './myArtistItem.module.css';

const myArtistItem = (props) => {


    return (
        <div className={classes.Result}>
            <h3>{props.children}</h3>
            <Button btnType='Success' clicked={props.btnClicked}>Find Concerts</Button>
            <Button btnType='Danger' clicked={props.cnclButton}>Unfollow</Button>
            <h5>On Tour til: {props.tour}</h5>
            <a href={props.link} target='_blank' rel='noopener noreferrer' >Songkick</a>
        </div>
    )
};

export default myArtistItem;
