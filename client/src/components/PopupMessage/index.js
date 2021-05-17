// React
import React from 'react';
// Material Design
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function PopupMessage(props) {
  return (
  <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
    <Alert onClose={props.handleClose} severity={props.severity}>
      {props.message}
    </Alert>
  </Snackbar>
  // Severities: success, error, warning, info
  );
};