const Statistics = ({ good, bad, natural }) => {
  const getPostiveFeedback = () => {
    const totalFeedback = good + bad + natural;
    const postiveFeedback = good / totalFeedback;
    return postiveFeedback * 100;
  };
  return (
    <>
      {good || bad || natural ? (
        <div>
          {" "}
          <h1>Statistics</h1>
          <p>Good: {good}</p>
          <p>Natural: {natural}</p>
          <p>Bad: {bad}</p>
          <p>All: {good + natural + bad}</p>
          <p>Average: {(good + bad + natural) / 3}</p>
          <p>
            Postive:
            {getPostiveFeedback()
              ? getPostiveFeedback()
              : "There is no Feedback"}
            %
          </p>{" "}
        </div>
      ) : (
        <p>There is no feedback</p>
      )}
    </>
  );
};

export default Statistics;
