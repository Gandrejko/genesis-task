import styles from '../styles.module.css';
import { generatePath, Link } from 'react-router-dom';

type Properties = {
  id: string;
  children: string;
}
const WatchCourseBtn: React.FC<Properties> = ({id, children}) => {
  return <Link to={generatePath('/:courseId', { courseId: id })} className={styles.watchCourseBtn}>{children}</Link>
};

export { WatchCourseBtn };