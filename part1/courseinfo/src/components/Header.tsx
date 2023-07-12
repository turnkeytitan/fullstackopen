export const Header = ({ course }: HeaderProps) => {
  return <h1>{course}</h1>;
};

interface HeaderProps {
  course: string;
}
