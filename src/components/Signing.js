import React from "react";
import { useState } from "react";

const Signing = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [email, setEmail] = useState("");
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const setUpEmail = (text) => {
    setEmail(text);
  };
  return (
    <div className="App">
      <section className="Login-Section">
        <button onClick={handleClick}>
          {isToggled ? "Log In" : "Sign Up"}
        </button>
        {isToggled ? (
          <div className="Login-Credentials">
            <label>Email</label>
            <textinput
              name="email"
              className="input-text"
              value={email}
              onChange={setUpEmail}
            ></textinput>
            <label>Password</label>
            <textinput name="password" className="input-text"></textinput>
            <button>Login</button>
          </div>
        ) : (
          <div className="SignUp-Credentials">
            <label>Email</label>
            <textinput name="email" className="input-text"></textinput>
            <label>Phone-number</label>
            <textinput name="phone-number" className="input-text"></textinput>
            <label>Full name</label>
            <textinput name="full-name" className="input-text"></textinput>
            <label>Password</label>
            <textinput name="password" className="input-text"></textinput>
            <label>confirm-Password</label>
            <textinput name="password" className="input-text"></textinput>
            <button>Sign up</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Signing;
