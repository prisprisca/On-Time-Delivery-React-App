import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder, updateOrder} from '../../actions/orders';

import useStyles from "./styles";

//get the current id


const Form = ({ currentId, setCurrentId }) => {
  const [orderData, setOrderData] = useState({ title: '', message: '', tags: '', selectedFile: '' })
  const order = useSelector((state) => currentId ? state.orders.find((order) => order._id === currentId) : 0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(order) setOrderData(order);

  }, [order])

  const clear = () => {
    // setCurrentId(0);
    // setOrderData({  title: '', message: '', tags: '', selectedFile: '' });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId === 0){
      dispatch(createOrder({ ...orderData, name: user?.result?.name }));
      // clear();
    } else {
      dispatch(updateOrder(currentId, { ...orderData, name: user?.result?.name}));
      // clear();
      
    }
   
  };

  // if(!user?.result?.name) {
  //   <Paper className></Paper>
  // }

  
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        novalidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Edit' : 'Make'} Your Order</Typography>
        {/* <TextField
          name="creator"
          variant="outlined"
          label="Name"
          fullWidth
          value={orderData.creator}
          onChange={(e) => setOrderData({ ...orderData, creator: e.target.value})}
        /> */}
        <TextField
          name="title"
          variant="outlined"
          label="Pacel weight ie, small, medium, large"
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
          label="Current Location"
          fullWidth
          value={orderData.tags}
          onChange={(e) => setOrderData({ ...orderData, tags: e.target.value})}
        />
         <TextField
          name="tags"
          variant="outlined"
          label="Destination"
          fullWidth
          value={orderData.tags}
          onChange={(e) => setOrderData({ ...orderData, tags: e.target.value})}
        />
        {/* <div className={classes.fileInput}>
           <FileBase type="file" multiple={false} onDone={({base64}) => setOrderData({ ...orderData, selectedFile: base64})} />
        </div> */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
