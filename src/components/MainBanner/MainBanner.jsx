import React, {useState} from 'react'
import styles from './MainBanner.module.scss';
import topImg from '../../assets/img/top-img.png';

const Main = () => {

  const [isShow, setIsShow] = useState(true);
  const hiddenBanner = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  }


  return (
    <div className={`${styles['main-banner-wrap']} ${!isShow ? styles._hidden : ''}`}>
      <div className="container">
        <a href="#" onClick={hiddenBanner} className={styles['close-banner']}>Закрыть <i></i></a>
        <div className={styles['main-banner']}>
            <h1>My.CreativePeople —
            design studio</h1>
            <img src={topImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main