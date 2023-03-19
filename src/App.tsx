import React, { useEffect, useState } from 'react';
import { CoursePreview } from './types/course.type';
import { fetchCourses, fetchToken } from './api/course.api';
import { getLastCourses } from './helpers/get-last-courses';
import { CoursesPage } from './pages/Courses';
import { Route, Routes } from 'react-router-dom';
import { CoursePage } from './pages/Course';

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
      <Routes>
        <Route path='/' element={courses && <CoursesPage courses={courses} />} />
        <Route path='/:courseId' element={<CoursePage courses={courses} token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
