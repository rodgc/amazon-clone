import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginDisplay({
  email,
  setEmail,
  password,
  setPassword,
  signIn,
  register,
}) {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button
          className="login__registerButton"
          type="button"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginDisplay;
