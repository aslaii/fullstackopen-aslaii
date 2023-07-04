import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <li>{person.name}</li>
    </div>
  );
};

export default Person;
