import ContentPart from "./ContentPart";

const Content = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];

  return (
    <div>
      <ContentPart part={part1} />
      <ContentPart part={part2} />
      <ContentPart part={part3} />

      <ContentPart />
    </div>
  );
};
export default Content;
