import styles from '../styles.module.css';

type Properties = {
  lessonsCount: number;
}
const LessonsCount: React.FC<Properties> = ({lessonsCount}) => {
  return (<span className={styles.lessonsCount}>Lessons: {lessonsCount}</span>);
};

export { LessonsCount };