import { CoursePreview } from '../types/course.type';

const getLastCourses = (courses: CoursePreview[], coursesCount: number): CoursePreview[] => {
  return courses.reverse().filter((course, index) => index < coursesCount);
}

export { getLastCourses };