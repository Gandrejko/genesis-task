import styles from './change-theme.module.css';
import { useState } from 'react';
import { Theme } from '../../enums/theme.enum';
import { themes } from '../../constants/themes';

const ChangeTheme: React.FC = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const [isChecked, setIsChecked] = useState(true);
  const changeTheme = () => {
    theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT);
    setIsChecked(!isChecked);
    document.documentElement.style.setProperty('--color-main', themes[theme].main);
    document.documentElement.style.setProperty('--color-text', themes[theme].text);
    console.log(document.documentElement.style);
  }
  return (
    <div onClick={changeTheme} className={styles.changeThemeBtn}>
      <div className={isChecked ? styles.slider : styles.checkedSlider}></div>
    </div>
  )
}

export { ChangeTheme };