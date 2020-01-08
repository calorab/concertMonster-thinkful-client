import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import classes from './backToTopButton.module.css';

const backToTopButton = (props) => (
    <div className={classes.Arrow} onClick={props.clicked}>
        <FontAwesomeIcon className={classes.ArrowFloat}  icon={faArrowUp} />
    </div>
);
    

export default backToTopButton;