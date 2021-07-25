import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CreatePage() {
  return (
      <div>
      <h2>Create Clip NFT</h2>
      <Form>
      <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <Form.Label>Price</Form.Label>
      <InputGroup className="mb-3">
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control aria-label="Amount (to the nearest dollar)" />
      </InputGroup>
      <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Clip</Form.Label>
      <Form.Control type="file" />
      <Form.Text className="text-muted">
      Must be less than 60 seconds long
    </Form.Text>
      </Form.Group>
      </Form>
      </div>
  );
  }

export default CreatePage;
