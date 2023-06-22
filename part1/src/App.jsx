import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = (part) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} {...part} />
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  let sum = 0;
  parts.map((part) => (sum += part.exercises));
  return (
    <>
      <p>Number of Exercises: {sum}</p>
    </>
  );
};
function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

export default App;
