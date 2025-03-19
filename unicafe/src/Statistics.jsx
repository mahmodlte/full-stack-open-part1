import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, natural }) => {
  const getPostiveFeedback = () => {
    const totalFeedback = good + bad + natural;
    const postiveFeedback = good / totalFeedback;
    return postiveFeedback * 100;
  };
  const totalNumber = good + natural + bad;
  const averageNumber = (good + bad + natural) / 3;
  return (
    <>
      {good || bad || natural ? (
        <div>
          {" "}
          <h1>Statistics</h1>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"Natural"} value={natural} />
          <StatisticLine text={"All"} value={totalNumber} />
          <StatisticLine text={"Average"} value={averageNumber} />
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
