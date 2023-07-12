export const Part = ({ part }: PartProps) => (
  <div className="counter">
    <p>{part.name}</p>
    <p>{part.exercises}</p>
  </div>
);

interface PartProps {
  part: {
    name: string;
    exercises: number;
  };
}
