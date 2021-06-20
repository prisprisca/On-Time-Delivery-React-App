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
import ThumbUpIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {useDispatch} from 'react-redux';
import useStyles from "./styles";
import {deleteOrder, likeOrder} from '../../../actions/orders';

const Order = ({ order, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={order.selectFile}
        title={order.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{order.creator}</Typography>
        <Typography variant="body2">
          {moment(order.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(order._id)}
        ><MoreHorizIcon fontSize="default" /></Button>
       
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {order.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>{order.title}</Typography>
      <CardContent>
        <Typography  variant="body2" color="textSecondary" component="p" >
          {order.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likeOrder(order._id))}>
              <ThumbUpIcon fontSize="small" />
              &nbsp; Like &nbsp;
                  {order.likeCount}

          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deleteOrder(order._id))}>
              <DeleteIcon fontSize="small" />
                  Delete
                  

          </Button>

      </CardActions>
    </Card>
  );
};

export default Order;
