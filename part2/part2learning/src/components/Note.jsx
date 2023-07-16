const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "Make Not Important" : "Make Important";
  return (
    <>
      <li>{note.content}</li>
      <button onClick={toggleImportance}> {label}</button>
    </>
  );
};

export default Note;
