import styles from '../styles.module.css';
import { type Lesson } from '../../../types/course.type';
import { LessonsBar } from './LessonsBar';
import { Player } from './Player';
import { useState } from 'react';
import { lessonDefault } from '../../../constants/lesson.default';

type Properties = {
  lessons: Lesson[] | null;
}
const PlayerContainer: React.FC<Properties> = ({lessons}) => {
  const [currLesson, setCurrentLesson] = useState<Lesson>(lessons ? lessons[0] : lessonDefault);
  if(!lessons) return <div></div>;
  const changeCurrLesson = (id: string) => {
    const lesson = lessons.find(lesson => lesson.id === id);
    lesson && setCurrentLesson(lesson);
  }
  return (
    <div className={styles.playerContainer}>
      <Player currLesson={currLesson}/>
      <LessonsBar lessons={lessons} changeCurrLesson={changeCurrLesson} currLessonId={currLesson.id}/>
    </div>
  );
};

export { PlayerContainer };