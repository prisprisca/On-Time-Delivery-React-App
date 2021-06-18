import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createOrder} from '../../actions/orders'
import useStyles from "./styles";

//get the current id


const Form = () => {
  const [orderData, setOrderData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: '', })
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrder(orderData))
  };

  const clear =() => {

  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        novalidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Make Your Order</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Name"
          fullWidth
          value={orderData.creator}
          onChange={(e) => setOrderData({ ...orderData, creator: e.target.value})}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={orderData.title}
          onChange={(e) => setOrderData({ ...orderData, title: e.target.value})}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={orderData.message}
          onChange={(e) => setOrderData({ ...orderData, message: e.target.value})}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={orderData.tags}
          onChange={(e) => setOrderData({ ...orderData, tags: e.target.value})}
        />
        <div className={classes.fileInput}>
           <FileBase type="file" multiple={false} onDone={({base64}) => setOrderData({ ...orderData, selectedFile: base64})} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
