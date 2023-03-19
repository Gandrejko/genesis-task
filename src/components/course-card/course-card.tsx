import styles from './styles.module.css';
import { Skills } from './components/Skills';
import { Rating } from './components/Rating';
import { LessonsCount } from './components/LessonsCount';
import { Preview } from './components/Preview';
import { CourseVideoPreview } from '../../types/course.type';
import { WatchCourseBtn } from './components/WatchCourseBtn';

type Properties = {
  id: string;
  title: string;
  previewImageLink: string;
  courseVideoPreview: CourseVideoPreview;
  lessonsCount: number;
  skills?: (string)[] | null;
  rating: number;
}
const CourseCard: React.FC<Properties> = ({
                                            id,
                                            title,
                                            previewImageLink,
                                            courseVideoPreview,
                                            lessonsCount,
                                            skills,
                                            rating
                                          }) => {
  return (
    <div className={styles.courseCard}>
      <Preview previewImageLink={previewImageLink} courseVideoPreview={courseVideoPreview}/>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <Rating rating={rating}/>
        <span className={styles.separator}>/</span>
        <LessonsCount lessonsCount={lessonsCount}/>
      </div>
      <Skills skills={skills}/>
      <WatchCourseBtn id={id}>Watch video</WatchCourseBtn>
    </div>
  )
}

export { CourseCard };