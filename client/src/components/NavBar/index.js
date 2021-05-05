import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import "./style.css";
import authenticationAPI from "../../utils/authenticationAPI";
import API from "../../utils/API";
import MyPagesMenu from "../MyPagesMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  titleHome: {
    flexGrow: 1,
    color: "white"
  },
  appBar: {
    background: "white",
    borderBottom: "1px solid grey"
  },
  appBarHome: {
    background: "#ab3ec9",
    borderBottom: "1px solid #ab3ec9"
  },
  joinBtn: {
    border: "1px solid black",
    color: "black"
  },
  joinBtnHome: {
    border: "1px solid white",
    color: "white"
  },
  colorBlack: {
    color: "black",
  },
  colorWhite: {
    color: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    authenticationAPI.authenticated()
      .then(res => {
        if (res.data.isAuthenticated === true) {
          setAuthentication(true);
        } else {
          setAuthentication(false);
        }
      });
  }, []);

  const logOut = () => {
    API.logOutUser()
      // .then(() => console.log("User successfully logged out"))
      .then(() => window.location.replace("/login"))
      .catch(err => console.log(err))
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={
          window.location.href === "http://localhost:3000/" ?
          classes.appBarHome :
          classes.appBar
        }
        elevation={0}
      >
        <Toolbar
          className={
            window.location.href === "http://localhost:3000/" ?
            "nav-toolbar-home" :
            "nav-toolbar"          
          }
        >
          <Typography
            variant="h6"
            className={
              window.location.href === "http://localhost:3000/" ?
              classes.titleHome :
              classes.title
            }
          >
            Inspecti
          </Typography>
          <Button
            className={
              window.location.href === "http://localhost:3000/" ?
              classes.colorWhite :
              classes.colorBlack
            }
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            className={
              window.location.href === "http://localhost:3000/" ?
              classes.colorWhite :
              classes.colorBlack
            }
          >
            <Link to="/reviews">Reviews</Link>
          </Button>
          <Typography
            variant="body1"
            className={
              window.location.href === "http://localhost:3000/" ?
              classes.colorWhite :
              classes.colorBlack
            }
          >
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </Typography>
          {isAuthenticated === false ? 
            <>
              <Button
                className={
                  window.location.href === "http://localhost:3000/" ?
                  classes.colorWhite :
                  classes.colorBlack
                }          
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button
                className={
                  window.location.href === "http://localhost:3000/" ?
                  classes.joinBtnHome :
                  classes.joinBtn
                }          
              >
                <Link to="/signup">Sign up</Link>
              </Button>
            </> : 
            <>
              <MyPagesMenu
                colorProp={
                  window.location.href === "http://localhost:3000/" ?
                  "white" :
                  "black"
                } 
              />
              <Button
                className={
                  window.location.href === "http://localhost:3000/" ?
                  classes.joinBtnHome :
                  classes.joinBtn
                } 
                onClick={logOut}
              >Log Out</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
