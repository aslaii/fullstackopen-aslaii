import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const [newFilter, setNewFilter] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const addPerson = (person) => {
    if (persons.some((p) => p.name === person.name)) {
      alert(`${person.name} is already added to the phonebook`);
      return;
    }

    setPersons([...persons, person]);
  };

  const handleFilterChange = (filter) => {
    // Update the newFilter state on filter change
    setNewFilter(filter);
  };

  const filteredPersons = persons.filter(
    (
      person // Use the newFilter state to filter persons array
    ) => person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterPersons={handleFilterChange} />

      <h3>Add a new</h3>

      <Form addPerson={addPerson} />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
