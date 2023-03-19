import React, { useEffect, useState } from 'react';
import { CoursePreview } from './types/course.type';
import { fetchCourses, fetchToken } from './api/course.api';
import { getLastCourses } from './helpers/get-last-courses';
import { CoursesPage } from './pages/Courses';

const App: React.FC = () => {
  const [courses, setCourses] = useState<CoursePreview[]>([]);
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
      {courses && <CoursesPage courses={courses} />}
      <video src='https://wisey.app/videos/how-to-learn/preview/AppleHLS1/preview.m3u8' autoPlay loop muted />
    </div>
  );
}

export default App;
