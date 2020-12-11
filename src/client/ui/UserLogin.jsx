import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSession } from '../redux/actions/SessionActions';
import { TextInput } from './FormElements';

const AdminLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

   console.log(e.target.email.value);
    setIsSubmitting(true);

    console.log('login clicked')
    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
console.log(data);
    axios.post('/api/user/login', data)
    .then(() => {
      dispatch(getSession());
      history.replace("/");
    })
    .catch((err) => {
      setError(err.response.data.message);
      setIsSubmitting(false);
    });
  };

  return (
    <Container id="form">
      <div className="title">Login For Students</div>
      <Form onSubmit={onSubmit}>
        <fieldset disabled={isSubmitting}>
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Your Registered Email"
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            placeholder="Your Password"
          />
          <Button variant="primary" type="submit">
            SIGN IN
          </Button>
          
        </fieldset>
      </Form>
      {error ? <div className="text-danger">{error}</div> : null}
    </Container>
  );
};

export default AdminLogin;
