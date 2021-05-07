import React from "react";
import Quill from "quill";

export default function RichTextEditor() {
  const toolbarOptions = [
    [{ "size": ["small", false, "large", "huge"] }],
    [ "bold", "italic", "underline", "strike" ],
    [{ "color": [] }, { "background": [] }],
    [{ "list": "ordered" }, { "list": "bullet" }, { "align": []}],
    [{ "indent": "+1" }, { "indent": "-1" }],
    [ "link", "image", "video" ],
  ];

  const options = {
    debug: 'info',
    modules: {
      toolbar: toolbarOptions
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow'
  };

  const editor = new Quill(".editor", options);

  return (
    <div className="editor"></div>
  )
}