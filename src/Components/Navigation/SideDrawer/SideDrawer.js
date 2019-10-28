import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    return (
        // for mobile only - will use Toolbar for desktop
        // add backdrop to shade out window when open
        <div className={classes.SideDrawer}>
            <Logo />
            <NavigationItems />
        </div>
    );
};

export default sideDrawer;
