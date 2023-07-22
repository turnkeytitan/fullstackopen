interface StatsLineProps {
  text: string;
  value: number;
}
const StatisticLine = ({ text, value }: StatsLineProps) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {text === "positive" && "%"}
      </td>
    </tr>
  );
};

export default StatisticLine;
