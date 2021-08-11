import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './Contexts/AuthContext.js';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)

    }

    return (
        <div style={{display:"flex", flexDirection:"column",height:"100vh", justifyContent:"center",alignItems:"center"}}>
          <Card style={{minWidth:"350px", minHeight:"300px"}}>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="mt-4 w-100" type="submit">Log In</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
    )
}
