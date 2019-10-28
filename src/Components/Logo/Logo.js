import React from 'react';
import classes from './Logo.module.css';

import conMonLogo from '../../Assets/Images/concert-monster-logo.png';


const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={conMonLogo} alt='Concert Monster Logo' />
    </div>
);

export default logo;
