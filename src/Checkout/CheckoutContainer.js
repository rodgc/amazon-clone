import React from "react";
import CheckoutDisplay from "./CheckoutDisplay";
import { useStateValue } from "../StateProvider";

function CheckoutContainer() {
  const [{ basket, user }] = useStateValue();
  return <CheckoutDisplay basket={basket} user={user}/>;
}

export default CheckoutContainer;
