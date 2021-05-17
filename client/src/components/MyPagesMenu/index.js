// React
import React, { useState, useRef, useEffect } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
// CSS
import "./style.css";

// Class styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  black: {
    color: "black",
  },
  white: {
    color: "white",
  },
}));

export default function MyPagesMenu(props) {
  const classes = useStyles();
  // States
  const [open, setOpen] = useState(false);
  // Ref
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          endIcon={<KeyboardArrowDownIcon />}
          className={
            props.colorProp === "white" ? classes.white : classes.black
          }
        >
          My Pages
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link to="/profile">
                      <MenuItem onClick={handleClose}>Profile & Stats</MenuItem>
                    </Link>
                    <Link to="/notes">
                      <MenuItem onClick={handleClose}>Notes & Reviews</MenuItem>
                    </Link>
                    <Link to="/monthly">
                      <MenuItem onClick={handleClose}>Monthly Schedule</MenuItem>
                    </Link>
                    <Link to="/daily">
                      <MenuItem onClick={handleClose}>Daily Schedule</MenuItem>
                    </Link>
                    <Link to="/inspected">
                      <MenuItem onClick={handleClose}>Inspected Properties</MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}