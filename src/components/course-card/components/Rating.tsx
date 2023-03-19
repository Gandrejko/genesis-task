import styles from '../styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'

type Properties = {
  rating: number;
}
const Rating: React.FC<Properties> = ({rating}) => {
  return (
    <div>
      <FontAwesomeIcon className={styles.starIcon} icon={faStar} />
      <span className={styles.rating}>{rating}</span>
    </div>
  );
};

export { Rating };