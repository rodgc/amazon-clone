import React, { useState, useEffect } from "react";
import PaymentDisplay from "./PaymentDisplay";
import { useStateValue } from "../StateProvider";

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "../axios";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { EMPTY_BASKET } from "../ActionTypes";

function PaymentContainer() {
  const history = useHistory();
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    // do all the fancy stripe stuff...
    e.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: EMPTY_BASKET,
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  return (
    <PaymentDisplay
      user={user}
      basket={basket}
      disabled={disabled}
      processing={processing}
      succeeded={succeeded}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}

export default PaymentContainer;
