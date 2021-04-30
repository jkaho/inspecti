import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EventIcon from '@material-ui/icons/Event';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Hidden from "@material-ui/core/Hidden";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

const drawerWidth = 240;

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
    marginRight: theme.spacing(2),
    color: "black",
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
  }
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    <Toolbar />
    <div className={classes.drawerContainer}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InsertChartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Profile & Stats" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes & Reviews" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Inspection Schedule" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TableChartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Inspected Properties" />
        </ListItem>
      </List>
    </div>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  function MyPages() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
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
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
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
                      <MenuItem onClick={handleClose}>Profile & Stats</MenuItem>
                      <MenuItem onClick={handleClose}>Notes & Reviews</MenuItem>
                      <MenuItem onClick={handleClose}>Inspection Schedule</MenuItem>
                      <MenuItem onClick={handleClose}>Inspected Properties</MenuItem>
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Inspecti
          </Typography>
          <Button className={classes.colorBlack}>Home</Button>
          <Button className={classes.colorBlack}>Reviews</Button>
          <Typography variant="body1" className={classes.colorBlack}>
            &nbsp;&nbsp;|&nbsp;&nbsp;
          </Typography>
          {/* <Button className={classes.colorBlack}>
            My Pages
          </Button> */}
          <MyPages />
          <Button className={classes.joinBtn}>Log Out</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="">
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
        {drawer}
      </Drawer>
      </Hidden>
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
        </Hidden>
      </nav>
      {/* <main className={classes.content}>
        <Toolbar />
      </main> */}
    </div>
  );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from "@material-ui/core/Grid";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
// import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import EventIcon from '@material-ui/icons/Event';
// import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   sideMenu: {
//     borderRight: "1px solid grey",
//     height: "100%",
//     minHeight: "100vh",
//   }
// }));

// export default function SideMenu() {
//   const classes = useStyles();

//   return (
//     <Grid item xs={3}>
//       <div className={classes.sideMenu}>
//         <List component="nav" aria-label="main mailbox folders">
          // <ListItem button>
          //   <ListItemIcon>
          //     <InsertChartOutlinedIcon />
          //   </ListItemIcon>
          //   <ListItemText primary="Profile & Stats" />
          // </ListItem>
          // <ListItem button>
          //   <ListItemIcon>
          //     <DescriptionOutlinedIcon />
          //   </ListItemIcon>
          //   <ListItemText primary="Notes & Reviews" />
          // </ListItem>
          // <ListItem button>
          //   <ListItemIcon>
          //     <EventIcon />
          //   </ListItemIcon>
          //   <ListItemText primary="Inspection Schedule" />
          // </ListItem>
          // <ListItem button>
          //   <ListItemIcon>
          //     <TableChartOutlinedIcon />
          //   </ListItemIcon>
          //   <ListItemText primary="Inspected Properties" />
          // </ListItem>
//         </List>
//       </div>
//     </Grid>
//   );
// }
