import React from 'react'
import Login from "./Login"
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap"

function UserLogin() {
    return (
        <>
            <Link>
        <h1>On-Time-Delivery</h1>
      </Link>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login />
        </div>
      </Container>
            
        </>
    )
}

export default UserLogin
