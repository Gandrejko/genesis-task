import styles from '../styles.module.css';
import { type Lesson } from '../../../types/course.type';
import ReactPlayer from 'react-player';
import { Article } from './Article';

type Properties = {
  currLesson: Lesson;
}
const Player: React.FC<Properties> = ({currLesson}) => {
  const {link, type} = currLesson;
  return type === 'video' ?
    <ReactPlayer url={link} playing loop controls className={styles.player}/>
    : <Article currLesson={currLesson} />;
};

export { Player };