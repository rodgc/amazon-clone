import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import "./Order.css";
import { CheckoutProduct } from "../CheckoutProduct";

function OrderDisplay({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order?.data?.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, key) => (
        <CheckoutProduct key={key} {...item} hideButton />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default OrderDisplay;
