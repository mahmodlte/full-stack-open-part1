const StatisticLine = ({ statisticData }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{statisticData.good.text}</td>
            <td>{statisticData.good.value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{statisticData.bad.text}</td>
            <td>{statisticData.bad.value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{statisticData.natural.text}</td>
            <td>{statisticData.natural.value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{statisticData.total.text}</td>
            <td>{statisticData.total.value}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{statisticData.average.text}</td>
            <td>{statisticData.average.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticLine;
