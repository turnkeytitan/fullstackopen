export const Total = ({ parts }: TotalProps) => {
  const total = parts.reduce((current, part) => (current += part.exercises), 0);
  return (
    <div className="counter">
      <p>Total:</p> <p>{total}</p>
    </div>
  );
};
interface TotalProps {
  parts: { name: string; exercises: number }[];
}
