import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingrdientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (<li key={ingredientKey}> 
                <span style={{textTransform: 'capitalize'}}>{ingredientKey}:</span> {props.ingredients[ingredientKey]}
            </li>);
        });
    console.log(ingrdientSummary);
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Order with the following ingredients</p>
            <ul>
                {ingrdientSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>
                CONTINUE
            </Button>
        </Aux>
    );
}
export default orderSummary;