import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ handleSignUpOrLogin }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await userService.login(state);
      handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }} className="grid-column">
        <Header as="h2" color="blue" textAlign="center" className="header">
          Login
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit} className="form">
          <Segment stacked className="segment">
            <Form.Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
              label="Email"
              className="form-input"
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
              label="Password"
              className="form-input"
            />
            <Button type="submit" className="btn" primary>
              Login
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default LoginPage;
