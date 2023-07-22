import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import personService from "./services/person";

const App = () => {
  const [newFilter, setNewFilter] = useState("");
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService
      .getData()
      .then((data) => {
        setPersons(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setPersons([]); // Ensure persons is always an array
      });
  }, []);
  console.log("P", persons);

  const addPerson = (person) => {
    if (persons.some((p) => p.name === person.name)) {
      alert(`${person.name} is already added to the phonebook`);
      return;
    }
    console.log("Name: ", person.name);
    console.log("Number: ", person.number);
    const personObject = {
      name: person.name,
      number: person.number,
    };
    personService
      .createData(personObject)
      .then((response) => {
        console.log("Response", response);
        setPersons((prevPersons) => prevPersons.concat(response));
      })
      .catch((error) => {
        console.error("Error creating data:", error);
      });
  };

  const handleFilterChange = (filter) => {
    // Update the newFilter state on filter change
    setNewFilter(filter);
  };
  console.log("Persons", persons);
  const filteredPersons = persons.filter(
    (person) =>
      person &&
      person.name &&
      person.name.toLowerCase().includes(newFilter.toLowerCase())
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
