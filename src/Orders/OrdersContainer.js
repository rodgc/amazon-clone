import React, { useState, useEffect } from "react";
import OrdersDisplay from "./OrdersDisplay";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

function OrdersContainer() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return <OrdersDisplay orders={orders} />;
}

export default OrdersContainer;
