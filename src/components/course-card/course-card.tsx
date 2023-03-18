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
      <img src={imageSrc} alt=""/>
      <h2>{title}</h2>
      <p>{lessonsCount}</p>
      <p>{skills}</p>
      <p>{rating}</p>
    </div>
  )
}

export { CourseCard };