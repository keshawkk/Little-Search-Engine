import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSession } from '../redux/actions/SessionActions';

const AdminLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    let data = JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value
    })
    console.log(data);
    
    axios.post('/api/user/login', data, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
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

      {console.log('from Admin Login')}
      <div className="title">Login For Admin</div>
      <Form onSubmit={onSubmit}>
        <fieldset disabled={isSubmitting}>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="name"
              name="UserName"
              placeholder="Your User Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Your Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            LogIn
          </Button>
          {/* <div>
            Don&apos;t have an account?
            {' '}
            <LinkContainer to="">
              Sign Up
            </LinkContainer>
          </div> */}
        </fieldset>
      </Form>
      {error ? <div className="text-danger">{error}</div> : null}
    </Container>
  );
};

export default AdminLogin;
