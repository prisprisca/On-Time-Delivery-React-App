import React, { useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
  Avatar
} from "@material-ui/core";
import "../style/Header.css";
import Form from "./Form/Form";
// import UserAuth from "../components/UserAuth/UserAuth";
import { getOrders } from "../actions/orders";
import Orders from "./Orders/Orders";
import useStyles from "../styles";
import Footer from "./Footer";
import { useDispatch } from "react-redux";

 import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrderForm() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
//  const user = null;
  console.log(user);
  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <>
      <div className="header">
        <p>On Time Delivery</p>
        <Toolbar>
          {user ? (
            <div className="profile">
              <Avatar
                className="avatar"
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className="name" variant="h5">
                {user.result.name}
              </Typography>
              <Button variant="contained" className="logoutbutton" color="blue">
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
        </Toolbar>
      </div>
      <Container maxWidth="lg">
        {/* <UserAuth /> */}
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h5" align="center">
            Make Your Order Now
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justify="space-between"
              alignItems="stretch"
              spacing="3"
            >
              <Grid item xs={12} sm={7}>
                <Orders setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      <Footer />
    </>
  );
}

export default OrderForm;
