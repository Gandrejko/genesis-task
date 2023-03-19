import { Course, type CoursePreview } from '../types/course.type';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCourse } from '../api/course.api';

type Properties = {
  courses: CoursePreview[];
  token: string;
}
const CoursePage: React.FC<Properties> = ({courses, token}) => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course>();
  useEffect(() => {
    const getCourse = async () => {
      const course = await fetchCourse(courseId, token);
      setCourse(course);
    };
    getCourse();
  }, []);
  return (
    <div>{courseId}</div>
  )
}

export { CoursePage };