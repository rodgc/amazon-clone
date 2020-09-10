import React from "react";
import "./Payment.css";
import { CheckoutProduct } from "../CheckoutProduct";
import { Link } from "react-router-dom";

function PaymentDisplay({ user, basket }) {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, key) => (
              <CheckoutProduct ket={key} {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/*Stipe mafic */}</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDisplay;
