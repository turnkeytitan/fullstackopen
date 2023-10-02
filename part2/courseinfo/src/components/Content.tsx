import { Part } from "./Part";

export const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part} key={part.id}/>
      ))}
    </>
  );
};

interface ContentProps {
  parts: { name: string; exercises: number; id: number }[];
}
