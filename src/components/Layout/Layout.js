import React from 'react';
import Aux from '../../hoc/Aux1';
import classes from './Layout.css';

const laytout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default laytout;