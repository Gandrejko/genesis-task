import { CoursePreview } from '../types/course.type';

const getLastCourses = (courses: CoursePreview[], coursesCount: number): CoursePreview[] => {
  return courses.reverse().slice(0, coursesCount);
}

export { getLastCourses };