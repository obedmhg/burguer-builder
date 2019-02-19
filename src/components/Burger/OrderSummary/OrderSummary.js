import React from 'react';
import Aux from '../../../hoc/Aux';

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
            <p>Continue to checkout?</p>
        </Aux>
    );
}
export default orderSummary;