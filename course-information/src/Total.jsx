const Total = (props) => {
  const totalExercises =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return (
    <div>
      <p>
        <p>Number of exercises {totalExercises}</p>
      </p>
    </div>
  );
};
export default Total;
