import React, { useRef, useState, useEffect } from "react";
import PopupMessage from "../../components/PopupMessage";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { Typography, Button, TextField } from "@material-ui/core";
import userAPI from "../../utils/userAPI";
import authenticationAPI from "../../utils/authenticationAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "100%"
  },
  page: {
    minHeight: "100vh",
    height: "100%"  
  },
  purpleFont: {
    color: "rgb(164, 0, 197)",
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 25,
    background: "rgb(164, 0, 197)",
    color: "white"
  },
  input: {
    width: "100%",
    marginBottom: 20,
  }
}));

export default function LogIn() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [authorisationStatus, setAuthorisationStatus] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  // useEffect(() => {
  //   authenticateUser();
  // }, []);

  // function authenticateUser() {
  //   authenticationAPI.authenticated()
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch(err => console.log(err))
  // }

  const handleLogInFormSubmit = (event) => {
    event.preventDefault();
    // Create user data object
    const userData = {
      email: emailRef.current.children[1].children[0].value,
      password: passwordRef.current.children[1].children[0].value,
    }

    console.log(userData);
    // Check that all values have been provided
    if (
      !userData.email || 
      !userData.password
    ) {
      // RETURN "PLEASE FILL IN ALL DETAILS" ERROR MESSAGE
      console.log("Value is missing.")
      return;
    }

    logInUser(
      userData.email,
      userData.password
    );

    // Empty inputs
    emailRef.current.children[1].children[0].value = "";
    passwordRef.current.children[1].children[0].value = "";
  };

  const logInUser = (email, password) => {
    const userData = {
      email: email,
      password: password
    };

    userAPI.logInUser(userData)
      // .then((res) => {
      //   console.log("User successfully logged in!");
      //   console.log(res)
      // })
      .then(() => window.location.replace("/profile"))
      .catch(err => {
        console.log(err);
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.page}>
        <Grid item xs={12} sm={6}>
          <div id="left-seg" className="login-seg">
            <div id="inner-left-seg">
              <div className="seg-text">
                <div className="no-account-text">
                  <Typography variant="h6" className={classes.purpleFont}>
                    Don't have an account yet?
                  </Typography>
                </div>
                <div>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Button variant="contained" className={classes.button}>SIGN UP</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="right-seg" className="login-seg">
            <div className="login-form-div">
              <h1>Welcome back to Inspecti</h1>
              <form onSubmit={handleLogInFormSubmit}>
                <div className="field-div">
                  <TextField 
                    variant="outlined" 
                    label="Email" 
                    className={classes.input}
                    ref={emailRef}
                  ></TextField>
                </div>
                <div className="field-div">
                  <TextField 
                    variant="outlined" 
                    label="Password" 
                    className={classes.input}
                    ref={passwordRef}
                  ></TextField>
                </div>
                <div className="login-btn">
                  <Button type="submit" variant="contained" className={classes.button}>LOG IN</Button>
                </div>
              </form>
              <button onClick={() => authenticationAPI.authenticated().then(res => console.log(res)).catch(err => console.log(err))}>Authenticated?</button>
            </div>
          </div>
        </Grid>
      </Grid>
      <PopupMessage 
        handleClose={handleClose}
        open={open}
        message="You have inputted an incorrect email or password"
        severity="error"
      />
    </div>
  );
}
