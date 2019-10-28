import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header>
            <Logo />
            <NavigationItems />
        </header>
    );
};

export default toolbar;
