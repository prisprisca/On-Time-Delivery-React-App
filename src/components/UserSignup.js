import React from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function UserSignup() {
  return (
    <>
      <Link to="/orderform">
        <h1>On-Time-Delivery</h1>
      </Link>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </>
  );
}

export default UserSignup;
