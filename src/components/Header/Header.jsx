import React, {useState} from 'react'
import styles from './Header.module.scss'
import logo from "../../assets/img/logo.svg";
import arrUp from "../../assets/img/arr-up.svg";
import arrBlack from "../../assets/img/arr-black.svg";
import Nav from '../Nav/Nav';

const Header = (props) => {
  
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [isShow, setIsShow] = useStickyState(false, 'isShow');
  const toggleHeader = () => setIsShow(!isShow);

  const [isHidden, setIsHidden] = useState(false);
  const showHeader = () => {setIsHidden(!isHidden); setIsShow(!isShow);}

  return (
    <header className={!isShow ? styles._hidden : styles._active}>
      <button onClick={showHeader} className={styles['btn-show-header']}>
          <img src={arrBlack} alt="" />
      </button>
      <div className="container">
        <div className={styles['header-box']}>
          <a href="#" className={styles.logo}>
            <img src={logo} alt="" />
          </a>

          <Nav />

          <div className={styles['header-info']}>
            <div className={styles['label-box']}>
              <span>Перейти на светлую сторону:</span>
              <label>
                <input type="checkbox" />
                <span><i></i></span>
              </label>
            </div>

           <a href="#" className={styles['link-auth']}>Выход</a>

            <div onClick={toggleHeader} className={styles['btn-hidden-header']}>
              <img src={arrUp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header