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
      <span>{title}</span>
      <span>{duration}</span>
    </button>
  );
};

export { LessonBtn };