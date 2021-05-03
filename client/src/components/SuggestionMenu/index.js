import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 10,
    width: '100%',
    maxWidth: 500,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SuggestionMenu(props) {
  const classes = useStyles();

  return (
    <div id="suggestion-box" className={classes.root}>
      <List component="nav" aria-label="address suggestions">
        {props.suggestions.length > 0 ? 
          props.suggestions.map(suggestion => (
          <ListItem button>
            <ListItemText primary={suggestion.name} />
          </ListItem>
          )) : ""
        }
      </List>
    </div>
  );
}
