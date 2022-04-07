import React, { useState } from "react";
import Footer from "../../../Pages/Home/Footer/Footer";
import NavBar from "../../../Pages/NavBar/NavBar";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("Log in Form Submit,", loginEmail, loginPassword);
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1>Please Log In</h1>
      <form onSubmit={loginSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Login;
