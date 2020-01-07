import React from 'react';
import classes from './Logo.module.css';


import concertMonsterLogo from '../../Assets/Images/concert-monster-logo.png';



const logo = (props) => (
    <div className={classes.Logo} >
        <a href='/'>
            <img src={concertMonsterLogo} alt='Concert Monster Logo' />
        </a>
    </div>
);

export default logo;
