import React, {useState, useEffect} from 'react'
import styles from './Header.scss'
import logo from "../../assets/img/logo.svg";
import logoBlack from "../../assets/img/logo-black.svg";
import arrUp from "../../assets/img/arr-up.svg";
import arrUpBlack from "../../assets/img/arr-up-black.svg";
import arrBlack from "../../assets/img/arr-black.svg";
import Nav from '../Nav/Nav';

const Header = ({props, useStickyState, changeTheme, themeBlack}) => {
  
  

  const [isShow, setIsShow] = useStickyState(false, 'header-show-status');
  const toggleHeader = () => setIsShow(!isShow);

  const [isHidden, setIsHidden] = useState(false);
  const showHeader = () => {setIsHidden(!isHidden); setIsShow(!isShow);}
  

  return (
    <header className={!isShow ? "_hidden" : "_active"}>
      <button onClick={showHeader} className="btn-show-header">
          <img src={arrBlack} alt="" />
      </button>
      <div className="container">
        <div className="header-box">
          <a href="/" className="logo">
            <img src={logo} alt="" />
            <img src={logoBlack} alt="" />
          </a>

          <Nav />

          <div className="header-info">
            <div className="label-box">
              <span>Перейти на {!themeBlack ? 'тёмную' : 'светлую'} сторону:</span>
              <label>
                <input onChange={changeTheme} type="checkbox" />
                <span><i></i></span>
              </label>
            </div>

           <a href="#" className="link-auth">Выход</a>

            <div onClick={toggleHeader} className="btn-hidden-header">
              <img src={arrUp} alt="" />
              <img src={arrUpBlack} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header