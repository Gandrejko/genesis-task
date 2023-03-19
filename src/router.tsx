import {createBrowserRouter, createRoutesFromElements, Route, Routes} from 'react-router-dom';
import {CoursesPage} from './pages/CoursesPage';
import { fetchCourse, fetchCourses } from './api/course.api';
import {RouteObject} from 'react-router-dom';
import { CoursePage } from './pages/CoursePage';

const routes: RouteObject[] = createRoutesFromElements(
	<>
		<Route path="/" element={<CoursesPage/>} loader={fetchCourses}/>
		<Route path="/:courseId" element={<CoursePage/>} loader={fetchCourse}/>
	</>
);

export const router = createBrowserRouter(routes);