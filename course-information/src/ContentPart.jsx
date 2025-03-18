const ContentPart = (props) => {
  const partName = props?.part?.name;
  const exerciseNumber = props?.part?.exercises;
  console.log(partName);

  return (
    <>
      <p>
        {" "}
        {partName} {exerciseNumber}
      </p>
    </>
  );
};

export default ContentPart;
