import { Course } from '../types/course.type';

const getLastCourses = (courses: Course[], coursesCount: number): Course[] => {
  return courses.filter((course, index) => index > courses.length - coursesCount);
}

export { getLastCourses };