import React from 'react';
import classes from './NavItem.module.css'

import {NavLink} from 'react-router-dom';


const navItem = (props) => (
    <li className={classes.NavItem}>
        <a activeClassName={classes.active}>{props.children}</a>
    </li>
);

export default navItem;
