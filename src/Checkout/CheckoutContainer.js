import React from "react";
import CheckoutDisplay from "./CheckoutDisplay";
import { useStateValue } from "../StateProvider";

function CheckoutContainer() {
  const [{ basket }] = useStateValue();
  return <CheckoutDisplay basket={basket} />;
}

export default CheckoutContainer;
