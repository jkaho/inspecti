// React
import React, { useRef, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Child components
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// CSS
import "./style.css";
// Images
import graphic from "../../images/login-graphic.png";
import logo from "../../images/logo.png";
// API routes
import userAPI from "../../utils/userAPI";

// Class styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "100%"
  },
  page: {
    minHeight: "100vh",
    height: "100%",
    // '@media (max-width:600px)': {
    //   minHeight: "none",
    //   height: "fit-content",
    // },  
  },
  purpleFont: {
    color: "rgb(164, 0, 197)",
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 25,
    background: "rgb(164, 0, 197)",
    color: "white",
    "&:hover" : {
      background: "rgb(134, 3, 160)",
    }
  },
  input: {
    width: "100%",
    marginBottom: 20,
  }
}));

export default function LogIn(props) {
  const classes = useStyles();
  // States
  const [popup, setPopup] = useState({ open: false, type: "", severity: "warning", message: "" });
  const popupTimeout = 6000;

  // Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // Helper functions
  const handleLogInFormSubmit = (event) => {
    event.preventDefault();
    // Create user data object
    const userData = {
      email: emailRef.current.children[1].children[0].value,
      password: passwordRef.current.children[1].children[0].value,
    }

    // Check that all values have been provided
    if (
      !userData.email || 
      !userData.password
    ) {
      console.log("no email or password")
      setPopup({ open: true, type: "loginError", severity: "warning",
        message: "Please enter both your email and password"
      });
      setTimeout(function() {
        setPopup({ open: false, type: "", severity: "warning", message: "" });
      }, popupTimeout);
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
      .then(() => props.onSuccess())
      .catch(err => {
        console.log(err);
        setPopup({ open: true, type: "loginError", severity: "warning",
        message: "We can't find your email/password combo in our database..."
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "warning", message: "" });
        }, popupTimeout);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "success", message: "" });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.page}>
        <Grid item xs={12} sm={6}>
          <div id="left-seg" className="login-seg">
            <div id="inner-left-seg">
              <div className="logo-div">
                <Link to="/">
                  <img src={logo} alt="Inspecti logo" />
                </Link>
              </div>
              <div className="graphic-div">
                <img src={graphic} alt="Artwork of girl on laptop" />
              </div>
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
              <h1>Welcome back!</h1>
              <form onSubmit={handleLogInFormSubmit}>
                <div className="field-div">
                  <TextField 
                    variant="outlined" 
                    label="Email" 
                    className={classes.input}
                    ref={emailRef}
                    InputProps={{
                      endAdornment: <InputAdornment position="start"><MailOutlineIcon /></InputAdornment>,
                    }}
                  ></TextField>
                </div>
                <div className="field-div">
                  <TextField 
                    variant="outlined" 
                    label="Password" 
                    type="password"
                    className={classes.input}
                    ref={passwordRef}
                    InputProps={{
                      endAdornment: <InputAdornment position="start"><LockOutlinedIcon /></InputAdornment>,
                    }}
                  ></TextField>
                </div>
                <div className="login-btn">
                  <Button type="submit" variant="contained" className={classes.button}>LOG IN</Button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
      <Popup 
        handleClose={handleClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      />
      {/* <PopupMessage 
        handleClose={handleClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      /> */}
    </div>
  );
};
