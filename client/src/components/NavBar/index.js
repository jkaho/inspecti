import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarHome}>
        <Toolbar>
          <Typography variant="h6" className={classes.titleHome}>
            Inspecti
          </Typography>
          <Button className={classes.colorWhite}>Home</Button>
          <Button className={classes.colorWhite}>Reviews</Button>
          <Typography variant="body1" className={classes.colorWhite}>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </Typography>
          <Button className={classes.colorWhite}>Login</Button>
          <Button className={classes.joinBtnHome}>Join</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
