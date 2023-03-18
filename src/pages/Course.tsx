import { type Course } from '../types/course.type';

type Properties = {
  course: Course;
}
const CoursePage: React.FC<Properties> = ({course}) => {
  const {} = course;
  return (
    <div></div>
  )
}

export { CoursePage };