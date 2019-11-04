import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Containers/hoc/Aux/Aux';

const sideDrawer = (props) => {
    return (
        // for mobile only - will use Toolbar for desktop
        // add backdrop to shade out window when open
        <Aux>
            <Backdrop clicked={props.backdropClicked}/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Aux>
    );
};

export default sideDrawer;
