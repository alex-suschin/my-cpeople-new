import React from 'react'
import styles from './MainBanner.module.scss';
import topImg from '../../assets/img/top-img.png';

const Main = () => {
  return (
    <div className={styles['main-banner-wrap']}>
      <div className="container">
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