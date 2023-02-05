import React, { useState } from "react";
import "./SignUpPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

function SignUpPage({ handleSignUpOrLogin }) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userService.signup(state);
      handleSignUpOrLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState("");

  return (
    <div className="container">
      <h2 className="header">Sign Up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          name="passwordConf"
          value={state.passwordConf}
          onChange={handleChange}
          required
        />
        <button className="btn" type="submit">
          Signup
        </button>
      </form>
      {error ? <ErrorMessage error={error} /> : null}
    </div>
  );
}

export default SignUpPage;
