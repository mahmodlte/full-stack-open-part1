import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

function App() {
  const course = "Half Stack application development";
  const parts = [
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
  ];
  const totalExercises =
    parts[0].exercises + parts[1].exercises + parts[2].exercises;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
}

export default App;
