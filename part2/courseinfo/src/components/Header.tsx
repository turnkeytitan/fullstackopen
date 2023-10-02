export const Header = ({ course }: HeaderProps) => {
  return <h2>{course}</h2>;
};

interface HeaderProps {
  course: string;
}
