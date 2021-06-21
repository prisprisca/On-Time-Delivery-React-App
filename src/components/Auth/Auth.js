import React, {useState} from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  Grid,
  Paper, 
  Typography,
  Container,
  } from "@material-ui/core";
import { GoogleLogin} from 'react-google-login';
import useStyles from "./styles";
import {useDispatch} from 'react-redux'
import Input from "./input";
import Icon from './icon';
import '../../style/Header.css'
import { useHistory} from 'react-router-dom'


function Auth() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      handleShowPassword(false);

  }

  const googleSucess = async (res) => {
     const result = res?.profileObj;
     const token = res?.tokenId;

     try {
       dispatch({ type: 'AUTH', data: { result, token}})

       history.push('/orderform');
     } catch (error) {
       console.log(error);
     }
  };
  const googleFailure = () => {
      console.log("Google sign in unsuccessful");
  };
  return (
    <>
    <div className="header">
      <p >On Time Delivery</p>
    </div>

    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onsubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword ={handleShowPassword}/>
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin 
           clientId="406577824872-verlk498c4k8t15v8pi1o834m7a7up8r.apps.googleusercontent.com"
           render={(renderProps) => (
               <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">Google Sign In</Button>
           )}
           onSuccess={googleSucess}
           onFailure={googleFailure}
           cookiePolicy="single_host_origin"
           
           />
          <Grid
           container justify="flex-end">
              <Grid item>
                  <Button onClick={switchMode}>
                      { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                  </Button>

              </Grid>

          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  );
}

export default Auth;
