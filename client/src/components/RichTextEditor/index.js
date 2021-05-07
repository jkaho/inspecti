import React, { useState } from "react";
// import Quill from "quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";

const toolbarOptions = [
  [{ "size": ["small", false, "large", "huge"] }],
  [ "bold", "italic", "underline", "strike" ],
  [{ "color": [] }, { "background": [] }],
  [{ "list": "ordered" }, { "list": "bullet" }, { "align": []}],
  [{ "indent": "+1" }, { "indent": "-1" }],
  [ "link", "image", "video" ],
];

class RichTextEditor extends React.Component {
  state = { editorHtml: "" };

  // handleChange = html => {
  //   this.setState({ editorHtml: html });
  // };

  static modules = {
    toolbar: toolbarOptions
  };

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          value={this.props.textValue}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          modules={RichTextEditor.modules}
        />
      </div>
    )
  }
}

export default RichTextEditor;