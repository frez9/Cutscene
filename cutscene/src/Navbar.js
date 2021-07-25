import logo from './logo.svg'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Navibar() {
  return (
<div>
    <Navbar bg="light" variant="light" style={{justifyContent: "space-between"}}>
    <Navbar.Brand href="/">
    <img
      alt="Cutscene logo"
      src={logo}
    />
  NFT
    </Navbar.Brand>
    <Nav >
    <LinkContainer to="/">
      <Nav.Link>Browse</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/works">
      <Nav.Link>My Clips</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/#2">
      <Nav.Link>How It Works</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/#3">
      <Nav.Link>FAQ</Nav.Link>
    </LinkContainer>
        </Nav>
        <Nav style={{marginleft: "50%"}}>
    <LinkContainer to="/#create">
    <Button variant="outline-dark">Create</Button>
    </LinkContainer>
    <LinkContainer to="/#login">
    <Button variant="light">Log In</Button>
    </LinkContainer>
    <LinkContainer to="/#signup">
    <Button variant="dark">Sign Up</Button>
          </LinkContainer>
          </Nav>
    </Navbar>
</div>
);
}

export default Navibar;
