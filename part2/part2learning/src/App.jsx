import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

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
    setNotes(notes.concat(noteObject));
    setnewNote("");
  };
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setnewNote(event.target.value);
  };
  const [showAll, setshowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  useEffect(() => {
    console.log('Use Effect')
    axios.get('http://localhost:3002/notes').then(response => {
      console.log("Promise Fulfilled");
      setNotes(response.data)
    })
  }, [])
  console.log("Render", notes.length, "notes")
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setshowAll(!showAll)}>
          show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
