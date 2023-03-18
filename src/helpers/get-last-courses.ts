import { CoursePreview } from '../types/course.type';

const getLastCourses = (courses: CoursePreview[], coursesCount: number): CoursePreview[] => {
  return courses.filter((course, index) => index > courses.length - coursesCount);
}

export { getLastCourses };