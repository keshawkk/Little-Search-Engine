import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Error = () => (
  <div className="d-flex flex-row align-items-center" style={{ minHeight: '80vh' }}>
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <span className="display-1 d-block">404</span>
          <div className="mb-4 lead">The page you are looking for was not found.</div>
          <a href="/" className="btn btn-link">Back to Home</a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Error;
