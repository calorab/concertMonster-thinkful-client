import React from 'react';
import classes from './NavigationItems.module.css';


import NavItem from './NavItem/Navitem';

const navigationItems = (props) => {
    console.log(sessionStorage.getItem('token'));
    return(
        <ul>
        {sessionStorage.getItem('token') ? 
            <NavItem 
                className={classes.NavigationItems} 
                link='/logout'>
                LOGOUT
            </NavItem> : 
            null}       
        </ul>
    )

    
};

export default navigationItems;
