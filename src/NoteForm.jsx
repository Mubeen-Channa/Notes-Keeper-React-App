import { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) return;
    addNote(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
      <input
        className="form-control mb-2"
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        name="content"
        placeholder="Your note..."
        value={note.content}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NoteForm;