import React from 'react';
import Button from '../UI/Button/Button';
import classes from './SearchResultItem.module.css';

const searchItem = props => (
    <div className={classes.Result}>
        <h3>{props.children}</h3>
        <Button btnType='Success' clicked={props.btnClicked}>Follow</Button>
        <a href={props.link} target='_blank' rel='noopener noreferrer' >More from Songkick!</a>
        
    </div>
);

export default searchItem;