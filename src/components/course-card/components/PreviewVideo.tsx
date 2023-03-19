import styles from '../styles.module.css';
import { CourseVideoPreview } from '../../../types/course.type';

type Properties = {
  courseVideoPreview: CourseVideoPreview;
}
const PreviewVideo: React.FC<Properties> = ({courseVideoPreview}) => {
  const { link } = courseVideoPreview;
  console.log(link);
  return (
    <div className={styles.previewVideo}>
      <video src={link} autoPlay loop muted />
    </div>
  )
}

export { PreviewVideo };