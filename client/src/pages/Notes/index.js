import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./style.css";

const useStyles = makeStyles({
  noteSection: {
    background: "rgb(233, 233, 233)",
    fontSize: 20,
    fontWeight: "bold"
  },
  noteList: {
    padding: 0,
  },
  maxHeight: {
    height: "100%",
  },
  overflow: {
    overflow: "auto",
    height: "100%",
  },
  note: {
    overflow: "auto",
    height: "100%",
  }
})

export default function Notes(props) {
  const classes = useStyles();

  return (
    <div>
      <SideMenu />
      <BoxContainer>
        <Grid container className={classes.maxHeight}>
          <Grid id="note-bar" item className={classes.overflow}>
            <div className="note-list-div box-seg">
              <div className="note-search-div">
                <input id="note-search-input" type="text" placeholder="Search your notes"/>
              </div>
              <div className="starred-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Starred"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Note 1" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 2" />
                  </ListItem>
                </List>
              </div>
              <div className="all-notes-div">
                <List component="nav" aria-label="" className={classes.noteList}>
                  <ListItem className={classes.noteSection}>
                    <ListItemText disableTypography primary="Notes"/>
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Note 3" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 4" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 5" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 6" />
                  </ListItem>
                  <Divider light/>
                  <ListItem button>
                    <ListItemText primary="Note 7" />
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>
          <Grid item id="note-area" className={classes.note}>
            <div className="current-note-div box-seg">
              <div className="note-title-input-div">
                <input type="text" placeholder="Title"/>
              </div>
            </div>
          </Grid>
        </Grid>
      </BoxContainer>
    </div>
  )
}