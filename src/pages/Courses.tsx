import { CoursePreview } from '../types/course.type';
import { CourseCard } from '../components/course-card/course-card';
import styles from '../assets/css/styles.module.css';

type Properties = {
  courses: CoursePreview[];
}

const CoursesPage: React.FC<Properties> = ({courses}) => {
  return (
    <div className={styles.coursesPage}>
      {courses.map((course) => {
        const {id, title, previewImageLink, lessonsCount, meta: {skills, courseVideoPreview}, rating} = course;
        return (<CourseCard key={id} title={title} previewImageLink={previewImageLink} courseVideoPreview={courseVideoPreview} lessonsCount={lessonsCount} skills={skills} rating={rating}/>)
      })}
    </div>
  )
}

export { CoursesPage };