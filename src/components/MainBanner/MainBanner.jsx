import React, {useState} from 'react'
import styles from './MainBanner.scss';
import topImg from '../../assets/img/top-img.png';
import topImgBlack from '../../assets/img/top-img-black.png';

const Main = () => {

  const [isShow, setIsShow] = useState(true);
  const hiddenBanner = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  }


  return (
    <div className={`${"main-banner-wrap"} ${!isShow ? "_hidden" : ''}`}>
      <div className="container">
        <a href="#" onClick={hiddenBanner} className="close-banner">Закрыть <i></i></a>
        <div className="main-banner">
            <h1>My.CreativePeople —
            design studio</h1>
            <div className="main-banner-img">
              <img src={topImg} alt="" />
              <img src={topImgBlack} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main