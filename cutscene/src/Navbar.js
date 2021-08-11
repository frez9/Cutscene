import logo from './logo.svg'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useAuth } from './Contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Navibar() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
      setError('')

      try {
          await logout()
          history.push('/')
      } catch {
          setError('Failed to log out')
      }
  }

  function handleWallet() {

  }

  return (
<div>
    <Navbar bg="light" variant="light" sticky="top" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
    <Navbar.Brand href="/" style={{marginLeft:"15px"}}>
    <img
      alt="Cutscene logo"
      src={logo}
    />
    NFT
    </Navbar.Brand>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search for clips"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="secondary">Search</Button>
    </Form>
    <Nav>
    <LinkContainer to="/myclips">
      <Nav.Link>My Clips</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/2">
      <Nav.Link>How It Works</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/3">
      <Nav.Link>FAQ</Nav.Link>
    </LinkContainer>
    <Button variant="outline-primary" href="/create">Create</Button>
    </Nav>
    <div style={{marginRight:"15px"}}>
    { !currentUser && (<LinkContainer to="/login">
    <Button variant="light">Log In</Button>
    </LinkContainer>) }
    { !currentUser && (<LinkContainer to="/signup">
    <Button variant="dark">Sign Up</Button>
    </LinkContainer>) }
    { currentUser && (<Button onClick={handleWallet} variant="outline-success">Connect Wallet</Button>) }
    { currentUser && (<Button onClick={handleLogout} variant="light">Log Out</Button>) }
    </div>
    </Navbar>
</div>
);
}

export default Navibar;
