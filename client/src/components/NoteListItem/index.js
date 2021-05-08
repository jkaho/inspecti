import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function NoteListItem(props) {
  const [isStarred, setStarredState] = useState();

  useEffect(() => {
    setStarredState(props.noteIsStarred);
  }, [props.noteIsStarred]);
  
  return (
    <div>
      <ListItem id={`note-${props.noteId}`} button onClick={props.listItemOnClick}>
        <ListItemText id={`notetitle-${props.noteId}`}
          primary={props.currentNoteId === props.noteId && props.sideTitle !== "" ? props.sideTitle
            : props.noteTitle
          } />
      </ListItem>
      <div className="list-item-actions">
        <button id={`deletebtn-${props.noteId}`} onClick={props.deleteOnClick}>
          <i id={`deleteicon-${props.noteId}`} className="far fa-trash-alt" />
        </button>
        <button id={`starbtn-${props.noteId}`} onClick={(event) => {
            props.starOnClick(event, props.noteIsStarred);
          }}>
          <i id={`staricon-${props.noteId}`} className={isStarred ? "fas fa-star" : "far fa-star"} />
        </button>
      </div>
      <Divider light/>
    </div>
  );
};
