import React from 'react';
import {Container, Row, Col,Navbar,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';


const Landing = () => (
<>

<Navbar className="color-nav" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZtObt9172G8YnHoLz6CZ5pTqJdq9_d-eUg&usqp=CAU"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Parintek Innovations
      </Navbar.Brand>
  </Navbar>

  
  
  {console.log('from Landing')}
    
   <section>

      <Container className="mb-5 text-light">
        <br/>
      <h1><center>Welcome to Parintek!</center></h1>
        </Container>

      <div>{' '}</div>
    </section>
    <br></br>
    
    <section>
      <Container>
      <Row>
      <Col xs md lg="2"></Col>
        <Col xs md lg="4">
        
          <LinkContainer to="/admin/login">
          <center>
          <Button variant="primary" size="lg">
              Admin Login
              </Button>
              </center>  
            
          </LinkContainer>
        </Col>
      
        <Col xs md lg="4">
        
          <LinkContainer to="/user/login">
          <center>  
          <Button variant="primary" size="lg">
              User Login
              </Button>
              </center>  
          </LinkContainer>
        </Col>
      </Row>
      </Container>
    </section>
    
  </>
 
  
);


export default Landing;
