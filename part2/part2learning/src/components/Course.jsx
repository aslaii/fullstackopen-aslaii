const Course = ({ course }) => {
  const parts = course.parts;
  return (
    <div>
      <h1>{course.name}</h1>
      {parts.map((parts) => (
        <p key={parts.id}>
          {parts.name} {parts.exercises}
        </p>
      ))}
    </div>
  );
};

export default Course;
