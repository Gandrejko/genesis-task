import { CoursePreview } from '../types/course.type';
import { CourseCard } from '../components/course-card/course-card';

type Properties = {
  courses: CoursePreview[];
}

const CoursesPage: React.FC<Properties> = ({courses}) => {
  return (
    <div>
      {courses.map((course) => {
        const {title, previewImageLink, lessonsCount, rating} = course;
        return (<CourseCard title={title} imageSrc={previewImageLink} lessonsCount={lessonsCount} rating={rating}/>)
      })}
    </div>
  )
}

export { CoursesPage };