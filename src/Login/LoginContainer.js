import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import LoginDisplay from "./LoginDisplay";

function LoginContainer() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginDisplay
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signIn={signIn}
      register={register}
    />
  );
}

export default LoginContainer;
