import React, {Component} from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] Will update');
    }

    render() {
        const ingrdientSummary = Object.keys(this.props.ingredients)
        .map(ingredientKey => {
            return (<li key={ingredientKey}> 
                <span style={{textTransform: 'capitalize'}}>{ingredientKey}:</span> {this.props.ingredients[ingredientKey]}
            </li>);
        });
        return (<Aux>
            <h3>Your Order</h3>
            <p>Delicious Order with the following ingredients</p>
            <ul>
                {ingrdientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>
                CONTINUE
            </Button>
        </Aux>);
    }
}

export default OrderSummary;