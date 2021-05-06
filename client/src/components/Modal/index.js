import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonDiv: {
    margin: "0 auto",
    width: "fit-content",
  },
  confirmButton: {
    borderRadius: "25px",
    margin: 5,
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" style={{ textAlign: "center" }}>{props.title}</h2>
      <p id="simple-modal-description" style={{ textAlign: "center" }}>
        {props.text}
      </p>
      <div className={classes.buttonDiv}>
        <Button
          className={classes.confirmButton}
          variant="contained"
          color="secondary"
          startIcon={<ClearIcon />}
          onClick={props.noClick}
        >No</Button>
        <Button
          className={classes.confirmButton}
          variant="contained"
          color="secondary"
          startIcon={<DoneIcon />}
          onClick={props.yesClick}
        >Yes</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.modalState}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
