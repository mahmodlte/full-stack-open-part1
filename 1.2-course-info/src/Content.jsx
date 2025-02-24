import ContentPart from "./ContentPart";

const Content = (props) => {
  return (
    <div>
      <ContentPart part={props.part1} exercise={props.exercises1} />
      <ContentPart part={props.part2} exercise={props.exercises2} />

      <ContentPart part={props.part3} exercise={props.exercises3} />
    </div>
  );
};
export default Content;
