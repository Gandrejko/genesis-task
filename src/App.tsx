import React, { useEffect } from 'react';
import { fetchToken } from './api/course.api';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChangeTheme } from './components/change-theme/change-theme';

const App: React.FC = () => {

  useEffect(() => {
    const getToken = async () => {
      localStorage.setItem('token', await fetchToken());
    };
    localStorage.getItem('token') || getToken();
  }, []);

  return (
    <div className="App">
      <ChangeTheme />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
