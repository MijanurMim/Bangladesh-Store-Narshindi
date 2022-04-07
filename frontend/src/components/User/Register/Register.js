import React, { useState } from "react";
import Footer from "../../../Pages/Home/Footer/Footer";
import NavBar from "../../../Pages/NavBar/NavBar";

const Register = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    console.log("register in Form Submit,");
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    console.log(name, email.password);
  };

  const registerDataChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1>Register</h1>

      <form onSubmit={registerSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={registerDataChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            required
            defaultValue={"Email"}
            value={email}
            onChange={registerDataChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={registerDataChange}
          />
        </div>
        <input type="submit" />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Register;
