import StatisticLine from "./StatisticLine";
interface StatsProps {
  stats: {
    good: number;
    neutral: number;
    bad: number;
    total: number;
    totalByScore: number;
  };
}
const Statistics = ({ stats: { good, neutral, bad, total, totalByScore } }: StatsProps) => {
  return total > 0 ? (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={totalByScore / total || 0} />
        <StatisticLine text="average" value={total / 3} />
        <StatisticLine text="positive" value={(good / total) * 100 || 0} />
      </tbody>
    </table>
  ) : (
    <p>No feedback given</p>
  );
};

export default Statistics;
