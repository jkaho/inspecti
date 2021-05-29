// React
import React from 'react';
// Material Design
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// CSS
import "./style.css";
// Images
import domainLogoWhite from "../../images/domain/powered-by-domain-white-stacked.png";
import logoWhite from "../../images/logo-white.png";

// Class styles
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: "center",
    background: "rgb(195, 63, 232)"
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary" className={classes.appBar}>
        <Toolbar>
          <ul>
            <li className="inspecti-footer-logo">
              <img src={logoWhite} alt="Inspecti logo white" />
            </li>
            <li className="powered-by-domain">
              <img src={domainLogoWhite} alt="Powered by Domain.com.au (white)" />
            </li>
            <li>
              
            </li>
            <li className="made-by-jkaho">
              {/* <Typography variant="body2"> */}
              <a href="https://github.com/jkaho" target="_blank" rel="noreferrer noopener">© Made by jkaho | 2021</a>
              {/* </Typography> */}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
