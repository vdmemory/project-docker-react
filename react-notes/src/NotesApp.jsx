import React, { useState, useEffect } from "react";

import NotesGrid from "./components/NotesGrid/NoteGrid";
import NoteSearch from "./components/NoteSearch/NoteSearch";
import NoteEditor from "./components/NoteEditor/NoteEditor";

import PropTypes from "prop-types";

import "./notesApp.css";

export default function NotesApp({
  title = "NotesApp",
  colors = ["#FFD700", "#20B2AA", "#90EE90", "#FFB6C1", "#5F9EA0", "#F7B17C"],
  defaultSearch = [
    {
      text: "  Ничего не найдено!  ",
      color: "#DE596F",
      id: Date.now()
    }
  ],
  defaultGrid = [
    {
      text: "Hello World!",
      color: "#90EE90",
      id: Date.now()
    }
  ]
}) {
  const initialState = JSON.parse(localStorage.getItem("localNotes"));
  const [notes, setNotes] = useState(initialState || defaultGrid);
  const [filter, setFilter] = useState(initialState || []);

  useEffect(() => {
    const localNotes = JSON.stringify(notes);
    localStorage.setItem("localNotes", localNotes);
  });

  const _updateState = newNotes => {
    setNotes(newNotes);
    setFilter(newNotes);
  };

  const handleNoteAdd = newNote => _updateState([newNote, ...notes]);

  const handleNoteDelete = noteId =>
    _updateState(notes.filter(({ id }) => id !== noteId));

  const handleFilterList = value => {
    const search = notes.filter(
      note => note.text.toLowerCase().search(value) !== -1
    );
    setFilter(search.length !== 0 ? search : defaultSearch);
  };

  return (
    <div className="notes-app">
      <h2 className="app-header">{title}</h2>
      <NoteSearch notes={notes} onNoteSearch={handleFilterList} />
      <NoteEditor colors={colors} onNoteAdd={handleNoteAdd} />
      <NotesGrid
        notes={!filter ? notes : filter}
        onNoteDelete={handleNoteDelete}
      />
      <h1>HELLO WORLD!</h1>
    </div>
  );
}

NotesApp.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.array,
  defaultSearch: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.any,
      id: PropTypes.number.isRequired
    })
  )
};
