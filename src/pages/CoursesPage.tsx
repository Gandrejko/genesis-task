import { CoursePreview } from '../types/course.type';
import { CourseCard } from '../components/course-card/course-card';
import styles from '../assets/css/styles.module.css';
import { useLoaderData } from 'react-router-dom';
import { getLastCourses } from '../helpers/get-last-courses';

const CoursesPage: React.FC = () => {
  const courses = getLastCourses(useLoaderData() as CoursePreview[], 10);
  return (
    <div className={styles.coursesPage}>
      {courses.map((course) => {
        const {id, title, previewImageLink, lessonsCount, meta: {skills, courseVideoPreview}, rating} = course;
        return (<CourseCard key={id} id={id} title={title} previewImageLink={previewImageLink} courseVideoPreview={courseVideoPreview} lessonsCount={lessonsCount} skills={skills} rating={rating}/>)
      })}
    </div>
  )
}

export { CoursesPage };