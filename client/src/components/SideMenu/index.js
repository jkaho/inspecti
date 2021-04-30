import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import EventIcon from '@material-ui/icons/Event';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  sideMenu: {
    borderRight: "1px solid grey",
    height: "100%",
    minHeight: "100vh",
  }
}));

export default function SideMenu() {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <div className={classes.sideMenu}>
        <List component="nav" aria-label="main mailbox folders">
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
    </Grid>
  );
}
