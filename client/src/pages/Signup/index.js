import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import { Typography, Button, TextField } from "@material-ui/core";

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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.page}>
        <Grid item xs={12} sm={6}>
          <div id="left-seg" className="signup-seg">
            <div id="inner-left-seg">
              <div className="seg-text">
                <div className="no-account-text">
                  <Typography variant="h6" className={classes.purpleFont}>
                    Already have an account?
                  </Typography>
                </div>
                <div>
                  <Button variant="contained" className={classes.button}>LOG IN</Button>
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
              <form>
                <div className="field-div">
                  <TextField required variant="outlined" label="First Name" className={classes.input}></TextField>
                </div>
                <div className="field-div">
                  <TextField required variant="outlined" label="Last Name" className={classes.input}></TextField>
                </div>
                <div className="field-div">
                  <TextField required variant="outlined" label="Email" className={classes.input}></TextField>
                </div>
                <div className="field-div">
                  <TextField required variant="outlined" label="Password" helperText="Must be at least 8 characters" className={classes.input}></TextField>
                </div>
                <div className="signup-btn">
                  <Button variant="contained" className={classes.button}>SIGN UP</Button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
