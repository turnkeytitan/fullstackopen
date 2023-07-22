import { BaseSyntheticEvent, useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + Math.abs(bad);
  const totalByScore = good + bad;

  const handleClick = (event: BaseSyntheticEvent) => {
    const target = event.target as HTMLButtonElement;
    if (target.id === "good") {
      setGood(good + 1);
    } else if (target.id === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad - 1);
    }
  };

  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={handleClick} id="good">
        good
      </button>
      <button onClick={handleClick} id="neutral">
        neutral
      </button>
      <button onClick={handleClick} id="bad">
        bad
      </button>
      <h2>statistics</h2>
      <Statistics stats={{ good, neutral, bad, total, totalByScore }} />
    </>
  );
};
export default App;
