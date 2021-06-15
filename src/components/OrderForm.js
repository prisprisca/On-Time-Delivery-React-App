import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "../style/Header.css";
import Form from "./Form/Form";
import Orders from "./Orders/Orders";
import useStyles from '../styles'
import Footer from './Footer'


function OrderForm() {
  const classes = useStyles();
  return (
    <>
      <div className="header">
        <p>On-Time-Delivery</p>
      </div>

      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h5" align="center">
           Make Your Order Now
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing="3"
            >
              <Grid item xs={12} sm={7}>
                <Orders />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
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
