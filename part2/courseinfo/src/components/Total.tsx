export const Total = ({ parts }: TotalProps) => {
  const total = parts.reduce((current, part) => (current += part.exercises), 0);
  return (
    <div className="total">
      <p>total of {total} exercises</p>
    </div>
  );
};
interface TotalProps {
  parts: { name: string; exercises: number }[];
}
