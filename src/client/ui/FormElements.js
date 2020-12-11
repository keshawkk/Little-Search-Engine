import React from 'react';
import { Form } from 'react-bootstrap';

export const TextInput = ({
  type = 'text', placeholder, required, id, children, label, name, onChange = (e) => e.preventDefault()
}) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
    {children}
  </Form.Group>
);


