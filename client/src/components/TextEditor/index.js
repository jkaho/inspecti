// React
import React, { useState, useEffect } from "react";
// Child components
import Popup from "../../components/Popup";
// import PopupMessage from "../../components/PopupMessage";
// Material Design
import { makeStyles } from "@material-ui/core/styles";
// react-draft-wysiwyg
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// CSS
import './style.css';
// API routes
import notesAPI from "../../utils/notesAPI";

// Class styles
const useStyles = makeStyles({
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
});

function TextEditor(props) {
  const classes = useStyles();
  const [popup, setPopup] = useState({ open: false, type: "", severity: "error", message: ""});
  const popupTimeout = 6000;
  const  [convertedContent, setConvertedContent] = useState(null);
  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );
  // Set rich text editor content to current note text 
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(`${props.text}`)
      )
    ),
  );
  
  // Necessary to render note text properly
  useEffect(() => {
    setEditorState(() => EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(`${props.text}`)
    )));
  }, [props.text]);

  // Called when the editor state is changed - obj argument of type EditorState
  const handleEditorChange = (state) => {
    setEditorState(state); // editorState represents the text content, selection, undo/redo stacks, most recent change
    convertContentToHTML();
  };

  // Takes content of editor and converts to HTML
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  // Returns sanitized HTML
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  };

  // When text is entered into the editor, save converted content to the db
  const handleTextInputChange = () => {
    const textValue = createMarkup(convertedContent).__html;
    const textData = {
      text: textValue
    };

    notesAPI.updateNote(props.currentNoteId, textData)
      .then()
      .catch(err => {
        console.log(err);
        setPopup({ 
          open: true, type: "error", severity: "error", 
          message: "An error was encountered while updating data. Please try again later." 
        });
        setTimeout(function() {
          setPopup({ open: false, type: "", severity: "error", message: "" });
        }, popupTimeout);
      });
  };

  const handlePopupClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setPopup({ open: false, type: "", severity: "", message: ""});
  };

  return (
    <div>
      <div className=
        {
          `wysiwyg-text-editor
          ${props.editorModeOn ? classes.show : classes.hide}`
        }
      >
        <Editor 
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          onChange={handleTextInputChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ['inline', 'list', 'emoji', 'image', 'link'],
            inline: {
              inDropdown: true,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
              bold: { className: undefined },
              italic: { className: undefined },
              underline: { className: undefined },
              strikethrough: { className: undefined },
              monospace: { className: undefined },
              superscript: { className: undefined },
              subscript: { className: undefined },
            },
            list: {
              inDropdown: true,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered', 'ordered'],
            },
            link: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              dropdownClassName: undefined,
              showOpenOptionOnHover: true,
              defaultTargetOption: '_self',
              options: ['link', 'unlink'],
              link: { className: undefined },
              unlink: { className: undefined },
              linkCallback: undefined
            },
            emoji: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              emojis: [
                '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                '✅', '❎', '💯',
              ],
            },
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: undefined,
              previewImage: false,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: false, mandatory: false },
              defaultSize: {
                height: 'auto',
                width: 'auto',
              },
            },
          }}
        />
      </div>
      <div className=
          {
            `preview 
            ${props.editorModeOn ? classes.hide : classes.show}`
          }
        dangerouslySetInnerHTML={{ __html: props.text }}
      >
      </div>
      <Popup
        open={popup.open}
        handleClose={handlePopupClose}
        severity={popup.severity}
        message={popup.message}
      />
    </div>
  );
};

export default TextEditor;

/*
  Referenced: https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
*/