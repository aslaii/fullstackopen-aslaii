const Course = ({ course }) => {
  return (
    <div>
      {course.map((c) => {
        const parts = c.parts;
        const total = parts.reduce((s, p) => s + p.exercises, 0);

        return (
          <div key={c.id}>
            <h1>{c.name}</h1>
            {parts.map((part) => (
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            ))}
            <b>Total of {total} exercises</b>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
