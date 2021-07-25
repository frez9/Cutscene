import logo from './logo.svg'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Navibar() {
  return (
<div>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/browse">
    <img
      alt="Cutscene logo"
      src={logo}
    />
  NFT
    </Navbar.Brand>
    <Nav >
    <LinkContainer to="/browse">
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
    <LinkContainer to="/#">
    <Button variant="outline-dark">Create</Button>
    </LinkContainer>
    <LinkContainer to="/#login">
    <Button variant="light">Log In</Button>
    </LinkContainer>
    <LinkContainer to="/#signup">
    <Button variant="dark">Sign Up</Button>
    </LinkContainer>
    </Navbar>
</div>
);
}

export default Navibar;
