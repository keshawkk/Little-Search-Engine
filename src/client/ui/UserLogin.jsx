import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSession } from '../redux/actions/SessionActions';
import { TextInput } from './FormElements';

const UserLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

   console.log(e.target.email.value);
    setIsSubmitting(true);

    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
console.log(data);
    axios.post('/api/user/login', data)
    .then(() => {
      dispatch(getSession());
      history.replace("/user");
    })
    .catch((err) => {
      setError(err.response.data.message);
      setIsSubmitting(false);
    });
  };

  return (
    <Container id="form">
      <div className="title text-light"><br /><h1><center>User Login</center></h1></div>
      <br /> 
      <div class="box">
      <Form onSubmit={onSubmit}>
        <fieldset disabled={isSubmitting}>
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button variant="primary" type="submit">
            Log in
          </Button>
          
        </fieldset>
      </Form>
      {error ? <div className="text-danger">{error}</div> : null}
     </div>
    </Container>
  );
};

export default UserLogin;
