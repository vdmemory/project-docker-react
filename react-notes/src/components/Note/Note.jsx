import React from "react";

import PropTypes from "prop-types";

import "./note.css";

export default function Note({ id, color, text, onDelete, closeIcon = " x " }) {
  const styleBG = { backgroundColor: color };

  return (
    <div className="note" style={styleBG}>
      <span className="delete-note" onClick={onDelete}>
        {closeIcon}
      </span>
      {text}
    </div>
  );
}

Note.propTypes = {
  color: PropTypes.any,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  closeIcon: PropTypes.string
};
