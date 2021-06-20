import React, { useState, useEffect} from "react";
// import useStyles from "../components/UserAuth/styles";
import { Avatar, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  // const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
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

          <>
        {user ? (
          <div className='profile'>
            <Avatar
              className='avatar'
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.CharAt(0)}
            </Avatar>
            <Typography className='name' variant="h5">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className='logoutbutton'
              color='blue'
            >
              Logout
            </Button>
          </div>
        ) : (
          <li className="header-list">
            <Link to="/auth" className="header-link">
              <span>Login</span>
            </Link>
          </li>
        )}
      </>

          {/* <li className="header-list">
            <Link to="login" className="header-link">
              <span>Login</span>
            </Link>
          </li>

          <li className="header-list">
            <Link to="signup" className="header-link">
              <span>SignUp</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
