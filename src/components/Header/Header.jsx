import React from 'react'
import styles from './Header.module.scss'
import logo from "../../assets/img/logo.svg";
import arrUp from "../../assets/img/arr-up.svg";
import Nav from '../Nav/Nav';

const Header = (props) => {
  return (
    <header>
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

            <div className={styles['btn-hidden-header']}>
              <img src={arrUp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header