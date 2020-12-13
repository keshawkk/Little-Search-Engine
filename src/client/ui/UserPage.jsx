import React from 'react';
import { Button, Container, Nav,Row,Col,InputGroup,FormControl } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeSession } from '../redux/actions/SessionActions';


const UserPage = () => {

const dispatch = useDispatch();
const history = useHistory();

const logoutClick = (e) => {

    e.preventDefault();
    
    axios.post('/api/logout').then(() => {
      dispatch(removeSession());
      history.replace("/");
    });
  };

  return (
    <div class="bodybg">
    <Container>
      <Nav.Link onClick={logoutClick}>
          <Button className="float-right" variant="primary" type="submit">
            Logout 
          </Button>
     </Nav.Link> 
    </Container>
    <br/>
    <Container>
      <Row>
        <Col xs md lg="3"></Col>
        <Col xs md lg="5">
          <h4><center>Type below!</center></h4>
          <br/>
          <InputGroup className="mb-3">
            <FormControl
            placeholder="Type here"
            aria-label="Type here"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Container>
    </div>
  );
}


export default UserPage;