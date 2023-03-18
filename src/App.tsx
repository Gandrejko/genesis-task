import React, { useEffect, useState } from 'react';
import { Course } from './types/course.type';
import { fetchCourses, fetchToken } from './api/course.api';
import { getLastCourses } from './helpers/get-last-courses';
import { CoursesPage } from './pages/Courses';

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const getToken = async () => {
      const token = await fetchToken();
      setToken(token);
    };
    getToken();
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCourses(token);
      const lastCourses = getLastCourses(courses, 10);
      setCourses(lastCourses);
    };
    getCourses();
  }, [token]);

  return (
    <div className="App">
      <CoursesPage courses={courses} />
    </div>
  );
}

export default App;
