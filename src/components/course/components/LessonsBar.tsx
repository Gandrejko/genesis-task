import styles from '../styles.module.css';
import { type Lesson } from '../../../types/course.type';
import { LessonBtn } from './LessonBtn';

type Properties = {
  lessons: Lesson[] | null;
  changeCurrLesson: (id: string) => void;
  currLessonId: string;
}
const LessonsBar: React.FC<Properties> = ({lessons, changeCurrLesson, currLessonId}) => {
  return (
    <div className={styles.lessonBar}>
      {lessons && lessons.map(({id, title, status, duration}) =>
        <LessonBtn key={id} title={title} status={status} duration={duration} onClick={() => changeCurrLesson(id)} isCurrent={currLessonId === id}/>
      )}
    </div>
  );
};

export { LessonsBar };