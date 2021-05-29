// React
import React, { useState } from 'react';
// react-router-dom
import { Link } from "react-router-dom";
// Child components 
import MyPagesMenu from "../MyPagesMenu";
// Material Design
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EventIcon from '@material-ui/icons/Event';
import Hidden from "@material-ui/core/Hidden";
import IconButton from '@material-ui/core/IconButton';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from "@material-ui/icons/ExitToAppOutlined";
import MenuIcon from '@material-ui/icons/Menu';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// CSS
import "./style.css";
// Images
import logo from '../../images/logo.png';
// API routes
import userAPI from "../../utils/userAPI";

const drawerWidth = 240;

// Class styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "white",
    borderBottom: "1px solid grey",
  },
  menuButton: {
    // marginRight: theme.spacing(1),
    color: "black",
  },
  menuButtonToggle: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  drawer: {
    // width: drawerWidth,
    // flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  colorBlack: {
    color: "black"
  },
  selected: {
    background: "rgb(0, 0, 0, 0.06)",
  },
  logOut: {
    display: "inline-flex",
    "@media (max-width: 600px)" : {
      display: "none",
    },
  },
  responsiveLogOut: {
    display: "none",
    color: "black",
    "@media (max-width: 600px)" : {
      display: "inline-flex",
    },
  }
}));

export default function SideMenu(props) {
  const classes = useStyles();

  const { window1 } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <div className={classes.drawerContainer}>
        <List className="link-list" style={{ paddingTop: "90px" }}>
          {/* <ListItem>
            <img src={logo} alt="Inspecti logo (purple)" width="200px"/>  */}
            {/* <div style={mobileOpen ? { height: "fit-content", width: "100%" } : { height: "60px", width: "100%" }}>
              {mobileOpen ? 
                <img src={logo} alt="Inspecti logo (purple)" width="200px"/> 
                : <></>
              }
            </div> */}
          {/* </ListItem> */}
          <Link to="/profile">
            <ListItem button 
              className={
                window.location.href === "http://localhost:3000/profile" &&
                window.location.href === "https://inspecti.herokuapp.com/profile" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <InsertChartOutlinedIcon />
              </ListItemIcon>
                <ListItemText primary="Profile & Stats" />
            </ListItem>
          </Link>
          <Link to="/notes">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/notes" &&
                window.location.href === "https://inspecti.herokuapp.com/notes" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notes & Reviews" />
            </ListItem>
          </Link>
          <Link to="/monthly">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/monthly" &&
                window.location.href === "https://inspecti.herokuapp.com/monthly" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Inspection Schedule" />
            </ListItem>
          </Link>
          {/* <Link to="/daily">
            <ListItem button>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Daily Schedule" />
            </ListItem>
          </Link> */}
          <Link to="/inspected">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/inspected" &&
                window.location.href === "https://inspecti.herokuapp.com/inspected" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <TableChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Inspected Properties" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );

  
  const drawerResponsive = (
    <div>
      {/* <Toolbar /> */}
      <div className={classes.drawerContainer}>
        <List className="link-list">
          <ListItem>
            <img src={logo} alt="Inspecti logo (purple)" width="200px"/> 
            {/* <div style={mobileOpen ? { height: "fit-content", width: "100%" } : { height: "60px", width: "100%" }}>
              {mobileOpen ? 
                <img src={logo} alt="Inspecti logo (purple)" width="200px"/> 
                : <></>
              }
            </div> */}
          </ListItem>
          <Link to="/profile">
            <ListItem button 
              className={
                window.location.href === "http://localhost:3000/profile" &&
                window.location.href === "https://inspecti.herokuapp.com/profile" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <InsertChartOutlinedIcon />
              </ListItemIcon>
                <ListItemText primary="Profile & Stats" />
            </ListItem>
          </Link>
          <Link to="/notes">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/notes" &&
                window.location.href === "https://inspecti.herokuapp.com/notes" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notes & Reviews" />
            </ListItem>
          </Link>
          <Link to="/monthly">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/monthly" &&
                window.location.href === "https://inspecti.herokuapp.com/monthly" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Inspection Schedule" />
            </ListItem>
          </Link>
          {/* <Link to="/daily">
            <ListItem button>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Daily Schedule" />
            </ListItem>
          </Link> */}
          <Link to="/inspected">
            <ListItem button
              className={
                window.location.href === "http://localhost:3000/inspected" &&
                window.location.href === "https://inspecti.herokuapp.com/inspected" ?
                classes.selected : ""
              }
            >
              <ListItemIcon>
                <TableChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Inspected Properties" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );

  const container = window1 !== undefined ? () => window().document.body : undefined;

  const logOut = () => {
    userAPI.logOutUser()
      .then(() => window.location.replace("/login"))
      .catch(err => console.log(err))
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className="link-list">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={
              `${classes.menuButton} 
              ${window.location.href !== "https://inspecti.herokuapp.com/inspected" &&
              window.location.href === "https://inspecti.herokuapp.com/profile" ? 
              classes.menuButtonToggle : ""}`
            }
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap className={classes.title}>
            Inspecti
          </Typography> */}
          <Link to="/" style={{ flexGrow: 1 }}>
            {/* <img src={logo} 
              alt="Inspecti logo" 
              width="200px"
            /> */}
            <div className="logo-sidemenu"></div>
          </Link>
          <Button className={classes.colorBlack}>
            <Link to="/">Home</Link>
          </Button>
          <Button className={classes.colorBlack}>
            <Link to="/reviews">Reviews</Link>
          </Button>
          <Typography variant="body1" className={classes.colorBlack}>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </Typography>
          <MyPagesMenu />
          <IconButton className={classes.responsiveLogOut} onClick={logOut}>
            <LogoutIcon />
          </IconButton>
          <Button className={classes.logOut} onClick={logOut}>Log Out</Button>
        </Toolbar>
      </AppBar>
      <nav 
        className={window.location.href !== "https://inspecti.herokuapp.com/inspected" &&
        window.location.href !== "http://localhost:3000/inspected" ? classes.drawer : ""}
        aria-label=""
      >
      {window.location.href !== "https://inspecti.herokuapp.com/inspected" &&
        window.location.href !== "http://localhost:3000/inspected" ? 
        <Hidden smUp implementation="css">
          <Drawer
            // className={classes.drawer}
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className="drawer-parent">
              {drawerResponsive}
            </div>
          </Drawer>
        </Hidden> :  
        <Drawer
          // className={classes.drawer}
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerResponsive}
        </Drawer>
      }
      {window.location.href !== "https://inspecti.herokuapp.com/inspected" &&
        window.location.href !== "http://localhost:3000/inspected"? 
        <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden> : 
          ""
      }
      </nav>
    </div>
  );
}
