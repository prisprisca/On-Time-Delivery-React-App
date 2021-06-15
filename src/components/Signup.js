import React from 'react'
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <Card style={{marginTop:'1rem'}}>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
        
         
          <Form >
            <Form.Group id="email">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password </Form.Label>
              <Form.Control type="password"  required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control type="password"  required />
            </Form.Group>
            <Form.Group>
            
            </Form.Group>

            <Button  className="w-100" type="submit">
              Sign up
            </Button>
           
          </Form>
          <div className="w-100 text-center mt-2">
        Already have an account? <Link to='/login'>Login</Link>
      </div>
        </Card.Body>
      </Card>
     
    )
}

export default Signup
