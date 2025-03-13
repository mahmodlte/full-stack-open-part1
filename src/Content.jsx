import ContentPart from "./ContentPart";

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return <ContentPart key={part.exercises} part={part} />;
      })}
    </div>
  );
};
export default Content;
