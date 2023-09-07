import React, { useState } from 'react';

function QuickNote({ note, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited note and exit edit mode
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Delete the note
    onDelete();
  };

  const handleInputChange = (event) => {
    setEditedNote(event.target.value);
  };

  return (
    <div className="quick-note">
      {isEditing ? (
        <textarea
          className="note-textarea"
          value={editedNote}
          onChange={handleInputChange}
        />
      ) : (
        <p className="note-text">{note}</p>
      )}

      <div className="note-buttons">
        {isEditing ? (
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}

        <button className="delete-button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default function instaNotesApp() {
  const [notes, setNotes] = useState([ "" ]);

  const addNote = () => {
    const newNote = <textarea/>;
    if (newNote) {
      setNotes([...notes, newNote]);
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="quick-notes-app">
      
      <button className="add-button" onClick={addNote}>
        Add Note
      </button>
      {notes.map((note, index) => (
        <QuickNote
          key={index}
          note={note}
          onDelete={() => deleteNote(index)}
        />
      ))}
    </div>
  );
}
