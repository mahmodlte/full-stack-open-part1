import ContentPart from "./ContentPart";

const Content = (props) => {
  return (
    <div>
      <ContentPart part={props.part1.name} exercise={props.part1.exercises} />
      <ContentPart part={props.part2.name} exercise={props.part2.exercises} />

      <ContentPart part={props.part3.name} exercise={props.part3.exercises} />
    </div>
  );
};
export default Content;
