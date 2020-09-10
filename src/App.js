/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Checkout } from "./Checkout";
import { Login } from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { SET_USER } from "./ActionTypes";
import { Payment } from "./Payment";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Router path="/login">
            <Login />
          </Router>
          <Router path="/payment">
            <Payment />
          </Router>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
