import React from "react";
import SubtotalDisplay from "./SubtotalDisplay";
import { useStateValue } from "../StateProvider";

function SubtotalContainer() {
  const [{ basket }] = useStateValue();
  return <SubtotalDisplay basket={basket} />;
}

export default SubtotalContainer;
