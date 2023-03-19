import { Course } from '../types/course.type';
import { useLoaderData } from 'react-router-dom';
import styles from '../components/course/styles.module.css';
import { PlayerContainer } from '../components/course/components/PlayerContainer';

type Properties = {

}
const CoursePage: React.FC<Properties> = () => {
  const {lessons} = useLoaderData() as Course;
  return (
    <div className={styles.coursePage}>
      {lessons && <PlayerContainer lessons={lessons}/>}
    </div>
  )
}

export { CoursePage };