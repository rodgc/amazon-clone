import React from "react";
import SubtotalDisplay from "./SubtotalDisplay";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function SubtotalContainer() {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return <SubtotalDisplay basket={basket} history={history} />;
}

export default SubtotalContainer;
