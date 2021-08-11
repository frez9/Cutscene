import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreatePage() {
  return (
      <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"center", alignItems:"center"}}>
      <Card style={{minWidth:"350px", minHeight:"350px", maxWidth:"500px"}}>
      <Card.Body>
      <h2>Create Clip NFT</h2>
      <br />
      <Form>
      <Row>
      <Col>
      <Form.Group style={{width:"350px"}}className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control required/>
      </Form.Group>
      </Col>
      <Col>
      <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3" style={{maxWidth:"100px"}}>
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control aria-label="Amount (to the nearest dollar)" required/>
      </InputGroup>
      </Col>
      </Row>
      <Form.Group className="mb-3">
      <Form.Label>Game</Form.Label>
      <Form.Select aria-label="Default select example" required>
      <option>Choose a game</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={2} required/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Clip</Form.Label>
      <Form.Control type="file" required/>
      <Form.Text className="text-muted">
      Must be less than 60 seconds long
    </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="By checking this box, you agree to the terms and conditions of the Cutscene platform." required/>
      </Form.Group>
      </Form>
      <Button className="w-100" type="submit">Create NFT</Button>
      </Card.Body>
      </Card>
      </div>
  );
  }

export default CreatePage;
