import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import notesAPI from "../../utils/notesAPI";

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

  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );
  console.log(props.text)
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

  const  [convertedContent, setConvertedContent] = useState(null);
  // const [text, setText] = useState();

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  };

  // const saveTextToDB = () => {
  //   console.log(createMarkup(convertedContent));
  // };

  const handleTextInputChange = () => {
    const textValue = createMarkup(convertedContent).__html;
    // setText(textValue);

    const textData = {
      text: textValue
    };

    notesAPI.updateNote(props.currentNoteId, textData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
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
    </div>
  )
}
export default TextEditor;

/*
  Referenced: https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
*/