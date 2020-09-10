import React from 'react'
import PaymentDisplay from './PaymentDisplay'
import { useStateValue } from '../StateProvider'

function PaymentContainer() {
    const [{user, basket}] = useStateValue();
    return (
        <PaymentDisplay user={user} basket={basket}/>
    )
}

export default PaymentContainer
