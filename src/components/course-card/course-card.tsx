type Properties = {
  title: string;
  imageSrc: string;
  lessonsCount: number;
  skills?: (string)[] | null;
  rating: number;
}
const CourseCard: React.FC<Properties> = ({title, imageSrc, lessonsCount, skills, rating}) => {
  return (
    <div>

    </div>
  )
}

export { CourseCard };