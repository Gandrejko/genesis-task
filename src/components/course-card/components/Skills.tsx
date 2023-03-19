import styles from '../styles.module.css';

type Properties = {
  skills: (string)[] | null | undefined;
}
const Skills: React.FC<Properties> = ({skills}) => {
  return (
    <div className={styles.skills}>
      {skills && skills.map((skill, index) => <span key={index} className={styles.skill}>{skill}</span>)}
    </div>
  );
};

export { Skills };