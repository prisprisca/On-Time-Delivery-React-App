import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header-logo">
        On-Time-Delivery
      </Link>
      <div className="head">
        <ul className="header-links">
          <li className="header-list">
            <Link to="/" className="header-link">
              <span>Home</span>
            </Link>
          </li>

          <li className="header-list">
            <Link to="about" className="header-link">
              <span>About</span>
            </Link>
          </li>

          <li className="header-list">
            <Link to="login" className="header-link">
              <span>Login</span>
            </Link>
          </li>

          <li className="header-list">
            <Link to="signup" className="header-link">
              <span>SignUp</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
