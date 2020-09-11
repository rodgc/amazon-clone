import React from "react";
import "./Orders.css";
import { Order } from "../Order";

function OrdersDisplay({ orders }) {
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order, key) => (
          <Order key={key} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrdersDisplay;
