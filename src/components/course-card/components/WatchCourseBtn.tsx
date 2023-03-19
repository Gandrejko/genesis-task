import styles from '../styles.module.css';

type Properties = {
  children: string;
}
const WatchCourseBtn: React.FC<Properties> = ({children}) => {
  return <button className={styles.watchCourseBtn}>{children}</button>
};

export { WatchCourseBtn };