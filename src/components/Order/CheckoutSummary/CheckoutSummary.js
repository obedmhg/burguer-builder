import React from 'react';
import Burguer from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope you like it!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burguer ingredients={props.ingredients}/>
                <Button btnType="Danger">Cancel</Button>
                <Button btnType="Success">Continue</Button>
            </div>
        </div>
    );
}
export default checkoutSummary;