import React, { useState } from "react";

import PropTypes from "prop-types";

import NoteColor from "../NoteColor/NoteColor";
import "./noteEditor.css";

export default function NoteEditor({
  colors,
  onNoteAdd,
  defaultColor = "#FFD700",
  textButton = "Add",
  placeholderArea = "Enter your note here..."
}) {
  const [text, setText] = useState("");
  const [color, setColor] = useState({ defaultColor });
  const handleColorChange = e => setColor(colors[e.target.id]);
  const handleTextChange = e => setText(e.target.value);
  const handleNoteAdd = () => {
    const newNote = {
      text,
      color,
      id: Date.now()
    };
    newNote.text && onNoteAdd(newNote);
    setText("");
  };
  return (
    <div className="note-editor">
      <textarea
        placeholder={placeholderArea}
        rows="5"
        className="note-textarea"
        onChange={handleTextChange}
        value={text}
      />
      <div>
        <div>
          {colors.map((color, i) => (
            <NoteColor
              key={i}
              color={color}
              id={i}
              colorChange={handleColorChange}
            />
          ))}
        </div>
        <button className="add-button" onClick={handleNoteAdd}>
          {textButton}
        </button>
      </div>
    </div>
  );
}

NoteEditor.propTypes = {
  colors: PropTypes.array.isRequired,
  defaultColor: PropTypes.string,
  onNoteAdd: PropTypes.func.isRequired,
  textButton: PropTypes.string,
  placeholderArea: PropTypes.string
};
