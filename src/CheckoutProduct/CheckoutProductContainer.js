import React from 'react'
import CheckoutProductDisplay from './CheckoutProductDisplay'
import { useStateValue } from '../StateProvider';
import { REMOVE_FROM_BASKET } from '../ActionTypes';

function CheckoutProductContainer(props) {
    const [, dispatch] = useStateValue();
    const removeFromBasket = (id) => {
        dispatch({
            type: REMOVE_FROM_BASKET,
            id
        })
    }
    return (
        <CheckoutProductDisplay removeFromBasket={removeFromBasket}  {...props} />
    )
}

export default CheckoutProductContainer
