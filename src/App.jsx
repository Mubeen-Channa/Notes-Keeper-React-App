import { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">📝 Notes Keeper</h2>
      <NoteForm addNote={addNote} />
      <div className="row mt-4">
        {notes.map((note, i) => (
          <Note key={i} index={i} {...note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
