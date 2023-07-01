const Course = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      {parts.map((part, index) => (
        <p key={part.id + "-" + index}>
          {part.name} {part.exercises}
        </p>
      ))}
      <b key="total">Total of {total} exercises</b>
    </div>
  );
};

export default Course;
