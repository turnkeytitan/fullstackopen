import { Part } from "./Part";

export const Content = ({ parts }: ContentProps) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};

interface ContentProps {
  parts: { name: string; exercises: number }[];
}
