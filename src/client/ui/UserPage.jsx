import React from 'react';
import { Button, Container,  Nav,Row,Col,InputGroup,FormControl  } from 'react-bootstrap';
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
     <Row>
     <Col xs md lg={8}></Col>
     <Col xs md lg={4}>
     <Nav.Link onClick={logoutClick}>
         <Button className="float-right" variant="primary" type="submit">
           Logout 
         </Button>
    </Nav.Link> 
    </Col>
    </Row>
   <br/>
   
     <Row>
     <Col lg={3}></Col>
      <Col lg={5}>
         <h4><center>Type below!</center></h4>
         <br/>
         <InputGroup className="mb-3">
           <FormControl
           placeholder="Type here"
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