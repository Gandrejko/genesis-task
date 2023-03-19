import styles from '../styles.module.css';

type Properties = {
  title: string;
  status: string;
  duration: number;
  onClick: () => void;
  isCurrent: boolean;
}
const LessonBtn: React.FC<Properties> = ({title, duration, onClick, isCurrent}) => {
  return (
    <button className={isCurrent ? styles.lessonBtn : styles.lessonBtnActive} onClick={onClick}>
      <span className={styles.lessonBtnTitle}>{title}</span>
      <span className={styles.lessonDuration}>duration</span>
    </button>
  );
};

export { LessonBtn };