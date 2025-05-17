
const Note = ({ title, content, index, deleteNote }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <button onClick={() => deleteNote(index)} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;