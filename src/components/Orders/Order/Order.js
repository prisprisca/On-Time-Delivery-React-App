import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { deleteOrder } from "../../../actions/orders";

const Order = ({ order, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        // image={order.selectFile}
        title={order.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{order.name}</Typography>
        <Typography variant="body2">
          {moment(order.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result.googleId === order?.creator || user?.result?._id === order?.creator ) &&(
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(order._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {order.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {order.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {order.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result.googleId === order?.creator || user?.result?._id === order?.creator ) &&(
          <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteOrder(order._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
        )}
        
      </CardActions>
    </Card>
  );
};

export default Order;
