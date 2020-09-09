import React from "react";
import HeaderDisplay from "./HeaderDisplay";
import { useStateValue } from "../StateProvider";

function HeaderContainer() {
  const [{ basket }, dispatch] = useStateValue();
  return <HeaderDisplay basket={basket} />;
}

export default HeaderContainer;
