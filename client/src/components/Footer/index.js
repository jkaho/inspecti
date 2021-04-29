import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: "center",
    background: "#ab3ec9"
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
          <Typography variant="body2">
            Made by jkaho | 2021
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
