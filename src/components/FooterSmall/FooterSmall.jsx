import React from 'react'
import styles from './FooterSmall.scss';
import footerIimg from '../../assets/img/footer-img.jpg';

const FooterSmall = () => {
  return (
    <footer className='footer-small'>
        <div className="container">
            <img className="footer-img" src={footerIimg} alt="" />
        </div>
    </footer>
  )
}

export default FooterSmall