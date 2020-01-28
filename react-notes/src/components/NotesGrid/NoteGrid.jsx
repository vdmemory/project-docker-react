import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Masonry from "masonry-layout";

import "./noteGrid.css";

import Note from "../Note/Note";

export default function NotesGrid({ notes, onNoteDelete }) {
  useEffect(() => {
    const grid = document.querySelector("#grid");
    new Masonry(grid, {
      itemSelector: ".note",
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true
    });
  });

  return (
    <div className="notes-grid" id="grid">
      {notes.map(({ id, color, text }) => (
        <Note
          key={id}
          onDelete={() => onNoteDelete(id)}
          color={color}
          text={text}
        />
      ))}
    </div>
  );
}

NotesGrid.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.any,
      id: PropTypes.number.isRequired
    })
  ),
  onNoteDelete: PropTypes.func.isRequired
};
