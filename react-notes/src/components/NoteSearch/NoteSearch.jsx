import React from "react";

import PropTypes from "prop-types";

import "./noteSearch.css";

export default function NoteSearch({
  placeholderSearch = "Search...",
  onNoteSearch
}) {
  const handleChangeSearchText = e => {
    const value = e.target.value.toLowerCase();
    onNoteSearch(value);
  };

  return (
    <div className="notes-search">
      <span role="img" aria-label="Loupe">
        🔍
      </span>
      <input
        type="text"
        className="search"
        placeholder={placeholderSearch}
        onChange={handleChangeSearchText}
      />
    </div>
  );
}

NoteSearch.propTypes = {
  placeholderSearch: PropTypes.string,
  onNoteSearch: PropTypes.func.isRequired
};
