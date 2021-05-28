// React
import React, { useEffect, useState } from 'react';
// react-router-dom
import { Link } from "react-router-dom";
// Child components
import MyPagesMenu from "../MyPagesMenu";
// Material Design
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// CSS
import "./style.css";
// Images
import logo from "../../images/logo.png";
import logoWhite from "../../images/logo-white.png";
import logoSmall from "../../images/logo-sm.png";
import logoSmallWhite from "../../images/logo-sm-white.png";
// API routes
import authenticationAPI from "../../utils/authenticationAPI";
import userAPI from "../../utils/userAPI";

// Class styles
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
    background: "rgb(195, 63, 232)",
    borderBottom: "1px solid rgb(195, 63, 232)"
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

const url = window.location.hostname.includes("localhost") ?
  "http://localhost:3000/" : "https://inspecti.herokuapp.com/"

export default function Navbar() {
  const classes = useStyles();
  // States
  const [isAuthenticated, setAuthentication] = useState(false);
  const [logoState, setLogoState] = useState();

  // Initial render
  useEffect(() => {
    if (window.innerWidth > 600) {
      setLogoState("lg");
    } else {
      setLogoState("sm");
    }

    authenticationAPI.authenticated()
      .then(res => {
        if (res.data.isAuthenticated === true) {
          setAuthentication(true);
        } else {
          setAuthentication(false);
        }
      });
  }, []);

  // Helper functions
  const logOut = () => {
    userAPI.logOutUser()
      .then(() => window.location.replace("/login"))
      .catch(err => console.log(err))
  };

  return (
    <div id="navbar" className={classes.root}>
      <AppBar
        position="static"
        className={
          window.location.href === url ||
          window.location.href === url + "#rating-criteria-explanation" ?
          classes.appBarHome :
          classes.appBar
        }
        elevation={0}
      >
        <Toolbar
          className={
          window.location.href === url ||
          window.location.href === url + "#rating-criteria-explanation" ?
            "nav-toolbar-home" :
            "nav-toolbar"          
          }
        >
          {/* <Typography
            variant="h6"
            className={
              window.location.href === "https://inspecti.herokuapp.com/" ?
              classes.titleHome :
              classes.title
            }
          >
            Inspecti
          </Typography> */}
          <Link to="/" style={{ flexGrow: 1 }}>
            <div id="navbar-logo-div"
              className={
                window.location.href === url ||
                window.location.href === url + "#rating-criteria-explanation" ?
                "logoWhite" : "logo"
              }
            ></div>
            {/* <img src={
              window.innerWidth > 600 ?
              window.location.href === url ||
              window.location.href === url + "#rating-criteria-explanation" ?
              logoWhite : logo : 
              window.location.href === url ||
              window.location.href === url + "#rating-criteria-explanation" ? 
              logoSmallWhite : logoSmallWhite
            } 
              id="navbar-logo"
              alt="Inspecti logo" 
            /> */}
          </Link>
          <Button
            className={
              window.location.href === url ||
              window.location.href === url + "#rating-criteria-explanation" ?
              classes.colorWhite :
              classes.colorBlack
            }
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            className={
              window.location.href === url ||
              window.location.href === url + "#rating-criteria-explanation" ?
              classes.colorWhite :
              classes.colorBlack
            }
          >
            <Link to="/reviews">Reviews</Link>
          </Button>
          <Typography
            variant="body1"
            className={
              window.location.href === url ||
              window.location.href === url + "#rating-criteria-explanation" ?
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
                  window.location.href === url ||
                  window.location.href === url + "#rating-criteria-explanation" ?
                  classes.colorWhite :
                  classes.colorBlack
                }          
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button
                id="signup-btn-nav"
                className={
                  window.location.href === url ||
                  window.location.href === url + "#rating-criteria-explanation" ?
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
                  window.location.href === url ||
                  window.location.href === url + "#rating-criteria-explanation" ?
                  "white" :
                  "black"
                } 
              />
              <Button
                className={
                  window.location.href === url ||
                  window.location.href === url + "#rating-criteria-explanation" ?
                  classes.colorWhite :
                  classes.colorBlack
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
