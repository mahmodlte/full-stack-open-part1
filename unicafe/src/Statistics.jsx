import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, natural }) => {
  const getPostiveFeedback = () => {
    const totalFeedback = good + bad + natural;
    const postiveFeedback = good / totalFeedback;
    return postiveFeedback * 100;
  };
  const totalNumber = good + natural + bad;
  const averageNumber = (good + bad + natural) / 3;
  const feedbackData = {
    good: {
      text: "Good",
      value: good,
    },
    bad: {
      text: "Bad",
      value: bad,
    },
    natural: {
      text: "Natural",
      value: natural,
    },
    total: {
      text: "All",
      value: totalNumber,
    },
    average: {
      text: "Average",
      value: averageNumber,
    },
  };
  return (
    <>
      {good || bad || natural ? (
        <div>
          <h1>Statistics</h1>
          <StatisticLine statisticData={feedbackData} />
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
