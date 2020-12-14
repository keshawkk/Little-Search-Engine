import React, {useState} from 'react';
import { 
  Button, 
  Container, 
  Nav, 
  Row, 
  Col, 
  InputGroup,
  Form,
  FormControl } from 'react-bootstrap';
import axios from 'axios';
import ReactFileReader from 'react-file-reader';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeSession } from '../redux/actions/SessionActions';

const AdminPage = () => {

const dispatch = useDispatch();
const history = useHistory();
const [error, setError] = useState(null);


//Function to handle logout
const logoutClick = (e) => {

    e.preventDefault();
    
    axios.post('/api/logout').then(() => {
      dispatch(removeSession());
      history.replace("/");
    });
  };


//Function to handle file upload
 const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
        // Use reader.result
      
        let data = {
          fileData : reader.result,
        }
        //reader.result;

        axios.post('/api/file/upload', data)
        .then(() => {
          //
        })
        .catch((err) => { 
          setError(err.response.data.message);
        })
    }
    reader.readAsText(files[0]);
}

//Function to handle search query
const searchHandler = (e) => {
  e.preventDefault();

  console.log("seacr called");
  let data = {
    searchTxt : e.target.searchTxt.value
  }

  console.log("from call : " + data);

  axios.post('/api/file/view', data)
  .then(()=>{

  })
  .catch((err) => {
    setError(err.response.data.message);    
  })

}


  return (
    <div className="bodybg">
     <br />
    <Container>
      <Row>
       <Col xs md lg={4}>
        <div>
          <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
          <Button className='btn'>Upload</Button>
          </ReactFileReader>
         </div>

       </Col>
       <Col xs md lg={4}></Col>
       <Col xs md lg={4}>
        <Nav.Link onClick={logoutClick}>
          <Button className="float-right" variant="primary" type="submit">
            Logout 
          </Button>
        </Nav.Link> 
       </Col>

      </Row>
      <br />
      <Row>
       <Col lg={3}></Col>
       <Col lg={5}>
        <h4><center>Type below!</center></h4>
        <br/>



        <Form onSubmit={searchHandler}>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            name="searchTxt"
            placeholder="Search"
          />
          <InputGroup.Append>
           <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </Form>


        </Col>
      </Row>
    </Container>
    </div>
  );
}


export default AdminPage;