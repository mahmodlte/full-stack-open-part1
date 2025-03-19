import { useState } from "react";
import Button from "./Button";
function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [natural, setNatural] = useState(0);
  const handleGood = () => setGood(good + 1);
  const handleBad = () => setBad(bad + 1);
  const handleNatural = () => setNatural(natural + 1);
  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button text={"Good"} onClick={handleGood} />

        <Button text="Natural" onClick={handleNatural} />
        <Button text={"Bad"} onClick={handleBad} />
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Natural: {natural}</p>
        <p>Bad: {bad}</p>
      </div>
    </>
  );
}

export default App;
