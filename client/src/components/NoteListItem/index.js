import React, { useState, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./style.css";

export default function NoteListItem(props) {
  const [isStarred, setStarredState] = useState();
  const [listItemHover, setListItemHover] = useState(false);

  useEffect(() => {
    setStarredState(props.noteIsStarred);
  }, [props.noteIsStarred]);

  const handleListItemMouseEnter = () => {
    setListItemHover(true);
  };

  const handleListItemMouseExit = () => {
    setListItemHover(false);
  };
  
  return (
    <div>
      <ListItem className="list-item" id={`note-${props.noteId}`} button
        onClick={props.listItemOnClick}
        onMouseEnter={handleListItemMouseEnter}
        onMouseLeave={handleListItemMouseExit}
      >
        <ListItemText id={`notetitle-${props.noteId}`}
          primary={props.currentNoteId === props.noteId && props.sideTitle !== "" ? props.sideTitle
            : props.noteTitle
          // primary={props.currentNoteId === props.noteId ? props.title : props.noteTitle
          } />
      </ListItem>
      <div className={
        `list-item-actions 
        ${listItemHover ? "onHover" : "noHover"}`
      }>
        <button className="list-item-delete" id={`deletebtn-${props.noteId}`} onClick={props.deleteOnClick}>
          <i id={`deleteicon-${props.noteId}`} className="far fa-trash-alt" />
        </button>
        <button className="list-item-star" id={`starbtn-${props.noteId}`} onClick={(event) => {
            props.starOnClick(event, props.noteIsStarred);
            setStarredState(!isStarred);
          }}>
          <i id={`staricon-${props.noteId}`} className={isStarred ? "fas fa-star" : "far fa-star"} />
        </button>
      </div>
      <Divider light/>
    </div>
  );
};
