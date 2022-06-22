import React from 'react'
import styles from './Footer.module.scss';
import footerIimg from '../../assets/img/footer-img.jpg';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={styles['footer-title']}>CreativePeople online</div>
            <div className={styles['footer-elems']}>
                <div className={styles['footer-elem']}>
                    <div className={styles['footer-elem-title']}>Мы в соцсетях</div>
                    <div className={styles['footer-elem-links']}>
                        <a href="#">Вконтакте</a>
                        <a href="#">Facebook</a>
                        <a href="#">Behance</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>

                <div className={styles['footer-elem']}>
                    <div className={styles['footer-elem-title']}>Наши сайты</div>
                    <div className={styles['footer-elem-links']}>
                        <a href="#">cpeople.ru</a>
                        <a href="#">partners.cpeople.ru</a>
                        <a href="#">hr.cpeople.ru</a>
                        <a href="#">realty.cpeople.ru</a>
                    </div>
                </div>

                <div className={styles['footer-elem']}>
                    <div className={styles['footer-elem-title']}>Партнеры</div>
                    <div className={styles['footer-elem-links']}>
                        <a href="#">kirarock.team</a>
                        <a href="#">humbleteam.com</a>
                        <a href="#">wolfenfox.ru</a>
                    </div>
                </div>

                <div className={styles['footer-elem-right']}>
                    <div className={styles['footer-elem-desc']}>Если вам чего-то не хватает на этом сайте, вы можете заполнить форму обратной связи. Сделаем все, что в наших силах, чтобы этот сайт был еще лучше и удобнее.</div>
                    <a href="#" className="btn-white">Предложить сервис</a>
                </div>
            </div>

            <img className={styles['footer-img']} src={footerIimg} alt="" />
        </div>
    </footer>
  )
}

export default Footer