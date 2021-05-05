import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../../components/SideMenu";
import BoxContainer from "../../components/BoxContainer";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import "./style.css";
// import { Icon } from "@material-ui/core";
import notesAPI from "../../utils/notesAPI";

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
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  let userId;

  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    userId = props.id;
    const user = {
      userId: userId
    }
    notesAPI.getAllNotes(user)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, []);

  const handleTitleInputChange = () => {
    const titleValue = titleRef.current.value.trim();
    setTitle(titleValue);
  };

  const handleTextInputChange = () => {
    const textValue = textRef.current.value.trim();
    setText(textValue);
  };


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
              <div className="new-note-btn">
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <div className="note-title-input-div">
                <input 
                  ref={titleRef} 
                  type="text" 
                  placeholder="Title" 
                  onChange={handleTitleInputChange}/>
              </div>
              <div className="note-address note-seg">
                <div className="note-address-btn">
                  <button>Link an address</button>
                </div>
                <div className="note-address-input">
                  <input type="text" placeholder="Search an address" />
                </div>
                <div className="note-address-text"></div>
                <div className="note-address-specs"></div>
              </div>
              <div className="note-review-section note-seg">
                <button>Create a review</button>
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">PROPERTY REVIEW</th>
                      <th className="note-action-btns">
                        <IconButton aria-label="share">
                          <PresentToAllIcon />
                        </IconButton>
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="review-criteria-row">
                      <td>Property condition</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Potential to capitalise</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Surroundings</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Consistency with neighbours</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Accessibility</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Privacy</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Floorplan</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Outdoor space</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                    <tr className="review-criteria-row">
                      <td>Indoor-to-outdoow flow</td>
                      <td>
                        <span className="review-rating">5</span>
                        <span className="out-of-five">/5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="note-text-section note-seg">
                <table>
                  <thead>
                    <tr>
                      <th className="note-section-heading">PROPERTY NOTES</th>
                      <th className="note-action-btns">
                        <IconButton>
                          <EditIcon />
                        </IconButton>
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <textarea 
                          ref={textRef}
                          onChange={handleTextInputChange}
                        ></textarea>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </Grid>
        </Grid>
      </BoxContainer>
    </div>
  )
}