import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const promise = axios.get("http://localhost:3001/persons");
  const [persons, setpersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const persons = response.data;
      setpersons(persons);
    });
  }, []);

  return (
    <>
      {persons.map((person) => (
        <p key={person.id}>
          Name: {person.name}, Number: {person.number}
        </p>
      ))}
      <p>Hello</p>
    </>
  );
}

export default App;
