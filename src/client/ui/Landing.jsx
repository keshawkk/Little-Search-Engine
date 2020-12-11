import React from 'react';
import {
  Container, Row, Col, Nav
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Landing = () => (
  <>

    {console.log('from Landing')}

    <section>
      <Container className="landing-title">
        Parintek !!!
      </Container>
    </section>
    <section>
      <Row>
        <Col className="sm-6">
          {' '}
          <LinkContainer to="/admin/login">
            <Nav.Link>
              For Admin Login
            </Nav.Link>
          </LinkContainer>
        </Col>
        <Col className="sm-6">
          {' '}
          <LinkContainer to="/user/login">
            <Nav.Link>
              For User Login
            </Nav.Link>
          </LinkContainer>
        </Col>
      </Row>
    </section>
  </>
);

export default Landing;
