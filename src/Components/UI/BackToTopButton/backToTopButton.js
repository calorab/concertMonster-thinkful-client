import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import classes from './backToTopButton.module.css';

const backToTopButton = (props) => (
    <div className={classes.Arrow}>
        <FontAwesomeIcon className={classes.ArrowFloat} onClick={props.clicked} icon={faArrowUp} />
    </div>
);
    

export default backToTopButton;