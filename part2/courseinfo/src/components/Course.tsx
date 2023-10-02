import { Content } from "./Content";
import { Header } from "./Header";
import { Total } from "./Total";

interface CourseProps {
  course: { id: number; name: string; parts: Part[] };
}
interface Part {
  id: number;
  name: string;
  exercises: number;
}

const Course = ({ course }: CourseProps) => {
  return (
    <div className="container">
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
