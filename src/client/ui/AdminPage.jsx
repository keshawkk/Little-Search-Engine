import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeSession } from '../redux/actions/SessionActions';


const AdminPage = () => {

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
    <Container>
      <div className="title"> Search For User</div>
      <div>Some text </div>
      
      <Nav.Link onClick={logoutClick}>
          <Button variant="primary" type="submit">
            Logout 
          </Button>
     </Nav.Link> 
      
    </Container>
  );
}


export default AdminPage;