import React from 'react';
import classes from './NavigationItems.module.css';
import NavitationItem from './NavigationItem/NavigationItem';

const navitationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavitationItem link="/" active>Burger Builder</NavitationItem>
        <NavitationItem link="/">Checkout</NavitationItem>
    </ul>
);

export default navitationItems;