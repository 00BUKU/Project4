import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

function SignUpPage({handleSignUpOrLogin}) {
    const [state, setState] = useState({
      username: "",
      email: "",
      password: "",
      passwordConf: "",
    });

  const navigate = useNavigate();



  async function handleSubmit(e){
    e.preventDefault()
    
    // Photos have to be sent over using FormData,
    // they are sent over to the server in multiple requests
    const formData = new FormData()
    formData.append("", selectedFile)
    
    for (let fieldName in state){
      console.log(fieldName, state[fieldName])
      // append the rest of the data to the form obejct
      formData.append(fieldName, state[fieldName])
    }
   
    try {
        // If you want to view the formData you need to loop over the object
        console.log(formData.forEach((item) => console.log(item)))
        
        // use the userService to make the fetch request
        await userService.signup(formData);

        // Route to wherever you want!
        // after you get a response from the server from 
        // the signup request, you need to grab the token from 
        // local storage and set the user!
      
      
      } catch (err) {
        // Invalid user data (probably duplicate email)
        console.log(err.message)
        setError(err.message)
      }
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [selectedFile, setSelectedFile] = useState('');
  const [error, setError] = useState("");

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              required
              label="Username"
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              required
              label="Email"
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
              label="Password"
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
              label="Confirm Password"
            />
            <Button type="submit" className="btn" primary>
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default SignUpPage;