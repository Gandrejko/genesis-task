import styles from '../styles.module.css';

type Properties = {
  previewImageLink: string;
}
const PreviewImage: React.FC<Properties> = ({previewImageLink}) => {
  return (
    <div className={styles.previewImage}>
      <img src={`${previewImageLink}/cover.webp`} alt="preview image"/>
    </div>
  )
}

export { PreviewImage };