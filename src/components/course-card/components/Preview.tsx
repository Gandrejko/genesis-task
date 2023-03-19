import styles from '../styles.module.css';
import { PreviewImage } from './PreviewImage';
import { useState } from 'react';
import { CourseVideoPreview } from '../../../types/course.type';
import { PreviewVideo } from './PreviewVideo';

type Properties = {
  courseVideoPreview: CourseVideoPreview;
  previewImageLink: string;
}
const Preview: React.FC<Properties> = ({previewImageLink, courseVideoPreview}) => {
  const [isHover, setIsHover] = useState(false);
  /*const showVideo = () => {
    setIsHover(true);
  }
  const showImage = () => {
    setIsHover(false);
  }*/
  return (
    <div className={styles.preview} /*onMouseEnter={showVideo} onMouseOut={showImage}*/ >
      {isHover
        ? <PreviewVideo courseVideoPreview={courseVideoPreview}/>
        : <PreviewImage previewImageLink={previewImageLink}/>
      }
    </div>
  )
}

export { Preview };