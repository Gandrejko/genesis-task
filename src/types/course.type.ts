type Course = {
  id: string;
  title: string;
  tags?: (string)[] | null;
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: Meta;
  lessons?: (Lesson)[] | null;
  containsLockedLessons: boolean;
}
type Meta = {
  slug: string;
  skills?: (string)[] | null;
  courseVideoPreview: CourseVideoPreview;
}
type CourseVideoPreview = {
  link: string;
  duration: number;
  previewImageLink: string;
}
type Lesson = {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  status: string;
  link: string;
  previewImageLink: string;
  meta?: null;
}

export { type Course, type Lesson, type CourseVideoPreview, type Meta };
