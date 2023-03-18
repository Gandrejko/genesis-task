import { Course } from '../types/course.type';

const fetchToken = async (): Promise<string> => {
  const res = await fetch('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
  const data = await res.json();
  return data.token;
};

const fetchCourses = async (token: string): Promise<Course[]> => {
  const res = await fetch('https://api.wisey.app/api/v1/core/preview-courses', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data.courses;
};

export { fetchToken, fetchCourses };
