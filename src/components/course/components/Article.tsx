import styles from '../styles.module.css';
import { Lesson } from '../../../types/course.type';
import { useEffect, useState } from 'react';

type Properties = {
  currLesson: Lesson;
}
const Article: React.FC<Properties> = ({currLesson}) => {
  const {link} = currLesson;
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch(link)
      .then(response => response.text())
      .then(data => setHtml(data));
  }, []);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
};

export { Article };