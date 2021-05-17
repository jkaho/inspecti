// React
import React, { useRef, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Child components
import PopupMessage from "../../components/PopupMessage";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// CSS
import "./style.css";
// Images
import graphic from "../../images/signup-graphic.png";
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

export default function SignUp(props) {
  const classes = useStyles();

  // States
  const [popup, setPopup] = useState({ open: false, type: "", severity: "error", message: "" });

  // Refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Helper functions
  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    // Create user data object
    const userData = {
      firstName: firstNameRef.current.children[1].children[0].value.trim(),
      lastName: lastNameRef.current.children[1].children[0].value.trim(),
      email: emailRef.current.children[1].children[0].value.trim(),
      password: passwordRef.current.children[1].children[0].value.trim(),
    };

    // Check that all values have been provided
    if (
      !userData.firstName || 
      !userData.lastName ||
      !userData.email || 
      !userData.password
    ) {
      setPopup({ 
        open: true, type: "allInputs", severity: "warning", 
        message: "Please fill out all the form inputs" 
      });
      return;
    }

    // If all values have been provided, sign user up 
    signUpUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );

    // Empty inputs
    firstNameRef.current.children[1].children[0].value = "";
    lastNameRef.current.children[1].children[0].value = "";
    emailRef.current.children[1].children[0].value = "";
    passwordRef.current.children[1].children[0].value = "";
  };

  const signUpUser = (firstName, lastName, email, password) => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    userAPI.signUpUser(userData)
      .then(() => {
        userAPI.logInUser({
          email: userData.email,
          password: userData.password
        })
        .then(() => props.onSuccess())
        .catch(err => {
          console.log(err);
          setPopup({ 
            open: true, type: "error", severity: "error", 
            message: "An error was encountered while submitting your data. Please try again later." 
          });
        });
      })
      .catch((err) => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while submitting your data. Please try again later." 
        });
      });
  };

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "", message: ""});
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.page}>
        <Grid item xs={12} sm={6}>
          <div id="left-seg" className="signup-seg">
            <div id="inner-left-seg">
              <div className="logo-div">
                <Link to="/">
                  <img src={logo} alt="Inspecti logo" />
                </Link>
              </div>
              <div className="graphic-div">
                <img src={graphic} alt="Artwork of man on laptop" />
              </div>
              <div className="seg-text">
                <div className="no-account-text">
                  <Typography variant="h6" className={classes.purpleFont}>
                    Already have an account?
                  </Typography>
                </div>
                <div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button variant="contained" className={classes.button}>LOG IN</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="right-seg" className="signup-seg">
            <div className="signup-form-div">
              <h1>Welcome to Inspecti</h1>
              <span id="signup-subtext">Create an account to start sharing your property inspection experiences.</span>
              <form
                onSubmit={handleSignUpFormSubmit}
              >
                <div className="field-div">
                  <TextField
                    required
                    variant="outlined"
                    label="First Name"
                    className={classes.input}
                    ref={firstNameRef}
                  ></TextField>
                </div>
                <div className="field-div">
                  <TextField
                    required
                    variant="outlined"
                    label="Last Name"
                    className={classes.input}
                    ref={lastNameRef}
                  ></TextField>
                </div>
                <div className="field-div">
                  <TextField 
                    required 
                    variant="outlined" 
                    label="Email" 
                    className={classes.input}
                    ref={emailRef}
                  ></TextField>
                </div>
                <div className="field-div">
                  <TextField 
                    required 
                    variant="outlined" 
                    label="Password" 
                    type="password"
                    helperText="Must be at least 8 characters" 
                    className={classes.input}
                    ref={passwordRef}
                  ></TextField>
                </div>
                <div className="signup-btn">
                  <Button type="submit" variant="contained" className={classes.button}>SIGN UP</Button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
      <PopupMessage 
        handleClose={handlePopupClose}
        open={popup.open}
        message={popup.message}
        severity={popup.severity}
      />
    </div>
  );
};
