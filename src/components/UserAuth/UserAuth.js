import React from "react";
import { Link } from "react-router-dom";
// import "../../style/Header.css";
import useStyles from "../UserAuth/styles";
import { Toolbar, Avatar, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";

function UserAuth() {
  const classes = useStyles();
  const user = null;
  return (
    <div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.CharAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h5">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >SignIn</Button>
        )}
      </Toolbar>
    </div>
  );
}

export default UserAuth;
