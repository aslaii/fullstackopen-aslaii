import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setnewNote] = useState("a new note...");
  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    noteService.create(noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setnewNote("");
    });
  };
  const handleNoteChange = (event) => {
    setnewNote(event.target.value);
  };
  const [showAll, setshowAll] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    noteService.getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
        setisLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching notes:', error);
      });
  }, []);
  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(
        notes.map((note) => (note.id !== id ? note : returnedNote.data))
      );
    });
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h1>Notes</h1>
      <h1>ej</h1>
      <div>
        <button onClick={() => setshowAll(!showAll)}>
          show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => note && (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
