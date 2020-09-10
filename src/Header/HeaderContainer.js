import React from "react";
import HeaderDisplay from "./HeaderDisplay";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function HeaderContainer() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <HeaderDisplay
      user={user}
      basket={basket}
      handleAuthentication={handleAuthentication}
    />
  );
}

export default HeaderContainer;
