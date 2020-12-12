import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSession } from '../redux/actions/SessionActions';

const AdminLogin = () => {
  console.log("From Admin Login");

  const history = useHistory();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    console.log(data);
    
    axios.post('/api/admin/login', data)
      .then(() => {
        dispatch(getSession());
        history.replace("/admin");
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
              type="email"
              name="email"
              placeholder="Your Email"
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
          
        </fieldset>
      </Form>
      {error ? <div className="text-danger">{error}</div> : null}
    </Container>
  );
};

export default AdminLogin;
