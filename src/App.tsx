import React, { useEffect } from 'react';
import { fetchToken } from './api/course.api';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ReactPlayer from 'react-player';

const App: React.FC = () => {

  useEffect(() => {
    const getToken = async () => {
      localStorage.setItem('token', await fetchToken());
    };
    localStorage.getItem('token') || getToken();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
