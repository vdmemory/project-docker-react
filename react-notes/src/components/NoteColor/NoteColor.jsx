import React from "react";

import PropTypes from "prop-types";

import "./noteColor.css";

export default function NoteColor({ color, id, colorChange, checkMark = "✔" }) {
  const styleBG = { backgroundColor: color };
  return (
    <div className="note-color">
      <input type="radio" id={id} name="items" onChange={colorChange} />
      <label htmlFor={id}>
        <div style={styleBG}>
          <span>{checkMark}</span>
        </div>
      </label>
    </div>
  );
}

NoteColor.propTypes = {
  color: PropTypes.any,
  id: PropTypes.number.isRequired,
  colorChange: PropTypes.func.isRequired,
  checkMark: PropTypes.string
};
