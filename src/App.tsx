import React, { useEffect, useState } from 'react';
import { Course } from './types/course.type';
import { fetchCourses, fetchToken } from './api/course.api';

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
      setCourses(courses);
    };
    getCourses();
  }, [token]);

  return (
    <div className="App">
      {courses && courses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
